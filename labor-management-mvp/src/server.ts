    // src/server.ts
    import express, { Request, Response } from 'express';
    import { PrismaClient } from './generated/prisma';
    import cors from 'cors';

    const app = express();
    const prisma = new PrismaClient();
    const PORT = process.env.PORT || 3001;

    // --- MIDDLEWARE ---
    // Option 1: Allow all origins (simplest for development)
    app.use(cors());

    // Option 2: Allow only your frontend origin (better for specific control)
    // Make sure this matches the port your frontend is actually running on (3002 in your case)
    // app.use(cors({ origin: 'http://localhost:3002' }));

    app.use(express.json()); // Middleware to parse JSON bodies

    // Basic test route
    app.get('/', (req: Request, res: Response) => {
      res.send('Labor Management Platform API is running!');
    });

    // Example: Get all workers (you'll build this out)
    app.get('/workers', async (req: Request, res: Response) => {
      try {
        const workers = await prisma.worker.findMany();
        res.json(workers);
      } catch (error) {
        // Basic error handling, consider more robust logging/error responses
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch workers' });
      }
    });

    // Example: Create a new worker (very basic)
    app.post('/workers', async (req: Request, res: Response) => {
        try {
            const newWorker = await prisma.worker.create({
                data: req.body, // Ensure req.body matches WorkerCreateInput structure
                                // Add validation here in a real app
            });
            res.status(201).json(newWorker);
        } catch (error: any) {
            console.error(error);
            // Check for specific Prisma errors if needed (e.g., unique constraint violation)
            if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
                return res.status(409).json({ message: 'Email already exists.' });
            }
            res.status(500).json({ message: 'Failed to create worker' });
        }
    });

    // GET /workers/:workerId/assignments - Get all job assignments for a specific worker
    app.get('/workers/:workerId/assignments', async (req: Request, res: Response) => {
      const { workerId } = req.params;

      try {
        // Check if worker exists
        const worker = await prisma.worker.findUnique({
          where: { id: workerId },
        });

        if (!worker) {
          return res.status(404).json({ message: `Worker with ID ${workerId} not found.` });
        }

        const assignments = await prisma.jobAssignment.findMany({
          where: { workerId: workerId },
          include: {
            job: true, // Include job details
            role: true, // Include role details
          },
          orderBy: { // Optional: order by job start time or assignment time
            job: {
                startDatetime: 'desc', // Show most recent or upcoming jobs first
            }
          }
        });

        if (!assignments.length) {
          // It's not an error if a worker has no assignments, just return an empty array.
          return res.json([]);
        }

        res.json(assignments);
      } catch (error) {
        console.error(`Failed to fetch assignments for worker ${workerId}:`, error);
        res.status(500).json({ message: 'Failed to fetch assignments.' });
      }
    });

    // POST /roles - Create a new role
    app.post('/roles', async (req: Request, res: Response) => {
      const { name, defaultPayRate } = req.body;

      if (!name) {
        return res.status(400).json({ message: 'Role name is required.' });
      }

      try {
        const newRole = await prisma.role.create({
          data: {
            name,
            ...(defaultPayRate && { defaultPayRate: defaultPayRate }), // Prisma handles string to Decimal
          },
        });
        res.status(201).json(newRole);
      } catch (error: any) {
        console.error('Failed to create role:', error);
        // P2002 is the Prisma error code for unique constraint violations
        if (error.code === 'P2002' && error.meta?.target?.includes('name')) {
          return res.status(409).json({ message: `Role with name '${name}' already exists.` });
        }
        res.status(500).json({ message: 'Failed to create role' });
      }
    });

    // GET /roles - Fetch all roles
    app.get('/roles', async (req: Request, res: Response) => {
      try {
        const roles = await prisma.role.findMany();
        res.json(roles);
      } catch (error) {
        console.error('Failed to fetch roles:', error);
        res.status(500).json({ message: 'Failed to fetch roles' });
      }
    });

    // POST /jobs - Create a new job with role requirements
    app.post('/jobs', async (req: Request, res: Response) => {
      try {
        const {
          title,
          location,
          startDatetime,
          endDatetime,
          description,
          organizerName,
          status,
          roleRequirements, // Array of { roleId: string, numberOfWorkersNeeded: number, payRateForJob: string }
        } = req.body;

        // Basic validation for job fields
        if (!title || !location || !startDatetime || !endDatetime) {
          return res.status(400).json({
            message:
              'Missing required fields: title, location, startDatetime, endDatetime',
          });
        }

        // Validation for roleRequirements
        if (roleRequirements && Array.isArray(roleRequirements)) {
          for (const req of roleRequirements) {
            if (
              !req.roleId ||
              typeof req.numberOfWorkersNeeded !== 'number' ||
              req.numberOfWorkersNeeded <= 0 ||
              !req.payRateForJob ||
              isNaN(parseFloat(req.payRateForJob)) // Basic check for valid number string
            ) {
              return res.status(400).json({
                message:
                  'Invalid roleRequirement item. Each must have roleId (string), numberOfWorkersNeeded (positive number), and payRateForJob (valid number string).',
              });
            }
            // Check if roleId exists
            const roleExists = await prisma.role.findUnique({
              where: { id: req.roleId },
            });
            if (!roleExists) {
              return res.status(400).json({
                message: `Invalid roleId: ${req.roleId}. Role does not exist.`,
              });
            }
          }
        } else if (roleRequirements) {
          // if roleRequirements is provided but not an array
           return res.status(400).json({ message: 'roleRequirements must be an array.' });
        }


        const newJob = await prisma.job.create({
          data: {
            title,
            location,
            startDatetime: new Date(startDatetime),
            endDatetime: new Date(endDatetime),
            description,
            organizerName,
            status,
            // Nested create for JobRoleRequirement
            ...(roleRequirements && roleRequirements.length > 0 && {
              roleRequirements: {
                create: roleRequirements.map((req: any) => ({
                  roleId: req.roleId,
                  numberOfWorkersNeeded: req.numberOfWorkersNeeded,
                  payRateForJob: req.payRateForJob, // Prisma handles string to Decimal
                })),
              },
            }),
          },
          include: {
            roleRequirements: true, // Include the created role requirements in the response
          },
        });
        res.status(201).json(newJob);
      } catch (error) {
        console.error('Failed to create job:', error);
        res.status(500).json({ message: 'Failed to create job' });
      }
    });

    // GET all jobs
    app.get('/jobs', async (req, res) => {
      try {
        const jobs = await prisma.job.findMany({
          include: {
            roleRequirements: {
              include: {
                role: true
              }
            },
            assignments: {
              include: {
                worker: true,
                role: true
              }
            }
          },
          orderBy: {
            startDatetime: 'asc'
          }
        });
        res.json(jobs);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
        res.status(500).json({ message: 'Failed to fetch jobs' });
      }
    });

    // GET a single job by ID
    app.get('/jobs/:id', async (req, res) => {
      const { id } = req.params;
      try {
        const job = await prisma.job.findUnique({
          where: { id },
          include: {
            roleRequirements: { // Include JobRoleRequirement
              include: {
                role: true // And within each, include the Role
              }
            },
            assignments: { // Include JobAssignment
              include: {
                worker: true, // And within each, include the Worker
                role: true    // And within each, include the Role
              }
            }
          }
        });
        if (!job) {
          return res.status(404).json({ message: 'Job not found' });
        }
        res.json(job);
      } catch (error) {
        console.error(`Failed to fetch job with id ${id}:`, error);
        res.status(500).json({ message: 'Failed to fetch job' });
      }
    });

    // PUT /jobs/:id - Update an existing job, including its role requirements
    app.put('/jobs/:id', async (req: Request, res: Response) => {
      const { id: jobId } = req.params;
      const {
        title,
        location,
        startDatetime,
        endDatetime,
        description,
        organizerName,
        status,
        roleRequirements, // Array of { roleId: string, numberOfWorkersNeeded: number, payRateForJob: string }
      } = req.body;

      // Validate roleRequirements if provided
      if (roleRequirements && Array.isArray(roleRequirements)) {
        for (const req of roleRequirements) {
          if (
            !req.roleId ||
            typeof req.numberOfWorkersNeeded !== 'number' ||
            req.numberOfWorkersNeeded <= 0 ||
            !req.payRateForJob ||
            isNaN(parseFloat(req.payRateForJob))
          ) {
            return res.status(400).json({
              message:
                'Invalid roleRequirement item. Each must have roleId (string), numberOfWorkersNeeded (positive number), and payRateForJob (valid number string).',
            });
          }
          const roleExists = await prisma.role.findUnique({
            where: { id: req.roleId },
          });
          if (!roleExists) {
            return res.status(400).json({
              message: `Invalid roleId in roleRequirements: ${req.roleId}. Role does not exist.`,
            });
          }
        }
      } else if (roleRequirements && !Array.isArray(roleRequirements)) {
         return res.status(400).json({ message: 'roleRequirements must be an array if provided.' });
      }

      try {
        const updatedJob = await prisma.$transaction(async (tx) => {
          // 1. Update basic job details
          const jobUpdateData: any = {};
          if (title !== undefined) jobUpdateData.title = title;
          if (location !== undefined) jobUpdateData.location = location;
          if (startDatetime !== undefined) jobUpdateData.startDatetime = new Date(startDatetime);
          if (endDatetime !== undefined) jobUpdateData.endDatetime = new Date(endDatetime);
          if (description !== undefined) jobUpdateData.description = description;
          if (organizerName !== undefined) jobUpdateData.organizerName = organizerName;
          if (status !== undefined) jobUpdateData.status = status;

          let currentJob = await tx.job.update({
            where: { id: jobId },
            data: jobUpdateData,
          });

          // 2. Handle roleRequirements if provided
          if (roleRequirements) { // This now means if it's provided (even empty array)
            // Delete existing JobRoleRequirements for this job
            await tx.jobRoleRequirement.deleteMany({
              where: { jobId: jobId },
            });

            // Create new JobRoleRequirements if the array is not empty
            if (roleRequirements.length > 0) {
              await tx.jobRoleRequirement.createMany({
                data: roleRequirements.map((req: any) => ({
                  jobId: jobId,
                  roleId: req.roleId,
                  numberOfWorkersNeeded: req.numberOfWorkersNeeded,
                  payRateForJob: req.payRateForJob,
                })),
              });
            }
          }
          // Fetch the job again with its updated role requirements to return
          return tx.job.findUnique({
            where: { id: jobId },
            include: { roleRequirements: true },
          });
        });

        if (!updatedJob) { // Should not happen if update was successful before transaction commit
            return res.status(404).json({ message: 'Job not found after update attempt.' });
        }
        res.json(updatedJob);

      } catch (error: any) {
        console.error(`Failed to update job with id ${jobId}:`, error);
        if (error.code === 'P2025' || error.message.includes("Record to update not found")) { // P2025 is Prisma's code for record not found
          return res.status(404).json({ message: 'Job not found to update.' });
        }
        res.status(500).json({ message: 'Failed to update job' });
      }
    });

    // POST /jobs/:jobId/assignments - Assign a worker to a role in a job
    app.post('/jobs/:jobId/assignments', async (req: Request, res: Response) => {
      const { jobId } = req.params;
      const { workerId, roleId, notes } = req.body;

      if (!workerId || !roleId) {
        return res.status(400).json({ message: 'workerId and roleId are required in the request body' });
      }

      try {
        // 1. Verify Job, Worker, and Role existence
        // Fetch the job details, including its start and end times, as we need them for double-booking check
        const jobToAssign = await prisma.job.findUnique({ where: { id: jobId } });
        if (!jobToAssign) {
          return res.status(404).json({ message: `Job with ID ${jobId} not found` });
        }

        const worker = await prisma.worker.findUnique({ where: { id: workerId } });
        if (!worker) {
          return res.status(404).json({ message: `Worker with ID ${workerId} not found` });
        }

        const role = await prisma.role.findUnique({ where: { id: roleId } });
        if (!role) {
          return res.status(404).json({ message: `Role with ID ${roleId} not found` });
        }

        // 2. Check JobRoleRequirement: Is this role needed for this job?
        const jobRoleRequirement = await prisma.jobRoleRequirement.findFirst({
          where: { jobId: jobId, roleId: roleId },
        });

        if (!jobRoleRequirement) {
          return res.status(400).json({
            message: `Role '${role.name}' is not defined as a requirement for job '${jobToAssign.title}'.`,
          });
        }

        // 3. Check capacity: Is this role already filled for this job?
        const existingAssignmentsCount = await prisma.jobAssignment.count({
          where: { jobId: jobId, roleId: roleId },
        });

        if (existingAssignmentsCount >= jobRoleRequirement.numberOfWorkersNeeded) {
          return res.status(400).json({
            message: `Role '${role.name}' for job '${jobToAssign.title}' is already filled to capacity. (${existingAssignmentsCount}/${jobRoleRequirement.numberOfWorkersNeeded} assigned).`,
          });
        }

        // 4. Prevent Double Booking
        const newJobStart = jobToAssign.startDatetime;
        const newJobEnd = jobToAssign.endDatetime;

        const existingWorkerAssignments = await prisma.jobAssignment.findMany({
          where: {
            workerId: workerId,
          },
          include: {
            job: true, 
          },
        });

        for (const assignment of existingWorkerAssignments) {
          const existingJobStart = assignment.job.startDatetime;
          const existingJobEnd = assignment.job.endDatetime;

          if (newJobStart < existingJobEnd && newJobEnd > existingJobStart) {
            return res.status(409).json({ 
              message: `Worker ${worker.name} is already booked for job '${assignment.job.title}' which overlaps with this job's time.`,
              conflictingJob: {
                id: assignment.job.id,
                title: assignment.job.title,
                startDatetime: existingJobStart,
                endDatetime: existingJobEnd,
              },
            });
          }
        }

        // 5. Create the JobAssignment (if all checks passed)
        const newAssignment = await prisma.jobAssignment.create({
          data: {
            jobId: jobId,
            workerId: workerId,
            roleId: roleId,
            notes: notes,
          },
        });

        res.status(201).json(newAssignment);
      } catch (error) {
        console.error(`Failed to create job assignment for job ${jobId}:`, error);
        res.status(500).json({ message: 'Failed to create job assignment' });
      }
    });

    // PUT /job-assignments/:assignmentId - Update hoursWorked and notes for a specific job assignment
    app.put('/job-assignments/:assignmentId', async (req: Request, res: Response) => {
      const { assignmentId } = req.params;
      const { hoursWorked, notes } = req.body;

      // Validate hoursWorked
      let hoursDecimal;
      if (hoursWorked !== undefined) {
        hoursDecimal = parseFloat(hoursWorked);
        if (isNaN(hoursDecimal) || hoursDecimal < 0) {
          return res.status(400).json({ message: 'hoursWorked must be a non-negative number.' });
        }
      } else {
        // If only notes are being updated, hoursWorked might not be provided.
        // However, for "tracking hours", it's a core piece.
        // Depending on requirements, you might make hoursWorked strictly required for this endpoint.
        // For now, we allow updating notes independently, but hoursWorked is the primary focus.
      }


      try {
        const updateData: any = {};
        if (hoursWorked !== undefined) {
          // Prisma expects Decimal fields to be provided as string or number for create/update
          // We'll pass the string representation if it came as such, or the parsed number.
          updateData.hoursWorked = hoursWorked.toString();
        }
        if (notes !== undefined) {
          updateData.notes = notes;
        }

        if (Object.keys(updateData).length === 0) {
          return res.status(400).json({ message: 'No data provided for update. Please provide hoursWorked or notes.' });
        }

        const updatedAssignment = await prisma.jobAssignment.update({
          where: { id: assignmentId },
          data: updateData,
          include: { // Optionally include related data if useful for the client
            job: true,
            worker: true,
            role: true,
          }
        });
        res.json(updatedAssignment);
      } catch (error: any) {
        console.error(`Failed to update job assignment ${assignmentId}:`, error);
        // P2025 is Prisma's error code for "Record to update not found"
        if (error.code === 'P2025') {
          return res.status(404).json({ message: `Job assignment with ID ${assignmentId} not found.` });
        }
        res.status(500).json({ message: 'Failed to update job assignment.' });
      }
    });

    const server = app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });

    // Graceful shutdown
    const shutdown = async () => {
      console.log('Shutting down server...');
      server.close(async () => {
        console.log('HTTP server closed.');
        await prisma.$disconnect();
        console.log('Prisma client disconnected.');
        process.exit(0);
      });
    };

    process.on('SIGINT', shutdown); // Catches Ctrl+C
    process.on('SIGTERM', shutdown); // Catches kill signals