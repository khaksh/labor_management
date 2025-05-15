
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Worker
 * 
 */
export type Worker = $Result.DefaultSelection<Prisma.$WorkerPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model WorkerEligibleRole
 * 
 */
export type WorkerEligibleRole = $Result.DefaultSelection<Prisma.$WorkerEligibleRolePayload>
/**
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>
/**
 * Model JobRoleRequirement
 * 
 */
export type JobRoleRequirement = $Result.DefaultSelection<Prisma.$JobRoleRequirementPayload>
/**
 * Model JobAssignment
 * 
 */
export type JobAssignment = $Result.DefaultSelection<Prisma.$JobAssignmentPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const WorkerStatus: {
  active: 'active',
  inactive: 'inactive'
};

export type WorkerStatus = (typeof WorkerStatus)[keyof typeof WorkerStatus]


export const JobStatus: {
  draft: 'draft',
  confirmed: 'confirmed',
  cancelled: 'cancelled',
  completed: 'completed'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]

}

export type WorkerStatus = $Enums.WorkerStatus

export const WorkerStatus: typeof $Enums.WorkerStatus

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Workers
 * const workers = await prisma.worker.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Workers
   * const workers = await prisma.worker.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.worker`: Exposes CRUD operations for the **Worker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workers
    * const workers = await prisma.worker.findMany()
    * ```
    */
  get worker(): Prisma.WorkerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workerEligibleRole`: Exposes CRUD operations for the **WorkerEligibleRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkerEligibleRoles
    * const workerEligibleRoles = await prisma.workerEligibleRole.findMany()
    * ```
    */
  get workerEligibleRole(): Prisma.WorkerEligibleRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobRoleRequirement`: Exposes CRUD operations for the **JobRoleRequirement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobRoleRequirements
    * const jobRoleRequirements = await prisma.jobRoleRequirement.findMany()
    * ```
    */
  get jobRoleRequirement(): Prisma.JobRoleRequirementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobAssignment`: Exposes CRUD operations for the **JobAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobAssignments
    * const jobAssignments = await prisma.jobAssignment.findMany()
    * ```
    */
  get jobAssignment(): Prisma.JobAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Worker: 'Worker',
    Role: 'Role',
    WorkerEligibleRole: 'WorkerEligibleRole',
    Job: 'Job',
    JobRoleRequirement: 'JobRoleRequirement',
    JobAssignment: 'JobAssignment',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "worker" | "role" | "workerEligibleRole" | "job" | "jobRoleRequirement" | "jobAssignment" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Worker: {
        payload: Prisma.$WorkerPayload<ExtArgs>
        fields: Prisma.WorkerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          findFirst: {
            args: Prisma.WorkerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          findMany: {
            args: Prisma.WorkerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>[]
          }
          create: {
            args: Prisma.WorkerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          createMany: {
            args: Prisma.WorkerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          update: {
            args: Prisma.WorkerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          deleteMany: {
            args: Prisma.WorkerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          aggregate: {
            args: Prisma.WorkerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorker>
          }
          groupBy: {
            args: Prisma.WorkerGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkerGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkerCountArgs<ExtArgs>
            result: $Utils.Optional<WorkerCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      WorkerEligibleRole: {
        payload: Prisma.$WorkerEligibleRolePayload<ExtArgs>
        fields: Prisma.WorkerEligibleRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkerEligibleRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerEligibleRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkerEligibleRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerEligibleRolePayload>
          }
          findFirst: {
            args: Prisma.WorkerEligibleRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerEligibleRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkerEligibleRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerEligibleRolePayload>
          }
          findMany: {
            args: Prisma.WorkerEligibleRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerEligibleRolePayload>[]
          }
          create: {
            args: Prisma.WorkerEligibleRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerEligibleRolePayload>
          }
          createMany: {
            args: Prisma.WorkerEligibleRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkerEligibleRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerEligibleRolePayload>
          }
          update: {
            args: Prisma.WorkerEligibleRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerEligibleRolePayload>
          }
          deleteMany: {
            args: Prisma.WorkerEligibleRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkerEligibleRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkerEligibleRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerEligibleRolePayload>
          }
          aggregate: {
            args: Prisma.WorkerEligibleRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkerEligibleRole>
          }
          groupBy: {
            args: Prisma.WorkerEligibleRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkerEligibleRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkerEligibleRoleCountArgs<ExtArgs>
            result: $Utils.Optional<WorkerEligibleRoleCountAggregateOutputType> | number
          }
        }
      }
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      JobRoleRequirement: {
        payload: Prisma.$JobRoleRequirementPayload<ExtArgs>
        fields: Prisma.JobRoleRequirementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobRoleRequirementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRoleRequirementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobRoleRequirementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRoleRequirementPayload>
          }
          findFirst: {
            args: Prisma.JobRoleRequirementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRoleRequirementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobRoleRequirementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRoleRequirementPayload>
          }
          findMany: {
            args: Prisma.JobRoleRequirementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRoleRequirementPayload>[]
          }
          create: {
            args: Prisma.JobRoleRequirementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRoleRequirementPayload>
          }
          createMany: {
            args: Prisma.JobRoleRequirementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JobRoleRequirementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRoleRequirementPayload>
          }
          update: {
            args: Prisma.JobRoleRequirementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRoleRequirementPayload>
          }
          deleteMany: {
            args: Prisma.JobRoleRequirementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobRoleRequirementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JobRoleRequirementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRoleRequirementPayload>
          }
          aggregate: {
            args: Prisma.JobRoleRequirementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobRoleRequirement>
          }
          groupBy: {
            args: Prisma.JobRoleRequirementGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobRoleRequirementGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobRoleRequirementCountArgs<ExtArgs>
            result: $Utils.Optional<JobRoleRequirementCountAggregateOutputType> | number
          }
        }
      }
      JobAssignment: {
        payload: Prisma.$JobAssignmentPayload<ExtArgs>
        fields: Prisma.JobAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobAssignmentPayload>
          }
          findFirst: {
            args: Prisma.JobAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobAssignmentPayload>
          }
          findMany: {
            args: Prisma.JobAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobAssignmentPayload>[]
          }
          create: {
            args: Prisma.JobAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobAssignmentPayload>
          }
          createMany: {
            args: Prisma.JobAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JobAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobAssignmentPayload>
          }
          update: {
            args: Prisma.JobAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.JobAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JobAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobAssignmentPayload>
          }
          aggregate: {
            args: Prisma.JobAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobAssignment>
          }
          groupBy: {
            args: Prisma.JobAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<JobAssignmentCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    worker?: WorkerOmit
    role?: RoleOmit
    workerEligibleRole?: WorkerEligibleRoleOmit
    job?: JobOmit
    jobRoleRequirement?: JobRoleRequirementOmit
    jobAssignment?: JobAssignmentOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WorkerCountOutputType
   */

  export type WorkerCountOutputType = {
    eligibleRoles: number
    jobAssignments: number
    notificationsSent: number
  }

  export type WorkerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eligibleRoles?: boolean | WorkerCountOutputTypeCountEligibleRolesArgs
    jobAssignments?: boolean | WorkerCountOutputTypeCountJobAssignmentsArgs
    notificationsSent?: boolean | WorkerCountOutputTypeCountNotificationsSentArgs
  }

  // Custom InputTypes
  /**
   * WorkerCountOutputType without action
   */
  export type WorkerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerCountOutputType
     */
    select?: WorkerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkerCountOutputType without action
   */
  export type WorkerCountOutputTypeCountEligibleRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkerEligibleRoleWhereInput
  }

  /**
   * WorkerCountOutputType without action
   */
  export type WorkerCountOutputTypeCountJobAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobAssignmentWhereInput
  }

  /**
   * WorkerCountOutputType without action
   */
  export type WorkerCountOutputTypeCountNotificationsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    eligibleWorkers: number
    jobRequirements: number
    jobAssignments: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eligibleWorkers?: boolean | RoleCountOutputTypeCountEligibleWorkersArgs
    jobRequirements?: boolean | RoleCountOutputTypeCountJobRequirementsArgs
    jobAssignments?: boolean | RoleCountOutputTypeCountJobAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountEligibleWorkersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkerEligibleRoleWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountJobRequirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobRoleRequirementWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountJobAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobAssignmentWhereInput
  }


  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    roleRequirements: number
    assignments: number
    notifications: number
  }

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roleRequirements?: boolean | JobCountOutputTypeCountRoleRequirementsArgs
    assignments?: boolean | JobCountOutputTypeCountAssignmentsArgs
    notifications?: boolean | JobCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountRoleRequirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobRoleRequirementWhereInput
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobAssignmentWhereInput
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Worker
   */

  export type AggregateWorker = {
    _count: WorkerCountAggregateOutputType | null
    _min: WorkerMinAggregateOutputType | null
    _max: WorkerMaxAggregateOutputType | null
  }

  export type WorkerMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    status: $Enums.WorkerStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    status: $Enums.WorkerStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Worker to aggregate.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workers
    **/
    _count?: true | WorkerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkerMaxAggregateInputType
  }

  export type GetWorkerAggregateType<T extends WorkerAggregateArgs> = {
        [P in keyof T & keyof AggregateWorker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorker[P]>
      : GetScalarType<T[P], AggregateWorker[P]>
  }




  export type WorkerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkerWhereInput
    orderBy?: WorkerOrderByWithAggregationInput | WorkerOrderByWithAggregationInput[]
    by: WorkerScalarFieldEnum[] | WorkerScalarFieldEnum
    having?: WorkerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkerCountAggregateInputType | true
    _min?: WorkerMinAggregateInputType
    _max?: WorkerMaxAggregateInputType
  }

  export type WorkerGroupByOutputType = {
    id: string
    name: string
    email: string | null
    phone: string | null
    status: $Enums.WorkerStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: WorkerCountAggregateOutputType | null
    _min: WorkerMinAggregateOutputType | null
    _max: WorkerMaxAggregateOutputType | null
  }

  type GetWorkerGroupByPayload<T extends WorkerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkerGroupByOutputType[P]>
            : GetScalarType<T[P], WorkerGroupByOutputType[P]>
        }
      >
    >


  export type WorkerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eligibleRoles?: boolean | Worker$eligibleRolesArgs<ExtArgs>
    jobAssignments?: boolean | Worker$jobAssignmentsArgs<ExtArgs>
    notificationsSent?: boolean | Worker$notificationsSentArgs<ExtArgs>
    _count?: boolean | WorkerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worker"]>



  export type WorkerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["worker"]>
  export type WorkerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eligibleRoles?: boolean | Worker$eligibleRolesArgs<ExtArgs>
    jobAssignments?: boolean | Worker$jobAssignmentsArgs<ExtArgs>
    notificationsSent?: boolean | Worker$notificationsSentArgs<ExtArgs>
    _count?: boolean | WorkerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WorkerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Worker"
    objects: {
      eligibleRoles: Prisma.$WorkerEligibleRolePayload<ExtArgs>[]
      jobAssignments: Prisma.$JobAssignmentPayload<ExtArgs>[]
      notificationsSent: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      phone: string | null
      status: $Enums.WorkerStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["worker"]>
    composites: {}
  }

  type WorkerGetPayload<S extends boolean | null | undefined | WorkerDefaultArgs> = $Result.GetResult<Prisma.$WorkerPayload, S>

  type WorkerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkerCountAggregateInputType | true
    }

  export interface WorkerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Worker'], meta: { name: 'Worker' } }
    /**
     * Find zero or one Worker that matches the filter.
     * @param {WorkerFindUniqueArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkerFindUniqueArgs>(args: SelectSubset<T, WorkerFindUniqueArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Worker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkerFindUniqueOrThrowArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkerFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Worker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerFindFirstArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkerFindFirstArgs>(args?: SelectSubset<T, WorkerFindFirstArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Worker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerFindFirstOrThrowArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkerFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkerFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workers
     * const workers = await prisma.worker.findMany()
     * 
     * // Get first 10 Workers
     * const workers = await prisma.worker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workerWithIdOnly = await prisma.worker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkerFindManyArgs>(args?: SelectSubset<T, WorkerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Worker.
     * @param {WorkerCreateArgs} args - Arguments to create a Worker.
     * @example
     * // Create one Worker
     * const Worker = await prisma.worker.create({
     *   data: {
     *     // ... data to create a Worker
     *   }
     * })
     * 
     */
    create<T extends WorkerCreateArgs>(args: SelectSubset<T, WorkerCreateArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workers.
     * @param {WorkerCreateManyArgs} args - Arguments to create many Workers.
     * @example
     * // Create many Workers
     * const worker = await prisma.worker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkerCreateManyArgs>(args?: SelectSubset<T, WorkerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Worker.
     * @param {WorkerDeleteArgs} args - Arguments to delete one Worker.
     * @example
     * // Delete one Worker
     * const Worker = await prisma.worker.delete({
     *   where: {
     *     // ... filter to delete one Worker
     *   }
     * })
     * 
     */
    delete<T extends WorkerDeleteArgs>(args: SelectSubset<T, WorkerDeleteArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Worker.
     * @param {WorkerUpdateArgs} args - Arguments to update one Worker.
     * @example
     * // Update one Worker
     * const worker = await prisma.worker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkerUpdateArgs>(args: SelectSubset<T, WorkerUpdateArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workers.
     * @param {WorkerDeleteManyArgs} args - Arguments to filter Workers to delete.
     * @example
     * // Delete a few Workers
     * const { count } = await prisma.worker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkerDeleteManyArgs>(args?: SelectSubset<T, WorkerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workers
     * const worker = await prisma.worker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkerUpdateManyArgs>(args: SelectSubset<T, WorkerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Worker.
     * @param {WorkerUpsertArgs} args - Arguments to update or create a Worker.
     * @example
     * // Update or create a Worker
     * const worker = await prisma.worker.upsert({
     *   create: {
     *     // ... data to create a Worker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Worker we want to update
     *   }
     * })
     */
    upsert<T extends WorkerUpsertArgs>(args: SelectSubset<T, WorkerUpsertArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerCountArgs} args - Arguments to filter Workers to count.
     * @example
     * // Count the number of Workers
     * const count = await prisma.worker.count({
     *   where: {
     *     // ... the filter for the Workers we want to count
     *   }
     * })
    **/
    count<T extends WorkerCountArgs>(
      args?: Subset<T, WorkerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Worker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkerAggregateArgs>(args: Subset<T, WorkerAggregateArgs>): Prisma.PrismaPromise<GetWorkerAggregateType<T>>

    /**
     * Group by Worker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkerGroupByArgs['orderBy'] }
        : { orderBy?: WorkerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Worker model
   */
  readonly fields: WorkerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Worker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eligibleRoles<T extends Worker$eligibleRolesArgs<ExtArgs> = {}>(args?: Subset<T, Worker$eligibleRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerEligibleRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jobAssignments<T extends Worker$jobAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Worker$jobAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificationsSent<T extends Worker$notificationsSentArgs<ExtArgs> = {}>(args?: Subset<T, Worker$notificationsSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Worker model
   */
  interface WorkerFieldRefs {
    readonly id: FieldRef<"Worker", 'String'>
    readonly name: FieldRef<"Worker", 'String'>
    readonly email: FieldRef<"Worker", 'String'>
    readonly phone: FieldRef<"Worker", 'String'>
    readonly status: FieldRef<"Worker", 'WorkerStatus'>
    readonly notes: FieldRef<"Worker", 'String'>
    readonly createdAt: FieldRef<"Worker", 'DateTime'>
    readonly updatedAt: FieldRef<"Worker", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Worker findUnique
   */
  export type WorkerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker findUniqueOrThrow
   */
  export type WorkerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker findFirst
   */
  export type WorkerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workers.
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workers.
     */
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * Worker findFirstOrThrow
   */
  export type WorkerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workers.
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workers.
     */
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * Worker findMany
   */
  export type WorkerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Workers to fetch.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workers.
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * Worker create
   */
  export type WorkerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * The data needed to create a Worker.
     */
    data: XOR<WorkerCreateInput, WorkerUncheckedCreateInput>
  }

  /**
   * Worker createMany
   */
  export type WorkerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workers.
     */
    data: WorkerCreateManyInput | WorkerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Worker update
   */
  export type WorkerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * The data needed to update a Worker.
     */
    data: XOR<WorkerUpdateInput, WorkerUncheckedUpdateInput>
    /**
     * Choose, which Worker to update.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker updateMany
   */
  export type WorkerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workers.
     */
    data: XOR<WorkerUpdateManyMutationInput, WorkerUncheckedUpdateManyInput>
    /**
     * Filter which Workers to update
     */
    where?: WorkerWhereInput
    /**
     * Limit how many Workers to update.
     */
    limit?: number
  }

  /**
   * Worker upsert
   */
  export type WorkerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * The filter to search for the Worker to update in case it exists.
     */
    where: WorkerWhereUniqueInput
    /**
     * In case the Worker found by the `where` argument doesn't exist, create a new Worker with this data.
     */
    create: XOR<WorkerCreateInput, WorkerUncheckedCreateInput>
    /**
     * In case the Worker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkerUpdateInput, WorkerUncheckedUpdateInput>
  }

  /**
   * Worker delete
   */
  export type WorkerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter which Worker to delete.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker deleteMany
   */
  export type WorkerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workers to delete
     */
    where?: WorkerWhereInput
    /**
     * Limit how many Workers to delete.
     */
    limit?: number
  }

  /**
   * Worker.eligibleRoles
   */
  export type Worker$eligibleRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerEligibleRole
     */
    select?: WorkerEligibleRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerEligibleRole
     */
    omit?: WorkerEligibleRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerEligibleRoleInclude<ExtArgs> | null
    where?: WorkerEligibleRoleWhereInput
    orderBy?: WorkerEligibleRoleOrderByWithRelationInput | WorkerEligibleRoleOrderByWithRelationInput[]
    cursor?: WorkerEligibleRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkerEligibleRoleScalarFieldEnum | WorkerEligibleRoleScalarFieldEnum[]
  }

  /**
   * Worker.jobAssignments
   */
  export type Worker$jobAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobAssignment
     */
    omit?: JobAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null
    where?: JobAssignmentWhereInput
    orderBy?: JobAssignmentOrderByWithRelationInput | JobAssignmentOrderByWithRelationInput[]
    cursor?: JobAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobAssignmentScalarFieldEnum | JobAssignmentScalarFieldEnum[]
  }

  /**
   * Worker.notificationsSent
   */
  export type Worker$notificationsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Worker without action
   */
  export type WorkerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    defaultPayRate: Decimal | null
  }

  export type RoleSumAggregateOutputType = {
    defaultPayRate: Decimal | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    defaultPayRate: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    defaultPayRate: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    defaultPayRate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    defaultPayRate?: true
  }

  export type RoleSumAggregateInputType = {
    defaultPayRate?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    defaultPayRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    defaultPayRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    defaultPayRate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    defaultPayRate: Decimal | null
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    defaultPayRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eligibleWorkers?: boolean | Role$eligibleWorkersArgs<ExtArgs>
    jobRequirements?: boolean | Role$jobRequirementsArgs<ExtArgs>
    jobAssignments?: boolean | Role$jobAssignmentsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>



  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    defaultPayRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "defaultPayRate" | "createdAt" | "updatedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eligibleWorkers?: boolean | Role$eligibleWorkersArgs<ExtArgs>
    jobRequirements?: boolean | Role$jobRequirementsArgs<ExtArgs>
    jobAssignments?: boolean | Role$jobAssignmentsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      eligibleWorkers: Prisma.$WorkerEligibleRolePayload<ExtArgs>[]
      jobRequirements: Prisma.$JobRoleRequirementPayload<ExtArgs>[]
      jobAssignments: Prisma.$JobAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      defaultPayRate: Prisma.Decimal | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eligibleWorkers<T extends Role$eligibleWorkersArgs<ExtArgs> = {}>(args?: Subset<T, Role$eligibleWorkersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerEligibleRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jobRequirements<T extends Role$jobRequirementsArgs<ExtArgs> = {}>(args?: Subset<T, Role$jobRequirementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobRoleRequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jobAssignments<T extends Role$jobAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Role$jobAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly defaultPayRate: FieldRef<"Role", 'Decimal'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.eligibleWorkers
   */
  export type Role$eligibleWorkersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerEligibleRole
     */
    select?: WorkerEligibleRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerEligibleRole
     */
    omit?: WorkerEligibleRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerEligibleRoleInclude<ExtArgs> | null
    where?: WorkerEligibleRoleWhereInput
    orderBy?: WorkerEligibleRoleOrderByWithRelationInput | WorkerEligibleRoleOrderByWithRelationInput[]
    cursor?: WorkerEligibleRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkerEligibleRoleScalarFieldEnum | WorkerEligibleRoleScalarFieldEnum[]
  }

  /**
   * Role.jobRequirements
   */
  export type Role$jobRequirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRoleRequirement
     */
    select?: JobRoleRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRoleRequirement
     */
    omit?: JobRoleRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRoleRequirementInclude<ExtArgs> | null
    where?: JobRoleRequirementWhereInput
    orderBy?: JobRoleRequirementOrderByWithRelationInput | JobRoleRequirementOrderByWithRelationInput[]
    cursor?: JobRoleRequirementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobRoleRequirementScalarFieldEnum | JobRoleRequirementScalarFieldEnum[]
  }

  /**
   * Role.jobAssignments
   */
  export type Role$jobAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobAssignment
     */
    omit?: JobAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null
    where?: JobAssignmentWhereInput
    orderBy?: JobAssignmentOrderByWithRelationInput | JobAssignmentOrderByWithRelationInput[]
    cursor?: JobAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobAssignmentScalarFieldEnum | JobAssignmentScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model WorkerEligibleRole
   */

  export type AggregateWorkerEligibleRole = {
    _count: WorkerEligibleRoleCountAggregateOutputType | null
    _min: WorkerEligibleRoleMinAggregateOutputType | null
    _max: WorkerEligibleRoleMaxAggregateOutputType | null
  }

  export type WorkerEligibleRoleMinAggregateOutputType = {
    workerId: string | null
    roleId: string | null
    createdAt: Date | null
  }

  export type WorkerEligibleRoleMaxAggregateOutputType = {
    workerId: string | null
    roleId: string | null
    createdAt: Date | null
  }

  export type WorkerEligibleRoleCountAggregateOutputType = {
    workerId: number
    roleId: number
    createdAt: number
    _all: number
  }


  export type WorkerEligibleRoleMinAggregateInputType = {
    workerId?: true
    roleId?: true
    createdAt?: true
  }

  export type WorkerEligibleRoleMaxAggregateInputType = {
    workerId?: true
    roleId?: true
    createdAt?: true
  }

  export type WorkerEligibleRoleCountAggregateInputType = {
    workerId?: true
    roleId?: true
    createdAt?: true
    _all?: true
  }

  export type WorkerEligibleRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkerEligibleRole to aggregate.
     */
    where?: WorkerEligibleRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkerEligibleRoles to fetch.
     */
    orderBy?: WorkerEligibleRoleOrderByWithRelationInput | WorkerEligibleRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkerEligibleRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkerEligibleRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkerEligibleRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkerEligibleRoles
    **/
    _count?: true | WorkerEligibleRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkerEligibleRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkerEligibleRoleMaxAggregateInputType
  }

  export type GetWorkerEligibleRoleAggregateType<T extends WorkerEligibleRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkerEligibleRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkerEligibleRole[P]>
      : GetScalarType<T[P], AggregateWorkerEligibleRole[P]>
  }




  export type WorkerEligibleRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkerEligibleRoleWhereInput
    orderBy?: WorkerEligibleRoleOrderByWithAggregationInput | WorkerEligibleRoleOrderByWithAggregationInput[]
    by: WorkerEligibleRoleScalarFieldEnum[] | WorkerEligibleRoleScalarFieldEnum
    having?: WorkerEligibleRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkerEligibleRoleCountAggregateInputType | true
    _min?: WorkerEligibleRoleMinAggregateInputType
    _max?: WorkerEligibleRoleMaxAggregateInputType
  }

  export type WorkerEligibleRoleGroupByOutputType = {
    workerId: string
    roleId: string
    createdAt: Date
    _count: WorkerEligibleRoleCountAggregateOutputType | null
    _min: WorkerEligibleRoleMinAggregateOutputType | null
    _max: WorkerEligibleRoleMaxAggregateOutputType | null
  }

  type GetWorkerEligibleRoleGroupByPayload<T extends WorkerEligibleRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkerEligibleRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkerEligibleRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkerEligibleRoleGroupByOutputType[P]>
            : GetScalarType<T[P], WorkerEligibleRoleGroupByOutputType[P]>
        }
      >
    >


  export type WorkerEligibleRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workerId?: boolean
    roleId?: boolean
    createdAt?: boolean
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workerEligibleRole"]>



  export type WorkerEligibleRoleSelectScalar = {
    workerId?: boolean
    roleId?: boolean
    createdAt?: boolean
  }

  export type WorkerEligibleRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"workerId" | "roleId" | "createdAt", ExtArgs["result"]["workerEligibleRole"]>
  export type WorkerEligibleRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $WorkerEligibleRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkerEligibleRole"
    objects: {
      worker: Prisma.$WorkerPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      workerId: string
      roleId: string
      createdAt: Date
    }, ExtArgs["result"]["workerEligibleRole"]>
    composites: {}
  }

  type WorkerEligibleRoleGetPayload<S extends boolean | null | undefined | WorkerEligibleRoleDefaultArgs> = $Result.GetResult<Prisma.$WorkerEligibleRolePayload, S>

  type WorkerEligibleRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkerEligibleRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkerEligibleRoleCountAggregateInputType | true
    }

  export interface WorkerEligibleRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkerEligibleRole'], meta: { name: 'WorkerEligibleRole' } }
    /**
     * Find zero or one WorkerEligibleRole that matches the filter.
     * @param {WorkerEligibleRoleFindUniqueArgs} args - Arguments to find a WorkerEligibleRole
     * @example
     * // Get one WorkerEligibleRole
     * const workerEligibleRole = await prisma.workerEligibleRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkerEligibleRoleFindUniqueArgs>(args: SelectSubset<T, WorkerEligibleRoleFindUniqueArgs<ExtArgs>>): Prisma__WorkerEligibleRoleClient<$Result.GetResult<Prisma.$WorkerEligibleRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkerEligibleRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkerEligibleRoleFindUniqueOrThrowArgs} args - Arguments to find a WorkerEligibleRole
     * @example
     * // Get one WorkerEligibleRole
     * const workerEligibleRole = await prisma.workerEligibleRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkerEligibleRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkerEligibleRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkerEligibleRoleClient<$Result.GetResult<Prisma.$WorkerEligibleRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkerEligibleRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerEligibleRoleFindFirstArgs} args - Arguments to find a WorkerEligibleRole
     * @example
     * // Get one WorkerEligibleRole
     * const workerEligibleRole = await prisma.workerEligibleRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkerEligibleRoleFindFirstArgs>(args?: SelectSubset<T, WorkerEligibleRoleFindFirstArgs<ExtArgs>>): Prisma__WorkerEligibleRoleClient<$Result.GetResult<Prisma.$WorkerEligibleRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkerEligibleRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerEligibleRoleFindFirstOrThrowArgs} args - Arguments to find a WorkerEligibleRole
     * @example
     * // Get one WorkerEligibleRole
     * const workerEligibleRole = await prisma.workerEligibleRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkerEligibleRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkerEligibleRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkerEligibleRoleClient<$Result.GetResult<Prisma.$WorkerEligibleRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkerEligibleRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerEligibleRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkerEligibleRoles
     * const workerEligibleRoles = await prisma.workerEligibleRole.findMany()
     * 
     * // Get first 10 WorkerEligibleRoles
     * const workerEligibleRoles = await prisma.workerEligibleRole.findMany({ take: 10 })
     * 
     * // Only select the `workerId`
     * const workerEligibleRoleWithWorkerIdOnly = await prisma.workerEligibleRole.findMany({ select: { workerId: true } })
     * 
     */
    findMany<T extends WorkerEligibleRoleFindManyArgs>(args?: SelectSubset<T, WorkerEligibleRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerEligibleRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkerEligibleRole.
     * @param {WorkerEligibleRoleCreateArgs} args - Arguments to create a WorkerEligibleRole.
     * @example
     * // Create one WorkerEligibleRole
     * const WorkerEligibleRole = await prisma.workerEligibleRole.create({
     *   data: {
     *     // ... data to create a WorkerEligibleRole
     *   }
     * })
     * 
     */
    create<T extends WorkerEligibleRoleCreateArgs>(args: SelectSubset<T, WorkerEligibleRoleCreateArgs<ExtArgs>>): Prisma__WorkerEligibleRoleClient<$Result.GetResult<Prisma.$WorkerEligibleRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkerEligibleRoles.
     * @param {WorkerEligibleRoleCreateManyArgs} args - Arguments to create many WorkerEligibleRoles.
     * @example
     * // Create many WorkerEligibleRoles
     * const workerEligibleRole = await prisma.workerEligibleRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkerEligibleRoleCreateManyArgs>(args?: SelectSubset<T, WorkerEligibleRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkerEligibleRole.
     * @param {WorkerEligibleRoleDeleteArgs} args - Arguments to delete one WorkerEligibleRole.
     * @example
     * // Delete one WorkerEligibleRole
     * const WorkerEligibleRole = await prisma.workerEligibleRole.delete({
     *   where: {
     *     // ... filter to delete one WorkerEligibleRole
     *   }
     * })
     * 
     */
    delete<T extends WorkerEligibleRoleDeleteArgs>(args: SelectSubset<T, WorkerEligibleRoleDeleteArgs<ExtArgs>>): Prisma__WorkerEligibleRoleClient<$Result.GetResult<Prisma.$WorkerEligibleRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkerEligibleRole.
     * @param {WorkerEligibleRoleUpdateArgs} args - Arguments to update one WorkerEligibleRole.
     * @example
     * // Update one WorkerEligibleRole
     * const workerEligibleRole = await prisma.workerEligibleRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkerEligibleRoleUpdateArgs>(args: SelectSubset<T, WorkerEligibleRoleUpdateArgs<ExtArgs>>): Prisma__WorkerEligibleRoleClient<$Result.GetResult<Prisma.$WorkerEligibleRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkerEligibleRoles.
     * @param {WorkerEligibleRoleDeleteManyArgs} args - Arguments to filter WorkerEligibleRoles to delete.
     * @example
     * // Delete a few WorkerEligibleRoles
     * const { count } = await prisma.workerEligibleRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkerEligibleRoleDeleteManyArgs>(args?: SelectSubset<T, WorkerEligibleRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkerEligibleRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerEligibleRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkerEligibleRoles
     * const workerEligibleRole = await prisma.workerEligibleRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkerEligibleRoleUpdateManyArgs>(args: SelectSubset<T, WorkerEligibleRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkerEligibleRole.
     * @param {WorkerEligibleRoleUpsertArgs} args - Arguments to update or create a WorkerEligibleRole.
     * @example
     * // Update or create a WorkerEligibleRole
     * const workerEligibleRole = await prisma.workerEligibleRole.upsert({
     *   create: {
     *     // ... data to create a WorkerEligibleRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkerEligibleRole we want to update
     *   }
     * })
     */
    upsert<T extends WorkerEligibleRoleUpsertArgs>(args: SelectSubset<T, WorkerEligibleRoleUpsertArgs<ExtArgs>>): Prisma__WorkerEligibleRoleClient<$Result.GetResult<Prisma.$WorkerEligibleRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkerEligibleRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerEligibleRoleCountArgs} args - Arguments to filter WorkerEligibleRoles to count.
     * @example
     * // Count the number of WorkerEligibleRoles
     * const count = await prisma.workerEligibleRole.count({
     *   where: {
     *     // ... the filter for the WorkerEligibleRoles we want to count
     *   }
     * })
    **/
    count<T extends WorkerEligibleRoleCountArgs>(
      args?: Subset<T, WorkerEligibleRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkerEligibleRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkerEligibleRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerEligibleRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkerEligibleRoleAggregateArgs>(args: Subset<T, WorkerEligibleRoleAggregateArgs>): Prisma.PrismaPromise<GetWorkerEligibleRoleAggregateType<T>>

    /**
     * Group by WorkerEligibleRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerEligibleRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkerEligibleRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkerEligibleRoleGroupByArgs['orderBy'] }
        : { orderBy?: WorkerEligibleRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkerEligibleRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkerEligibleRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkerEligibleRole model
   */
  readonly fields: WorkerEligibleRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkerEligibleRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkerEligibleRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    worker<T extends WorkerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkerDefaultArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkerEligibleRole model
   */
  interface WorkerEligibleRoleFieldRefs {
    readonly workerId: FieldRef<"WorkerEligibleRole", 'String'>
    readonly roleId: FieldRef<"WorkerEligibleRole", 'String'>
    readonly createdAt: FieldRef<"WorkerEligibleRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkerEligibleRole findUnique
   */
  export type WorkerEligibleRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerEligibleRole
     */
    select?: WorkerEligibleRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerEligibleRole
     */
    omit?: WorkerEligibleRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerEligibleRoleInclude<ExtArgs> | null
    /**
     * Filter, which WorkerEligibleRole to fetch.
     */
    where: WorkerEligibleRoleWhereUniqueInput
  }

  /**
   * WorkerEligibleRole findUniqueOrThrow
   */
  export type WorkerEligibleRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerEligibleRole
     */
    select?: WorkerEligibleRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerEligibleRole
     */
    omit?: WorkerEligibleRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerEligibleRoleInclude<ExtArgs> | null
    /**
     * Filter, which WorkerEligibleRole to fetch.
     */
    where: WorkerEligibleRoleWhereUniqueInput
  }

  /**
   * WorkerEligibleRole findFirst
   */
  export type WorkerEligibleRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerEligibleRole
     */
    select?: WorkerEligibleRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerEligibleRole
     */
    omit?: WorkerEligibleRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerEligibleRoleInclude<ExtArgs> | null
    /**
     * Filter, which WorkerEligibleRole to fetch.
     */
    where?: WorkerEligibleRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkerEligibleRoles to fetch.
     */
    orderBy?: WorkerEligibleRoleOrderByWithRelationInput | WorkerEligibleRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkerEligibleRoles.
     */
    cursor?: WorkerEligibleRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkerEligibleRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkerEligibleRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkerEligibleRoles.
     */
    distinct?: WorkerEligibleRoleScalarFieldEnum | WorkerEligibleRoleScalarFieldEnum[]
  }

  /**
   * WorkerEligibleRole findFirstOrThrow
   */
  export type WorkerEligibleRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerEligibleRole
     */
    select?: WorkerEligibleRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerEligibleRole
     */
    omit?: WorkerEligibleRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerEligibleRoleInclude<ExtArgs> | null
    /**
     * Filter, which WorkerEligibleRole to fetch.
     */
    where?: WorkerEligibleRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkerEligibleRoles to fetch.
     */
    orderBy?: WorkerEligibleRoleOrderByWithRelationInput | WorkerEligibleRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkerEligibleRoles.
     */
    cursor?: WorkerEligibleRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkerEligibleRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkerEligibleRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkerEligibleRoles.
     */
    distinct?: WorkerEligibleRoleScalarFieldEnum | WorkerEligibleRoleScalarFieldEnum[]
  }

  /**
   * WorkerEligibleRole findMany
   */
  export type WorkerEligibleRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerEligibleRole
     */
    select?: WorkerEligibleRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerEligibleRole
     */
    omit?: WorkerEligibleRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerEligibleRoleInclude<ExtArgs> | null
    /**
     * Filter, which WorkerEligibleRoles to fetch.
     */
    where?: WorkerEligibleRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkerEligibleRoles to fetch.
     */
    orderBy?: WorkerEligibleRoleOrderByWithRelationInput | WorkerEligibleRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkerEligibleRoles.
     */
    cursor?: WorkerEligibleRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkerEligibleRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkerEligibleRoles.
     */
    skip?: number
    distinct?: WorkerEligibleRoleScalarFieldEnum | WorkerEligibleRoleScalarFieldEnum[]
  }

  /**
   * WorkerEligibleRole create
   */
  export type WorkerEligibleRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerEligibleRole
     */
    select?: WorkerEligibleRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerEligibleRole
     */
    omit?: WorkerEligibleRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerEligibleRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkerEligibleRole.
     */
    data: XOR<WorkerEligibleRoleCreateInput, WorkerEligibleRoleUncheckedCreateInput>
  }

  /**
   * WorkerEligibleRole createMany
   */
  export type WorkerEligibleRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkerEligibleRoles.
     */
    data: WorkerEligibleRoleCreateManyInput | WorkerEligibleRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkerEligibleRole update
   */
  export type WorkerEligibleRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerEligibleRole
     */
    select?: WorkerEligibleRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerEligibleRole
     */
    omit?: WorkerEligibleRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerEligibleRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkerEligibleRole.
     */
    data: XOR<WorkerEligibleRoleUpdateInput, WorkerEligibleRoleUncheckedUpdateInput>
    /**
     * Choose, which WorkerEligibleRole to update.
     */
    where: WorkerEligibleRoleWhereUniqueInput
  }

  /**
   * WorkerEligibleRole updateMany
   */
  export type WorkerEligibleRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkerEligibleRoles.
     */
    data: XOR<WorkerEligibleRoleUpdateManyMutationInput, WorkerEligibleRoleUncheckedUpdateManyInput>
    /**
     * Filter which WorkerEligibleRoles to update
     */
    where?: WorkerEligibleRoleWhereInput
    /**
     * Limit how many WorkerEligibleRoles to update.
     */
    limit?: number
  }

  /**
   * WorkerEligibleRole upsert
   */
  export type WorkerEligibleRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerEligibleRole
     */
    select?: WorkerEligibleRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerEligibleRole
     */
    omit?: WorkerEligibleRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerEligibleRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkerEligibleRole to update in case it exists.
     */
    where: WorkerEligibleRoleWhereUniqueInput
    /**
     * In case the WorkerEligibleRole found by the `where` argument doesn't exist, create a new WorkerEligibleRole with this data.
     */
    create: XOR<WorkerEligibleRoleCreateInput, WorkerEligibleRoleUncheckedCreateInput>
    /**
     * In case the WorkerEligibleRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkerEligibleRoleUpdateInput, WorkerEligibleRoleUncheckedUpdateInput>
  }

  /**
   * WorkerEligibleRole delete
   */
  export type WorkerEligibleRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerEligibleRole
     */
    select?: WorkerEligibleRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerEligibleRole
     */
    omit?: WorkerEligibleRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerEligibleRoleInclude<ExtArgs> | null
    /**
     * Filter which WorkerEligibleRole to delete.
     */
    where: WorkerEligibleRoleWhereUniqueInput
  }

  /**
   * WorkerEligibleRole deleteMany
   */
  export type WorkerEligibleRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkerEligibleRoles to delete
     */
    where?: WorkerEligibleRoleWhereInput
    /**
     * Limit how many WorkerEligibleRoles to delete.
     */
    limit?: number
  }

  /**
   * WorkerEligibleRole without action
   */
  export type WorkerEligibleRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerEligibleRole
     */
    select?: WorkerEligibleRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerEligibleRole
     */
    omit?: WorkerEligibleRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerEligibleRoleInclude<ExtArgs> | null
  }


  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobMinAggregateOutputType = {
    id: string | null
    organizerName: string | null
    title: string | null
    location: string | null
    startDatetime: Date | null
    endDatetime: Date | null
    description: string | null
    status: $Enums.JobStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobMaxAggregateOutputType = {
    id: string | null
    organizerName: string | null
    title: string | null
    location: string | null
    startDatetime: Date | null
    endDatetime: Date | null
    description: string | null
    status: $Enums.JobStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    organizerName: number
    title: number
    location: number
    startDatetime: number
    endDatetime: number
    description: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobMinAggregateInputType = {
    id?: true
    organizerName?: true
    title?: true
    location?: true
    startDatetime?: true
    endDatetime?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    organizerName?: true
    title?: true
    location?: true
    startDatetime?: true
    endDatetime?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    organizerName?: true
    title?: true
    location?: true
    startDatetime?: true
    endDatetime?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: string
    organizerName: string | null
    title: string
    location: string
    startDatetime: Date
    endDatetime: Date
    description: string | null
    status: $Enums.JobStatus
    createdAt: Date
    updatedAt: Date
    _count: JobCountAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizerName?: boolean
    title?: boolean
    location?: boolean
    startDatetime?: boolean
    endDatetime?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roleRequirements?: boolean | Job$roleRequirementsArgs<ExtArgs>
    assignments?: boolean | Job$assignmentsArgs<ExtArgs>
    notifications?: boolean | Job$notificationsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>



  export type JobSelectScalar = {
    id?: boolean
    organizerName?: boolean
    title?: boolean
    location?: boolean
    startDatetime?: boolean
    endDatetime?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizerName" | "title" | "location" | "startDatetime" | "endDatetime" | "description" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["job"]>
  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roleRequirements?: boolean | Job$roleRequirementsArgs<ExtArgs>
    assignments?: boolean | Job$assignmentsArgs<ExtArgs>
    notifications?: boolean | Job$notificationsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      roleRequirements: Prisma.$JobRoleRequirementPayload<ExtArgs>[]
      assignments: Prisma.$JobAssignmentPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizerName: string | null
      title: string
      location: string
      startDatetime: Date
      endDatetime: Date
      description: string | null
      status: $Enums.JobStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobFindManyArgs>(args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends JobCreateArgs>(args: SelectSubset<T, JobCreateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCreateManyArgs>(args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends JobDeleteArgs>(args: SelectSubset<T, JobDeleteArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobUpdateArgs>(args: SelectSubset<T, JobUpdateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobDeleteManyArgs>(args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobUpdateManyArgs>(args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(args: SelectSubset<T, JobUpsertArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roleRequirements<T extends Job$roleRequirementsArgs<ExtArgs> = {}>(args?: Subset<T, Job$roleRequirementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobRoleRequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends Job$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Job$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Job$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Job$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Job model
   */
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", 'String'>
    readonly organizerName: FieldRef<"Job", 'String'>
    readonly title: FieldRef<"Job", 'String'>
    readonly location: FieldRef<"Job", 'String'>
    readonly startDatetime: FieldRef<"Job", 'DateTime'>
    readonly endDatetime: FieldRef<"Job", 'DateTime'>
    readonly description: FieldRef<"Job", 'String'>
    readonly status: FieldRef<"Job", 'JobStatus'>
    readonly createdAt: FieldRef<"Job", 'DateTime'>
    readonly updatedAt: FieldRef<"Job", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }

  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to delete.
     */
    limit?: number
  }

  /**
   * Job.roleRequirements
   */
  export type Job$roleRequirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRoleRequirement
     */
    select?: JobRoleRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRoleRequirement
     */
    omit?: JobRoleRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRoleRequirementInclude<ExtArgs> | null
    where?: JobRoleRequirementWhereInput
    orderBy?: JobRoleRequirementOrderByWithRelationInput | JobRoleRequirementOrderByWithRelationInput[]
    cursor?: JobRoleRequirementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobRoleRequirementScalarFieldEnum | JobRoleRequirementScalarFieldEnum[]
  }

  /**
   * Job.assignments
   */
  export type Job$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobAssignment
     */
    omit?: JobAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null
    where?: JobAssignmentWhereInput
    orderBy?: JobAssignmentOrderByWithRelationInput | JobAssignmentOrderByWithRelationInput[]
    cursor?: JobAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobAssignmentScalarFieldEnum | JobAssignmentScalarFieldEnum[]
  }

  /**
   * Job.notifications
   */
  export type Job$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
  }


  /**
   * Model JobRoleRequirement
   */

  export type AggregateJobRoleRequirement = {
    _count: JobRoleRequirementCountAggregateOutputType | null
    _avg: JobRoleRequirementAvgAggregateOutputType | null
    _sum: JobRoleRequirementSumAggregateOutputType | null
    _min: JobRoleRequirementMinAggregateOutputType | null
    _max: JobRoleRequirementMaxAggregateOutputType | null
  }

  export type JobRoleRequirementAvgAggregateOutputType = {
    numberOfWorkersNeeded: number | null
    payRateForJob: Decimal | null
  }

  export type JobRoleRequirementSumAggregateOutputType = {
    numberOfWorkersNeeded: number | null
    payRateForJob: Decimal | null
  }

  export type JobRoleRequirementMinAggregateOutputType = {
    id: string | null
    jobId: string | null
    roleId: string | null
    numberOfWorkersNeeded: number | null
    payRateForJob: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobRoleRequirementMaxAggregateOutputType = {
    id: string | null
    jobId: string | null
    roleId: string | null
    numberOfWorkersNeeded: number | null
    payRateForJob: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobRoleRequirementCountAggregateOutputType = {
    id: number
    jobId: number
    roleId: number
    numberOfWorkersNeeded: number
    payRateForJob: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobRoleRequirementAvgAggregateInputType = {
    numberOfWorkersNeeded?: true
    payRateForJob?: true
  }

  export type JobRoleRequirementSumAggregateInputType = {
    numberOfWorkersNeeded?: true
    payRateForJob?: true
  }

  export type JobRoleRequirementMinAggregateInputType = {
    id?: true
    jobId?: true
    roleId?: true
    numberOfWorkersNeeded?: true
    payRateForJob?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobRoleRequirementMaxAggregateInputType = {
    id?: true
    jobId?: true
    roleId?: true
    numberOfWorkersNeeded?: true
    payRateForJob?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobRoleRequirementCountAggregateInputType = {
    id?: true
    jobId?: true
    roleId?: true
    numberOfWorkersNeeded?: true
    payRateForJob?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobRoleRequirementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobRoleRequirement to aggregate.
     */
    where?: JobRoleRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobRoleRequirements to fetch.
     */
    orderBy?: JobRoleRequirementOrderByWithRelationInput | JobRoleRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobRoleRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobRoleRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobRoleRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobRoleRequirements
    **/
    _count?: true | JobRoleRequirementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobRoleRequirementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobRoleRequirementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobRoleRequirementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobRoleRequirementMaxAggregateInputType
  }

  export type GetJobRoleRequirementAggregateType<T extends JobRoleRequirementAggregateArgs> = {
        [P in keyof T & keyof AggregateJobRoleRequirement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobRoleRequirement[P]>
      : GetScalarType<T[P], AggregateJobRoleRequirement[P]>
  }




  export type JobRoleRequirementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobRoleRequirementWhereInput
    orderBy?: JobRoleRequirementOrderByWithAggregationInput | JobRoleRequirementOrderByWithAggregationInput[]
    by: JobRoleRequirementScalarFieldEnum[] | JobRoleRequirementScalarFieldEnum
    having?: JobRoleRequirementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobRoleRequirementCountAggregateInputType | true
    _avg?: JobRoleRequirementAvgAggregateInputType
    _sum?: JobRoleRequirementSumAggregateInputType
    _min?: JobRoleRequirementMinAggregateInputType
    _max?: JobRoleRequirementMaxAggregateInputType
  }

  export type JobRoleRequirementGroupByOutputType = {
    id: string
    jobId: string
    roleId: string
    numberOfWorkersNeeded: number
    payRateForJob: Decimal
    createdAt: Date
    updatedAt: Date
    _count: JobRoleRequirementCountAggregateOutputType | null
    _avg: JobRoleRequirementAvgAggregateOutputType | null
    _sum: JobRoleRequirementSumAggregateOutputType | null
    _min: JobRoleRequirementMinAggregateOutputType | null
    _max: JobRoleRequirementMaxAggregateOutputType | null
  }

  type GetJobRoleRequirementGroupByPayload<T extends JobRoleRequirementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobRoleRequirementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobRoleRequirementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobRoleRequirementGroupByOutputType[P]>
            : GetScalarType<T[P], JobRoleRequirementGroupByOutputType[P]>
        }
      >
    >


  export type JobRoleRequirementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    roleId?: boolean
    numberOfWorkersNeeded?: boolean
    payRateForJob?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobRoleRequirement"]>



  export type JobRoleRequirementSelectScalar = {
    id?: boolean
    jobId?: boolean
    roleId?: boolean
    numberOfWorkersNeeded?: boolean
    payRateForJob?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobRoleRequirementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "roleId" | "numberOfWorkersNeeded" | "payRateForJob" | "createdAt" | "updatedAt", ExtArgs["result"]["jobRoleRequirement"]>
  export type JobRoleRequirementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $JobRoleRequirementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobRoleRequirement"
    objects: {
      job: Prisma.$JobPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobId: string
      roleId: string
      numberOfWorkersNeeded: number
      payRateForJob: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobRoleRequirement"]>
    composites: {}
  }

  type JobRoleRequirementGetPayload<S extends boolean | null | undefined | JobRoleRequirementDefaultArgs> = $Result.GetResult<Prisma.$JobRoleRequirementPayload, S>

  type JobRoleRequirementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobRoleRequirementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobRoleRequirementCountAggregateInputType | true
    }

  export interface JobRoleRequirementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobRoleRequirement'], meta: { name: 'JobRoleRequirement' } }
    /**
     * Find zero or one JobRoleRequirement that matches the filter.
     * @param {JobRoleRequirementFindUniqueArgs} args - Arguments to find a JobRoleRequirement
     * @example
     * // Get one JobRoleRequirement
     * const jobRoleRequirement = await prisma.jobRoleRequirement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobRoleRequirementFindUniqueArgs>(args: SelectSubset<T, JobRoleRequirementFindUniqueArgs<ExtArgs>>): Prisma__JobRoleRequirementClient<$Result.GetResult<Prisma.$JobRoleRequirementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobRoleRequirement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobRoleRequirementFindUniqueOrThrowArgs} args - Arguments to find a JobRoleRequirement
     * @example
     * // Get one JobRoleRequirement
     * const jobRoleRequirement = await prisma.jobRoleRequirement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobRoleRequirementFindUniqueOrThrowArgs>(args: SelectSubset<T, JobRoleRequirementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobRoleRequirementClient<$Result.GetResult<Prisma.$JobRoleRequirementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobRoleRequirement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRoleRequirementFindFirstArgs} args - Arguments to find a JobRoleRequirement
     * @example
     * // Get one JobRoleRequirement
     * const jobRoleRequirement = await prisma.jobRoleRequirement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobRoleRequirementFindFirstArgs>(args?: SelectSubset<T, JobRoleRequirementFindFirstArgs<ExtArgs>>): Prisma__JobRoleRequirementClient<$Result.GetResult<Prisma.$JobRoleRequirementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobRoleRequirement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRoleRequirementFindFirstOrThrowArgs} args - Arguments to find a JobRoleRequirement
     * @example
     * // Get one JobRoleRequirement
     * const jobRoleRequirement = await prisma.jobRoleRequirement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobRoleRequirementFindFirstOrThrowArgs>(args?: SelectSubset<T, JobRoleRequirementFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobRoleRequirementClient<$Result.GetResult<Prisma.$JobRoleRequirementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobRoleRequirements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRoleRequirementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobRoleRequirements
     * const jobRoleRequirements = await prisma.jobRoleRequirement.findMany()
     * 
     * // Get first 10 JobRoleRequirements
     * const jobRoleRequirements = await prisma.jobRoleRequirement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobRoleRequirementWithIdOnly = await prisma.jobRoleRequirement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobRoleRequirementFindManyArgs>(args?: SelectSubset<T, JobRoleRequirementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobRoleRequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobRoleRequirement.
     * @param {JobRoleRequirementCreateArgs} args - Arguments to create a JobRoleRequirement.
     * @example
     * // Create one JobRoleRequirement
     * const JobRoleRequirement = await prisma.jobRoleRequirement.create({
     *   data: {
     *     // ... data to create a JobRoleRequirement
     *   }
     * })
     * 
     */
    create<T extends JobRoleRequirementCreateArgs>(args: SelectSubset<T, JobRoleRequirementCreateArgs<ExtArgs>>): Prisma__JobRoleRequirementClient<$Result.GetResult<Prisma.$JobRoleRequirementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobRoleRequirements.
     * @param {JobRoleRequirementCreateManyArgs} args - Arguments to create many JobRoleRequirements.
     * @example
     * // Create many JobRoleRequirements
     * const jobRoleRequirement = await prisma.jobRoleRequirement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobRoleRequirementCreateManyArgs>(args?: SelectSubset<T, JobRoleRequirementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JobRoleRequirement.
     * @param {JobRoleRequirementDeleteArgs} args - Arguments to delete one JobRoleRequirement.
     * @example
     * // Delete one JobRoleRequirement
     * const JobRoleRequirement = await prisma.jobRoleRequirement.delete({
     *   where: {
     *     // ... filter to delete one JobRoleRequirement
     *   }
     * })
     * 
     */
    delete<T extends JobRoleRequirementDeleteArgs>(args: SelectSubset<T, JobRoleRequirementDeleteArgs<ExtArgs>>): Prisma__JobRoleRequirementClient<$Result.GetResult<Prisma.$JobRoleRequirementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobRoleRequirement.
     * @param {JobRoleRequirementUpdateArgs} args - Arguments to update one JobRoleRequirement.
     * @example
     * // Update one JobRoleRequirement
     * const jobRoleRequirement = await prisma.jobRoleRequirement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobRoleRequirementUpdateArgs>(args: SelectSubset<T, JobRoleRequirementUpdateArgs<ExtArgs>>): Prisma__JobRoleRequirementClient<$Result.GetResult<Prisma.$JobRoleRequirementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobRoleRequirements.
     * @param {JobRoleRequirementDeleteManyArgs} args - Arguments to filter JobRoleRequirements to delete.
     * @example
     * // Delete a few JobRoleRequirements
     * const { count } = await prisma.jobRoleRequirement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobRoleRequirementDeleteManyArgs>(args?: SelectSubset<T, JobRoleRequirementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobRoleRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRoleRequirementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobRoleRequirements
     * const jobRoleRequirement = await prisma.jobRoleRequirement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobRoleRequirementUpdateManyArgs>(args: SelectSubset<T, JobRoleRequirementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JobRoleRequirement.
     * @param {JobRoleRequirementUpsertArgs} args - Arguments to update or create a JobRoleRequirement.
     * @example
     * // Update or create a JobRoleRequirement
     * const jobRoleRequirement = await prisma.jobRoleRequirement.upsert({
     *   create: {
     *     // ... data to create a JobRoleRequirement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobRoleRequirement we want to update
     *   }
     * })
     */
    upsert<T extends JobRoleRequirementUpsertArgs>(args: SelectSubset<T, JobRoleRequirementUpsertArgs<ExtArgs>>): Prisma__JobRoleRequirementClient<$Result.GetResult<Prisma.$JobRoleRequirementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobRoleRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRoleRequirementCountArgs} args - Arguments to filter JobRoleRequirements to count.
     * @example
     * // Count the number of JobRoleRequirements
     * const count = await prisma.jobRoleRequirement.count({
     *   where: {
     *     // ... the filter for the JobRoleRequirements we want to count
     *   }
     * })
    **/
    count<T extends JobRoleRequirementCountArgs>(
      args?: Subset<T, JobRoleRequirementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobRoleRequirementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobRoleRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRoleRequirementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobRoleRequirementAggregateArgs>(args: Subset<T, JobRoleRequirementAggregateArgs>): Prisma.PrismaPromise<GetJobRoleRequirementAggregateType<T>>

    /**
     * Group by JobRoleRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRoleRequirementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobRoleRequirementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobRoleRequirementGroupByArgs['orderBy'] }
        : { orderBy?: JobRoleRequirementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobRoleRequirementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobRoleRequirementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobRoleRequirement model
   */
  readonly fields: JobRoleRequirementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobRoleRequirement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobRoleRequirementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobRoleRequirement model
   */
  interface JobRoleRequirementFieldRefs {
    readonly id: FieldRef<"JobRoleRequirement", 'String'>
    readonly jobId: FieldRef<"JobRoleRequirement", 'String'>
    readonly roleId: FieldRef<"JobRoleRequirement", 'String'>
    readonly numberOfWorkersNeeded: FieldRef<"JobRoleRequirement", 'Int'>
    readonly payRateForJob: FieldRef<"JobRoleRequirement", 'Decimal'>
    readonly createdAt: FieldRef<"JobRoleRequirement", 'DateTime'>
    readonly updatedAt: FieldRef<"JobRoleRequirement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobRoleRequirement findUnique
   */
  export type JobRoleRequirementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRoleRequirement
     */
    select?: JobRoleRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRoleRequirement
     */
    omit?: JobRoleRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRoleRequirementInclude<ExtArgs> | null
    /**
     * Filter, which JobRoleRequirement to fetch.
     */
    where: JobRoleRequirementWhereUniqueInput
  }

  /**
   * JobRoleRequirement findUniqueOrThrow
   */
  export type JobRoleRequirementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRoleRequirement
     */
    select?: JobRoleRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRoleRequirement
     */
    omit?: JobRoleRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRoleRequirementInclude<ExtArgs> | null
    /**
     * Filter, which JobRoleRequirement to fetch.
     */
    where: JobRoleRequirementWhereUniqueInput
  }

  /**
   * JobRoleRequirement findFirst
   */
  export type JobRoleRequirementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRoleRequirement
     */
    select?: JobRoleRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRoleRequirement
     */
    omit?: JobRoleRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRoleRequirementInclude<ExtArgs> | null
    /**
     * Filter, which JobRoleRequirement to fetch.
     */
    where?: JobRoleRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobRoleRequirements to fetch.
     */
    orderBy?: JobRoleRequirementOrderByWithRelationInput | JobRoleRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobRoleRequirements.
     */
    cursor?: JobRoleRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobRoleRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobRoleRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobRoleRequirements.
     */
    distinct?: JobRoleRequirementScalarFieldEnum | JobRoleRequirementScalarFieldEnum[]
  }

  /**
   * JobRoleRequirement findFirstOrThrow
   */
  export type JobRoleRequirementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRoleRequirement
     */
    select?: JobRoleRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRoleRequirement
     */
    omit?: JobRoleRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRoleRequirementInclude<ExtArgs> | null
    /**
     * Filter, which JobRoleRequirement to fetch.
     */
    where?: JobRoleRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobRoleRequirements to fetch.
     */
    orderBy?: JobRoleRequirementOrderByWithRelationInput | JobRoleRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobRoleRequirements.
     */
    cursor?: JobRoleRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobRoleRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobRoleRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobRoleRequirements.
     */
    distinct?: JobRoleRequirementScalarFieldEnum | JobRoleRequirementScalarFieldEnum[]
  }

  /**
   * JobRoleRequirement findMany
   */
  export type JobRoleRequirementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRoleRequirement
     */
    select?: JobRoleRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRoleRequirement
     */
    omit?: JobRoleRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRoleRequirementInclude<ExtArgs> | null
    /**
     * Filter, which JobRoleRequirements to fetch.
     */
    where?: JobRoleRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobRoleRequirements to fetch.
     */
    orderBy?: JobRoleRequirementOrderByWithRelationInput | JobRoleRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobRoleRequirements.
     */
    cursor?: JobRoleRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobRoleRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobRoleRequirements.
     */
    skip?: number
    distinct?: JobRoleRequirementScalarFieldEnum | JobRoleRequirementScalarFieldEnum[]
  }

  /**
   * JobRoleRequirement create
   */
  export type JobRoleRequirementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRoleRequirement
     */
    select?: JobRoleRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRoleRequirement
     */
    omit?: JobRoleRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRoleRequirementInclude<ExtArgs> | null
    /**
     * The data needed to create a JobRoleRequirement.
     */
    data: XOR<JobRoleRequirementCreateInput, JobRoleRequirementUncheckedCreateInput>
  }

  /**
   * JobRoleRequirement createMany
   */
  export type JobRoleRequirementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobRoleRequirements.
     */
    data: JobRoleRequirementCreateManyInput | JobRoleRequirementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobRoleRequirement update
   */
  export type JobRoleRequirementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRoleRequirement
     */
    select?: JobRoleRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRoleRequirement
     */
    omit?: JobRoleRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRoleRequirementInclude<ExtArgs> | null
    /**
     * The data needed to update a JobRoleRequirement.
     */
    data: XOR<JobRoleRequirementUpdateInput, JobRoleRequirementUncheckedUpdateInput>
    /**
     * Choose, which JobRoleRequirement to update.
     */
    where: JobRoleRequirementWhereUniqueInput
  }

  /**
   * JobRoleRequirement updateMany
   */
  export type JobRoleRequirementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobRoleRequirements.
     */
    data: XOR<JobRoleRequirementUpdateManyMutationInput, JobRoleRequirementUncheckedUpdateManyInput>
    /**
     * Filter which JobRoleRequirements to update
     */
    where?: JobRoleRequirementWhereInput
    /**
     * Limit how many JobRoleRequirements to update.
     */
    limit?: number
  }

  /**
   * JobRoleRequirement upsert
   */
  export type JobRoleRequirementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRoleRequirement
     */
    select?: JobRoleRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRoleRequirement
     */
    omit?: JobRoleRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRoleRequirementInclude<ExtArgs> | null
    /**
     * The filter to search for the JobRoleRequirement to update in case it exists.
     */
    where: JobRoleRequirementWhereUniqueInput
    /**
     * In case the JobRoleRequirement found by the `where` argument doesn't exist, create a new JobRoleRequirement with this data.
     */
    create: XOR<JobRoleRequirementCreateInput, JobRoleRequirementUncheckedCreateInput>
    /**
     * In case the JobRoleRequirement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobRoleRequirementUpdateInput, JobRoleRequirementUncheckedUpdateInput>
  }

  /**
   * JobRoleRequirement delete
   */
  export type JobRoleRequirementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRoleRequirement
     */
    select?: JobRoleRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRoleRequirement
     */
    omit?: JobRoleRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRoleRequirementInclude<ExtArgs> | null
    /**
     * Filter which JobRoleRequirement to delete.
     */
    where: JobRoleRequirementWhereUniqueInput
  }

  /**
   * JobRoleRequirement deleteMany
   */
  export type JobRoleRequirementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobRoleRequirements to delete
     */
    where?: JobRoleRequirementWhereInput
    /**
     * Limit how many JobRoleRequirements to delete.
     */
    limit?: number
  }

  /**
   * JobRoleRequirement without action
   */
  export type JobRoleRequirementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRoleRequirement
     */
    select?: JobRoleRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRoleRequirement
     */
    omit?: JobRoleRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobRoleRequirementInclude<ExtArgs> | null
  }


  /**
   * Model JobAssignment
   */

  export type AggregateJobAssignment = {
    _count: JobAssignmentCountAggregateOutputType | null
    _avg: JobAssignmentAvgAggregateOutputType | null
    _sum: JobAssignmentSumAggregateOutputType | null
    _min: JobAssignmentMinAggregateOutputType | null
    _max: JobAssignmentMaxAggregateOutputType | null
  }

  export type JobAssignmentAvgAggregateOutputType = {
    hoursWorked: Decimal | null
  }

  export type JobAssignmentSumAggregateOutputType = {
    hoursWorked: Decimal | null
  }

  export type JobAssignmentMinAggregateOutputType = {
    id: string | null
    jobId: string | null
    workerId: string | null
    roleId: string | null
    assignedAt: Date | null
    hoursWorked: Decimal | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobAssignmentMaxAggregateOutputType = {
    id: string | null
    jobId: string | null
    workerId: string | null
    roleId: string | null
    assignedAt: Date | null
    hoursWorked: Decimal | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobAssignmentCountAggregateOutputType = {
    id: number
    jobId: number
    workerId: number
    roleId: number
    assignedAt: number
    hoursWorked: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobAssignmentAvgAggregateInputType = {
    hoursWorked?: true
  }

  export type JobAssignmentSumAggregateInputType = {
    hoursWorked?: true
  }

  export type JobAssignmentMinAggregateInputType = {
    id?: true
    jobId?: true
    workerId?: true
    roleId?: true
    assignedAt?: true
    hoursWorked?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobAssignmentMaxAggregateInputType = {
    id?: true
    jobId?: true
    workerId?: true
    roleId?: true
    assignedAt?: true
    hoursWorked?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobAssignmentCountAggregateInputType = {
    id?: true
    jobId?: true
    workerId?: true
    roleId?: true
    assignedAt?: true
    hoursWorked?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobAssignment to aggregate.
     */
    where?: JobAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobAssignments to fetch.
     */
    orderBy?: JobAssignmentOrderByWithRelationInput | JobAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobAssignments
    **/
    _count?: true | JobAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobAssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobAssignmentMaxAggregateInputType
  }

  export type GetJobAssignmentAggregateType<T extends JobAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateJobAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobAssignment[P]>
      : GetScalarType<T[P], AggregateJobAssignment[P]>
  }




  export type JobAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobAssignmentWhereInput
    orderBy?: JobAssignmentOrderByWithAggregationInput | JobAssignmentOrderByWithAggregationInput[]
    by: JobAssignmentScalarFieldEnum[] | JobAssignmentScalarFieldEnum
    having?: JobAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobAssignmentCountAggregateInputType | true
    _avg?: JobAssignmentAvgAggregateInputType
    _sum?: JobAssignmentSumAggregateInputType
    _min?: JobAssignmentMinAggregateInputType
    _max?: JobAssignmentMaxAggregateInputType
  }

  export type JobAssignmentGroupByOutputType = {
    id: string
    jobId: string
    workerId: string
    roleId: string
    assignedAt: Date
    hoursWorked: Decimal | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: JobAssignmentCountAggregateOutputType | null
    _avg: JobAssignmentAvgAggregateOutputType | null
    _sum: JobAssignmentSumAggregateOutputType | null
    _min: JobAssignmentMinAggregateOutputType | null
    _max: JobAssignmentMaxAggregateOutputType | null
  }

  type GetJobAssignmentGroupByPayload<T extends JobAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], JobAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type JobAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    workerId?: boolean
    roleId?: boolean
    assignedAt?: boolean
    hoursWorked?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobAssignment"]>



  export type JobAssignmentSelectScalar = {
    id?: boolean
    jobId?: boolean
    workerId?: boolean
    roleId?: boolean
    assignedAt?: boolean
    hoursWorked?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "workerId" | "roleId" | "assignedAt" | "hoursWorked" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["jobAssignment"]>
  export type JobAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $JobAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobAssignment"
    objects: {
      job: Prisma.$JobPayload<ExtArgs>
      worker: Prisma.$WorkerPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobId: string
      workerId: string
      roleId: string
      assignedAt: Date
      hoursWorked: Prisma.Decimal | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobAssignment"]>
    composites: {}
  }

  type JobAssignmentGetPayload<S extends boolean | null | undefined | JobAssignmentDefaultArgs> = $Result.GetResult<Prisma.$JobAssignmentPayload, S>

  type JobAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobAssignmentCountAggregateInputType | true
    }

  export interface JobAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobAssignment'], meta: { name: 'JobAssignment' } }
    /**
     * Find zero or one JobAssignment that matches the filter.
     * @param {JobAssignmentFindUniqueArgs} args - Arguments to find a JobAssignment
     * @example
     * // Get one JobAssignment
     * const jobAssignment = await prisma.jobAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobAssignmentFindUniqueArgs>(args: SelectSubset<T, JobAssignmentFindUniqueArgs<ExtArgs>>): Prisma__JobAssignmentClient<$Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobAssignmentFindUniqueOrThrowArgs} args - Arguments to find a JobAssignment
     * @example
     * // Get one JobAssignment
     * const jobAssignment = await prisma.jobAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, JobAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobAssignmentClient<$Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAssignmentFindFirstArgs} args - Arguments to find a JobAssignment
     * @example
     * // Get one JobAssignment
     * const jobAssignment = await prisma.jobAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobAssignmentFindFirstArgs>(args?: SelectSubset<T, JobAssignmentFindFirstArgs<ExtArgs>>): Prisma__JobAssignmentClient<$Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAssignmentFindFirstOrThrowArgs} args - Arguments to find a JobAssignment
     * @example
     * // Get one JobAssignment
     * const jobAssignment = await prisma.jobAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, JobAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobAssignmentClient<$Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobAssignments
     * const jobAssignments = await prisma.jobAssignment.findMany()
     * 
     * // Get first 10 JobAssignments
     * const jobAssignments = await prisma.jobAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobAssignmentWithIdOnly = await prisma.jobAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobAssignmentFindManyArgs>(args?: SelectSubset<T, JobAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobAssignment.
     * @param {JobAssignmentCreateArgs} args - Arguments to create a JobAssignment.
     * @example
     * // Create one JobAssignment
     * const JobAssignment = await prisma.jobAssignment.create({
     *   data: {
     *     // ... data to create a JobAssignment
     *   }
     * })
     * 
     */
    create<T extends JobAssignmentCreateArgs>(args: SelectSubset<T, JobAssignmentCreateArgs<ExtArgs>>): Prisma__JobAssignmentClient<$Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobAssignments.
     * @param {JobAssignmentCreateManyArgs} args - Arguments to create many JobAssignments.
     * @example
     * // Create many JobAssignments
     * const jobAssignment = await prisma.jobAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobAssignmentCreateManyArgs>(args?: SelectSubset<T, JobAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JobAssignment.
     * @param {JobAssignmentDeleteArgs} args - Arguments to delete one JobAssignment.
     * @example
     * // Delete one JobAssignment
     * const JobAssignment = await prisma.jobAssignment.delete({
     *   where: {
     *     // ... filter to delete one JobAssignment
     *   }
     * })
     * 
     */
    delete<T extends JobAssignmentDeleteArgs>(args: SelectSubset<T, JobAssignmentDeleteArgs<ExtArgs>>): Prisma__JobAssignmentClient<$Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobAssignment.
     * @param {JobAssignmentUpdateArgs} args - Arguments to update one JobAssignment.
     * @example
     * // Update one JobAssignment
     * const jobAssignment = await prisma.jobAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobAssignmentUpdateArgs>(args: SelectSubset<T, JobAssignmentUpdateArgs<ExtArgs>>): Prisma__JobAssignmentClient<$Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobAssignments.
     * @param {JobAssignmentDeleteManyArgs} args - Arguments to filter JobAssignments to delete.
     * @example
     * // Delete a few JobAssignments
     * const { count } = await prisma.jobAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobAssignmentDeleteManyArgs>(args?: SelectSubset<T, JobAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobAssignments
     * const jobAssignment = await prisma.jobAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobAssignmentUpdateManyArgs>(args: SelectSubset<T, JobAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JobAssignment.
     * @param {JobAssignmentUpsertArgs} args - Arguments to update or create a JobAssignment.
     * @example
     * // Update or create a JobAssignment
     * const jobAssignment = await prisma.jobAssignment.upsert({
     *   create: {
     *     // ... data to create a JobAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobAssignment we want to update
     *   }
     * })
     */
    upsert<T extends JobAssignmentUpsertArgs>(args: SelectSubset<T, JobAssignmentUpsertArgs<ExtArgs>>): Prisma__JobAssignmentClient<$Result.GetResult<Prisma.$JobAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAssignmentCountArgs} args - Arguments to filter JobAssignments to count.
     * @example
     * // Count the number of JobAssignments
     * const count = await prisma.jobAssignment.count({
     *   where: {
     *     // ... the filter for the JobAssignments we want to count
     *   }
     * })
    **/
    count<T extends JobAssignmentCountArgs>(
      args?: Subset<T, JobAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobAssignmentAggregateArgs>(args: Subset<T, JobAssignmentAggregateArgs>): Prisma.PrismaPromise<GetJobAssignmentAggregateType<T>>

    /**
     * Group by JobAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: JobAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobAssignment model
   */
  readonly fields: JobAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    worker<T extends WorkerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkerDefaultArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobAssignment model
   */
  interface JobAssignmentFieldRefs {
    readonly id: FieldRef<"JobAssignment", 'String'>
    readonly jobId: FieldRef<"JobAssignment", 'String'>
    readonly workerId: FieldRef<"JobAssignment", 'String'>
    readonly roleId: FieldRef<"JobAssignment", 'String'>
    readonly assignedAt: FieldRef<"JobAssignment", 'DateTime'>
    readonly hoursWorked: FieldRef<"JobAssignment", 'Decimal'>
    readonly notes: FieldRef<"JobAssignment", 'String'>
    readonly createdAt: FieldRef<"JobAssignment", 'DateTime'>
    readonly updatedAt: FieldRef<"JobAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobAssignment findUnique
   */
  export type JobAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobAssignment
     */
    omit?: JobAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which JobAssignment to fetch.
     */
    where: JobAssignmentWhereUniqueInput
  }

  /**
   * JobAssignment findUniqueOrThrow
   */
  export type JobAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobAssignment
     */
    omit?: JobAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which JobAssignment to fetch.
     */
    where: JobAssignmentWhereUniqueInput
  }

  /**
   * JobAssignment findFirst
   */
  export type JobAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobAssignment
     */
    omit?: JobAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which JobAssignment to fetch.
     */
    where?: JobAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobAssignments to fetch.
     */
    orderBy?: JobAssignmentOrderByWithRelationInput | JobAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobAssignments.
     */
    cursor?: JobAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobAssignments.
     */
    distinct?: JobAssignmentScalarFieldEnum | JobAssignmentScalarFieldEnum[]
  }

  /**
   * JobAssignment findFirstOrThrow
   */
  export type JobAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobAssignment
     */
    omit?: JobAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which JobAssignment to fetch.
     */
    where?: JobAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobAssignments to fetch.
     */
    orderBy?: JobAssignmentOrderByWithRelationInput | JobAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobAssignments.
     */
    cursor?: JobAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobAssignments.
     */
    distinct?: JobAssignmentScalarFieldEnum | JobAssignmentScalarFieldEnum[]
  }

  /**
   * JobAssignment findMany
   */
  export type JobAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobAssignment
     */
    omit?: JobAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which JobAssignments to fetch.
     */
    where?: JobAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobAssignments to fetch.
     */
    orderBy?: JobAssignmentOrderByWithRelationInput | JobAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobAssignments.
     */
    cursor?: JobAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobAssignments.
     */
    skip?: number
    distinct?: JobAssignmentScalarFieldEnum | JobAssignmentScalarFieldEnum[]
  }

  /**
   * JobAssignment create
   */
  export type JobAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobAssignment
     */
    omit?: JobAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a JobAssignment.
     */
    data: XOR<JobAssignmentCreateInput, JobAssignmentUncheckedCreateInput>
  }

  /**
   * JobAssignment createMany
   */
  export type JobAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobAssignments.
     */
    data: JobAssignmentCreateManyInput | JobAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobAssignment update
   */
  export type JobAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobAssignment
     */
    omit?: JobAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a JobAssignment.
     */
    data: XOR<JobAssignmentUpdateInput, JobAssignmentUncheckedUpdateInput>
    /**
     * Choose, which JobAssignment to update.
     */
    where: JobAssignmentWhereUniqueInput
  }

  /**
   * JobAssignment updateMany
   */
  export type JobAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobAssignments.
     */
    data: XOR<JobAssignmentUpdateManyMutationInput, JobAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which JobAssignments to update
     */
    where?: JobAssignmentWhereInput
    /**
     * Limit how many JobAssignments to update.
     */
    limit?: number
  }

  /**
   * JobAssignment upsert
   */
  export type JobAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobAssignment
     */
    omit?: JobAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the JobAssignment to update in case it exists.
     */
    where: JobAssignmentWhereUniqueInput
    /**
     * In case the JobAssignment found by the `where` argument doesn't exist, create a new JobAssignment with this data.
     */
    create: XOR<JobAssignmentCreateInput, JobAssignmentUncheckedCreateInput>
    /**
     * In case the JobAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobAssignmentUpdateInput, JobAssignmentUncheckedUpdateInput>
  }

  /**
   * JobAssignment delete
   */
  export type JobAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobAssignment
     */
    omit?: JobAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null
    /**
     * Filter which JobAssignment to delete.
     */
    where: JobAssignmentWhereUniqueInput
  }

  /**
   * JobAssignment deleteMany
   */
  export type JobAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobAssignments to delete
     */
    where?: JobAssignmentWhereInput
    /**
     * Limit how many JobAssignments to delete.
     */
    limit?: number
  }

  /**
   * JobAssignment without action
   */
  export type JobAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAssignment
     */
    select?: JobAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobAssignment
     */
    omit?: JobAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    workerId: string | null
    jobId: string | null
    message: string | null
    sentAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    workerId: string | null
    jobId: string | null
    message: string | null
    sentAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    workerId: number
    jobId: number
    message: number
    sentAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    workerId?: true
    jobId?: true
    message?: true
    sentAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    workerId?: true
    jobId?: true
    message?: true
    sentAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    workerId?: true
    jobId?: true
    message?: true
    sentAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    workerId: string
    jobId: string | null
    message: string
    sentAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workerId?: boolean
    jobId?: boolean
    message?: boolean
    sentAt?: boolean
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
    job?: boolean | Notification$jobArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    id?: boolean
    workerId?: boolean
    jobId?: boolean
    message?: boolean
    sentAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workerId" | "jobId" | "message" | "sentAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
    job?: boolean | Notification$jobArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      worker: Prisma.$WorkerPayload<ExtArgs>
      job: Prisma.$JobPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workerId: string
      jobId: string | null
      message: string
      sentAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    worker<T extends WorkerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkerDefaultArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    job<T extends Notification$jobArgs<ExtArgs> = {}>(args?: Subset<T, Notification$jobArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly workerId: FieldRef<"Notification", 'String'>
    readonly jobId: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly sentAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.job
   */
  export type Notification$jobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WorkerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkerScalarFieldEnum = (typeof WorkerScalarFieldEnum)[keyof typeof WorkerScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    defaultPayRate: 'defaultPayRate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const WorkerEligibleRoleScalarFieldEnum: {
    workerId: 'workerId',
    roleId: 'roleId',
    createdAt: 'createdAt'
  };

  export type WorkerEligibleRoleScalarFieldEnum = (typeof WorkerEligibleRoleScalarFieldEnum)[keyof typeof WorkerEligibleRoleScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    organizerName: 'organizerName',
    title: 'title',
    location: 'location',
    startDatetime: 'startDatetime',
    endDatetime: 'endDatetime',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const JobRoleRequirementScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    roleId: 'roleId',
    numberOfWorkersNeeded: 'numberOfWorkersNeeded',
    payRateForJob: 'payRateForJob',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobRoleRequirementScalarFieldEnum = (typeof JobRoleRequirementScalarFieldEnum)[keyof typeof JobRoleRequirementScalarFieldEnum]


  export const JobAssignmentScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    workerId: 'workerId',
    roleId: 'roleId',
    assignedAt: 'assignedAt',
    hoursWorked: 'hoursWorked',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobAssignmentScalarFieldEnum = (typeof JobAssignmentScalarFieldEnum)[keyof typeof JobAssignmentScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    workerId: 'workerId',
    jobId: 'jobId',
    message: 'message',
    sentAt: 'sentAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const WorkerOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    notes: 'notes'
  };

  export type WorkerOrderByRelevanceFieldEnum = (typeof WorkerOrderByRelevanceFieldEnum)[keyof typeof WorkerOrderByRelevanceFieldEnum]


  export const RoleOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleOrderByRelevanceFieldEnum = (typeof RoleOrderByRelevanceFieldEnum)[keyof typeof RoleOrderByRelevanceFieldEnum]


  export const WorkerEligibleRoleOrderByRelevanceFieldEnum: {
    workerId: 'workerId',
    roleId: 'roleId'
  };

  export type WorkerEligibleRoleOrderByRelevanceFieldEnum = (typeof WorkerEligibleRoleOrderByRelevanceFieldEnum)[keyof typeof WorkerEligibleRoleOrderByRelevanceFieldEnum]


  export const JobOrderByRelevanceFieldEnum: {
    id: 'id',
    organizerName: 'organizerName',
    title: 'title',
    location: 'location',
    description: 'description'
  };

  export type JobOrderByRelevanceFieldEnum = (typeof JobOrderByRelevanceFieldEnum)[keyof typeof JobOrderByRelevanceFieldEnum]


  export const JobRoleRequirementOrderByRelevanceFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    roleId: 'roleId'
  };

  export type JobRoleRequirementOrderByRelevanceFieldEnum = (typeof JobRoleRequirementOrderByRelevanceFieldEnum)[keyof typeof JobRoleRequirementOrderByRelevanceFieldEnum]


  export const JobAssignmentOrderByRelevanceFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    workerId: 'workerId',
    roleId: 'roleId',
    notes: 'notes'
  };

  export type JobAssignmentOrderByRelevanceFieldEnum = (typeof JobAssignmentOrderByRelevanceFieldEnum)[keyof typeof JobAssignmentOrderByRelevanceFieldEnum]


  export const NotificationOrderByRelevanceFieldEnum: {
    id: 'id',
    workerId: 'workerId',
    jobId: 'jobId',
    message: 'message'
  };

  export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'WorkerStatus'
   */
  export type EnumWorkerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkerStatus'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type WorkerWhereInput = {
    AND?: WorkerWhereInput | WorkerWhereInput[]
    OR?: WorkerWhereInput[]
    NOT?: WorkerWhereInput | WorkerWhereInput[]
    id?: StringFilter<"Worker"> | string
    name?: StringFilter<"Worker"> | string
    email?: StringNullableFilter<"Worker"> | string | null
    phone?: StringNullableFilter<"Worker"> | string | null
    status?: EnumWorkerStatusFilter<"Worker"> | $Enums.WorkerStatus
    notes?: StringNullableFilter<"Worker"> | string | null
    createdAt?: DateTimeFilter<"Worker"> | Date | string
    updatedAt?: DateTimeFilter<"Worker"> | Date | string
    eligibleRoles?: WorkerEligibleRoleListRelationFilter
    jobAssignments?: JobAssignmentListRelationFilter
    notificationsSent?: NotificationListRelationFilter
  }

  export type WorkerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eligibleRoles?: WorkerEligibleRoleOrderByRelationAggregateInput
    jobAssignments?: JobAssignmentOrderByRelationAggregateInput
    notificationsSent?: NotificationOrderByRelationAggregateInput
    _relevance?: WorkerOrderByRelevanceInput
  }

  export type WorkerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: WorkerWhereInput | WorkerWhereInput[]
    OR?: WorkerWhereInput[]
    NOT?: WorkerWhereInput | WorkerWhereInput[]
    name?: StringFilter<"Worker"> | string
    phone?: StringNullableFilter<"Worker"> | string | null
    status?: EnumWorkerStatusFilter<"Worker"> | $Enums.WorkerStatus
    notes?: StringNullableFilter<"Worker"> | string | null
    createdAt?: DateTimeFilter<"Worker"> | Date | string
    updatedAt?: DateTimeFilter<"Worker"> | Date | string
    eligibleRoles?: WorkerEligibleRoleListRelationFilter
    jobAssignments?: JobAssignmentListRelationFilter
    notificationsSent?: NotificationListRelationFilter
  }, "id" | "email">

  export type WorkerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkerCountOrderByAggregateInput
    _max?: WorkerMaxOrderByAggregateInput
    _min?: WorkerMinOrderByAggregateInput
  }

  export type WorkerScalarWhereWithAggregatesInput = {
    AND?: WorkerScalarWhereWithAggregatesInput | WorkerScalarWhereWithAggregatesInput[]
    OR?: WorkerScalarWhereWithAggregatesInput[]
    NOT?: WorkerScalarWhereWithAggregatesInput | WorkerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Worker"> | string
    name?: StringWithAggregatesFilter<"Worker"> | string
    email?: StringNullableWithAggregatesFilter<"Worker"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Worker"> | string | null
    status?: EnumWorkerStatusWithAggregatesFilter<"Worker"> | $Enums.WorkerStatus
    notes?: StringNullableWithAggregatesFilter<"Worker"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Worker"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Worker"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    defaultPayRate?: DecimalNullableFilter<"Role"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    eligibleWorkers?: WorkerEligibleRoleListRelationFilter
    jobRequirements?: JobRoleRequirementListRelationFilter
    jobAssignments?: JobAssignmentListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    defaultPayRate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eligibleWorkers?: WorkerEligibleRoleOrderByRelationAggregateInput
    jobRequirements?: JobRoleRequirementOrderByRelationAggregateInput
    jobAssignments?: JobAssignmentOrderByRelationAggregateInput
    _relevance?: RoleOrderByRelevanceInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    defaultPayRate?: DecimalNullableFilter<"Role"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    eligibleWorkers?: WorkerEligibleRoleListRelationFilter
    jobRequirements?: JobRoleRequirementListRelationFilter
    jobAssignments?: JobAssignmentListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    defaultPayRate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    defaultPayRate?: DecimalNullableWithAggregatesFilter<"Role"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type WorkerEligibleRoleWhereInput = {
    AND?: WorkerEligibleRoleWhereInput | WorkerEligibleRoleWhereInput[]
    OR?: WorkerEligibleRoleWhereInput[]
    NOT?: WorkerEligibleRoleWhereInput | WorkerEligibleRoleWhereInput[]
    workerId?: StringFilter<"WorkerEligibleRole"> | string
    roleId?: StringFilter<"WorkerEligibleRole"> | string
    createdAt?: DateTimeFilter<"WorkerEligibleRole"> | Date | string
    worker?: XOR<WorkerScalarRelationFilter, WorkerWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type WorkerEligibleRoleOrderByWithRelationInput = {
    workerId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    worker?: WorkerOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
    _relevance?: WorkerEligibleRoleOrderByRelevanceInput
  }

  export type WorkerEligibleRoleWhereUniqueInput = Prisma.AtLeast<{
    workerId_roleId?: WorkerEligibleRoleWorkerIdRoleIdCompoundUniqueInput
    AND?: WorkerEligibleRoleWhereInput | WorkerEligibleRoleWhereInput[]
    OR?: WorkerEligibleRoleWhereInput[]
    NOT?: WorkerEligibleRoleWhereInput | WorkerEligibleRoleWhereInput[]
    workerId?: StringFilter<"WorkerEligibleRole"> | string
    roleId?: StringFilter<"WorkerEligibleRole"> | string
    createdAt?: DateTimeFilter<"WorkerEligibleRole"> | Date | string
    worker?: XOR<WorkerScalarRelationFilter, WorkerWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "workerId_roleId">

  export type WorkerEligibleRoleOrderByWithAggregationInput = {
    workerId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    _count?: WorkerEligibleRoleCountOrderByAggregateInput
    _max?: WorkerEligibleRoleMaxOrderByAggregateInput
    _min?: WorkerEligibleRoleMinOrderByAggregateInput
  }

  export type WorkerEligibleRoleScalarWhereWithAggregatesInput = {
    AND?: WorkerEligibleRoleScalarWhereWithAggregatesInput | WorkerEligibleRoleScalarWhereWithAggregatesInput[]
    OR?: WorkerEligibleRoleScalarWhereWithAggregatesInput[]
    NOT?: WorkerEligibleRoleScalarWhereWithAggregatesInput | WorkerEligibleRoleScalarWhereWithAggregatesInput[]
    workerId?: StringWithAggregatesFilter<"WorkerEligibleRole"> | string
    roleId?: StringWithAggregatesFilter<"WorkerEligibleRole"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkerEligibleRole"> | Date | string
  }

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    id?: StringFilter<"Job"> | string
    organizerName?: StringNullableFilter<"Job"> | string | null
    title?: StringFilter<"Job"> | string
    location?: StringFilter<"Job"> | string
    startDatetime?: DateTimeFilter<"Job"> | Date | string
    endDatetime?: DateTimeFilter<"Job"> | Date | string
    description?: StringNullableFilter<"Job"> | string | null
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    roleRequirements?: JobRoleRequirementListRelationFilter
    assignments?: JobAssignmentListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    organizerName?: SortOrderInput | SortOrder
    title?: SortOrder
    location?: SortOrder
    startDatetime?: SortOrder
    endDatetime?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleRequirements?: JobRoleRequirementOrderByRelationAggregateInput
    assignments?: JobAssignmentOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    _relevance?: JobOrderByRelevanceInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    organizerName?: StringNullableFilter<"Job"> | string | null
    title?: StringFilter<"Job"> | string
    location?: StringFilter<"Job"> | string
    startDatetime?: DateTimeFilter<"Job"> | Date | string
    endDatetime?: DateTimeFilter<"Job"> | Date | string
    description?: StringNullableFilter<"Job"> | string | null
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    roleRequirements?: JobRoleRequirementListRelationFilter
    assignments?: JobAssignmentListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    organizerName?: SortOrderInput | SortOrder
    title?: SortOrder
    location?: SortOrder
    startDatetime?: SortOrder
    endDatetime?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobCountOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Job"> | string
    organizerName?: StringNullableWithAggregatesFilter<"Job"> | string | null
    title?: StringWithAggregatesFilter<"Job"> | string
    location?: StringWithAggregatesFilter<"Job"> | string
    startDatetime?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    endDatetime?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    description?: StringNullableWithAggregatesFilter<"Job"> | string | null
    status?: EnumJobStatusWithAggregatesFilter<"Job"> | $Enums.JobStatus
    createdAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
  }

  export type JobRoleRequirementWhereInput = {
    AND?: JobRoleRequirementWhereInput | JobRoleRequirementWhereInput[]
    OR?: JobRoleRequirementWhereInput[]
    NOT?: JobRoleRequirementWhereInput | JobRoleRequirementWhereInput[]
    id?: StringFilter<"JobRoleRequirement"> | string
    jobId?: StringFilter<"JobRoleRequirement"> | string
    roleId?: StringFilter<"JobRoleRequirement"> | string
    numberOfWorkersNeeded?: IntFilter<"JobRoleRequirement"> | number
    payRateForJob?: DecimalFilter<"JobRoleRequirement"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"JobRoleRequirement"> | Date | string
    updatedAt?: DateTimeFilter<"JobRoleRequirement"> | Date | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type JobRoleRequirementOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    roleId?: SortOrder
    numberOfWorkersNeeded?: SortOrder
    payRateForJob?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    job?: JobOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
    _relevance?: JobRoleRequirementOrderByRelevanceInput
  }

  export type JobRoleRequirementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobRoleRequirementWhereInput | JobRoleRequirementWhereInput[]
    OR?: JobRoleRequirementWhereInput[]
    NOT?: JobRoleRequirementWhereInput | JobRoleRequirementWhereInput[]
    jobId?: StringFilter<"JobRoleRequirement"> | string
    roleId?: StringFilter<"JobRoleRequirement"> | string
    numberOfWorkersNeeded?: IntFilter<"JobRoleRequirement"> | number
    payRateForJob?: DecimalFilter<"JobRoleRequirement"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"JobRoleRequirement"> | Date | string
    updatedAt?: DateTimeFilter<"JobRoleRequirement"> | Date | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id">

  export type JobRoleRequirementOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    roleId?: SortOrder
    numberOfWorkersNeeded?: SortOrder
    payRateForJob?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobRoleRequirementCountOrderByAggregateInput
    _avg?: JobRoleRequirementAvgOrderByAggregateInput
    _max?: JobRoleRequirementMaxOrderByAggregateInput
    _min?: JobRoleRequirementMinOrderByAggregateInput
    _sum?: JobRoleRequirementSumOrderByAggregateInput
  }

  export type JobRoleRequirementScalarWhereWithAggregatesInput = {
    AND?: JobRoleRequirementScalarWhereWithAggregatesInput | JobRoleRequirementScalarWhereWithAggregatesInput[]
    OR?: JobRoleRequirementScalarWhereWithAggregatesInput[]
    NOT?: JobRoleRequirementScalarWhereWithAggregatesInput | JobRoleRequirementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobRoleRequirement"> | string
    jobId?: StringWithAggregatesFilter<"JobRoleRequirement"> | string
    roleId?: StringWithAggregatesFilter<"JobRoleRequirement"> | string
    numberOfWorkersNeeded?: IntWithAggregatesFilter<"JobRoleRequirement"> | number
    payRateForJob?: DecimalWithAggregatesFilter<"JobRoleRequirement"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"JobRoleRequirement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobRoleRequirement"> | Date | string
  }

  export type JobAssignmentWhereInput = {
    AND?: JobAssignmentWhereInput | JobAssignmentWhereInput[]
    OR?: JobAssignmentWhereInput[]
    NOT?: JobAssignmentWhereInput | JobAssignmentWhereInput[]
    id?: StringFilter<"JobAssignment"> | string
    jobId?: StringFilter<"JobAssignment"> | string
    workerId?: StringFilter<"JobAssignment"> | string
    roleId?: StringFilter<"JobAssignment"> | string
    assignedAt?: DateTimeFilter<"JobAssignment"> | Date | string
    hoursWorked?: DecimalNullableFilter<"JobAssignment"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"JobAssignment"> | string | null
    createdAt?: DateTimeFilter<"JobAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"JobAssignment"> | Date | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
    worker?: XOR<WorkerScalarRelationFilter, WorkerWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type JobAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    workerId?: SortOrder
    roleId?: SortOrder
    assignedAt?: SortOrder
    hoursWorked?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    job?: JobOrderByWithRelationInput
    worker?: WorkerOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
    _relevance?: JobAssignmentOrderByRelevanceInput
  }

  export type JobAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobAssignmentWhereInput | JobAssignmentWhereInput[]
    OR?: JobAssignmentWhereInput[]
    NOT?: JobAssignmentWhereInput | JobAssignmentWhereInput[]
    jobId?: StringFilter<"JobAssignment"> | string
    workerId?: StringFilter<"JobAssignment"> | string
    roleId?: StringFilter<"JobAssignment"> | string
    assignedAt?: DateTimeFilter<"JobAssignment"> | Date | string
    hoursWorked?: DecimalNullableFilter<"JobAssignment"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"JobAssignment"> | string | null
    createdAt?: DateTimeFilter<"JobAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"JobAssignment"> | Date | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
    worker?: XOR<WorkerScalarRelationFilter, WorkerWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id">

  export type JobAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    workerId?: SortOrder
    roleId?: SortOrder
    assignedAt?: SortOrder
    hoursWorked?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobAssignmentCountOrderByAggregateInput
    _avg?: JobAssignmentAvgOrderByAggregateInput
    _max?: JobAssignmentMaxOrderByAggregateInput
    _min?: JobAssignmentMinOrderByAggregateInput
    _sum?: JobAssignmentSumOrderByAggregateInput
  }

  export type JobAssignmentScalarWhereWithAggregatesInput = {
    AND?: JobAssignmentScalarWhereWithAggregatesInput | JobAssignmentScalarWhereWithAggregatesInput[]
    OR?: JobAssignmentScalarWhereWithAggregatesInput[]
    NOT?: JobAssignmentScalarWhereWithAggregatesInput | JobAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobAssignment"> | string
    jobId?: StringWithAggregatesFilter<"JobAssignment"> | string
    workerId?: StringWithAggregatesFilter<"JobAssignment"> | string
    roleId?: StringWithAggregatesFilter<"JobAssignment"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"JobAssignment"> | Date | string
    hoursWorked?: DecimalNullableWithAggregatesFilter<"JobAssignment"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableWithAggregatesFilter<"JobAssignment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JobAssignment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobAssignment"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    workerId?: StringFilter<"Notification"> | string
    jobId?: StringNullableFilter<"Notification"> | string | null
    message?: StringFilter<"Notification"> | string
    sentAt?: DateTimeFilter<"Notification"> | Date | string
    worker?: XOR<WorkerScalarRelationFilter, WorkerWhereInput>
    job?: XOR<JobNullableScalarRelationFilter, JobWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    workerId?: SortOrder
    jobId?: SortOrderInput | SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    worker?: WorkerOrderByWithRelationInput
    job?: JobOrderByWithRelationInput
    _relevance?: NotificationOrderByRelevanceInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    workerId?: StringFilter<"Notification"> | string
    jobId?: StringNullableFilter<"Notification"> | string | null
    message?: StringFilter<"Notification"> | string
    sentAt?: DateTimeFilter<"Notification"> | Date | string
    worker?: XOR<WorkerScalarRelationFilter, WorkerWhereInput>
    job?: XOR<JobNullableScalarRelationFilter, JobWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    workerId?: SortOrder
    jobId?: SortOrderInput | SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    workerId?: StringWithAggregatesFilter<"Notification"> | string
    jobId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    message?: StringWithAggregatesFilter<"Notification"> | string
    sentAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type WorkerCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    status?: $Enums.WorkerStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eligibleRoles?: WorkerEligibleRoleCreateNestedManyWithoutWorkerInput
    jobAssignments?: JobAssignmentCreateNestedManyWithoutWorkerInput
    notificationsSent?: NotificationCreateNestedManyWithoutWorkerInput
  }

  export type WorkerUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    status?: $Enums.WorkerStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eligibleRoles?: WorkerEligibleRoleUncheckedCreateNestedManyWithoutWorkerInput
    jobAssignments?: JobAssignmentUncheckedCreateNestedManyWithoutWorkerInput
    notificationsSent?: NotificationUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorkerStatusFieldUpdateOperationsInput | $Enums.WorkerStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eligibleRoles?: WorkerEligibleRoleUpdateManyWithoutWorkerNestedInput
    jobAssignments?: JobAssignmentUpdateManyWithoutWorkerNestedInput
    notificationsSent?: NotificationUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorkerStatusFieldUpdateOperationsInput | $Enums.WorkerStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eligibleRoles?: WorkerEligibleRoleUncheckedUpdateManyWithoutWorkerNestedInput
    jobAssignments?: JobAssignmentUncheckedUpdateManyWithoutWorkerNestedInput
    notificationsSent?: NotificationUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    status?: $Enums.WorkerStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorkerStatusFieldUpdateOperationsInput | $Enums.WorkerStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorkerStatusFieldUpdateOperationsInput | $Enums.WorkerStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    defaultPayRate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eligibleWorkers?: WorkerEligibleRoleCreateNestedManyWithoutRoleInput
    jobRequirements?: JobRoleRequirementCreateNestedManyWithoutRoleInput
    jobAssignments?: JobAssignmentCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    defaultPayRate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eligibleWorkers?: WorkerEligibleRoleUncheckedCreateNestedManyWithoutRoleInput
    jobRequirements?: JobRoleRequirementUncheckedCreateNestedManyWithoutRoleInput
    jobAssignments?: JobAssignmentUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultPayRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eligibleWorkers?: WorkerEligibleRoleUpdateManyWithoutRoleNestedInput
    jobRequirements?: JobRoleRequirementUpdateManyWithoutRoleNestedInput
    jobAssignments?: JobAssignmentUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultPayRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eligibleWorkers?: WorkerEligibleRoleUncheckedUpdateManyWithoutRoleNestedInput
    jobRequirements?: JobRoleRequirementUncheckedUpdateManyWithoutRoleNestedInput
    jobAssignments?: JobAssignmentUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
    defaultPayRate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultPayRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultPayRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkerEligibleRoleCreateInput = {
    createdAt?: Date | string
    worker: WorkerCreateNestedOneWithoutEligibleRolesInput
    role: RoleCreateNestedOneWithoutEligibleWorkersInput
  }

  export type WorkerEligibleRoleUncheckedCreateInput = {
    workerId: string
    roleId: string
    createdAt?: Date | string
  }

  export type WorkerEligibleRoleUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worker?: WorkerUpdateOneRequiredWithoutEligibleRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutEligibleWorkersNestedInput
  }

  export type WorkerEligibleRoleUncheckedUpdateInput = {
    workerId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkerEligibleRoleCreateManyInput = {
    workerId: string
    roleId: string
    createdAt?: Date | string
  }

  export type WorkerEligibleRoleUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkerEligibleRoleUncheckedUpdateManyInput = {
    workerId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateInput = {
    id?: string
    organizerName?: string | null
    title: string
    location: string
    startDatetime: Date | string
    endDatetime: Date | string
    description?: string | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    roleRequirements?: JobRoleRequirementCreateNestedManyWithoutJobInput
    assignments?: JobAssignmentCreateNestedManyWithoutJobInput
    notifications?: NotificationCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateInput = {
    id?: string
    organizerName?: string | null
    title: string
    location: string
    startDatetime: Date | string
    endDatetime: Date | string
    description?: string | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    roleRequirements?: JobRoleRequirementUncheckedCreateNestedManyWithoutJobInput
    assignments?: JobAssignmentUncheckedCreateNestedManyWithoutJobInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleRequirements?: JobRoleRequirementUpdateManyWithoutJobNestedInput
    assignments?: JobAssignmentUpdateManyWithoutJobNestedInput
    notifications?: NotificationUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleRequirements?: JobRoleRequirementUncheckedUpdateManyWithoutJobNestedInput
    assignments?: JobAssignmentUncheckedUpdateManyWithoutJobNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobCreateManyInput = {
    id?: string
    organizerName?: string | null
    title: string
    location: string
    startDatetime: Date | string
    endDatetime: Date | string
    description?: string | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobRoleRequirementCreateInput = {
    id?: string
    numberOfWorkersNeeded: number
    payRateForJob: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    job: JobCreateNestedOneWithoutRoleRequirementsInput
    role: RoleCreateNestedOneWithoutJobRequirementsInput
  }

  export type JobRoleRequirementUncheckedCreateInput = {
    id?: string
    jobId: string
    roleId: string
    numberOfWorkersNeeded: number
    payRateForJob: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobRoleRequirementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberOfWorkersNeeded?: IntFieldUpdateOperationsInput | number
    payRateForJob?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutRoleRequirementsNestedInput
    role?: RoleUpdateOneRequiredWithoutJobRequirementsNestedInput
  }

  export type JobRoleRequirementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    numberOfWorkersNeeded?: IntFieldUpdateOperationsInput | number
    payRateForJob?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobRoleRequirementCreateManyInput = {
    id?: string
    jobId: string
    roleId: string
    numberOfWorkersNeeded: number
    payRateForJob: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobRoleRequirementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberOfWorkersNeeded?: IntFieldUpdateOperationsInput | number
    payRateForJob?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobRoleRequirementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    numberOfWorkersNeeded?: IntFieldUpdateOperationsInput | number
    payRateForJob?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobAssignmentCreateInput = {
    id?: string
    assignedAt?: Date | string
    hoursWorked?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    job: JobCreateNestedOneWithoutAssignmentsInput
    worker: WorkerCreateNestedOneWithoutJobAssignmentsInput
    role: RoleCreateNestedOneWithoutJobAssignmentsInput
  }

  export type JobAssignmentUncheckedCreateInput = {
    id?: string
    jobId: string
    workerId: string
    roleId: string
    assignedAt?: Date | string
    hoursWorked?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutAssignmentsNestedInput
    worker?: WorkerUpdateOneRequiredWithoutJobAssignmentsNestedInput
    role?: RoleUpdateOneRequiredWithoutJobAssignmentsNestedInput
  }

  export type JobAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobAssignmentCreateManyInput = {
    id?: string
    jobId: string
    workerId: string
    roleId: string
    assignedAt?: Date | string
    hoursWorked?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    message: string
    sentAt?: Date | string
    worker: WorkerCreateNestedOneWithoutNotificationsSentInput
    job?: JobCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    workerId: string
    jobId?: string | null
    message: string
    sentAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worker?: WorkerUpdateOneRequiredWithoutNotificationsSentNestedInput
    job?: JobUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    workerId: string
    jobId?: string | null
    message: string
    sentAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumWorkerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkerStatus | EnumWorkerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkerStatus[]
    notIn?: $Enums.WorkerStatus[]
    not?: NestedEnumWorkerStatusFilter<$PrismaModel> | $Enums.WorkerStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WorkerEligibleRoleListRelationFilter = {
    every?: WorkerEligibleRoleWhereInput
    some?: WorkerEligibleRoleWhereInput
    none?: WorkerEligibleRoleWhereInput
  }

  export type JobAssignmentListRelationFilter = {
    every?: JobAssignmentWhereInput
    some?: JobAssignmentWhereInput
    none?: JobAssignmentWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkerEligibleRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkerOrderByRelevanceInput = {
    fields: WorkerOrderByRelevanceFieldEnum | WorkerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WorkerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumWorkerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkerStatus | EnumWorkerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkerStatus[]
    notIn?: $Enums.WorkerStatus[]
    not?: NestedEnumWorkerStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkerStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkerStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type JobRoleRequirementListRelationFilter = {
    every?: JobRoleRequirementWhereInput
    some?: JobRoleRequirementWhereInput
    none?: JobRoleRequirementWhereInput
  }

  export type JobRoleRequirementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleOrderByRelevanceInput = {
    fields: RoleOrderByRelevanceFieldEnum | RoleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    defaultPayRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    defaultPayRate?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    defaultPayRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    defaultPayRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    defaultPayRate?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type WorkerScalarRelationFilter = {
    is?: WorkerWhereInput
    isNot?: WorkerWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type WorkerEligibleRoleOrderByRelevanceInput = {
    fields: WorkerEligibleRoleOrderByRelevanceFieldEnum | WorkerEligibleRoleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WorkerEligibleRoleWorkerIdRoleIdCompoundUniqueInput = {
    workerId: string
    roleId: string
  }

  export type WorkerEligibleRoleCountOrderByAggregateInput = {
    workerId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkerEligibleRoleMaxOrderByAggregateInput = {
    workerId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkerEligibleRoleMinOrderByAggregateInput = {
    workerId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[]
    notIn?: $Enums.JobStatus[]
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type JobOrderByRelevanceInput = {
    fields: JobOrderByRelevanceFieldEnum | JobOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    organizerName?: SortOrder
    title?: SortOrder
    location?: SortOrder
    startDatetime?: SortOrder
    endDatetime?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    organizerName?: SortOrder
    title?: SortOrder
    location?: SortOrder
    startDatetime?: SortOrder
    endDatetime?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    organizerName?: SortOrder
    title?: SortOrder
    location?: SortOrder
    startDatetime?: SortOrder
    endDatetime?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[]
    notIn?: $Enums.JobStatus[]
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type JobScalarRelationFilter = {
    is?: JobWhereInput
    isNot?: JobWhereInput
  }

  export type JobRoleRequirementOrderByRelevanceInput = {
    fields: JobRoleRequirementOrderByRelevanceFieldEnum | JobRoleRequirementOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JobRoleRequirementCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    roleId?: SortOrder
    numberOfWorkersNeeded?: SortOrder
    payRateForJob?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobRoleRequirementAvgOrderByAggregateInput = {
    numberOfWorkersNeeded?: SortOrder
    payRateForJob?: SortOrder
  }

  export type JobRoleRequirementMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    roleId?: SortOrder
    numberOfWorkersNeeded?: SortOrder
    payRateForJob?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobRoleRequirementMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    roleId?: SortOrder
    numberOfWorkersNeeded?: SortOrder
    payRateForJob?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobRoleRequirementSumOrderByAggregateInput = {
    numberOfWorkersNeeded?: SortOrder
    payRateForJob?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type JobAssignmentOrderByRelevanceInput = {
    fields: JobAssignmentOrderByRelevanceFieldEnum | JobAssignmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JobAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    workerId?: SortOrder
    roleId?: SortOrder
    assignedAt?: SortOrder
    hoursWorked?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobAssignmentAvgOrderByAggregateInput = {
    hoursWorked?: SortOrder
  }

  export type JobAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    workerId?: SortOrder
    roleId?: SortOrder
    assignedAt?: SortOrder
    hoursWorked?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    workerId?: SortOrder
    roleId?: SortOrder
    assignedAt?: SortOrder
    hoursWorked?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobAssignmentSumOrderByAggregateInput = {
    hoursWorked?: SortOrder
  }

  export type JobNullableScalarRelationFilter = {
    is?: JobWhereInput | null
    isNot?: JobWhereInput | null
  }

  export type NotificationOrderByRelevanceInput = {
    fields: NotificationOrderByRelevanceFieldEnum | NotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    workerId?: SortOrder
    jobId?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    workerId?: SortOrder
    jobId?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    workerId?: SortOrder
    jobId?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
  }

  export type WorkerEligibleRoleCreateNestedManyWithoutWorkerInput = {
    create?: XOR<WorkerEligibleRoleCreateWithoutWorkerInput, WorkerEligibleRoleUncheckedCreateWithoutWorkerInput> | WorkerEligibleRoleCreateWithoutWorkerInput[] | WorkerEligibleRoleUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: WorkerEligibleRoleCreateOrConnectWithoutWorkerInput | WorkerEligibleRoleCreateOrConnectWithoutWorkerInput[]
    createMany?: WorkerEligibleRoleCreateManyWorkerInputEnvelope
    connect?: WorkerEligibleRoleWhereUniqueInput | WorkerEligibleRoleWhereUniqueInput[]
  }

  export type JobAssignmentCreateNestedManyWithoutWorkerInput = {
    create?: XOR<JobAssignmentCreateWithoutWorkerInput, JobAssignmentUncheckedCreateWithoutWorkerInput> | JobAssignmentCreateWithoutWorkerInput[] | JobAssignmentUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: JobAssignmentCreateOrConnectWithoutWorkerInput | JobAssignmentCreateOrConnectWithoutWorkerInput[]
    createMany?: JobAssignmentCreateManyWorkerInputEnvelope
    connect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutWorkerInput = {
    create?: XOR<NotificationCreateWithoutWorkerInput, NotificationUncheckedCreateWithoutWorkerInput> | NotificationCreateWithoutWorkerInput[] | NotificationUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutWorkerInput | NotificationCreateOrConnectWithoutWorkerInput[]
    createMany?: NotificationCreateManyWorkerInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type WorkerEligibleRoleUncheckedCreateNestedManyWithoutWorkerInput = {
    create?: XOR<WorkerEligibleRoleCreateWithoutWorkerInput, WorkerEligibleRoleUncheckedCreateWithoutWorkerInput> | WorkerEligibleRoleCreateWithoutWorkerInput[] | WorkerEligibleRoleUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: WorkerEligibleRoleCreateOrConnectWithoutWorkerInput | WorkerEligibleRoleCreateOrConnectWithoutWorkerInput[]
    createMany?: WorkerEligibleRoleCreateManyWorkerInputEnvelope
    connect?: WorkerEligibleRoleWhereUniqueInput | WorkerEligibleRoleWhereUniqueInput[]
  }

  export type JobAssignmentUncheckedCreateNestedManyWithoutWorkerInput = {
    create?: XOR<JobAssignmentCreateWithoutWorkerInput, JobAssignmentUncheckedCreateWithoutWorkerInput> | JobAssignmentCreateWithoutWorkerInput[] | JobAssignmentUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: JobAssignmentCreateOrConnectWithoutWorkerInput | JobAssignmentCreateOrConnectWithoutWorkerInput[]
    createMany?: JobAssignmentCreateManyWorkerInputEnvelope
    connect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutWorkerInput = {
    create?: XOR<NotificationCreateWithoutWorkerInput, NotificationUncheckedCreateWithoutWorkerInput> | NotificationCreateWithoutWorkerInput[] | NotificationUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutWorkerInput | NotificationCreateOrConnectWithoutWorkerInput[]
    createMany?: NotificationCreateManyWorkerInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumWorkerStatusFieldUpdateOperationsInput = {
    set?: $Enums.WorkerStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WorkerEligibleRoleUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<WorkerEligibleRoleCreateWithoutWorkerInput, WorkerEligibleRoleUncheckedCreateWithoutWorkerInput> | WorkerEligibleRoleCreateWithoutWorkerInput[] | WorkerEligibleRoleUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: WorkerEligibleRoleCreateOrConnectWithoutWorkerInput | WorkerEligibleRoleCreateOrConnectWithoutWorkerInput[]
    upsert?: WorkerEligibleRoleUpsertWithWhereUniqueWithoutWorkerInput | WorkerEligibleRoleUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: WorkerEligibleRoleCreateManyWorkerInputEnvelope
    set?: WorkerEligibleRoleWhereUniqueInput | WorkerEligibleRoleWhereUniqueInput[]
    disconnect?: WorkerEligibleRoleWhereUniqueInput | WorkerEligibleRoleWhereUniqueInput[]
    delete?: WorkerEligibleRoleWhereUniqueInput | WorkerEligibleRoleWhereUniqueInput[]
    connect?: WorkerEligibleRoleWhereUniqueInput | WorkerEligibleRoleWhereUniqueInput[]
    update?: WorkerEligibleRoleUpdateWithWhereUniqueWithoutWorkerInput | WorkerEligibleRoleUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: WorkerEligibleRoleUpdateManyWithWhereWithoutWorkerInput | WorkerEligibleRoleUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: WorkerEligibleRoleScalarWhereInput | WorkerEligibleRoleScalarWhereInput[]
  }

  export type JobAssignmentUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<JobAssignmentCreateWithoutWorkerInput, JobAssignmentUncheckedCreateWithoutWorkerInput> | JobAssignmentCreateWithoutWorkerInput[] | JobAssignmentUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: JobAssignmentCreateOrConnectWithoutWorkerInput | JobAssignmentCreateOrConnectWithoutWorkerInput[]
    upsert?: JobAssignmentUpsertWithWhereUniqueWithoutWorkerInput | JobAssignmentUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: JobAssignmentCreateManyWorkerInputEnvelope
    set?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
    disconnect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
    delete?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
    connect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
    update?: JobAssignmentUpdateWithWhereUniqueWithoutWorkerInput | JobAssignmentUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: JobAssignmentUpdateManyWithWhereWithoutWorkerInput | JobAssignmentUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: JobAssignmentScalarWhereInput | JobAssignmentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<NotificationCreateWithoutWorkerInput, NotificationUncheckedCreateWithoutWorkerInput> | NotificationCreateWithoutWorkerInput[] | NotificationUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutWorkerInput | NotificationCreateOrConnectWithoutWorkerInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutWorkerInput | NotificationUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: NotificationCreateManyWorkerInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutWorkerInput | NotificationUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutWorkerInput | NotificationUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type WorkerEligibleRoleUncheckedUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<WorkerEligibleRoleCreateWithoutWorkerInput, WorkerEligibleRoleUncheckedCreateWithoutWorkerInput> | WorkerEligibleRoleCreateWithoutWorkerInput[] | WorkerEligibleRoleUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: WorkerEligibleRoleCreateOrConnectWithoutWorkerInput | WorkerEligibleRoleCreateOrConnectWithoutWorkerInput[]
    upsert?: WorkerEligibleRoleUpsertWithWhereUniqueWithoutWorkerInput | WorkerEligibleRoleUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: WorkerEligibleRoleCreateManyWorkerInputEnvelope
    set?: WorkerEligibleRoleWhereUniqueInput | WorkerEligibleRoleWhereUniqueInput[]
    disconnect?: WorkerEligibleRoleWhereUniqueInput | WorkerEligibleRoleWhereUniqueInput[]
    delete?: WorkerEligibleRoleWhereUniqueInput | WorkerEligibleRoleWhereUniqueInput[]
    connect?: WorkerEligibleRoleWhereUniqueInput | WorkerEligibleRoleWhereUniqueInput[]
    update?: WorkerEligibleRoleUpdateWithWhereUniqueWithoutWorkerInput | WorkerEligibleRoleUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: WorkerEligibleRoleUpdateManyWithWhereWithoutWorkerInput | WorkerEligibleRoleUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: WorkerEligibleRoleScalarWhereInput | WorkerEligibleRoleScalarWhereInput[]
  }

  export type JobAssignmentUncheckedUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<JobAssignmentCreateWithoutWorkerInput, JobAssignmentUncheckedCreateWithoutWorkerInput> | JobAssignmentCreateWithoutWorkerInput[] | JobAssignmentUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: JobAssignmentCreateOrConnectWithoutWorkerInput | JobAssignmentCreateOrConnectWithoutWorkerInput[]
    upsert?: JobAssignmentUpsertWithWhereUniqueWithoutWorkerInput | JobAssignmentUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: JobAssignmentCreateManyWorkerInputEnvelope
    set?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
    disconnect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
    delete?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
    connect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
    update?: JobAssignmentUpdateWithWhereUniqueWithoutWorkerInput | JobAssignmentUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: JobAssignmentUpdateManyWithWhereWithoutWorkerInput | JobAssignmentUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: JobAssignmentScalarWhereInput | JobAssignmentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<NotificationCreateWithoutWorkerInput, NotificationUncheckedCreateWithoutWorkerInput> | NotificationCreateWithoutWorkerInput[] | NotificationUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutWorkerInput | NotificationCreateOrConnectWithoutWorkerInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutWorkerInput | NotificationUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: NotificationCreateManyWorkerInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutWorkerInput | NotificationUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutWorkerInput | NotificationUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type WorkerEligibleRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<WorkerEligibleRoleCreateWithoutRoleInput, WorkerEligibleRoleUncheckedCreateWithoutRoleInput> | WorkerEligibleRoleCreateWithoutRoleInput[] | WorkerEligibleRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: WorkerEligibleRoleCreateOrConnectWithoutRoleInput | WorkerEligibleRoleCreateOrConnectWithoutRoleInput[]
    createMany?: WorkerEligibleRoleCreateManyRoleInputEnvelope
    connect?: WorkerEligibleRoleWhereUniqueInput | WorkerEligibleRoleWhereUniqueInput[]
  }

  export type JobRoleRequirementCreateNestedManyWithoutRoleInput = {
    create?: XOR<JobRoleRequirementCreateWithoutRoleInput, JobRoleRequirementUncheckedCreateWithoutRoleInput> | JobRoleRequirementCreateWithoutRoleInput[] | JobRoleRequirementUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: JobRoleRequirementCreateOrConnectWithoutRoleInput | JobRoleRequirementCreateOrConnectWithoutRoleInput[]
    createMany?: JobRoleRequirementCreateManyRoleInputEnvelope
    connect?: JobRoleRequirementWhereUniqueInput | JobRoleRequirementWhereUniqueInput[]
  }

  export type JobAssignmentCreateNestedManyWithoutRoleInput = {
    create?: XOR<JobAssignmentCreateWithoutRoleInput, JobAssignmentUncheckedCreateWithoutRoleInput> | JobAssignmentCreateWithoutRoleInput[] | JobAssignmentUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: JobAssignmentCreateOrConnectWithoutRoleInput | JobAssignmentCreateOrConnectWithoutRoleInput[]
    createMany?: JobAssignmentCreateManyRoleInputEnvelope
    connect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
  }

  export type WorkerEligibleRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<WorkerEligibleRoleCreateWithoutRoleInput, WorkerEligibleRoleUncheckedCreateWithoutRoleInput> | WorkerEligibleRoleCreateWithoutRoleInput[] | WorkerEligibleRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: WorkerEligibleRoleCreateOrConnectWithoutRoleInput | WorkerEligibleRoleCreateOrConnectWithoutRoleInput[]
    createMany?: WorkerEligibleRoleCreateManyRoleInputEnvelope
    connect?: WorkerEligibleRoleWhereUniqueInput | WorkerEligibleRoleWhereUniqueInput[]
  }

  export type JobRoleRequirementUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<JobRoleRequirementCreateWithoutRoleInput, JobRoleRequirementUncheckedCreateWithoutRoleInput> | JobRoleRequirementCreateWithoutRoleInput[] | JobRoleRequirementUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: JobRoleRequirementCreateOrConnectWithoutRoleInput | JobRoleRequirementCreateOrConnectWithoutRoleInput[]
    createMany?: JobRoleRequirementCreateManyRoleInputEnvelope
    connect?: JobRoleRequirementWhereUniqueInput | JobRoleRequirementWhereUniqueInput[]
  }

  export type JobAssignmentUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<JobAssignmentCreateWithoutRoleInput, JobAssignmentUncheckedCreateWithoutRoleInput> | JobAssignmentCreateWithoutRoleInput[] | JobAssignmentUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: JobAssignmentCreateOrConnectWithoutRoleInput | JobAssignmentCreateOrConnectWithoutRoleInput[]
    createMany?: JobAssignmentCreateManyRoleInputEnvelope
    connect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type WorkerEligibleRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<WorkerEligibleRoleCreateWithoutRoleInput, WorkerEligibleRoleUncheckedCreateWithoutRoleInput> | WorkerEligibleRoleCreateWithoutRoleInput[] | WorkerEligibleRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: WorkerEligibleRoleCreateOrConnectWithoutRoleInput | WorkerEligibleRoleCreateOrConnectWithoutRoleInput[]
    upsert?: WorkerEligibleRoleUpsertWithWhereUniqueWithoutRoleInput | WorkerEligibleRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: WorkerEligibleRoleCreateManyRoleInputEnvelope
    set?: WorkerEligibleRoleWhereUniqueInput | WorkerEligibleRoleWhereUniqueInput[]
    disconnect?: WorkerEligibleRoleWhereUniqueInput | WorkerEligibleRoleWhereUniqueInput[]
    delete?: WorkerEligibleRoleWhereUniqueInput | WorkerEligibleRoleWhereUniqueInput[]
    connect?: WorkerEligibleRoleWhereUniqueInput | WorkerEligibleRoleWhereUniqueInput[]
    update?: WorkerEligibleRoleUpdateWithWhereUniqueWithoutRoleInput | WorkerEligibleRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: WorkerEligibleRoleUpdateManyWithWhereWithoutRoleInput | WorkerEligibleRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: WorkerEligibleRoleScalarWhereInput | WorkerEligibleRoleScalarWhereInput[]
  }

  export type JobRoleRequirementUpdateManyWithoutRoleNestedInput = {
    create?: XOR<JobRoleRequirementCreateWithoutRoleInput, JobRoleRequirementUncheckedCreateWithoutRoleInput> | JobRoleRequirementCreateWithoutRoleInput[] | JobRoleRequirementUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: JobRoleRequirementCreateOrConnectWithoutRoleInput | JobRoleRequirementCreateOrConnectWithoutRoleInput[]
    upsert?: JobRoleRequirementUpsertWithWhereUniqueWithoutRoleInput | JobRoleRequirementUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: JobRoleRequirementCreateManyRoleInputEnvelope
    set?: JobRoleRequirementWhereUniqueInput | JobRoleRequirementWhereUniqueInput[]
    disconnect?: JobRoleRequirementWhereUniqueInput | JobRoleRequirementWhereUniqueInput[]
    delete?: JobRoleRequirementWhereUniqueInput | JobRoleRequirementWhereUniqueInput[]
    connect?: JobRoleRequirementWhereUniqueInput | JobRoleRequirementWhereUniqueInput[]
    update?: JobRoleRequirementUpdateWithWhereUniqueWithoutRoleInput | JobRoleRequirementUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: JobRoleRequirementUpdateManyWithWhereWithoutRoleInput | JobRoleRequirementUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: JobRoleRequirementScalarWhereInput | JobRoleRequirementScalarWhereInput[]
  }

  export type JobAssignmentUpdateManyWithoutRoleNestedInput = {
    create?: XOR<JobAssignmentCreateWithoutRoleInput, JobAssignmentUncheckedCreateWithoutRoleInput> | JobAssignmentCreateWithoutRoleInput[] | JobAssignmentUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: JobAssignmentCreateOrConnectWithoutRoleInput | JobAssignmentCreateOrConnectWithoutRoleInput[]
    upsert?: JobAssignmentUpsertWithWhereUniqueWithoutRoleInput | JobAssignmentUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: JobAssignmentCreateManyRoleInputEnvelope
    set?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
    disconnect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
    delete?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
    connect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
    update?: JobAssignmentUpdateWithWhereUniqueWithoutRoleInput | JobAssignmentUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: JobAssignmentUpdateManyWithWhereWithoutRoleInput | JobAssignmentUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: JobAssignmentScalarWhereInput | JobAssignmentScalarWhereInput[]
  }

  export type WorkerEligibleRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<WorkerEligibleRoleCreateWithoutRoleInput, WorkerEligibleRoleUncheckedCreateWithoutRoleInput> | WorkerEligibleRoleCreateWithoutRoleInput[] | WorkerEligibleRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: WorkerEligibleRoleCreateOrConnectWithoutRoleInput | WorkerEligibleRoleCreateOrConnectWithoutRoleInput[]
    upsert?: WorkerEligibleRoleUpsertWithWhereUniqueWithoutRoleInput | WorkerEligibleRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: WorkerEligibleRoleCreateManyRoleInputEnvelope
    set?: WorkerEligibleRoleWhereUniqueInput | WorkerEligibleRoleWhereUniqueInput[]
    disconnect?: WorkerEligibleRoleWhereUniqueInput | WorkerEligibleRoleWhereUniqueInput[]
    delete?: WorkerEligibleRoleWhereUniqueInput | WorkerEligibleRoleWhereUniqueInput[]
    connect?: WorkerEligibleRoleWhereUniqueInput | WorkerEligibleRoleWhereUniqueInput[]
    update?: WorkerEligibleRoleUpdateWithWhereUniqueWithoutRoleInput | WorkerEligibleRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: WorkerEligibleRoleUpdateManyWithWhereWithoutRoleInput | WorkerEligibleRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: WorkerEligibleRoleScalarWhereInput | WorkerEligibleRoleScalarWhereInput[]
  }

  export type JobRoleRequirementUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<JobRoleRequirementCreateWithoutRoleInput, JobRoleRequirementUncheckedCreateWithoutRoleInput> | JobRoleRequirementCreateWithoutRoleInput[] | JobRoleRequirementUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: JobRoleRequirementCreateOrConnectWithoutRoleInput | JobRoleRequirementCreateOrConnectWithoutRoleInput[]
    upsert?: JobRoleRequirementUpsertWithWhereUniqueWithoutRoleInput | JobRoleRequirementUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: JobRoleRequirementCreateManyRoleInputEnvelope
    set?: JobRoleRequirementWhereUniqueInput | JobRoleRequirementWhereUniqueInput[]
    disconnect?: JobRoleRequirementWhereUniqueInput | JobRoleRequirementWhereUniqueInput[]
    delete?: JobRoleRequirementWhereUniqueInput | JobRoleRequirementWhereUniqueInput[]
    connect?: JobRoleRequirementWhereUniqueInput | JobRoleRequirementWhereUniqueInput[]
    update?: JobRoleRequirementUpdateWithWhereUniqueWithoutRoleInput | JobRoleRequirementUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: JobRoleRequirementUpdateManyWithWhereWithoutRoleInput | JobRoleRequirementUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: JobRoleRequirementScalarWhereInput | JobRoleRequirementScalarWhereInput[]
  }

  export type JobAssignmentUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<JobAssignmentCreateWithoutRoleInput, JobAssignmentUncheckedCreateWithoutRoleInput> | JobAssignmentCreateWithoutRoleInput[] | JobAssignmentUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: JobAssignmentCreateOrConnectWithoutRoleInput | JobAssignmentCreateOrConnectWithoutRoleInput[]
    upsert?: JobAssignmentUpsertWithWhereUniqueWithoutRoleInput | JobAssignmentUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: JobAssignmentCreateManyRoleInputEnvelope
    set?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
    disconnect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
    delete?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
    connect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
    update?: JobAssignmentUpdateWithWhereUniqueWithoutRoleInput | JobAssignmentUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: JobAssignmentUpdateManyWithWhereWithoutRoleInput | JobAssignmentUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: JobAssignmentScalarWhereInput | JobAssignmentScalarWhereInput[]
  }

  export type WorkerCreateNestedOneWithoutEligibleRolesInput = {
    create?: XOR<WorkerCreateWithoutEligibleRolesInput, WorkerUncheckedCreateWithoutEligibleRolesInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutEligibleRolesInput
    connect?: WorkerWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutEligibleWorkersInput = {
    create?: XOR<RoleCreateWithoutEligibleWorkersInput, RoleUncheckedCreateWithoutEligibleWorkersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutEligibleWorkersInput
    connect?: RoleWhereUniqueInput
  }

  export type WorkerUpdateOneRequiredWithoutEligibleRolesNestedInput = {
    create?: XOR<WorkerCreateWithoutEligibleRolesInput, WorkerUncheckedCreateWithoutEligibleRolesInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutEligibleRolesInput
    upsert?: WorkerUpsertWithoutEligibleRolesInput
    connect?: WorkerWhereUniqueInput
    update?: XOR<XOR<WorkerUpdateToOneWithWhereWithoutEligibleRolesInput, WorkerUpdateWithoutEligibleRolesInput>, WorkerUncheckedUpdateWithoutEligibleRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutEligibleWorkersNestedInput = {
    create?: XOR<RoleCreateWithoutEligibleWorkersInput, RoleUncheckedCreateWithoutEligibleWorkersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutEligibleWorkersInput
    upsert?: RoleUpsertWithoutEligibleWorkersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutEligibleWorkersInput, RoleUpdateWithoutEligibleWorkersInput>, RoleUncheckedUpdateWithoutEligibleWorkersInput>
  }

  export type JobRoleRequirementCreateNestedManyWithoutJobInput = {
    create?: XOR<JobRoleRequirementCreateWithoutJobInput, JobRoleRequirementUncheckedCreateWithoutJobInput> | JobRoleRequirementCreateWithoutJobInput[] | JobRoleRequirementUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobRoleRequirementCreateOrConnectWithoutJobInput | JobRoleRequirementCreateOrConnectWithoutJobInput[]
    createMany?: JobRoleRequirementCreateManyJobInputEnvelope
    connect?: JobRoleRequirementWhereUniqueInput | JobRoleRequirementWhereUniqueInput[]
  }

  export type JobAssignmentCreateNestedManyWithoutJobInput = {
    create?: XOR<JobAssignmentCreateWithoutJobInput, JobAssignmentUncheckedCreateWithoutJobInput> | JobAssignmentCreateWithoutJobInput[] | JobAssignmentUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobAssignmentCreateOrConnectWithoutJobInput | JobAssignmentCreateOrConnectWithoutJobInput[]
    createMany?: JobAssignmentCreateManyJobInputEnvelope
    connect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutJobInput = {
    create?: XOR<NotificationCreateWithoutJobInput, NotificationUncheckedCreateWithoutJobInput> | NotificationCreateWithoutJobInput[] | NotificationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutJobInput | NotificationCreateOrConnectWithoutJobInput[]
    createMany?: NotificationCreateManyJobInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type JobRoleRequirementUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<JobRoleRequirementCreateWithoutJobInput, JobRoleRequirementUncheckedCreateWithoutJobInput> | JobRoleRequirementCreateWithoutJobInput[] | JobRoleRequirementUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobRoleRequirementCreateOrConnectWithoutJobInput | JobRoleRequirementCreateOrConnectWithoutJobInput[]
    createMany?: JobRoleRequirementCreateManyJobInputEnvelope
    connect?: JobRoleRequirementWhereUniqueInput | JobRoleRequirementWhereUniqueInput[]
  }

  export type JobAssignmentUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<JobAssignmentCreateWithoutJobInput, JobAssignmentUncheckedCreateWithoutJobInput> | JobAssignmentCreateWithoutJobInput[] | JobAssignmentUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobAssignmentCreateOrConnectWithoutJobInput | JobAssignmentCreateOrConnectWithoutJobInput[]
    createMany?: JobAssignmentCreateManyJobInputEnvelope
    connect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<NotificationCreateWithoutJobInput, NotificationUncheckedCreateWithoutJobInput> | NotificationCreateWithoutJobInput[] | NotificationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutJobInput | NotificationCreateOrConnectWithoutJobInput[]
    createMany?: NotificationCreateManyJobInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
  }

  export type JobRoleRequirementUpdateManyWithoutJobNestedInput = {
    create?: XOR<JobRoleRequirementCreateWithoutJobInput, JobRoleRequirementUncheckedCreateWithoutJobInput> | JobRoleRequirementCreateWithoutJobInput[] | JobRoleRequirementUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobRoleRequirementCreateOrConnectWithoutJobInput | JobRoleRequirementCreateOrConnectWithoutJobInput[]
    upsert?: JobRoleRequirementUpsertWithWhereUniqueWithoutJobInput | JobRoleRequirementUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: JobRoleRequirementCreateManyJobInputEnvelope
    set?: JobRoleRequirementWhereUniqueInput | JobRoleRequirementWhereUniqueInput[]
    disconnect?: JobRoleRequirementWhereUniqueInput | JobRoleRequirementWhereUniqueInput[]
    delete?: JobRoleRequirementWhereUniqueInput | JobRoleRequirementWhereUniqueInput[]
    connect?: JobRoleRequirementWhereUniqueInput | JobRoleRequirementWhereUniqueInput[]
    update?: JobRoleRequirementUpdateWithWhereUniqueWithoutJobInput | JobRoleRequirementUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: JobRoleRequirementUpdateManyWithWhereWithoutJobInput | JobRoleRequirementUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: JobRoleRequirementScalarWhereInput | JobRoleRequirementScalarWhereInput[]
  }

  export type JobAssignmentUpdateManyWithoutJobNestedInput = {
    create?: XOR<JobAssignmentCreateWithoutJobInput, JobAssignmentUncheckedCreateWithoutJobInput> | JobAssignmentCreateWithoutJobInput[] | JobAssignmentUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobAssignmentCreateOrConnectWithoutJobInput | JobAssignmentCreateOrConnectWithoutJobInput[]
    upsert?: JobAssignmentUpsertWithWhereUniqueWithoutJobInput | JobAssignmentUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: JobAssignmentCreateManyJobInputEnvelope
    set?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
    disconnect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
    delete?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
    connect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
    update?: JobAssignmentUpdateWithWhereUniqueWithoutJobInput | JobAssignmentUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: JobAssignmentUpdateManyWithWhereWithoutJobInput | JobAssignmentUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: JobAssignmentScalarWhereInput | JobAssignmentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutJobNestedInput = {
    create?: XOR<NotificationCreateWithoutJobInput, NotificationUncheckedCreateWithoutJobInput> | NotificationCreateWithoutJobInput[] | NotificationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutJobInput | NotificationCreateOrConnectWithoutJobInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutJobInput | NotificationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: NotificationCreateManyJobInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutJobInput | NotificationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutJobInput | NotificationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type JobRoleRequirementUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<JobRoleRequirementCreateWithoutJobInput, JobRoleRequirementUncheckedCreateWithoutJobInput> | JobRoleRequirementCreateWithoutJobInput[] | JobRoleRequirementUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobRoleRequirementCreateOrConnectWithoutJobInput | JobRoleRequirementCreateOrConnectWithoutJobInput[]
    upsert?: JobRoleRequirementUpsertWithWhereUniqueWithoutJobInput | JobRoleRequirementUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: JobRoleRequirementCreateManyJobInputEnvelope
    set?: JobRoleRequirementWhereUniqueInput | JobRoleRequirementWhereUniqueInput[]
    disconnect?: JobRoleRequirementWhereUniqueInput | JobRoleRequirementWhereUniqueInput[]
    delete?: JobRoleRequirementWhereUniqueInput | JobRoleRequirementWhereUniqueInput[]
    connect?: JobRoleRequirementWhereUniqueInput | JobRoleRequirementWhereUniqueInput[]
    update?: JobRoleRequirementUpdateWithWhereUniqueWithoutJobInput | JobRoleRequirementUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: JobRoleRequirementUpdateManyWithWhereWithoutJobInput | JobRoleRequirementUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: JobRoleRequirementScalarWhereInput | JobRoleRequirementScalarWhereInput[]
  }

  export type JobAssignmentUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<JobAssignmentCreateWithoutJobInput, JobAssignmentUncheckedCreateWithoutJobInput> | JobAssignmentCreateWithoutJobInput[] | JobAssignmentUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobAssignmentCreateOrConnectWithoutJobInput | JobAssignmentCreateOrConnectWithoutJobInput[]
    upsert?: JobAssignmentUpsertWithWhereUniqueWithoutJobInput | JobAssignmentUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: JobAssignmentCreateManyJobInputEnvelope
    set?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
    disconnect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
    delete?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
    connect?: JobAssignmentWhereUniqueInput | JobAssignmentWhereUniqueInput[]
    update?: JobAssignmentUpdateWithWhereUniqueWithoutJobInput | JobAssignmentUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: JobAssignmentUpdateManyWithWhereWithoutJobInput | JobAssignmentUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: JobAssignmentScalarWhereInput | JobAssignmentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<NotificationCreateWithoutJobInput, NotificationUncheckedCreateWithoutJobInput> | NotificationCreateWithoutJobInput[] | NotificationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutJobInput | NotificationCreateOrConnectWithoutJobInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutJobInput | NotificationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: NotificationCreateManyJobInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutJobInput | NotificationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutJobInput | NotificationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type JobCreateNestedOneWithoutRoleRequirementsInput = {
    create?: XOR<JobCreateWithoutRoleRequirementsInput, JobUncheckedCreateWithoutRoleRequirementsInput>
    connectOrCreate?: JobCreateOrConnectWithoutRoleRequirementsInput
    connect?: JobWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutJobRequirementsInput = {
    create?: XOR<RoleCreateWithoutJobRequirementsInput, RoleUncheckedCreateWithoutJobRequirementsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutJobRequirementsInput
    connect?: RoleWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type JobUpdateOneRequiredWithoutRoleRequirementsNestedInput = {
    create?: XOR<JobCreateWithoutRoleRequirementsInput, JobUncheckedCreateWithoutRoleRequirementsInput>
    connectOrCreate?: JobCreateOrConnectWithoutRoleRequirementsInput
    upsert?: JobUpsertWithoutRoleRequirementsInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutRoleRequirementsInput, JobUpdateWithoutRoleRequirementsInput>, JobUncheckedUpdateWithoutRoleRequirementsInput>
  }

  export type RoleUpdateOneRequiredWithoutJobRequirementsNestedInput = {
    create?: XOR<RoleCreateWithoutJobRequirementsInput, RoleUncheckedCreateWithoutJobRequirementsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutJobRequirementsInput
    upsert?: RoleUpsertWithoutJobRequirementsInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutJobRequirementsInput, RoleUpdateWithoutJobRequirementsInput>, RoleUncheckedUpdateWithoutJobRequirementsInput>
  }

  export type JobCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<JobCreateWithoutAssignmentsInput, JobUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: JobCreateOrConnectWithoutAssignmentsInput
    connect?: JobWhereUniqueInput
  }

  export type WorkerCreateNestedOneWithoutJobAssignmentsInput = {
    create?: XOR<WorkerCreateWithoutJobAssignmentsInput, WorkerUncheckedCreateWithoutJobAssignmentsInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutJobAssignmentsInput
    connect?: WorkerWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutJobAssignmentsInput = {
    create?: XOR<RoleCreateWithoutJobAssignmentsInput, RoleUncheckedCreateWithoutJobAssignmentsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutJobAssignmentsInput
    connect?: RoleWhereUniqueInput
  }

  export type JobUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<JobCreateWithoutAssignmentsInput, JobUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: JobCreateOrConnectWithoutAssignmentsInput
    upsert?: JobUpsertWithoutAssignmentsInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutAssignmentsInput, JobUpdateWithoutAssignmentsInput>, JobUncheckedUpdateWithoutAssignmentsInput>
  }

  export type WorkerUpdateOneRequiredWithoutJobAssignmentsNestedInput = {
    create?: XOR<WorkerCreateWithoutJobAssignmentsInput, WorkerUncheckedCreateWithoutJobAssignmentsInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutJobAssignmentsInput
    upsert?: WorkerUpsertWithoutJobAssignmentsInput
    connect?: WorkerWhereUniqueInput
    update?: XOR<XOR<WorkerUpdateToOneWithWhereWithoutJobAssignmentsInput, WorkerUpdateWithoutJobAssignmentsInput>, WorkerUncheckedUpdateWithoutJobAssignmentsInput>
  }

  export type RoleUpdateOneRequiredWithoutJobAssignmentsNestedInput = {
    create?: XOR<RoleCreateWithoutJobAssignmentsInput, RoleUncheckedCreateWithoutJobAssignmentsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutJobAssignmentsInput
    upsert?: RoleUpsertWithoutJobAssignmentsInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutJobAssignmentsInput, RoleUpdateWithoutJobAssignmentsInput>, RoleUncheckedUpdateWithoutJobAssignmentsInput>
  }

  export type WorkerCreateNestedOneWithoutNotificationsSentInput = {
    create?: XOR<WorkerCreateWithoutNotificationsSentInput, WorkerUncheckedCreateWithoutNotificationsSentInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutNotificationsSentInput
    connect?: WorkerWhereUniqueInput
  }

  export type JobCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<JobCreateWithoutNotificationsInput, JobUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: JobCreateOrConnectWithoutNotificationsInput
    connect?: JobWhereUniqueInput
  }

  export type WorkerUpdateOneRequiredWithoutNotificationsSentNestedInput = {
    create?: XOR<WorkerCreateWithoutNotificationsSentInput, WorkerUncheckedCreateWithoutNotificationsSentInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutNotificationsSentInput
    upsert?: WorkerUpsertWithoutNotificationsSentInput
    connect?: WorkerWhereUniqueInput
    update?: XOR<XOR<WorkerUpdateToOneWithWhereWithoutNotificationsSentInput, WorkerUpdateWithoutNotificationsSentInput>, WorkerUncheckedUpdateWithoutNotificationsSentInput>
  }

  export type JobUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<JobCreateWithoutNotificationsInput, JobUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: JobCreateOrConnectWithoutNotificationsInput
    upsert?: JobUpsertWithoutNotificationsInput
    disconnect?: JobWhereInput | boolean
    delete?: JobWhereInput | boolean
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutNotificationsInput, JobUpdateWithoutNotificationsInput>, JobUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumWorkerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkerStatus | EnumWorkerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkerStatus[]
    notIn?: $Enums.WorkerStatus[]
    not?: NestedEnumWorkerStatusFilter<$PrismaModel> | $Enums.WorkerStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumWorkerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkerStatus | EnumWorkerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkerStatus[]
    notIn?: $Enums.WorkerStatus[]
    not?: NestedEnumWorkerStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkerStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkerStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[]
    notIn?: $Enums.JobStatus[]
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[]
    notIn?: $Enums.JobStatus[]
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type WorkerEligibleRoleCreateWithoutWorkerInput = {
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutEligibleWorkersInput
  }

  export type WorkerEligibleRoleUncheckedCreateWithoutWorkerInput = {
    roleId: string
    createdAt?: Date | string
  }

  export type WorkerEligibleRoleCreateOrConnectWithoutWorkerInput = {
    where: WorkerEligibleRoleWhereUniqueInput
    create: XOR<WorkerEligibleRoleCreateWithoutWorkerInput, WorkerEligibleRoleUncheckedCreateWithoutWorkerInput>
  }

  export type WorkerEligibleRoleCreateManyWorkerInputEnvelope = {
    data: WorkerEligibleRoleCreateManyWorkerInput | WorkerEligibleRoleCreateManyWorkerInput[]
    skipDuplicates?: boolean
  }

  export type JobAssignmentCreateWithoutWorkerInput = {
    id?: string
    assignedAt?: Date | string
    hoursWorked?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    job: JobCreateNestedOneWithoutAssignmentsInput
    role: RoleCreateNestedOneWithoutJobAssignmentsInput
  }

  export type JobAssignmentUncheckedCreateWithoutWorkerInput = {
    id?: string
    jobId: string
    roleId: string
    assignedAt?: Date | string
    hoursWorked?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobAssignmentCreateOrConnectWithoutWorkerInput = {
    where: JobAssignmentWhereUniqueInput
    create: XOR<JobAssignmentCreateWithoutWorkerInput, JobAssignmentUncheckedCreateWithoutWorkerInput>
  }

  export type JobAssignmentCreateManyWorkerInputEnvelope = {
    data: JobAssignmentCreateManyWorkerInput | JobAssignmentCreateManyWorkerInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutWorkerInput = {
    id?: string
    message: string
    sentAt?: Date | string
    job?: JobCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutWorkerInput = {
    id?: string
    jobId?: string | null
    message: string
    sentAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutWorkerInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutWorkerInput, NotificationUncheckedCreateWithoutWorkerInput>
  }

  export type NotificationCreateManyWorkerInputEnvelope = {
    data: NotificationCreateManyWorkerInput | NotificationCreateManyWorkerInput[]
    skipDuplicates?: boolean
  }

  export type WorkerEligibleRoleUpsertWithWhereUniqueWithoutWorkerInput = {
    where: WorkerEligibleRoleWhereUniqueInput
    update: XOR<WorkerEligibleRoleUpdateWithoutWorkerInput, WorkerEligibleRoleUncheckedUpdateWithoutWorkerInput>
    create: XOR<WorkerEligibleRoleCreateWithoutWorkerInput, WorkerEligibleRoleUncheckedCreateWithoutWorkerInput>
  }

  export type WorkerEligibleRoleUpdateWithWhereUniqueWithoutWorkerInput = {
    where: WorkerEligibleRoleWhereUniqueInput
    data: XOR<WorkerEligibleRoleUpdateWithoutWorkerInput, WorkerEligibleRoleUncheckedUpdateWithoutWorkerInput>
  }

  export type WorkerEligibleRoleUpdateManyWithWhereWithoutWorkerInput = {
    where: WorkerEligibleRoleScalarWhereInput
    data: XOR<WorkerEligibleRoleUpdateManyMutationInput, WorkerEligibleRoleUncheckedUpdateManyWithoutWorkerInput>
  }

  export type WorkerEligibleRoleScalarWhereInput = {
    AND?: WorkerEligibleRoleScalarWhereInput | WorkerEligibleRoleScalarWhereInput[]
    OR?: WorkerEligibleRoleScalarWhereInput[]
    NOT?: WorkerEligibleRoleScalarWhereInput | WorkerEligibleRoleScalarWhereInput[]
    workerId?: StringFilter<"WorkerEligibleRole"> | string
    roleId?: StringFilter<"WorkerEligibleRole"> | string
    createdAt?: DateTimeFilter<"WorkerEligibleRole"> | Date | string
  }

  export type JobAssignmentUpsertWithWhereUniqueWithoutWorkerInput = {
    where: JobAssignmentWhereUniqueInput
    update: XOR<JobAssignmentUpdateWithoutWorkerInput, JobAssignmentUncheckedUpdateWithoutWorkerInput>
    create: XOR<JobAssignmentCreateWithoutWorkerInput, JobAssignmentUncheckedCreateWithoutWorkerInput>
  }

  export type JobAssignmentUpdateWithWhereUniqueWithoutWorkerInput = {
    where: JobAssignmentWhereUniqueInput
    data: XOR<JobAssignmentUpdateWithoutWorkerInput, JobAssignmentUncheckedUpdateWithoutWorkerInput>
  }

  export type JobAssignmentUpdateManyWithWhereWithoutWorkerInput = {
    where: JobAssignmentScalarWhereInput
    data: XOR<JobAssignmentUpdateManyMutationInput, JobAssignmentUncheckedUpdateManyWithoutWorkerInput>
  }

  export type JobAssignmentScalarWhereInput = {
    AND?: JobAssignmentScalarWhereInput | JobAssignmentScalarWhereInput[]
    OR?: JobAssignmentScalarWhereInput[]
    NOT?: JobAssignmentScalarWhereInput | JobAssignmentScalarWhereInput[]
    id?: StringFilter<"JobAssignment"> | string
    jobId?: StringFilter<"JobAssignment"> | string
    workerId?: StringFilter<"JobAssignment"> | string
    roleId?: StringFilter<"JobAssignment"> | string
    assignedAt?: DateTimeFilter<"JobAssignment"> | Date | string
    hoursWorked?: DecimalNullableFilter<"JobAssignment"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"JobAssignment"> | string | null
    createdAt?: DateTimeFilter<"JobAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"JobAssignment"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutWorkerInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutWorkerInput, NotificationUncheckedUpdateWithoutWorkerInput>
    create: XOR<NotificationCreateWithoutWorkerInput, NotificationUncheckedCreateWithoutWorkerInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutWorkerInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutWorkerInput, NotificationUncheckedUpdateWithoutWorkerInput>
  }

  export type NotificationUpdateManyWithWhereWithoutWorkerInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutWorkerInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    workerId?: StringFilter<"Notification"> | string
    jobId?: StringNullableFilter<"Notification"> | string | null
    message?: StringFilter<"Notification"> | string
    sentAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type WorkerEligibleRoleCreateWithoutRoleInput = {
    createdAt?: Date | string
    worker: WorkerCreateNestedOneWithoutEligibleRolesInput
  }

  export type WorkerEligibleRoleUncheckedCreateWithoutRoleInput = {
    workerId: string
    createdAt?: Date | string
  }

  export type WorkerEligibleRoleCreateOrConnectWithoutRoleInput = {
    where: WorkerEligibleRoleWhereUniqueInput
    create: XOR<WorkerEligibleRoleCreateWithoutRoleInput, WorkerEligibleRoleUncheckedCreateWithoutRoleInput>
  }

  export type WorkerEligibleRoleCreateManyRoleInputEnvelope = {
    data: WorkerEligibleRoleCreateManyRoleInput | WorkerEligibleRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type JobRoleRequirementCreateWithoutRoleInput = {
    id?: string
    numberOfWorkersNeeded: number
    payRateForJob: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    job: JobCreateNestedOneWithoutRoleRequirementsInput
  }

  export type JobRoleRequirementUncheckedCreateWithoutRoleInput = {
    id?: string
    jobId: string
    numberOfWorkersNeeded: number
    payRateForJob: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobRoleRequirementCreateOrConnectWithoutRoleInput = {
    where: JobRoleRequirementWhereUniqueInput
    create: XOR<JobRoleRequirementCreateWithoutRoleInput, JobRoleRequirementUncheckedCreateWithoutRoleInput>
  }

  export type JobRoleRequirementCreateManyRoleInputEnvelope = {
    data: JobRoleRequirementCreateManyRoleInput | JobRoleRequirementCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type JobAssignmentCreateWithoutRoleInput = {
    id?: string
    assignedAt?: Date | string
    hoursWorked?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    job: JobCreateNestedOneWithoutAssignmentsInput
    worker: WorkerCreateNestedOneWithoutJobAssignmentsInput
  }

  export type JobAssignmentUncheckedCreateWithoutRoleInput = {
    id?: string
    jobId: string
    workerId: string
    assignedAt?: Date | string
    hoursWorked?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobAssignmentCreateOrConnectWithoutRoleInput = {
    where: JobAssignmentWhereUniqueInput
    create: XOR<JobAssignmentCreateWithoutRoleInput, JobAssignmentUncheckedCreateWithoutRoleInput>
  }

  export type JobAssignmentCreateManyRoleInputEnvelope = {
    data: JobAssignmentCreateManyRoleInput | JobAssignmentCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type WorkerEligibleRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: WorkerEligibleRoleWhereUniqueInput
    update: XOR<WorkerEligibleRoleUpdateWithoutRoleInput, WorkerEligibleRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<WorkerEligibleRoleCreateWithoutRoleInput, WorkerEligibleRoleUncheckedCreateWithoutRoleInput>
  }

  export type WorkerEligibleRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: WorkerEligibleRoleWhereUniqueInput
    data: XOR<WorkerEligibleRoleUpdateWithoutRoleInput, WorkerEligibleRoleUncheckedUpdateWithoutRoleInput>
  }

  export type WorkerEligibleRoleUpdateManyWithWhereWithoutRoleInput = {
    where: WorkerEligibleRoleScalarWhereInput
    data: XOR<WorkerEligibleRoleUpdateManyMutationInput, WorkerEligibleRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type JobRoleRequirementUpsertWithWhereUniqueWithoutRoleInput = {
    where: JobRoleRequirementWhereUniqueInput
    update: XOR<JobRoleRequirementUpdateWithoutRoleInput, JobRoleRequirementUncheckedUpdateWithoutRoleInput>
    create: XOR<JobRoleRequirementCreateWithoutRoleInput, JobRoleRequirementUncheckedCreateWithoutRoleInput>
  }

  export type JobRoleRequirementUpdateWithWhereUniqueWithoutRoleInput = {
    where: JobRoleRequirementWhereUniqueInput
    data: XOR<JobRoleRequirementUpdateWithoutRoleInput, JobRoleRequirementUncheckedUpdateWithoutRoleInput>
  }

  export type JobRoleRequirementUpdateManyWithWhereWithoutRoleInput = {
    where: JobRoleRequirementScalarWhereInput
    data: XOR<JobRoleRequirementUpdateManyMutationInput, JobRoleRequirementUncheckedUpdateManyWithoutRoleInput>
  }

  export type JobRoleRequirementScalarWhereInput = {
    AND?: JobRoleRequirementScalarWhereInput | JobRoleRequirementScalarWhereInput[]
    OR?: JobRoleRequirementScalarWhereInput[]
    NOT?: JobRoleRequirementScalarWhereInput | JobRoleRequirementScalarWhereInput[]
    id?: StringFilter<"JobRoleRequirement"> | string
    jobId?: StringFilter<"JobRoleRequirement"> | string
    roleId?: StringFilter<"JobRoleRequirement"> | string
    numberOfWorkersNeeded?: IntFilter<"JobRoleRequirement"> | number
    payRateForJob?: DecimalFilter<"JobRoleRequirement"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"JobRoleRequirement"> | Date | string
    updatedAt?: DateTimeFilter<"JobRoleRequirement"> | Date | string
  }

  export type JobAssignmentUpsertWithWhereUniqueWithoutRoleInput = {
    where: JobAssignmentWhereUniqueInput
    update: XOR<JobAssignmentUpdateWithoutRoleInput, JobAssignmentUncheckedUpdateWithoutRoleInput>
    create: XOR<JobAssignmentCreateWithoutRoleInput, JobAssignmentUncheckedCreateWithoutRoleInput>
  }

  export type JobAssignmentUpdateWithWhereUniqueWithoutRoleInput = {
    where: JobAssignmentWhereUniqueInput
    data: XOR<JobAssignmentUpdateWithoutRoleInput, JobAssignmentUncheckedUpdateWithoutRoleInput>
  }

  export type JobAssignmentUpdateManyWithWhereWithoutRoleInput = {
    where: JobAssignmentScalarWhereInput
    data: XOR<JobAssignmentUpdateManyMutationInput, JobAssignmentUncheckedUpdateManyWithoutRoleInput>
  }

  export type WorkerCreateWithoutEligibleRolesInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    status?: $Enums.WorkerStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobAssignments?: JobAssignmentCreateNestedManyWithoutWorkerInput
    notificationsSent?: NotificationCreateNestedManyWithoutWorkerInput
  }

  export type WorkerUncheckedCreateWithoutEligibleRolesInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    status?: $Enums.WorkerStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobAssignments?: JobAssignmentUncheckedCreateNestedManyWithoutWorkerInput
    notificationsSent?: NotificationUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerCreateOrConnectWithoutEligibleRolesInput = {
    where: WorkerWhereUniqueInput
    create: XOR<WorkerCreateWithoutEligibleRolesInput, WorkerUncheckedCreateWithoutEligibleRolesInput>
  }

  export type RoleCreateWithoutEligibleWorkersInput = {
    id?: string
    name: string
    defaultPayRate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobRequirements?: JobRoleRequirementCreateNestedManyWithoutRoleInput
    jobAssignments?: JobAssignmentCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutEligibleWorkersInput = {
    id?: string
    name: string
    defaultPayRate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobRequirements?: JobRoleRequirementUncheckedCreateNestedManyWithoutRoleInput
    jobAssignments?: JobAssignmentUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutEligibleWorkersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutEligibleWorkersInput, RoleUncheckedCreateWithoutEligibleWorkersInput>
  }

  export type WorkerUpsertWithoutEligibleRolesInput = {
    update: XOR<WorkerUpdateWithoutEligibleRolesInput, WorkerUncheckedUpdateWithoutEligibleRolesInput>
    create: XOR<WorkerCreateWithoutEligibleRolesInput, WorkerUncheckedCreateWithoutEligibleRolesInput>
    where?: WorkerWhereInput
  }

  export type WorkerUpdateToOneWithWhereWithoutEligibleRolesInput = {
    where?: WorkerWhereInput
    data: XOR<WorkerUpdateWithoutEligibleRolesInput, WorkerUncheckedUpdateWithoutEligibleRolesInput>
  }

  export type WorkerUpdateWithoutEligibleRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorkerStatusFieldUpdateOperationsInput | $Enums.WorkerStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobAssignments?: JobAssignmentUpdateManyWithoutWorkerNestedInput
    notificationsSent?: NotificationUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerUncheckedUpdateWithoutEligibleRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorkerStatusFieldUpdateOperationsInput | $Enums.WorkerStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobAssignments?: JobAssignmentUncheckedUpdateManyWithoutWorkerNestedInput
    notificationsSent?: NotificationUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type RoleUpsertWithoutEligibleWorkersInput = {
    update: XOR<RoleUpdateWithoutEligibleWorkersInput, RoleUncheckedUpdateWithoutEligibleWorkersInput>
    create: XOR<RoleCreateWithoutEligibleWorkersInput, RoleUncheckedCreateWithoutEligibleWorkersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutEligibleWorkersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutEligibleWorkersInput, RoleUncheckedUpdateWithoutEligibleWorkersInput>
  }

  export type RoleUpdateWithoutEligibleWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultPayRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobRequirements?: JobRoleRequirementUpdateManyWithoutRoleNestedInput
    jobAssignments?: JobAssignmentUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutEligibleWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultPayRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobRequirements?: JobRoleRequirementUncheckedUpdateManyWithoutRoleNestedInput
    jobAssignments?: JobAssignmentUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type JobRoleRequirementCreateWithoutJobInput = {
    id?: string
    numberOfWorkersNeeded: number
    payRateForJob: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutJobRequirementsInput
  }

  export type JobRoleRequirementUncheckedCreateWithoutJobInput = {
    id?: string
    roleId: string
    numberOfWorkersNeeded: number
    payRateForJob: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobRoleRequirementCreateOrConnectWithoutJobInput = {
    where: JobRoleRequirementWhereUniqueInput
    create: XOR<JobRoleRequirementCreateWithoutJobInput, JobRoleRequirementUncheckedCreateWithoutJobInput>
  }

  export type JobRoleRequirementCreateManyJobInputEnvelope = {
    data: JobRoleRequirementCreateManyJobInput | JobRoleRequirementCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type JobAssignmentCreateWithoutJobInput = {
    id?: string
    assignedAt?: Date | string
    hoursWorked?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    worker: WorkerCreateNestedOneWithoutJobAssignmentsInput
    role: RoleCreateNestedOneWithoutJobAssignmentsInput
  }

  export type JobAssignmentUncheckedCreateWithoutJobInput = {
    id?: string
    workerId: string
    roleId: string
    assignedAt?: Date | string
    hoursWorked?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobAssignmentCreateOrConnectWithoutJobInput = {
    where: JobAssignmentWhereUniqueInput
    create: XOR<JobAssignmentCreateWithoutJobInput, JobAssignmentUncheckedCreateWithoutJobInput>
  }

  export type JobAssignmentCreateManyJobInputEnvelope = {
    data: JobAssignmentCreateManyJobInput | JobAssignmentCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutJobInput = {
    id?: string
    message: string
    sentAt?: Date | string
    worker: WorkerCreateNestedOneWithoutNotificationsSentInput
  }

  export type NotificationUncheckedCreateWithoutJobInput = {
    id?: string
    workerId: string
    message: string
    sentAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutJobInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutJobInput, NotificationUncheckedCreateWithoutJobInput>
  }

  export type NotificationCreateManyJobInputEnvelope = {
    data: NotificationCreateManyJobInput | NotificationCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type JobRoleRequirementUpsertWithWhereUniqueWithoutJobInput = {
    where: JobRoleRequirementWhereUniqueInput
    update: XOR<JobRoleRequirementUpdateWithoutJobInput, JobRoleRequirementUncheckedUpdateWithoutJobInput>
    create: XOR<JobRoleRequirementCreateWithoutJobInput, JobRoleRequirementUncheckedCreateWithoutJobInput>
  }

  export type JobRoleRequirementUpdateWithWhereUniqueWithoutJobInput = {
    where: JobRoleRequirementWhereUniqueInput
    data: XOR<JobRoleRequirementUpdateWithoutJobInput, JobRoleRequirementUncheckedUpdateWithoutJobInput>
  }

  export type JobRoleRequirementUpdateManyWithWhereWithoutJobInput = {
    where: JobRoleRequirementScalarWhereInput
    data: XOR<JobRoleRequirementUpdateManyMutationInput, JobRoleRequirementUncheckedUpdateManyWithoutJobInput>
  }

  export type JobAssignmentUpsertWithWhereUniqueWithoutJobInput = {
    where: JobAssignmentWhereUniqueInput
    update: XOR<JobAssignmentUpdateWithoutJobInput, JobAssignmentUncheckedUpdateWithoutJobInput>
    create: XOR<JobAssignmentCreateWithoutJobInput, JobAssignmentUncheckedCreateWithoutJobInput>
  }

  export type JobAssignmentUpdateWithWhereUniqueWithoutJobInput = {
    where: JobAssignmentWhereUniqueInput
    data: XOR<JobAssignmentUpdateWithoutJobInput, JobAssignmentUncheckedUpdateWithoutJobInput>
  }

  export type JobAssignmentUpdateManyWithWhereWithoutJobInput = {
    where: JobAssignmentScalarWhereInput
    data: XOR<JobAssignmentUpdateManyMutationInput, JobAssignmentUncheckedUpdateManyWithoutJobInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutJobInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutJobInput, NotificationUncheckedUpdateWithoutJobInput>
    create: XOR<NotificationCreateWithoutJobInput, NotificationUncheckedCreateWithoutJobInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutJobInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutJobInput, NotificationUncheckedUpdateWithoutJobInput>
  }

  export type NotificationUpdateManyWithWhereWithoutJobInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutJobInput>
  }

  export type JobCreateWithoutRoleRequirementsInput = {
    id?: string
    organizerName?: string | null
    title: string
    location: string
    startDatetime: Date | string
    endDatetime: Date | string
    description?: string | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: JobAssignmentCreateNestedManyWithoutJobInput
    notifications?: NotificationCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutRoleRequirementsInput = {
    id?: string
    organizerName?: string | null
    title: string
    location: string
    startDatetime: Date | string
    endDatetime: Date | string
    description?: string | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: JobAssignmentUncheckedCreateNestedManyWithoutJobInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutRoleRequirementsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutRoleRequirementsInput, JobUncheckedCreateWithoutRoleRequirementsInput>
  }

  export type RoleCreateWithoutJobRequirementsInput = {
    id?: string
    name: string
    defaultPayRate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eligibleWorkers?: WorkerEligibleRoleCreateNestedManyWithoutRoleInput
    jobAssignments?: JobAssignmentCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutJobRequirementsInput = {
    id?: string
    name: string
    defaultPayRate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eligibleWorkers?: WorkerEligibleRoleUncheckedCreateNestedManyWithoutRoleInput
    jobAssignments?: JobAssignmentUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutJobRequirementsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutJobRequirementsInput, RoleUncheckedCreateWithoutJobRequirementsInput>
  }

  export type JobUpsertWithoutRoleRequirementsInput = {
    update: XOR<JobUpdateWithoutRoleRequirementsInput, JobUncheckedUpdateWithoutRoleRequirementsInput>
    create: XOR<JobCreateWithoutRoleRequirementsInput, JobUncheckedCreateWithoutRoleRequirementsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutRoleRequirementsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutRoleRequirementsInput, JobUncheckedUpdateWithoutRoleRequirementsInput>
  }

  export type JobUpdateWithoutRoleRequirementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: JobAssignmentUpdateManyWithoutJobNestedInput
    notifications?: NotificationUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutRoleRequirementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: JobAssignmentUncheckedUpdateManyWithoutJobNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type RoleUpsertWithoutJobRequirementsInput = {
    update: XOR<RoleUpdateWithoutJobRequirementsInput, RoleUncheckedUpdateWithoutJobRequirementsInput>
    create: XOR<RoleCreateWithoutJobRequirementsInput, RoleUncheckedCreateWithoutJobRequirementsInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutJobRequirementsInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutJobRequirementsInput, RoleUncheckedUpdateWithoutJobRequirementsInput>
  }

  export type RoleUpdateWithoutJobRequirementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultPayRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eligibleWorkers?: WorkerEligibleRoleUpdateManyWithoutRoleNestedInput
    jobAssignments?: JobAssignmentUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutJobRequirementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultPayRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eligibleWorkers?: WorkerEligibleRoleUncheckedUpdateManyWithoutRoleNestedInput
    jobAssignments?: JobAssignmentUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type JobCreateWithoutAssignmentsInput = {
    id?: string
    organizerName?: string | null
    title: string
    location: string
    startDatetime: Date | string
    endDatetime: Date | string
    description?: string | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    roleRequirements?: JobRoleRequirementCreateNestedManyWithoutJobInput
    notifications?: NotificationCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    organizerName?: string | null
    title: string
    location: string
    startDatetime: Date | string
    endDatetime: Date | string
    description?: string | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    roleRequirements?: JobRoleRequirementUncheckedCreateNestedManyWithoutJobInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutAssignmentsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutAssignmentsInput, JobUncheckedCreateWithoutAssignmentsInput>
  }

  export type WorkerCreateWithoutJobAssignmentsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    status?: $Enums.WorkerStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eligibleRoles?: WorkerEligibleRoleCreateNestedManyWithoutWorkerInput
    notificationsSent?: NotificationCreateNestedManyWithoutWorkerInput
  }

  export type WorkerUncheckedCreateWithoutJobAssignmentsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    status?: $Enums.WorkerStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eligibleRoles?: WorkerEligibleRoleUncheckedCreateNestedManyWithoutWorkerInput
    notificationsSent?: NotificationUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerCreateOrConnectWithoutJobAssignmentsInput = {
    where: WorkerWhereUniqueInput
    create: XOR<WorkerCreateWithoutJobAssignmentsInput, WorkerUncheckedCreateWithoutJobAssignmentsInput>
  }

  export type RoleCreateWithoutJobAssignmentsInput = {
    id?: string
    name: string
    defaultPayRate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eligibleWorkers?: WorkerEligibleRoleCreateNestedManyWithoutRoleInput
    jobRequirements?: JobRoleRequirementCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutJobAssignmentsInput = {
    id?: string
    name: string
    defaultPayRate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eligibleWorkers?: WorkerEligibleRoleUncheckedCreateNestedManyWithoutRoleInput
    jobRequirements?: JobRoleRequirementUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutJobAssignmentsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutJobAssignmentsInput, RoleUncheckedCreateWithoutJobAssignmentsInput>
  }

  export type JobUpsertWithoutAssignmentsInput = {
    update: XOR<JobUpdateWithoutAssignmentsInput, JobUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<JobCreateWithoutAssignmentsInput, JobUncheckedCreateWithoutAssignmentsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutAssignmentsInput, JobUncheckedUpdateWithoutAssignmentsInput>
  }

  export type JobUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleRequirements?: JobRoleRequirementUpdateManyWithoutJobNestedInput
    notifications?: NotificationUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleRequirements?: JobRoleRequirementUncheckedUpdateManyWithoutJobNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type WorkerUpsertWithoutJobAssignmentsInput = {
    update: XOR<WorkerUpdateWithoutJobAssignmentsInput, WorkerUncheckedUpdateWithoutJobAssignmentsInput>
    create: XOR<WorkerCreateWithoutJobAssignmentsInput, WorkerUncheckedCreateWithoutJobAssignmentsInput>
    where?: WorkerWhereInput
  }

  export type WorkerUpdateToOneWithWhereWithoutJobAssignmentsInput = {
    where?: WorkerWhereInput
    data: XOR<WorkerUpdateWithoutJobAssignmentsInput, WorkerUncheckedUpdateWithoutJobAssignmentsInput>
  }

  export type WorkerUpdateWithoutJobAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorkerStatusFieldUpdateOperationsInput | $Enums.WorkerStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eligibleRoles?: WorkerEligibleRoleUpdateManyWithoutWorkerNestedInput
    notificationsSent?: NotificationUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerUncheckedUpdateWithoutJobAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorkerStatusFieldUpdateOperationsInput | $Enums.WorkerStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eligibleRoles?: WorkerEligibleRoleUncheckedUpdateManyWithoutWorkerNestedInput
    notificationsSent?: NotificationUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type RoleUpsertWithoutJobAssignmentsInput = {
    update: XOR<RoleUpdateWithoutJobAssignmentsInput, RoleUncheckedUpdateWithoutJobAssignmentsInput>
    create: XOR<RoleCreateWithoutJobAssignmentsInput, RoleUncheckedCreateWithoutJobAssignmentsInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutJobAssignmentsInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutJobAssignmentsInput, RoleUncheckedUpdateWithoutJobAssignmentsInput>
  }

  export type RoleUpdateWithoutJobAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultPayRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eligibleWorkers?: WorkerEligibleRoleUpdateManyWithoutRoleNestedInput
    jobRequirements?: JobRoleRequirementUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutJobAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultPayRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eligibleWorkers?: WorkerEligibleRoleUncheckedUpdateManyWithoutRoleNestedInput
    jobRequirements?: JobRoleRequirementUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type WorkerCreateWithoutNotificationsSentInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    status?: $Enums.WorkerStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eligibleRoles?: WorkerEligibleRoleCreateNestedManyWithoutWorkerInput
    jobAssignments?: JobAssignmentCreateNestedManyWithoutWorkerInput
  }

  export type WorkerUncheckedCreateWithoutNotificationsSentInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    status?: $Enums.WorkerStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eligibleRoles?: WorkerEligibleRoleUncheckedCreateNestedManyWithoutWorkerInput
    jobAssignments?: JobAssignmentUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerCreateOrConnectWithoutNotificationsSentInput = {
    where: WorkerWhereUniqueInput
    create: XOR<WorkerCreateWithoutNotificationsSentInput, WorkerUncheckedCreateWithoutNotificationsSentInput>
  }

  export type JobCreateWithoutNotificationsInput = {
    id?: string
    organizerName?: string | null
    title: string
    location: string
    startDatetime: Date | string
    endDatetime: Date | string
    description?: string | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    roleRequirements?: JobRoleRequirementCreateNestedManyWithoutJobInput
    assignments?: JobAssignmentCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutNotificationsInput = {
    id?: string
    organizerName?: string | null
    title: string
    location: string
    startDatetime: Date | string
    endDatetime: Date | string
    description?: string | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    roleRequirements?: JobRoleRequirementUncheckedCreateNestedManyWithoutJobInput
    assignments?: JobAssignmentUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutNotificationsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutNotificationsInput, JobUncheckedCreateWithoutNotificationsInput>
  }

  export type WorkerUpsertWithoutNotificationsSentInput = {
    update: XOR<WorkerUpdateWithoutNotificationsSentInput, WorkerUncheckedUpdateWithoutNotificationsSentInput>
    create: XOR<WorkerCreateWithoutNotificationsSentInput, WorkerUncheckedCreateWithoutNotificationsSentInput>
    where?: WorkerWhereInput
  }

  export type WorkerUpdateToOneWithWhereWithoutNotificationsSentInput = {
    where?: WorkerWhereInput
    data: XOR<WorkerUpdateWithoutNotificationsSentInput, WorkerUncheckedUpdateWithoutNotificationsSentInput>
  }

  export type WorkerUpdateWithoutNotificationsSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorkerStatusFieldUpdateOperationsInput | $Enums.WorkerStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eligibleRoles?: WorkerEligibleRoleUpdateManyWithoutWorkerNestedInput
    jobAssignments?: JobAssignmentUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerUncheckedUpdateWithoutNotificationsSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorkerStatusFieldUpdateOperationsInput | $Enums.WorkerStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eligibleRoles?: WorkerEligibleRoleUncheckedUpdateManyWithoutWorkerNestedInput
    jobAssignments?: JobAssignmentUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type JobUpsertWithoutNotificationsInput = {
    update: XOR<JobUpdateWithoutNotificationsInput, JobUncheckedUpdateWithoutNotificationsInput>
    create: XOR<JobCreateWithoutNotificationsInput, JobUncheckedCreateWithoutNotificationsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutNotificationsInput, JobUncheckedUpdateWithoutNotificationsInput>
  }

  export type JobUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleRequirements?: JobRoleRequirementUpdateManyWithoutJobNestedInput
    assignments?: JobAssignmentUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleRequirements?: JobRoleRequirementUncheckedUpdateManyWithoutJobNestedInput
    assignments?: JobAssignmentUncheckedUpdateManyWithoutJobNestedInput
  }

  export type WorkerEligibleRoleCreateManyWorkerInput = {
    roleId: string
    createdAt?: Date | string
  }

  export type JobAssignmentCreateManyWorkerInput = {
    id?: string
    jobId: string
    roleId: string
    assignedAt?: Date | string
    hoursWorked?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyWorkerInput = {
    id?: string
    jobId?: string | null
    message: string
    sentAt?: Date | string
  }

  export type WorkerEligibleRoleUpdateWithoutWorkerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutEligibleWorkersNestedInput
  }

  export type WorkerEligibleRoleUncheckedUpdateWithoutWorkerInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkerEligibleRoleUncheckedUpdateManyWithoutWorkerInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobAssignmentUpdateWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutAssignmentsNestedInput
    role?: RoleUpdateOneRequiredWithoutJobAssignmentsNestedInput
  }

  export type JobAssignmentUncheckedUpdateWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobAssignmentUncheckedUpdateManyWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkerEligibleRoleCreateManyRoleInput = {
    workerId: string
    createdAt?: Date | string
  }

  export type JobRoleRequirementCreateManyRoleInput = {
    id?: string
    jobId: string
    numberOfWorkersNeeded: number
    payRateForJob: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobAssignmentCreateManyRoleInput = {
    id?: string
    jobId: string
    workerId: string
    assignedAt?: Date | string
    hoursWorked?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkerEligibleRoleUpdateWithoutRoleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worker?: WorkerUpdateOneRequiredWithoutEligibleRolesNestedInput
  }

  export type WorkerEligibleRoleUncheckedUpdateWithoutRoleInput = {
    workerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkerEligibleRoleUncheckedUpdateManyWithoutRoleInput = {
    workerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobRoleRequirementUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberOfWorkersNeeded?: IntFieldUpdateOperationsInput | number
    payRateForJob?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutRoleRequirementsNestedInput
  }

  export type JobRoleRequirementUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    numberOfWorkersNeeded?: IntFieldUpdateOperationsInput | number
    payRateForJob?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobRoleRequirementUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    numberOfWorkersNeeded?: IntFieldUpdateOperationsInput | number
    payRateForJob?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobAssignmentUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutAssignmentsNestedInput
    worker?: WorkerUpdateOneRequiredWithoutJobAssignmentsNestedInput
  }

  export type JobAssignmentUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobAssignmentUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobRoleRequirementCreateManyJobInput = {
    id?: string
    roleId: string
    numberOfWorkersNeeded: number
    payRateForJob: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobAssignmentCreateManyJobInput = {
    id?: string
    workerId: string
    roleId: string
    assignedAt?: Date | string
    hoursWorked?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyJobInput = {
    id?: string
    workerId: string
    message: string
    sentAt?: Date | string
  }

  export type JobRoleRequirementUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberOfWorkersNeeded?: IntFieldUpdateOperationsInput | number
    payRateForJob?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutJobRequirementsNestedInput
  }

  export type JobRoleRequirementUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    numberOfWorkersNeeded?: IntFieldUpdateOperationsInput | number
    payRateForJob?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobRoleRequirementUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    numberOfWorkersNeeded?: IntFieldUpdateOperationsInput | number
    payRateForJob?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobAssignmentUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worker?: WorkerUpdateOneRequiredWithoutJobAssignmentsNestedInput
    role?: RoleUpdateOneRequiredWithoutJobAssignmentsNestedInput
  }

  export type JobAssignmentUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobAssignmentUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worker?: WorkerUpdateOneRequiredWithoutNotificationsSentNestedInput
  }

  export type NotificationUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}