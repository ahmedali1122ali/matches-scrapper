
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
 * Model Today
 * 
 */
export type Today = $Result.DefaultSelection<Prisma.$TodayPayload>
/**
 * Model Tomorrow
 * 
 */
export type Tomorrow = $Result.DefaultSelection<Prisma.$TomorrowPayload>
/**
 * Model Yesterday
 * 
 */
export type Yesterday = $Result.DefaultSelection<Prisma.$YesterdayPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Todays
 * const todays = await prisma.today.findMany()
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
   * // Fetch zero or more Todays
   * const todays = await prisma.today.findMany()
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
   * `prisma.today`: Exposes CRUD operations for the **Today** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Todays
    * const todays = await prisma.today.findMany()
    * ```
    */
  get today(): Prisma.TodayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tomorrow`: Exposes CRUD operations for the **Tomorrow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tomorrows
    * const tomorrows = await prisma.tomorrow.findMany()
    * ```
    */
  get tomorrow(): Prisma.TomorrowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.yesterday`: Exposes CRUD operations for the **Yesterday** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Yesterdays
    * const yesterdays = await prisma.yesterday.findMany()
    * ```
    */
  get yesterday(): Prisma.YesterdayDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Today: 'Today',
    Tomorrow: 'Tomorrow',
    Yesterday: 'Yesterday'
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
      modelProps: "today" | "tomorrow" | "yesterday"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Today: {
        payload: Prisma.$TodayPayload<ExtArgs>
        fields: Prisma.TodayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TodayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TodayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayPayload>
          }
          findFirst: {
            args: Prisma.TodayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TodayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayPayload>
          }
          findMany: {
            args: Prisma.TodayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayPayload>[]
          }
          create: {
            args: Prisma.TodayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayPayload>
          }
          createMany: {
            args: Prisma.TodayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TodayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayPayload>
          }
          update: {
            args: Prisma.TodayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayPayload>
          }
          deleteMany: {
            args: Prisma.TodayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TodayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TodayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayPayload>
          }
          aggregate: {
            args: Prisma.TodayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToday>
          }
          groupBy: {
            args: Prisma.TodayGroupByArgs<ExtArgs>
            result: $Utils.Optional<TodayGroupByOutputType>[]
          }
          count: {
            args: Prisma.TodayCountArgs<ExtArgs>
            result: $Utils.Optional<TodayCountAggregateOutputType> | number
          }
        }
      }
      Tomorrow: {
        payload: Prisma.$TomorrowPayload<ExtArgs>
        fields: Prisma.TomorrowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TomorrowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TomorrowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TomorrowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TomorrowPayload>
          }
          findFirst: {
            args: Prisma.TomorrowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TomorrowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TomorrowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TomorrowPayload>
          }
          findMany: {
            args: Prisma.TomorrowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TomorrowPayload>[]
          }
          create: {
            args: Prisma.TomorrowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TomorrowPayload>
          }
          createMany: {
            args: Prisma.TomorrowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TomorrowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TomorrowPayload>
          }
          update: {
            args: Prisma.TomorrowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TomorrowPayload>
          }
          deleteMany: {
            args: Prisma.TomorrowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TomorrowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TomorrowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TomorrowPayload>
          }
          aggregate: {
            args: Prisma.TomorrowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTomorrow>
          }
          groupBy: {
            args: Prisma.TomorrowGroupByArgs<ExtArgs>
            result: $Utils.Optional<TomorrowGroupByOutputType>[]
          }
          count: {
            args: Prisma.TomorrowCountArgs<ExtArgs>
            result: $Utils.Optional<TomorrowCountAggregateOutputType> | number
          }
        }
      }
      Yesterday: {
        payload: Prisma.$YesterdayPayload<ExtArgs>
        fields: Prisma.YesterdayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YesterdayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YesterdayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YesterdayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YesterdayPayload>
          }
          findFirst: {
            args: Prisma.YesterdayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YesterdayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YesterdayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YesterdayPayload>
          }
          findMany: {
            args: Prisma.YesterdayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YesterdayPayload>[]
          }
          create: {
            args: Prisma.YesterdayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YesterdayPayload>
          }
          createMany: {
            args: Prisma.YesterdayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.YesterdayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YesterdayPayload>
          }
          update: {
            args: Prisma.YesterdayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YesterdayPayload>
          }
          deleteMany: {
            args: Prisma.YesterdayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.YesterdayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.YesterdayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YesterdayPayload>
          }
          aggregate: {
            args: Prisma.YesterdayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateYesterday>
          }
          groupBy: {
            args: Prisma.YesterdayGroupByArgs<ExtArgs>
            result: $Utils.Optional<YesterdayGroupByOutputType>[]
          }
          count: {
            args: Prisma.YesterdayCountArgs<ExtArgs>
            result: $Utils.Optional<YesterdayCountAggregateOutputType> | number
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
    today?: TodayOmit
    tomorrow?: TomorrowOmit
    yesterday?: YesterdayOmit
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
   * Models
   */

  /**
   * Model Today
   */

  export type AggregateToday = {
    _count: TodayCountAggregateOutputType | null
    _avg: TodayAvgAggregateOutputType | null
    _sum: TodaySumAggregateOutputType | null
    _min: TodayMinAggregateOutputType | null
    _max: TodayMaxAggregateOutputType | null
  }

  export type TodayAvgAggregateOutputType = {
    id: number | null
  }

  export type TodaySumAggregateOutputType = {
    id: number | null
  }

  export type TodayMinAggregateOutputType = {
    id: number | null
    link: string | null
    league: string | null
    leagueLogo: string | null
    teamA: string | null
    teamAImg: string | null
    teamB: string | null
    teamBImg: string | null
    scoreA: string | null
    scoreB: string | null
    matchTime: string | null
    matchStatus: string | null
    matchDate: string | null
    channel: string | null
  }

  export type TodayMaxAggregateOutputType = {
    id: number | null
    link: string | null
    league: string | null
    leagueLogo: string | null
    teamA: string | null
    teamAImg: string | null
    teamB: string | null
    teamBImg: string | null
    scoreA: string | null
    scoreB: string | null
    matchTime: string | null
    matchStatus: string | null
    matchDate: string | null
    channel: string | null
  }

  export type TodayCountAggregateOutputType = {
    id: number
    link: number
    league: number
    leagueLogo: number
    teamA: number
    teamAImg: number
    teamB: number
    teamBImg: number
    scoreA: number
    scoreB: number
    matchTime: number
    matchStatus: number
    matchDate: number
    channel: number
    _all: number
  }


  export type TodayAvgAggregateInputType = {
    id?: true
  }

  export type TodaySumAggregateInputType = {
    id?: true
  }

  export type TodayMinAggregateInputType = {
    id?: true
    link?: true
    league?: true
    leagueLogo?: true
    teamA?: true
    teamAImg?: true
    teamB?: true
    teamBImg?: true
    scoreA?: true
    scoreB?: true
    matchTime?: true
    matchStatus?: true
    matchDate?: true
    channel?: true
  }

  export type TodayMaxAggregateInputType = {
    id?: true
    link?: true
    league?: true
    leagueLogo?: true
    teamA?: true
    teamAImg?: true
    teamB?: true
    teamBImg?: true
    scoreA?: true
    scoreB?: true
    matchTime?: true
    matchStatus?: true
    matchDate?: true
    channel?: true
  }

  export type TodayCountAggregateInputType = {
    id?: true
    link?: true
    league?: true
    leagueLogo?: true
    teamA?: true
    teamAImg?: true
    teamB?: true
    teamBImg?: true
    scoreA?: true
    scoreB?: true
    matchTime?: true
    matchStatus?: true
    matchDate?: true
    channel?: true
    _all?: true
  }

  export type TodayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Today to aggregate.
     */
    where?: TodayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todays to fetch.
     */
    orderBy?: TodayOrderByWithRelationInput | TodayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TodayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Todays
    **/
    _count?: true | TodayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TodayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TodaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TodayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TodayMaxAggregateInputType
  }

  export type GetTodayAggregateType<T extends TodayAggregateArgs> = {
        [P in keyof T & keyof AggregateToday]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToday[P]>
      : GetScalarType<T[P], AggregateToday[P]>
  }




  export type TodayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodayWhereInput
    orderBy?: TodayOrderByWithAggregationInput | TodayOrderByWithAggregationInput[]
    by: TodayScalarFieldEnum[] | TodayScalarFieldEnum
    having?: TodayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TodayCountAggregateInputType | true
    _avg?: TodayAvgAggregateInputType
    _sum?: TodaySumAggregateInputType
    _min?: TodayMinAggregateInputType
    _max?: TodayMaxAggregateInputType
  }

  export type TodayGroupByOutputType = {
    id: number
    link: string
    league: string | null
    leagueLogo: string | null
    teamA: string | null
    teamAImg: string | null
    teamB: string | null
    teamBImg: string | null
    scoreA: string | null
    scoreB: string | null
    matchTime: string | null
    matchStatus: string | null
    matchDate: string | null
    channel: string
    _count: TodayCountAggregateOutputType | null
    _avg: TodayAvgAggregateOutputType | null
    _sum: TodaySumAggregateOutputType | null
    _min: TodayMinAggregateOutputType | null
    _max: TodayMaxAggregateOutputType | null
  }

  type GetTodayGroupByPayload<T extends TodayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TodayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TodayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TodayGroupByOutputType[P]>
            : GetScalarType<T[P], TodayGroupByOutputType[P]>
        }
      >
    >


  export type TodaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    link?: boolean
    league?: boolean
    leagueLogo?: boolean
    teamA?: boolean
    teamAImg?: boolean
    teamB?: boolean
    teamBImg?: boolean
    scoreA?: boolean
    scoreB?: boolean
    matchTime?: boolean
    matchStatus?: boolean
    matchDate?: boolean
    channel?: boolean
  }, ExtArgs["result"]["today"]>



  export type TodaySelectScalar = {
    id?: boolean
    link?: boolean
    league?: boolean
    leagueLogo?: boolean
    teamA?: boolean
    teamAImg?: boolean
    teamB?: boolean
    teamBImg?: boolean
    scoreA?: boolean
    scoreB?: boolean
    matchTime?: boolean
    matchStatus?: boolean
    matchDate?: boolean
    channel?: boolean
  }

  export type TodayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "link" | "league" | "leagueLogo" | "teamA" | "teamAImg" | "teamB" | "teamBImg" | "scoreA" | "scoreB" | "matchTime" | "matchStatus" | "matchDate" | "channel", ExtArgs["result"]["today"]>

  export type $TodayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Today"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      link: string
      league: string | null
      leagueLogo: string | null
      teamA: string | null
      teamAImg: string | null
      teamB: string | null
      teamBImg: string | null
      scoreA: string | null
      scoreB: string | null
      matchTime: string | null
      matchStatus: string | null
      matchDate: string | null
      channel: string
    }, ExtArgs["result"]["today"]>
    composites: {}
  }

  type TodayGetPayload<S extends boolean | null | undefined | TodayDefaultArgs> = $Result.GetResult<Prisma.$TodayPayload, S>

  type TodayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TodayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TodayCountAggregateInputType | true
    }

  export interface TodayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Today'], meta: { name: 'Today' } }
    /**
     * Find zero or one Today that matches the filter.
     * @param {TodayFindUniqueArgs} args - Arguments to find a Today
     * @example
     * // Get one Today
     * const today = await prisma.today.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TodayFindUniqueArgs>(args: SelectSubset<T, TodayFindUniqueArgs<ExtArgs>>): Prisma__TodayClient<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Today that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TodayFindUniqueOrThrowArgs} args - Arguments to find a Today
     * @example
     * // Get one Today
     * const today = await prisma.today.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TodayFindUniqueOrThrowArgs>(args: SelectSubset<T, TodayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TodayClient<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Today that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayFindFirstArgs} args - Arguments to find a Today
     * @example
     * // Get one Today
     * const today = await prisma.today.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TodayFindFirstArgs>(args?: SelectSubset<T, TodayFindFirstArgs<ExtArgs>>): Prisma__TodayClient<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Today that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayFindFirstOrThrowArgs} args - Arguments to find a Today
     * @example
     * // Get one Today
     * const today = await prisma.today.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TodayFindFirstOrThrowArgs>(args?: SelectSubset<T, TodayFindFirstOrThrowArgs<ExtArgs>>): Prisma__TodayClient<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Todays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Todays
     * const todays = await prisma.today.findMany()
     * 
     * // Get first 10 Todays
     * const todays = await prisma.today.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const todayWithIdOnly = await prisma.today.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TodayFindManyArgs>(args?: SelectSubset<T, TodayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Today.
     * @param {TodayCreateArgs} args - Arguments to create a Today.
     * @example
     * // Create one Today
     * const Today = await prisma.today.create({
     *   data: {
     *     // ... data to create a Today
     *   }
     * })
     * 
     */
    create<T extends TodayCreateArgs>(args: SelectSubset<T, TodayCreateArgs<ExtArgs>>): Prisma__TodayClient<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Todays.
     * @param {TodayCreateManyArgs} args - Arguments to create many Todays.
     * @example
     * // Create many Todays
     * const today = await prisma.today.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TodayCreateManyArgs>(args?: SelectSubset<T, TodayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Today.
     * @param {TodayDeleteArgs} args - Arguments to delete one Today.
     * @example
     * // Delete one Today
     * const Today = await prisma.today.delete({
     *   where: {
     *     // ... filter to delete one Today
     *   }
     * })
     * 
     */
    delete<T extends TodayDeleteArgs>(args: SelectSubset<T, TodayDeleteArgs<ExtArgs>>): Prisma__TodayClient<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Today.
     * @param {TodayUpdateArgs} args - Arguments to update one Today.
     * @example
     * // Update one Today
     * const today = await prisma.today.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TodayUpdateArgs>(args: SelectSubset<T, TodayUpdateArgs<ExtArgs>>): Prisma__TodayClient<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Todays.
     * @param {TodayDeleteManyArgs} args - Arguments to filter Todays to delete.
     * @example
     * // Delete a few Todays
     * const { count } = await prisma.today.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TodayDeleteManyArgs>(args?: SelectSubset<T, TodayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Todays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Todays
     * const today = await prisma.today.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TodayUpdateManyArgs>(args: SelectSubset<T, TodayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Today.
     * @param {TodayUpsertArgs} args - Arguments to update or create a Today.
     * @example
     * // Update or create a Today
     * const today = await prisma.today.upsert({
     *   create: {
     *     // ... data to create a Today
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Today we want to update
     *   }
     * })
     */
    upsert<T extends TodayUpsertArgs>(args: SelectSubset<T, TodayUpsertArgs<ExtArgs>>): Prisma__TodayClient<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Todays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayCountArgs} args - Arguments to filter Todays to count.
     * @example
     * // Count the number of Todays
     * const count = await prisma.today.count({
     *   where: {
     *     // ... the filter for the Todays we want to count
     *   }
     * })
    **/
    count<T extends TodayCountArgs>(
      args?: Subset<T, TodayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TodayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Today.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TodayAggregateArgs>(args: Subset<T, TodayAggregateArgs>): Prisma.PrismaPromise<GetTodayAggregateType<T>>

    /**
     * Group by Today.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayGroupByArgs} args - Group by arguments.
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
      T extends TodayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TodayGroupByArgs['orderBy'] }
        : { orderBy?: TodayGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TodayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Today model
   */
  readonly fields: TodayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Today.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TodayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Today model
   */
  interface TodayFieldRefs {
    readonly id: FieldRef<"Today", 'Int'>
    readonly link: FieldRef<"Today", 'String'>
    readonly league: FieldRef<"Today", 'String'>
    readonly leagueLogo: FieldRef<"Today", 'String'>
    readonly teamA: FieldRef<"Today", 'String'>
    readonly teamAImg: FieldRef<"Today", 'String'>
    readonly teamB: FieldRef<"Today", 'String'>
    readonly teamBImg: FieldRef<"Today", 'String'>
    readonly scoreA: FieldRef<"Today", 'String'>
    readonly scoreB: FieldRef<"Today", 'String'>
    readonly matchTime: FieldRef<"Today", 'String'>
    readonly matchStatus: FieldRef<"Today", 'String'>
    readonly matchDate: FieldRef<"Today", 'String'>
    readonly channel: FieldRef<"Today", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Today findUnique
   */
  export type TodayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Today
     */
    select?: TodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Today
     */
    omit?: TodayOmit<ExtArgs> | null
    /**
     * Filter, which Today to fetch.
     */
    where: TodayWhereUniqueInput
  }

  /**
   * Today findUniqueOrThrow
   */
  export type TodayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Today
     */
    select?: TodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Today
     */
    omit?: TodayOmit<ExtArgs> | null
    /**
     * Filter, which Today to fetch.
     */
    where: TodayWhereUniqueInput
  }

  /**
   * Today findFirst
   */
  export type TodayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Today
     */
    select?: TodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Today
     */
    omit?: TodayOmit<ExtArgs> | null
    /**
     * Filter, which Today to fetch.
     */
    where?: TodayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todays to fetch.
     */
    orderBy?: TodayOrderByWithRelationInput | TodayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todays.
     */
    cursor?: TodayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todays.
     */
    distinct?: TodayScalarFieldEnum | TodayScalarFieldEnum[]
  }

  /**
   * Today findFirstOrThrow
   */
  export type TodayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Today
     */
    select?: TodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Today
     */
    omit?: TodayOmit<ExtArgs> | null
    /**
     * Filter, which Today to fetch.
     */
    where?: TodayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todays to fetch.
     */
    orderBy?: TodayOrderByWithRelationInput | TodayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todays.
     */
    cursor?: TodayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todays.
     */
    distinct?: TodayScalarFieldEnum | TodayScalarFieldEnum[]
  }

  /**
   * Today findMany
   */
  export type TodayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Today
     */
    select?: TodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Today
     */
    omit?: TodayOmit<ExtArgs> | null
    /**
     * Filter, which Todays to fetch.
     */
    where?: TodayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todays to fetch.
     */
    orderBy?: TodayOrderByWithRelationInput | TodayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Todays.
     */
    cursor?: TodayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todays.
     */
    skip?: number
    distinct?: TodayScalarFieldEnum | TodayScalarFieldEnum[]
  }

  /**
   * Today create
   */
  export type TodayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Today
     */
    select?: TodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Today
     */
    omit?: TodayOmit<ExtArgs> | null
    /**
     * The data needed to create a Today.
     */
    data?: XOR<TodayCreateInput, TodayUncheckedCreateInput>
  }

  /**
   * Today createMany
   */
  export type TodayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Todays.
     */
    data: TodayCreateManyInput | TodayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Today update
   */
  export type TodayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Today
     */
    select?: TodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Today
     */
    omit?: TodayOmit<ExtArgs> | null
    /**
     * The data needed to update a Today.
     */
    data: XOR<TodayUpdateInput, TodayUncheckedUpdateInput>
    /**
     * Choose, which Today to update.
     */
    where: TodayWhereUniqueInput
  }

  /**
   * Today updateMany
   */
  export type TodayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Todays.
     */
    data: XOR<TodayUpdateManyMutationInput, TodayUncheckedUpdateManyInput>
    /**
     * Filter which Todays to update
     */
    where?: TodayWhereInput
    /**
     * Limit how many Todays to update.
     */
    limit?: number
  }

  /**
   * Today upsert
   */
  export type TodayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Today
     */
    select?: TodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Today
     */
    omit?: TodayOmit<ExtArgs> | null
    /**
     * The filter to search for the Today to update in case it exists.
     */
    where: TodayWhereUniqueInput
    /**
     * In case the Today found by the `where` argument doesn't exist, create a new Today with this data.
     */
    create: XOR<TodayCreateInput, TodayUncheckedCreateInput>
    /**
     * In case the Today was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TodayUpdateInput, TodayUncheckedUpdateInput>
  }

  /**
   * Today delete
   */
  export type TodayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Today
     */
    select?: TodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Today
     */
    omit?: TodayOmit<ExtArgs> | null
    /**
     * Filter which Today to delete.
     */
    where: TodayWhereUniqueInput
  }

  /**
   * Today deleteMany
   */
  export type TodayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Todays to delete
     */
    where?: TodayWhereInput
    /**
     * Limit how many Todays to delete.
     */
    limit?: number
  }

  /**
   * Today without action
   */
  export type TodayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Today
     */
    select?: TodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Today
     */
    omit?: TodayOmit<ExtArgs> | null
  }


  /**
   * Model Tomorrow
   */

  export type AggregateTomorrow = {
    _count: TomorrowCountAggregateOutputType | null
    _avg: TomorrowAvgAggregateOutputType | null
    _sum: TomorrowSumAggregateOutputType | null
    _min: TomorrowMinAggregateOutputType | null
    _max: TomorrowMaxAggregateOutputType | null
  }

  export type TomorrowAvgAggregateOutputType = {
    id: number | null
  }

  export type TomorrowSumAggregateOutputType = {
    id: number | null
  }

  export type TomorrowMinAggregateOutputType = {
    id: number | null
    link: string | null
    league: string | null
    leagueLogo: string | null
    teamA: string | null
    teamAImg: string | null
    teamB: string | null
    teamBImg: string | null
    scoreA: string | null
    scoreB: string | null
    matchTime: string | null
    matchStatus: string | null
    matchDate: string | null
    channel: string | null
  }

  export type TomorrowMaxAggregateOutputType = {
    id: number | null
    link: string | null
    league: string | null
    leagueLogo: string | null
    teamA: string | null
    teamAImg: string | null
    teamB: string | null
    teamBImg: string | null
    scoreA: string | null
    scoreB: string | null
    matchTime: string | null
    matchStatus: string | null
    matchDate: string | null
    channel: string | null
  }

  export type TomorrowCountAggregateOutputType = {
    id: number
    link: number
    league: number
    leagueLogo: number
    teamA: number
    teamAImg: number
    teamB: number
    teamBImg: number
    scoreA: number
    scoreB: number
    matchTime: number
    matchStatus: number
    matchDate: number
    channel: number
    _all: number
  }


  export type TomorrowAvgAggregateInputType = {
    id?: true
  }

  export type TomorrowSumAggregateInputType = {
    id?: true
  }

  export type TomorrowMinAggregateInputType = {
    id?: true
    link?: true
    league?: true
    leagueLogo?: true
    teamA?: true
    teamAImg?: true
    teamB?: true
    teamBImg?: true
    scoreA?: true
    scoreB?: true
    matchTime?: true
    matchStatus?: true
    matchDate?: true
    channel?: true
  }

  export type TomorrowMaxAggregateInputType = {
    id?: true
    link?: true
    league?: true
    leagueLogo?: true
    teamA?: true
    teamAImg?: true
    teamB?: true
    teamBImg?: true
    scoreA?: true
    scoreB?: true
    matchTime?: true
    matchStatus?: true
    matchDate?: true
    channel?: true
  }

  export type TomorrowCountAggregateInputType = {
    id?: true
    link?: true
    league?: true
    leagueLogo?: true
    teamA?: true
    teamAImg?: true
    teamB?: true
    teamBImg?: true
    scoreA?: true
    scoreB?: true
    matchTime?: true
    matchStatus?: true
    matchDate?: true
    channel?: true
    _all?: true
  }

  export type TomorrowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tomorrow to aggregate.
     */
    where?: TomorrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tomorrows to fetch.
     */
    orderBy?: TomorrowOrderByWithRelationInput | TomorrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TomorrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tomorrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tomorrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tomorrows
    **/
    _count?: true | TomorrowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TomorrowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TomorrowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TomorrowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TomorrowMaxAggregateInputType
  }

  export type GetTomorrowAggregateType<T extends TomorrowAggregateArgs> = {
        [P in keyof T & keyof AggregateTomorrow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTomorrow[P]>
      : GetScalarType<T[P], AggregateTomorrow[P]>
  }




  export type TomorrowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TomorrowWhereInput
    orderBy?: TomorrowOrderByWithAggregationInput | TomorrowOrderByWithAggregationInput[]
    by: TomorrowScalarFieldEnum[] | TomorrowScalarFieldEnum
    having?: TomorrowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TomorrowCountAggregateInputType | true
    _avg?: TomorrowAvgAggregateInputType
    _sum?: TomorrowSumAggregateInputType
    _min?: TomorrowMinAggregateInputType
    _max?: TomorrowMaxAggregateInputType
  }

  export type TomorrowGroupByOutputType = {
    id: number
    link: string
    league: string | null
    leagueLogo: string | null
    teamA: string | null
    teamAImg: string | null
    teamB: string | null
    teamBImg: string | null
    scoreA: string | null
    scoreB: string | null
    matchTime: string | null
    matchStatus: string | null
    matchDate: string | null
    channel: string
    _count: TomorrowCountAggregateOutputType | null
    _avg: TomorrowAvgAggregateOutputType | null
    _sum: TomorrowSumAggregateOutputType | null
    _min: TomorrowMinAggregateOutputType | null
    _max: TomorrowMaxAggregateOutputType | null
  }

  type GetTomorrowGroupByPayload<T extends TomorrowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TomorrowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TomorrowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TomorrowGroupByOutputType[P]>
            : GetScalarType<T[P], TomorrowGroupByOutputType[P]>
        }
      >
    >


  export type TomorrowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    link?: boolean
    league?: boolean
    leagueLogo?: boolean
    teamA?: boolean
    teamAImg?: boolean
    teamB?: boolean
    teamBImg?: boolean
    scoreA?: boolean
    scoreB?: boolean
    matchTime?: boolean
    matchStatus?: boolean
    matchDate?: boolean
    channel?: boolean
  }, ExtArgs["result"]["tomorrow"]>



  export type TomorrowSelectScalar = {
    id?: boolean
    link?: boolean
    league?: boolean
    leagueLogo?: boolean
    teamA?: boolean
    teamAImg?: boolean
    teamB?: boolean
    teamBImg?: boolean
    scoreA?: boolean
    scoreB?: boolean
    matchTime?: boolean
    matchStatus?: boolean
    matchDate?: boolean
    channel?: boolean
  }

  export type TomorrowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "link" | "league" | "leagueLogo" | "teamA" | "teamAImg" | "teamB" | "teamBImg" | "scoreA" | "scoreB" | "matchTime" | "matchStatus" | "matchDate" | "channel", ExtArgs["result"]["tomorrow"]>

  export type $TomorrowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tomorrow"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      link: string
      league: string | null
      leagueLogo: string | null
      teamA: string | null
      teamAImg: string | null
      teamB: string | null
      teamBImg: string | null
      scoreA: string | null
      scoreB: string | null
      matchTime: string | null
      matchStatus: string | null
      matchDate: string | null
      channel: string
    }, ExtArgs["result"]["tomorrow"]>
    composites: {}
  }

  type TomorrowGetPayload<S extends boolean | null | undefined | TomorrowDefaultArgs> = $Result.GetResult<Prisma.$TomorrowPayload, S>

  type TomorrowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TomorrowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TomorrowCountAggregateInputType | true
    }

  export interface TomorrowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tomorrow'], meta: { name: 'Tomorrow' } }
    /**
     * Find zero or one Tomorrow that matches the filter.
     * @param {TomorrowFindUniqueArgs} args - Arguments to find a Tomorrow
     * @example
     * // Get one Tomorrow
     * const tomorrow = await prisma.tomorrow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TomorrowFindUniqueArgs>(args: SelectSubset<T, TomorrowFindUniqueArgs<ExtArgs>>): Prisma__TomorrowClient<$Result.GetResult<Prisma.$TomorrowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tomorrow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TomorrowFindUniqueOrThrowArgs} args - Arguments to find a Tomorrow
     * @example
     * // Get one Tomorrow
     * const tomorrow = await prisma.tomorrow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TomorrowFindUniqueOrThrowArgs>(args: SelectSubset<T, TomorrowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TomorrowClient<$Result.GetResult<Prisma.$TomorrowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tomorrow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TomorrowFindFirstArgs} args - Arguments to find a Tomorrow
     * @example
     * // Get one Tomorrow
     * const tomorrow = await prisma.tomorrow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TomorrowFindFirstArgs>(args?: SelectSubset<T, TomorrowFindFirstArgs<ExtArgs>>): Prisma__TomorrowClient<$Result.GetResult<Prisma.$TomorrowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tomorrow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TomorrowFindFirstOrThrowArgs} args - Arguments to find a Tomorrow
     * @example
     * // Get one Tomorrow
     * const tomorrow = await prisma.tomorrow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TomorrowFindFirstOrThrowArgs>(args?: SelectSubset<T, TomorrowFindFirstOrThrowArgs<ExtArgs>>): Prisma__TomorrowClient<$Result.GetResult<Prisma.$TomorrowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tomorrows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TomorrowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tomorrows
     * const tomorrows = await prisma.tomorrow.findMany()
     * 
     * // Get first 10 Tomorrows
     * const tomorrows = await prisma.tomorrow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tomorrowWithIdOnly = await prisma.tomorrow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TomorrowFindManyArgs>(args?: SelectSubset<T, TomorrowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TomorrowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tomorrow.
     * @param {TomorrowCreateArgs} args - Arguments to create a Tomorrow.
     * @example
     * // Create one Tomorrow
     * const Tomorrow = await prisma.tomorrow.create({
     *   data: {
     *     // ... data to create a Tomorrow
     *   }
     * })
     * 
     */
    create<T extends TomorrowCreateArgs>(args: SelectSubset<T, TomorrowCreateArgs<ExtArgs>>): Prisma__TomorrowClient<$Result.GetResult<Prisma.$TomorrowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tomorrows.
     * @param {TomorrowCreateManyArgs} args - Arguments to create many Tomorrows.
     * @example
     * // Create many Tomorrows
     * const tomorrow = await prisma.tomorrow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TomorrowCreateManyArgs>(args?: SelectSubset<T, TomorrowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tomorrow.
     * @param {TomorrowDeleteArgs} args - Arguments to delete one Tomorrow.
     * @example
     * // Delete one Tomorrow
     * const Tomorrow = await prisma.tomorrow.delete({
     *   where: {
     *     // ... filter to delete one Tomorrow
     *   }
     * })
     * 
     */
    delete<T extends TomorrowDeleteArgs>(args: SelectSubset<T, TomorrowDeleteArgs<ExtArgs>>): Prisma__TomorrowClient<$Result.GetResult<Prisma.$TomorrowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tomorrow.
     * @param {TomorrowUpdateArgs} args - Arguments to update one Tomorrow.
     * @example
     * // Update one Tomorrow
     * const tomorrow = await prisma.tomorrow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TomorrowUpdateArgs>(args: SelectSubset<T, TomorrowUpdateArgs<ExtArgs>>): Prisma__TomorrowClient<$Result.GetResult<Prisma.$TomorrowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tomorrows.
     * @param {TomorrowDeleteManyArgs} args - Arguments to filter Tomorrows to delete.
     * @example
     * // Delete a few Tomorrows
     * const { count } = await prisma.tomorrow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TomorrowDeleteManyArgs>(args?: SelectSubset<T, TomorrowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tomorrows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TomorrowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tomorrows
     * const tomorrow = await prisma.tomorrow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TomorrowUpdateManyArgs>(args: SelectSubset<T, TomorrowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tomorrow.
     * @param {TomorrowUpsertArgs} args - Arguments to update or create a Tomorrow.
     * @example
     * // Update or create a Tomorrow
     * const tomorrow = await prisma.tomorrow.upsert({
     *   create: {
     *     // ... data to create a Tomorrow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tomorrow we want to update
     *   }
     * })
     */
    upsert<T extends TomorrowUpsertArgs>(args: SelectSubset<T, TomorrowUpsertArgs<ExtArgs>>): Prisma__TomorrowClient<$Result.GetResult<Prisma.$TomorrowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tomorrows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TomorrowCountArgs} args - Arguments to filter Tomorrows to count.
     * @example
     * // Count the number of Tomorrows
     * const count = await prisma.tomorrow.count({
     *   where: {
     *     // ... the filter for the Tomorrows we want to count
     *   }
     * })
    **/
    count<T extends TomorrowCountArgs>(
      args?: Subset<T, TomorrowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TomorrowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tomorrow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TomorrowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TomorrowAggregateArgs>(args: Subset<T, TomorrowAggregateArgs>): Prisma.PrismaPromise<GetTomorrowAggregateType<T>>

    /**
     * Group by Tomorrow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TomorrowGroupByArgs} args - Group by arguments.
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
      T extends TomorrowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TomorrowGroupByArgs['orderBy'] }
        : { orderBy?: TomorrowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TomorrowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTomorrowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tomorrow model
   */
  readonly fields: TomorrowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tomorrow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TomorrowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Tomorrow model
   */
  interface TomorrowFieldRefs {
    readonly id: FieldRef<"Tomorrow", 'Int'>
    readonly link: FieldRef<"Tomorrow", 'String'>
    readonly league: FieldRef<"Tomorrow", 'String'>
    readonly leagueLogo: FieldRef<"Tomorrow", 'String'>
    readonly teamA: FieldRef<"Tomorrow", 'String'>
    readonly teamAImg: FieldRef<"Tomorrow", 'String'>
    readonly teamB: FieldRef<"Tomorrow", 'String'>
    readonly teamBImg: FieldRef<"Tomorrow", 'String'>
    readonly scoreA: FieldRef<"Tomorrow", 'String'>
    readonly scoreB: FieldRef<"Tomorrow", 'String'>
    readonly matchTime: FieldRef<"Tomorrow", 'String'>
    readonly matchStatus: FieldRef<"Tomorrow", 'String'>
    readonly matchDate: FieldRef<"Tomorrow", 'String'>
    readonly channel: FieldRef<"Tomorrow", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tomorrow findUnique
   */
  export type TomorrowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tomorrow
     */
    select?: TomorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tomorrow
     */
    omit?: TomorrowOmit<ExtArgs> | null
    /**
     * Filter, which Tomorrow to fetch.
     */
    where: TomorrowWhereUniqueInput
  }

  /**
   * Tomorrow findUniqueOrThrow
   */
  export type TomorrowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tomorrow
     */
    select?: TomorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tomorrow
     */
    omit?: TomorrowOmit<ExtArgs> | null
    /**
     * Filter, which Tomorrow to fetch.
     */
    where: TomorrowWhereUniqueInput
  }

  /**
   * Tomorrow findFirst
   */
  export type TomorrowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tomorrow
     */
    select?: TomorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tomorrow
     */
    omit?: TomorrowOmit<ExtArgs> | null
    /**
     * Filter, which Tomorrow to fetch.
     */
    where?: TomorrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tomorrows to fetch.
     */
    orderBy?: TomorrowOrderByWithRelationInput | TomorrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tomorrows.
     */
    cursor?: TomorrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tomorrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tomorrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tomorrows.
     */
    distinct?: TomorrowScalarFieldEnum | TomorrowScalarFieldEnum[]
  }

  /**
   * Tomorrow findFirstOrThrow
   */
  export type TomorrowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tomorrow
     */
    select?: TomorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tomorrow
     */
    omit?: TomorrowOmit<ExtArgs> | null
    /**
     * Filter, which Tomorrow to fetch.
     */
    where?: TomorrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tomorrows to fetch.
     */
    orderBy?: TomorrowOrderByWithRelationInput | TomorrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tomorrows.
     */
    cursor?: TomorrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tomorrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tomorrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tomorrows.
     */
    distinct?: TomorrowScalarFieldEnum | TomorrowScalarFieldEnum[]
  }

  /**
   * Tomorrow findMany
   */
  export type TomorrowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tomorrow
     */
    select?: TomorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tomorrow
     */
    omit?: TomorrowOmit<ExtArgs> | null
    /**
     * Filter, which Tomorrows to fetch.
     */
    where?: TomorrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tomorrows to fetch.
     */
    orderBy?: TomorrowOrderByWithRelationInput | TomorrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tomorrows.
     */
    cursor?: TomorrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tomorrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tomorrows.
     */
    skip?: number
    distinct?: TomorrowScalarFieldEnum | TomorrowScalarFieldEnum[]
  }

  /**
   * Tomorrow create
   */
  export type TomorrowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tomorrow
     */
    select?: TomorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tomorrow
     */
    omit?: TomorrowOmit<ExtArgs> | null
    /**
     * The data needed to create a Tomorrow.
     */
    data?: XOR<TomorrowCreateInput, TomorrowUncheckedCreateInput>
  }

  /**
   * Tomorrow createMany
   */
  export type TomorrowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tomorrows.
     */
    data: TomorrowCreateManyInput | TomorrowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tomorrow update
   */
  export type TomorrowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tomorrow
     */
    select?: TomorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tomorrow
     */
    omit?: TomorrowOmit<ExtArgs> | null
    /**
     * The data needed to update a Tomorrow.
     */
    data: XOR<TomorrowUpdateInput, TomorrowUncheckedUpdateInput>
    /**
     * Choose, which Tomorrow to update.
     */
    where: TomorrowWhereUniqueInput
  }

  /**
   * Tomorrow updateMany
   */
  export type TomorrowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tomorrows.
     */
    data: XOR<TomorrowUpdateManyMutationInput, TomorrowUncheckedUpdateManyInput>
    /**
     * Filter which Tomorrows to update
     */
    where?: TomorrowWhereInput
    /**
     * Limit how many Tomorrows to update.
     */
    limit?: number
  }

  /**
   * Tomorrow upsert
   */
  export type TomorrowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tomorrow
     */
    select?: TomorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tomorrow
     */
    omit?: TomorrowOmit<ExtArgs> | null
    /**
     * The filter to search for the Tomorrow to update in case it exists.
     */
    where: TomorrowWhereUniqueInput
    /**
     * In case the Tomorrow found by the `where` argument doesn't exist, create a new Tomorrow with this data.
     */
    create: XOR<TomorrowCreateInput, TomorrowUncheckedCreateInput>
    /**
     * In case the Tomorrow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TomorrowUpdateInput, TomorrowUncheckedUpdateInput>
  }

  /**
   * Tomorrow delete
   */
  export type TomorrowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tomorrow
     */
    select?: TomorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tomorrow
     */
    omit?: TomorrowOmit<ExtArgs> | null
    /**
     * Filter which Tomorrow to delete.
     */
    where: TomorrowWhereUniqueInput
  }

  /**
   * Tomorrow deleteMany
   */
  export type TomorrowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tomorrows to delete
     */
    where?: TomorrowWhereInput
    /**
     * Limit how many Tomorrows to delete.
     */
    limit?: number
  }

  /**
   * Tomorrow without action
   */
  export type TomorrowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tomorrow
     */
    select?: TomorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tomorrow
     */
    omit?: TomorrowOmit<ExtArgs> | null
  }


  /**
   * Model Yesterday
   */

  export type AggregateYesterday = {
    _count: YesterdayCountAggregateOutputType | null
    _avg: YesterdayAvgAggregateOutputType | null
    _sum: YesterdaySumAggregateOutputType | null
    _min: YesterdayMinAggregateOutputType | null
    _max: YesterdayMaxAggregateOutputType | null
  }

  export type YesterdayAvgAggregateOutputType = {
    id: number | null
  }

  export type YesterdaySumAggregateOutputType = {
    id: number | null
  }

  export type YesterdayMinAggregateOutputType = {
    id: number | null
    link: string | null
    league: string | null
    leagueLogo: string | null
    teamA: string | null
    teamAImg: string | null
    teamB: string | null
    teamBImg: string | null
    scoreA: string | null
    scoreB: string | null
    matchTime: string | null
    matchStatus: string | null
    matchDate: string | null
    channel: string | null
  }

  export type YesterdayMaxAggregateOutputType = {
    id: number | null
    link: string | null
    league: string | null
    leagueLogo: string | null
    teamA: string | null
    teamAImg: string | null
    teamB: string | null
    teamBImg: string | null
    scoreA: string | null
    scoreB: string | null
    matchTime: string | null
    matchStatus: string | null
    matchDate: string | null
    channel: string | null
  }

  export type YesterdayCountAggregateOutputType = {
    id: number
    link: number
    league: number
    leagueLogo: number
    teamA: number
    teamAImg: number
    teamB: number
    teamBImg: number
    scoreA: number
    scoreB: number
    matchTime: number
    matchStatus: number
    matchDate: number
    channel: number
    _all: number
  }


  export type YesterdayAvgAggregateInputType = {
    id?: true
  }

  export type YesterdaySumAggregateInputType = {
    id?: true
  }

  export type YesterdayMinAggregateInputType = {
    id?: true
    link?: true
    league?: true
    leagueLogo?: true
    teamA?: true
    teamAImg?: true
    teamB?: true
    teamBImg?: true
    scoreA?: true
    scoreB?: true
    matchTime?: true
    matchStatus?: true
    matchDate?: true
    channel?: true
  }

  export type YesterdayMaxAggregateInputType = {
    id?: true
    link?: true
    league?: true
    leagueLogo?: true
    teamA?: true
    teamAImg?: true
    teamB?: true
    teamBImg?: true
    scoreA?: true
    scoreB?: true
    matchTime?: true
    matchStatus?: true
    matchDate?: true
    channel?: true
  }

  export type YesterdayCountAggregateInputType = {
    id?: true
    link?: true
    league?: true
    leagueLogo?: true
    teamA?: true
    teamAImg?: true
    teamB?: true
    teamBImg?: true
    scoreA?: true
    scoreB?: true
    matchTime?: true
    matchStatus?: true
    matchDate?: true
    channel?: true
    _all?: true
  }

  export type YesterdayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Yesterday to aggregate.
     */
    where?: YesterdayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Yesterdays to fetch.
     */
    orderBy?: YesterdayOrderByWithRelationInput | YesterdayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YesterdayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Yesterdays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Yesterdays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Yesterdays
    **/
    _count?: true | YesterdayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YesterdayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YesterdaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YesterdayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YesterdayMaxAggregateInputType
  }

  export type GetYesterdayAggregateType<T extends YesterdayAggregateArgs> = {
        [P in keyof T & keyof AggregateYesterday]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYesterday[P]>
      : GetScalarType<T[P], AggregateYesterday[P]>
  }




  export type YesterdayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YesterdayWhereInput
    orderBy?: YesterdayOrderByWithAggregationInput | YesterdayOrderByWithAggregationInput[]
    by: YesterdayScalarFieldEnum[] | YesterdayScalarFieldEnum
    having?: YesterdayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YesterdayCountAggregateInputType | true
    _avg?: YesterdayAvgAggregateInputType
    _sum?: YesterdaySumAggregateInputType
    _min?: YesterdayMinAggregateInputType
    _max?: YesterdayMaxAggregateInputType
  }

  export type YesterdayGroupByOutputType = {
    id: number
    link: string
    league: string | null
    leagueLogo: string | null
    teamA: string | null
    teamAImg: string | null
    teamB: string | null
    teamBImg: string | null
    scoreA: string | null
    scoreB: string | null
    matchTime: string | null
    matchStatus: string | null
    matchDate: string | null
    channel: string
    _count: YesterdayCountAggregateOutputType | null
    _avg: YesterdayAvgAggregateOutputType | null
    _sum: YesterdaySumAggregateOutputType | null
    _min: YesterdayMinAggregateOutputType | null
    _max: YesterdayMaxAggregateOutputType | null
  }

  type GetYesterdayGroupByPayload<T extends YesterdayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YesterdayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YesterdayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YesterdayGroupByOutputType[P]>
            : GetScalarType<T[P], YesterdayGroupByOutputType[P]>
        }
      >
    >


  export type YesterdaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    link?: boolean
    league?: boolean
    leagueLogo?: boolean
    teamA?: boolean
    teamAImg?: boolean
    teamB?: boolean
    teamBImg?: boolean
    scoreA?: boolean
    scoreB?: boolean
    matchTime?: boolean
    matchStatus?: boolean
    matchDate?: boolean
    channel?: boolean
  }, ExtArgs["result"]["yesterday"]>



  export type YesterdaySelectScalar = {
    id?: boolean
    link?: boolean
    league?: boolean
    leagueLogo?: boolean
    teamA?: boolean
    teamAImg?: boolean
    teamB?: boolean
    teamBImg?: boolean
    scoreA?: boolean
    scoreB?: boolean
    matchTime?: boolean
    matchStatus?: boolean
    matchDate?: boolean
    channel?: boolean
  }

  export type YesterdayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "link" | "league" | "leagueLogo" | "teamA" | "teamAImg" | "teamB" | "teamBImg" | "scoreA" | "scoreB" | "matchTime" | "matchStatus" | "matchDate" | "channel", ExtArgs["result"]["yesterday"]>

  export type $YesterdayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Yesterday"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      link: string
      league: string | null
      leagueLogo: string | null
      teamA: string | null
      teamAImg: string | null
      teamB: string | null
      teamBImg: string | null
      scoreA: string | null
      scoreB: string | null
      matchTime: string | null
      matchStatus: string | null
      matchDate: string | null
      channel: string
    }, ExtArgs["result"]["yesterday"]>
    composites: {}
  }

  type YesterdayGetPayload<S extends boolean | null | undefined | YesterdayDefaultArgs> = $Result.GetResult<Prisma.$YesterdayPayload, S>

  type YesterdayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<YesterdayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: YesterdayCountAggregateInputType | true
    }

  export interface YesterdayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Yesterday'], meta: { name: 'Yesterday' } }
    /**
     * Find zero or one Yesterday that matches the filter.
     * @param {YesterdayFindUniqueArgs} args - Arguments to find a Yesterday
     * @example
     * // Get one Yesterday
     * const yesterday = await prisma.yesterday.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends YesterdayFindUniqueArgs>(args: SelectSubset<T, YesterdayFindUniqueArgs<ExtArgs>>): Prisma__YesterdayClient<$Result.GetResult<Prisma.$YesterdayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Yesterday that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {YesterdayFindUniqueOrThrowArgs} args - Arguments to find a Yesterday
     * @example
     * // Get one Yesterday
     * const yesterday = await prisma.yesterday.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends YesterdayFindUniqueOrThrowArgs>(args: SelectSubset<T, YesterdayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__YesterdayClient<$Result.GetResult<Prisma.$YesterdayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Yesterday that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YesterdayFindFirstArgs} args - Arguments to find a Yesterday
     * @example
     * // Get one Yesterday
     * const yesterday = await prisma.yesterday.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends YesterdayFindFirstArgs>(args?: SelectSubset<T, YesterdayFindFirstArgs<ExtArgs>>): Prisma__YesterdayClient<$Result.GetResult<Prisma.$YesterdayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Yesterday that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YesterdayFindFirstOrThrowArgs} args - Arguments to find a Yesterday
     * @example
     * // Get one Yesterday
     * const yesterday = await prisma.yesterday.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends YesterdayFindFirstOrThrowArgs>(args?: SelectSubset<T, YesterdayFindFirstOrThrowArgs<ExtArgs>>): Prisma__YesterdayClient<$Result.GetResult<Prisma.$YesterdayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Yesterdays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YesterdayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Yesterdays
     * const yesterdays = await prisma.yesterday.findMany()
     * 
     * // Get first 10 Yesterdays
     * const yesterdays = await prisma.yesterday.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const yesterdayWithIdOnly = await prisma.yesterday.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends YesterdayFindManyArgs>(args?: SelectSubset<T, YesterdayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YesterdayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Yesterday.
     * @param {YesterdayCreateArgs} args - Arguments to create a Yesterday.
     * @example
     * // Create one Yesterday
     * const Yesterday = await prisma.yesterday.create({
     *   data: {
     *     // ... data to create a Yesterday
     *   }
     * })
     * 
     */
    create<T extends YesterdayCreateArgs>(args: SelectSubset<T, YesterdayCreateArgs<ExtArgs>>): Prisma__YesterdayClient<$Result.GetResult<Prisma.$YesterdayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Yesterdays.
     * @param {YesterdayCreateManyArgs} args - Arguments to create many Yesterdays.
     * @example
     * // Create many Yesterdays
     * const yesterday = await prisma.yesterday.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends YesterdayCreateManyArgs>(args?: SelectSubset<T, YesterdayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Yesterday.
     * @param {YesterdayDeleteArgs} args - Arguments to delete one Yesterday.
     * @example
     * // Delete one Yesterday
     * const Yesterday = await prisma.yesterday.delete({
     *   where: {
     *     // ... filter to delete one Yesterday
     *   }
     * })
     * 
     */
    delete<T extends YesterdayDeleteArgs>(args: SelectSubset<T, YesterdayDeleteArgs<ExtArgs>>): Prisma__YesterdayClient<$Result.GetResult<Prisma.$YesterdayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Yesterday.
     * @param {YesterdayUpdateArgs} args - Arguments to update one Yesterday.
     * @example
     * // Update one Yesterday
     * const yesterday = await prisma.yesterday.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends YesterdayUpdateArgs>(args: SelectSubset<T, YesterdayUpdateArgs<ExtArgs>>): Prisma__YesterdayClient<$Result.GetResult<Prisma.$YesterdayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Yesterdays.
     * @param {YesterdayDeleteManyArgs} args - Arguments to filter Yesterdays to delete.
     * @example
     * // Delete a few Yesterdays
     * const { count } = await prisma.yesterday.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends YesterdayDeleteManyArgs>(args?: SelectSubset<T, YesterdayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Yesterdays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YesterdayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Yesterdays
     * const yesterday = await prisma.yesterday.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends YesterdayUpdateManyArgs>(args: SelectSubset<T, YesterdayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Yesterday.
     * @param {YesterdayUpsertArgs} args - Arguments to update or create a Yesterday.
     * @example
     * // Update or create a Yesterday
     * const yesterday = await prisma.yesterday.upsert({
     *   create: {
     *     // ... data to create a Yesterday
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Yesterday we want to update
     *   }
     * })
     */
    upsert<T extends YesterdayUpsertArgs>(args: SelectSubset<T, YesterdayUpsertArgs<ExtArgs>>): Prisma__YesterdayClient<$Result.GetResult<Prisma.$YesterdayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Yesterdays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YesterdayCountArgs} args - Arguments to filter Yesterdays to count.
     * @example
     * // Count the number of Yesterdays
     * const count = await prisma.yesterday.count({
     *   where: {
     *     // ... the filter for the Yesterdays we want to count
     *   }
     * })
    **/
    count<T extends YesterdayCountArgs>(
      args?: Subset<T, YesterdayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YesterdayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Yesterday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YesterdayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends YesterdayAggregateArgs>(args: Subset<T, YesterdayAggregateArgs>): Prisma.PrismaPromise<GetYesterdayAggregateType<T>>

    /**
     * Group by Yesterday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YesterdayGroupByArgs} args - Group by arguments.
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
      T extends YesterdayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YesterdayGroupByArgs['orderBy'] }
        : { orderBy?: YesterdayGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, YesterdayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYesterdayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Yesterday model
   */
  readonly fields: YesterdayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Yesterday.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YesterdayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Yesterday model
   */
  interface YesterdayFieldRefs {
    readonly id: FieldRef<"Yesterday", 'Int'>
    readonly link: FieldRef<"Yesterday", 'String'>
    readonly league: FieldRef<"Yesterday", 'String'>
    readonly leagueLogo: FieldRef<"Yesterday", 'String'>
    readonly teamA: FieldRef<"Yesterday", 'String'>
    readonly teamAImg: FieldRef<"Yesterday", 'String'>
    readonly teamB: FieldRef<"Yesterday", 'String'>
    readonly teamBImg: FieldRef<"Yesterday", 'String'>
    readonly scoreA: FieldRef<"Yesterday", 'String'>
    readonly scoreB: FieldRef<"Yesterday", 'String'>
    readonly matchTime: FieldRef<"Yesterday", 'String'>
    readonly matchStatus: FieldRef<"Yesterday", 'String'>
    readonly matchDate: FieldRef<"Yesterday", 'String'>
    readonly channel: FieldRef<"Yesterday", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Yesterday findUnique
   */
  export type YesterdayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yesterday
     */
    select?: YesterdaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yesterday
     */
    omit?: YesterdayOmit<ExtArgs> | null
    /**
     * Filter, which Yesterday to fetch.
     */
    where: YesterdayWhereUniqueInput
  }

  /**
   * Yesterday findUniqueOrThrow
   */
  export type YesterdayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yesterday
     */
    select?: YesterdaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yesterday
     */
    omit?: YesterdayOmit<ExtArgs> | null
    /**
     * Filter, which Yesterday to fetch.
     */
    where: YesterdayWhereUniqueInput
  }

  /**
   * Yesterday findFirst
   */
  export type YesterdayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yesterday
     */
    select?: YesterdaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yesterday
     */
    omit?: YesterdayOmit<ExtArgs> | null
    /**
     * Filter, which Yesterday to fetch.
     */
    where?: YesterdayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Yesterdays to fetch.
     */
    orderBy?: YesterdayOrderByWithRelationInput | YesterdayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Yesterdays.
     */
    cursor?: YesterdayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Yesterdays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Yesterdays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Yesterdays.
     */
    distinct?: YesterdayScalarFieldEnum | YesterdayScalarFieldEnum[]
  }

  /**
   * Yesterday findFirstOrThrow
   */
  export type YesterdayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yesterday
     */
    select?: YesterdaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yesterday
     */
    omit?: YesterdayOmit<ExtArgs> | null
    /**
     * Filter, which Yesterday to fetch.
     */
    where?: YesterdayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Yesterdays to fetch.
     */
    orderBy?: YesterdayOrderByWithRelationInput | YesterdayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Yesterdays.
     */
    cursor?: YesterdayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Yesterdays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Yesterdays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Yesterdays.
     */
    distinct?: YesterdayScalarFieldEnum | YesterdayScalarFieldEnum[]
  }

  /**
   * Yesterday findMany
   */
  export type YesterdayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yesterday
     */
    select?: YesterdaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yesterday
     */
    omit?: YesterdayOmit<ExtArgs> | null
    /**
     * Filter, which Yesterdays to fetch.
     */
    where?: YesterdayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Yesterdays to fetch.
     */
    orderBy?: YesterdayOrderByWithRelationInput | YesterdayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Yesterdays.
     */
    cursor?: YesterdayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Yesterdays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Yesterdays.
     */
    skip?: number
    distinct?: YesterdayScalarFieldEnum | YesterdayScalarFieldEnum[]
  }

  /**
   * Yesterday create
   */
  export type YesterdayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yesterday
     */
    select?: YesterdaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yesterday
     */
    omit?: YesterdayOmit<ExtArgs> | null
    /**
     * The data needed to create a Yesterday.
     */
    data?: XOR<YesterdayCreateInput, YesterdayUncheckedCreateInput>
  }

  /**
   * Yesterday createMany
   */
  export type YesterdayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Yesterdays.
     */
    data: YesterdayCreateManyInput | YesterdayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Yesterday update
   */
  export type YesterdayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yesterday
     */
    select?: YesterdaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yesterday
     */
    omit?: YesterdayOmit<ExtArgs> | null
    /**
     * The data needed to update a Yesterday.
     */
    data: XOR<YesterdayUpdateInput, YesterdayUncheckedUpdateInput>
    /**
     * Choose, which Yesterday to update.
     */
    where: YesterdayWhereUniqueInput
  }

  /**
   * Yesterday updateMany
   */
  export type YesterdayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Yesterdays.
     */
    data: XOR<YesterdayUpdateManyMutationInput, YesterdayUncheckedUpdateManyInput>
    /**
     * Filter which Yesterdays to update
     */
    where?: YesterdayWhereInput
    /**
     * Limit how many Yesterdays to update.
     */
    limit?: number
  }

  /**
   * Yesterday upsert
   */
  export type YesterdayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yesterday
     */
    select?: YesterdaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yesterday
     */
    omit?: YesterdayOmit<ExtArgs> | null
    /**
     * The filter to search for the Yesterday to update in case it exists.
     */
    where: YesterdayWhereUniqueInput
    /**
     * In case the Yesterday found by the `where` argument doesn't exist, create a new Yesterday with this data.
     */
    create: XOR<YesterdayCreateInput, YesterdayUncheckedCreateInput>
    /**
     * In case the Yesterday was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YesterdayUpdateInput, YesterdayUncheckedUpdateInput>
  }

  /**
   * Yesterday delete
   */
  export type YesterdayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yesterday
     */
    select?: YesterdaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yesterday
     */
    omit?: YesterdayOmit<ExtArgs> | null
    /**
     * Filter which Yesterday to delete.
     */
    where: YesterdayWhereUniqueInput
  }

  /**
   * Yesterday deleteMany
   */
  export type YesterdayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Yesterdays to delete
     */
    where?: YesterdayWhereInput
    /**
     * Limit how many Yesterdays to delete.
     */
    limit?: number
  }

  /**
   * Yesterday without action
   */
  export type YesterdayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yesterday
     */
    select?: YesterdaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yesterday
     */
    omit?: YesterdayOmit<ExtArgs> | null
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


  export const TodayScalarFieldEnum: {
    id: 'id',
    link: 'link',
    league: 'league',
    leagueLogo: 'leagueLogo',
    teamA: 'teamA',
    teamAImg: 'teamAImg',
    teamB: 'teamB',
    teamBImg: 'teamBImg',
    scoreA: 'scoreA',
    scoreB: 'scoreB',
    matchTime: 'matchTime',
    matchStatus: 'matchStatus',
    matchDate: 'matchDate',
    channel: 'channel'
  };

  export type TodayScalarFieldEnum = (typeof TodayScalarFieldEnum)[keyof typeof TodayScalarFieldEnum]


  export const TomorrowScalarFieldEnum: {
    id: 'id',
    link: 'link',
    league: 'league',
    leagueLogo: 'leagueLogo',
    teamA: 'teamA',
    teamAImg: 'teamAImg',
    teamB: 'teamB',
    teamBImg: 'teamBImg',
    scoreA: 'scoreA',
    scoreB: 'scoreB',
    matchTime: 'matchTime',
    matchStatus: 'matchStatus',
    matchDate: 'matchDate',
    channel: 'channel'
  };

  export type TomorrowScalarFieldEnum = (typeof TomorrowScalarFieldEnum)[keyof typeof TomorrowScalarFieldEnum]


  export const YesterdayScalarFieldEnum: {
    id: 'id',
    link: 'link',
    league: 'league',
    leagueLogo: 'leagueLogo',
    teamA: 'teamA',
    teamAImg: 'teamAImg',
    teamB: 'teamB',
    teamBImg: 'teamBImg',
    scoreA: 'scoreA',
    scoreB: 'scoreB',
    matchTime: 'matchTime',
    matchStatus: 'matchStatus',
    matchDate: 'matchDate',
    channel: 'channel'
  };

  export type YesterdayScalarFieldEnum = (typeof YesterdayScalarFieldEnum)[keyof typeof YesterdayScalarFieldEnum]


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


  export const TodayOrderByRelevanceFieldEnum: {
    link: 'link',
    league: 'league',
    leagueLogo: 'leagueLogo',
    teamA: 'teamA',
    teamAImg: 'teamAImg',
    teamB: 'teamB',
    teamBImg: 'teamBImg',
    scoreA: 'scoreA',
    scoreB: 'scoreB',
    matchTime: 'matchTime',
    matchStatus: 'matchStatus',
    matchDate: 'matchDate',
    channel: 'channel'
  };

  export type TodayOrderByRelevanceFieldEnum = (typeof TodayOrderByRelevanceFieldEnum)[keyof typeof TodayOrderByRelevanceFieldEnum]


  export const TomorrowOrderByRelevanceFieldEnum: {
    link: 'link',
    league: 'league',
    leagueLogo: 'leagueLogo',
    teamA: 'teamA',
    teamAImg: 'teamAImg',
    teamB: 'teamB',
    teamBImg: 'teamBImg',
    scoreA: 'scoreA',
    scoreB: 'scoreB',
    matchTime: 'matchTime',
    matchStatus: 'matchStatus',
    matchDate: 'matchDate',
    channel: 'channel'
  };

  export type TomorrowOrderByRelevanceFieldEnum = (typeof TomorrowOrderByRelevanceFieldEnum)[keyof typeof TomorrowOrderByRelevanceFieldEnum]


  export const YesterdayOrderByRelevanceFieldEnum: {
    link: 'link',
    league: 'league',
    leagueLogo: 'leagueLogo',
    teamA: 'teamA',
    teamAImg: 'teamAImg',
    teamB: 'teamB',
    teamBImg: 'teamBImg',
    scoreA: 'scoreA',
    scoreB: 'scoreB',
    matchTime: 'matchTime',
    matchStatus: 'matchStatus',
    matchDate: 'matchDate',
    channel: 'channel'
  };

  export type YesterdayOrderByRelevanceFieldEnum = (typeof YesterdayOrderByRelevanceFieldEnum)[keyof typeof YesterdayOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type TodayWhereInput = {
    AND?: TodayWhereInput | TodayWhereInput[]
    OR?: TodayWhereInput[]
    NOT?: TodayWhereInput | TodayWhereInput[]
    id?: IntFilter<"Today"> | number
    link?: StringFilter<"Today"> | string
    league?: StringNullableFilter<"Today"> | string | null
    leagueLogo?: StringNullableFilter<"Today"> | string | null
    teamA?: StringNullableFilter<"Today"> | string | null
    teamAImg?: StringNullableFilter<"Today"> | string | null
    teamB?: StringNullableFilter<"Today"> | string | null
    teamBImg?: StringNullableFilter<"Today"> | string | null
    scoreA?: StringNullableFilter<"Today"> | string | null
    scoreB?: StringNullableFilter<"Today"> | string | null
    matchTime?: StringNullableFilter<"Today"> | string | null
    matchStatus?: StringNullableFilter<"Today"> | string | null
    matchDate?: StringNullableFilter<"Today"> | string | null
    channel?: StringFilter<"Today"> | string
  }

  export type TodayOrderByWithRelationInput = {
    id?: SortOrder
    link?: SortOrder
    league?: SortOrderInput | SortOrder
    leagueLogo?: SortOrderInput | SortOrder
    teamA?: SortOrderInput | SortOrder
    teamAImg?: SortOrderInput | SortOrder
    teamB?: SortOrderInput | SortOrder
    teamBImg?: SortOrderInput | SortOrder
    scoreA?: SortOrderInput | SortOrder
    scoreB?: SortOrderInput | SortOrder
    matchTime?: SortOrderInput | SortOrder
    matchStatus?: SortOrderInput | SortOrder
    matchDate?: SortOrderInput | SortOrder
    channel?: SortOrder
    _relevance?: TodayOrderByRelevanceInput
  }

  export type TodayWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TodayWhereInput | TodayWhereInput[]
    OR?: TodayWhereInput[]
    NOT?: TodayWhereInput | TodayWhereInput[]
    link?: StringFilter<"Today"> | string
    league?: StringNullableFilter<"Today"> | string | null
    leagueLogo?: StringNullableFilter<"Today"> | string | null
    teamA?: StringNullableFilter<"Today"> | string | null
    teamAImg?: StringNullableFilter<"Today"> | string | null
    teamB?: StringNullableFilter<"Today"> | string | null
    teamBImg?: StringNullableFilter<"Today"> | string | null
    scoreA?: StringNullableFilter<"Today"> | string | null
    scoreB?: StringNullableFilter<"Today"> | string | null
    matchTime?: StringNullableFilter<"Today"> | string | null
    matchStatus?: StringNullableFilter<"Today"> | string | null
    matchDate?: StringNullableFilter<"Today"> | string | null
    channel?: StringFilter<"Today"> | string
  }, "id">

  export type TodayOrderByWithAggregationInput = {
    id?: SortOrder
    link?: SortOrder
    league?: SortOrderInput | SortOrder
    leagueLogo?: SortOrderInput | SortOrder
    teamA?: SortOrderInput | SortOrder
    teamAImg?: SortOrderInput | SortOrder
    teamB?: SortOrderInput | SortOrder
    teamBImg?: SortOrderInput | SortOrder
    scoreA?: SortOrderInput | SortOrder
    scoreB?: SortOrderInput | SortOrder
    matchTime?: SortOrderInput | SortOrder
    matchStatus?: SortOrderInput | SortOrder
    matchDate?: SortOrderInput | SortOrder
    channel?: SortOrder
    _count?: TodayCountOrderByAggregateInput
    _avg?: TodayAvgOrderByAggregateInput
    _max?: TodayMaxOrderByAggregateInput
    _min?: TodayMinOrderByAggregateInput
    _sum?: TodaySumOrderByAggregateInput
  }

  export type TodayScalarWhereWithAggregatesInput = {
    AND?: TodayScalarWhereWithAggregatesInput | TodayScalarWhereWithAggregatesInput[]
    OR?: TodayScalarWhereWithAggregatesInput[]
    NOT?: TodayScalarWhereWithAggregatesInput | TodayScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Today"> | number
    link?: StringWithAggregatesFilter<"Today"> | string
    league?: StringNullableWithAggregatesFilter<"Today"> | string | null
    leagueLogo?: StringNullableWithAggregatesFilter<"Today"> | string | null
    teamA?: StringNullableWithAggregatesFilter<"Today"> | string | null
    teamAImg?: StringNullableWithAggregatesFilter<"Today"> | string | null
    teamB?: StringNullableWithAggregatesFilter<"Today"> | string | null
    teamBImg?: StringNullableWithAggregatesFilter<"Today"> | string | null
    scoreA?: StringNullableWithAggregatesFilter<"Today"> | string | null
    scoreB?: StringNullableWithAggregatesFilter<"Today"> | string | null
    matchTime?: StringNullableWithAggregatesFilter<"Today"> | string | null
    matchStatus?: StringNullableWithAggregatesFilter<"Today"> | string | null
    matchDate?: StringNullableWithAggregatesFilter<"Today"> | string | null
    channel?: StringWithAggregatesFilter<"Today"> | string
  }

  export type TomorrowWhereInput = {
    AND?: TomorrowWhereInput | TomorrowWhereInput[]
    OR?: TomorrowWhereInput[]
    NOT?: TomorrowWhereInput | TomorrowWhereInput[]
    id?: IntFilter<"Tomorrow"> | number
    link?: StringFilter<"Tomorrow"> | string
    league?: StringNullableFilter<"Tomorrow"> | string | null
    leagueLogo?: StringNullableFilter<"Tomorrow"> | string | null
    teamA?: StringNullableFilter<"Tomorrow"> | string | null
    teamAImg?: StringNullableFilter<"Tomorrow"> | string | null
    teamB?: StringNullableFilter<"Tomorrow"> | string | null
    teamBImg?: StringNullableFilter<"Tomorrow"> | string | null
    scoreA?: StringNullableFilter<"Tomorrow"> | string | null
    scoreB?: StringNullableFilter<"Tomorrow"> | string | null
    matchTime?: StringNullableFilter<"Tomorrow"> | string | null
    matchStatus?: StringNullableFilter<"Tomorrow"> | string | null
    matchDate?: StringNullableFilter<"Tomorrow"> | string | null
    channel?: StringFilter<"Tomorrow"> | string
  }

  export type TomorrowOrderByWithRelationInput = {
    id?: SortOrder
    link?: SortOrder
    league?: SortOrderInput | SortOrder
    leagueLogo?: SortOrderInput | SortOrder
    teamA?: SortOrderInput | SortOrder
    teamAImg?: SortOrderInput | SortOrder
    teamB?: SortOrderInput | SortOrder
    teamBImg?: SortOrderInput | SortOrder
    scoreA?: SortOrderInput | SortOrder
    scoreB?: SortOrderInput | SortOrder
    matchTime?: SortOrderInput | SortOrder
    matchStatus?: SortOrderInput | SortOrder
    matchDate?: SortOrderInput | SortOrder
    channel?: SortOrder
    _relevance?: TomorrowOrderByRelevanceInput
  }

  export type TomorrowWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TomorrowWhereInput | TomorrowWhereInput[]
    OR?: TomorrowWhereInput[]
    NOT?: TomorrowWhereInput | TomorrowWhereInput[]
    link?: StringFilter<"Tomorrow"> | string
    league?: StringNullableFilter<"Tomorrow"> | string | null
    leagueLogo?: StringNullableFilter<"Tomorrow"> | string | null
    teamA?: StringNullableFilter<"Tomorrow"> | string | null
    teamAImg?: StringNullableFilter<"Tomorrow"> | string | null
    teamB?: StringNullableFilter<"Tomorrow"> | string | null
    teamBImg?: StringNullableFilter<"Tomorrow"> | string | null
    scoreA?: StringNullableFilter<"Tomorrow"> | string | null
    scoreB?: StringNullableFilter<"Tomorrow"> | string | null
    matchTime?: StringNullableFilter<"Tomorrow"> | string | null
    matchStatus?: StringNullableFilter<"Tomorrow"> | string | null
    matchDate?: StringNullableFilter<"Tomorrow"> | string | null
    channel?: StringFilter<"Tomorrow"> | string
  }, "id">

  export type TomorrowOrderByWithAggregationInput = {
    id?: SortOrder
    link?: SortOrder
    league?: SortOrderInput | SortOrder
    leagueLogo?: SortOrderInput | SortOrder
    teamA?: SortOrderInput | SortOrder
    teamAImg?: SortOrderInput | SortOrder
    teamB?: SortOrderInput | SortOrder
    teamBImg?: SortOrderInput | SortOrder
    scoreA?: SortOrderInput | SortOrder
    scoreB?: SortOrderInput | SortOrder
    matchTime?: SortOrderInput | SortOrder
    matchStatus?: SortOrderInput | SortOrder
    matchDate?: SortOrderInput | SortOrder
    channel?: SortOrder
    _count?: TomorrowCountOrderByAggregateInput
    _avg?: TomorrowAvgOrderByAggregateInput
    _max?: TomorrowMaxOrderByAggregateInput
    _min?: TomorrowMinOrderByAggregateInput
    _sum?: TomorrowSumOrderByAggregateInput
  }

  export type TomorrowScalarWhereWithAggregatesInput = {
    AND?: TomorrowScalarWhereWithAggregatesInput | TomorrowScalarWhereWithAggregatesInput[]
    OR?: TomorrowScalarWhereWithAggregatesInput[]
    NOT?: TomorrowScalarWhereWithAggregatesInput | TomorrowScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tomorrow"> | number
    link?: StringWithAggregatesFilter<"Tomorrow"> | string
    league?: StringNullableWithAggregatesFilter<"Tomorrow"> | string | null
    leagueLogo?: StringNullableWithAggregatesFilter<"Tomorrow"> | string | null
    teamA?: StringNullableWithAggregatesFilter<"Tomorrow"> | string | null
    teamAImg?: StringNullableWithAggregatesFilter<"Tomorrow"> | string | null
    teamB?: StringNullableWithAggregatesFilter<"Tomorrow"> | string | null
    teamBImg?: StringNullableWithAggregatesFilter<"Tomorrow"> | string | null
    scoreA?: StringNullableWithAggregatesFilter<"Tomorrow"> | string | null
    scoreB?: StringNullableWithAggregatesFilter<"Tomorrow"> | string | null
    matchTime?: StringNullableWithAggregatesFilter<"Tomorrow"> | string | null
    matchStatus?: StringNullableWithAggregatesFilter<"Tomorrow"> | string | null
    matchDate?: StringNullableWithAggregatesFilter<"Tomorrow"> | string | null
    channel?: StringWithAggregatesFilter<"Tomorrow"> | string
  }

  export type YesterdayWhereInput = {
    AND?: YesterdayWhereInput | YesterdayWhereInput[]
    OR?: YesterdayWhereInput[]
    NOT?: YesterdayWhereInput | YesterdayWhereInput[]
    id?: IntFilter<"Yesterday"> | number
    link?: StringFilter<"Yesterday"> | string
    league?: StringNullableFilter<"Yesterday"> | string | null
    leagueLogo?: StringNullableFilter<"Yesterday"> | string | null
    teamA?: StringNullableFilter<"Yesterday"> | string | null
    teamAImg?: StringNullableFilter<"Yesterday"> | string | null
    teamB?: StringNullableFilter<"Yesterday"> | string | null
    teamBImg?: StringNullableFilter<"Yesterday"> | string | null
    scoreA?: StringNullableFilter<"Yesterday"> | string | null
    scoreB?: StringNullableFilter<"Yesterday"> | string | null
    matchTime?: StringNullableFilter<"Yesterday"> | string | null
    matchStatus?: StringNullableFilter<"Yesterday"> | string | null
    matchDate?: StringNullableFilter<"Yesterday"> | string | null
    channel?: StringFilter<"Yesterday"> | string
  }

  export type YesterdayOrderByWithRelationInput = {
    id?: SortOrder
    link?: SortOrder
    league?: SortOrderInput | SortOrder
    leagueLogo?: SortOrderInput | SortOrder
    teamA?: SortOrderInput | SortOrder
    teamAImg?: SortOrderInput | SortOrder
    teamB?: SortOrderInput | SortOrder
    teamBImg?: SortOrderInput | SortOrder
    scoreA?: SortOrderInput | SortOrder
    scoreB?: SortOrderInput | SortOrder
    matchTime?: SortOrderInput | SortOrder
    matchStatus?: SortOrderInput | SortOrder
    matchDate?: SortOrderInput | SortOrder
    channel?: SortOrder
    _relevance?: YesterdayOrderByRelevanceInput
  }

  export type YesterdayWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: YesterdayWhereInput | YesterdayWhereInput[]
    OR?: YesterdayWhereInput[]
    NOT?: YesterdayWhereInput | YesterdayWhereInput[]
    link?: StringFilter<"Yesterday"> | string
    league?: StringNullableFilter<"Yesterday"> | string | null
    leagueLogo?: StringNullableFilter<"Yesterday"> | string | null
    teamA?: StringNullableFilter<"Yesterday"> | string | null
    teamAImg?: StringNullableFilter<"Yesterday"> | string | null
    teamB?: StringNullableFilter<"Yesterday"> | string | null
    teamBImg?: StringNullableFilter<"Yesterday"> | string | null
    scoreA?: StringNullableFilter<"Yesterday"> | string | null
    scoreB?: StringNullableFilter<"Yesterday"> | string | null
    matchTime?: StringNullableFilter<"Yesterday"> | string | null
    matchStatus?: StringNullableFilter<"Yesterday"> | string | null
    matchDate?: StringNullableFilter<"Yesterday"> | string | null
    channel?: StringFilter<"Yesterday"> | string
  }, "id">

  export type YesterdayOrderByWithAggregationInput = {
    id?: SortOrder
    link?: SortOrder
    league?: SortOrderInput | SortOrder
    leagueLogo?: SortOrderInput | SortOrder
    teamA?: SortOrderInput | SortOrder
    teamAImg?: SortOrderInput | SortOrder
    teamB?: SortOrderInput | SortOrder
    teamBImg?: SortOrderInput | SortOrder
    scoreA?: SortOrderInput | SortOrder
    scoreB?: SortOrderInput | SortOrder
    matchTime?: SortOrderInput | SortOrder
    matchStatus?: SortOrderInput | SortOrder
    matchDate?: SortOrderInput | SortOrder
    channel?: SortOrder
    _count?: YesterdayCountOrderByAggregateInput
    _avg?: YesterdayAvgOrderByAggregateInput
    _max?: YesterdayMaxOrderByAggregateInput
    _min?: YesterdayMinOrderByAggregateInput
    _sum?: YesterdaySumOrderByAggregateInput
  }

  export type YesterdayScalarWhereWithAggregatesInput = {
    AND?: YesterdayScalarWhereWithAggregatesInput | YesterdayScalarWhereWithAggregatesInput[]
    OR?: YesterdayScalarWhereWithAggregatesInput[]
    NOT?: YesterdayScalarWhereWithAggregatesInput | YesterdayScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Yesterday"> | number
    link?: StringWithAggregatesFilter<"Yesterday"> | string
    league?: StringNullableWithAggregatesFilter<"Yesterday"> | string | null
    leagueLogo?: StringNullableWithAggregatesFilter<"Yesterday"> | string | null
    teamA?: StringNullableWithAggregatesFilter<"Yesterday"> | string | null
    teamAImg?: StringNullableWithAggregatesFilter<"Yesterday"> | string | null
    teamB?: StringNullableWithAggregatesFilter<"Yesterday"> | string | null
    teamBImg?: StringNullableWithAggregatesFilter<"Yesterday"> | string | null
    scoreA?: StringNullableWithAggregatesFilter<"Yesterday"> | string | null
    scoreB?: StringNullableWithAggregatesFilter<"Yesterday"> | string | null
    matchTime?: StringNullableWithAggregatesFilter<"Yesterday"> | string | null
    matchStatus?: StringNullableWithAggregatesFilter<"Yesterday"> | string | null
    matchDate?: StringNullableWithAggregatesFilter<"Yesterday"> | string | null
    channel?: StringWithAggregatesFilter<"Yesterday"> | string
  }

  export type TodayCreateInput = {
    link?: string
    league?: string | null
    leagueLogo?: string | null
    teamA?: string | null
    teamAImg?: string | null
    teamB?: string | null
    teamBImg?: string | null
    scoreA?: string | null
    scoreB?: string | null
    matchTime?: string | null
    matchStatus?: string | null
    matchDate?: string | null
    channel?: string
  }

  export type TodayUncheckedCreateInput = {
    id?: number
    link?: string
    league?: string | null
    leagueLogo?: string | null
    teamA?: string | null
    teamAImg?: string | null
    teamB?: string | null
    teamBImg?: string | null
    scoreA?: string | null
    scoreB?: string | null
    matchTime?: string | null
    matchStatus?: string | null
    matchDate?: string | null
    channel?: string
  }

  export type TodayUpdateInput = {
    link?: StringFieldUpdateOperationsInput | string
    league?: NullableStringFieldUpdateOperationsInput | string | null
    leagueLogo?: NullableStringFieldUpdateOperationsInput | string | null
    teamA?: NullableStringFieldUpdateOperationsInput | string | null
    teamAImg?: NullableStringFieldUpdateOperationsInput | string | null
    teamB?: NullableStringFieldUpdateOperationsInput | string | null
    teamBImg?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: NullableStringFieldUpdateOperationsInput | string | null
    scoreB?: NullableStringFieldUpdateOperationsInput | string | null
    matchTime?: NullableStringFieldUpdateOperationsInput | string | null
    matchStatus?: NullableStringFieldUpdateOperationsInput | string | null
    matchDate?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
  }

  export type TodayUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    league?: NullableStringFieldUpdateOperationsInput | string | null
    leagueLogo?: NullableStringFieldUpdateOperationsInput | string | null
    teamA?: NullableStringFieldUpdateOperationsInput | string | null
    teamAImg?: NullableStringFieldUpdateOperationsInput | string | null
    teamB?: NullableStringFieldUpdateOperationsInput | string | null
    teamBImg?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: NullableStringFieldUpdateOperationsInput | string | null
    scoreB?: NullableStringFieldUpdateOperationsInput | string | null
    matchTime?: NullableStringFieldUpdateOperationsInput | string | null
    matchStatus?: NullableStringFieldUpdateOperationsInput | string | null
    matchDate?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
  }

  export type TodayCreateManyInput = {
    id?: number
    link?: string
    league?: string | null
    leagueLogo?: string | null
    teamA?: string | null
    teamAImg?: string | null
    teamB?: string | null
    teamBImg?: string | null
    scoreA?: string | null
    scoreB?: string | null
    matchTime?: string | null
    matchStatus?: string | null
    matchDate?: string | null
    channel?: string
  }

  export type TodayUpdateManyMutationInput = {
    link?: StringFieldUpdateOperationsInput | string
    league?: NullableStringFieldUpdateOperationsInput | string | null
    leagueLogo?: NullableStringFieldUpdateOperationsInput | string | null
    teamA?: NullableStringFieldUpdateOperationsInput | string | null
    teamAImg?: NullableStringFieldUpdateOperationsInput | string | null
    teamB?: NullableStringFieldUpdateOperationsInput | string | null
    teamBImg?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: NullableStringFieldUpdateOperationsInput | string | null
    scoreB?: NullableStringFieldUpdateOperationsInput | string | null
    matchTime?: NullableStringFieldUpdateOperationsInput | string | null
    matchStatus?: NullableStringFieldUpdateOperationsInput | string | null
    matchDate?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
  }

  export type TodayUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    league?: NullableStringFieldUpdateOperationsInput | string | null
    leagueLogo?: NullableStringFieldUpdateOperationsInput | string | null
    teamA?: NullableStringFieldUpdateOperationsInput | string | null
    teamAImg?: NullableStringFieldUpdateOperationsInput | string | null
    teamB?: NullableStringFieldUpdateOperationsInput | string | null
    teamBImg?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: NullableStringFieldUpdateOperationsInput | string | null
    scoreB?: NullableStringFieldUpdateOperationsInput | string | null
    matchTime?: NullableStringFieldUpdateOperationsInput | string | null
    matchStatus?: NullableStringFieldUpdateOperationsInput | string | null
    matchDate?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
  }

  export type TomorrowCreateInput = {
    link?: string
    league?: string | null
    leagueLogo?: string | null
    teamA?: string | null
    teamAImg?: string | null
    teamB?: string | null
    teamBImg?: string | null
    scoreA?: string | null
    scoreB?: string | null
    matchTime?: string | null
    matchStatus?: string | null
    matchDate?: string | null
    channel?: string
  }

  export type TomorrowUncheckedCreateInput = {
    id?: number
    link?: string
    league?: string | null
    leagueLogo?: string | null
    teamA?: string | null
    teamAImg?: string | null
    teamB?: string | null
    teamBImg?: string | null
    scoreA?: string | null
    scoreB?: string | null
    matchTime?: string | null
    matchStatus?: string | null
    matchDate?: string | null
    channel?: string
  }

  export type TomorrowUpdateInput = {
    link?: StringFieldUpdateOperationsInput | string
    league?: NullableStringFieldUpdateOperationsInput | string | null
    leagueLogo?: NullableStringFieldUpdateOperationsInput | string | null
    teamA?: NullableStringFieldUpdateOperationsInput | string | null
    teamAImg?: NullableStringFieldUpdateOperationsInput | string | null
    teamB?: NullableStringFieldUpdateOperationsInput | string | null
    teamBImg?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: NullableStringFieldUpdateOperationsInput | string | null
    scoreB?: NullableStringFieldUpdateOperationsInput | string | null
    matchTime?: NullableStringFieldUpdateOperationsInput | string | null
    matchStatus?: NullableStringFieldUpdateOperationsInput | string | null
    matchDate?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
  }

  export type TomorrowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    league?: NullableStringFieldUpdateOperationsInput | string | null
    leagueLogo?: NullableStringFieldUpdateOperationsInput | string | null
    teamA?: NullableStringFieldUpdateOperationsInput | string | null
    teamAImg?: NullableStringFieldUpdateOperationsInput | string | null
    teamB?: NullableStringFieldUpdateOperationsInput | string | null
    teamBImg?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: NullableStringFieldUpdateOperationsInput | string | null
    scoreB?: NullableStringFieldUpdateOperationsInput | string | null
    matchTime?: NullableStringFieldUpdateOperationsInput | string | null
    matchStatus?: NullableStringFieldUpdateOperationsInput | string | null
    matchDate?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
  }

  export type TomorrowCreateManyInput = {
    id?: number
    link?: string
    league?: string | null
    leagueLogo?: string | null
    teamA?: string | null
    teamAImg?: string | null
    teamB?: string | null
    teamBImg?: string | null
    scoreA?: string | null
    scoreB?: string | null
    matchTime?: string | null
    matchStatus?: string | null
    matchDate?: string | null
    channel?: string
  }

  export type TomorrowUpdateManyMutationInput = {
    link?: StringFieldUpdateOperationsInput | string
    league?: NullableStringFieldUpdateOperationsInput | string | null
    leagueLogo?: NullableStringFieldUpdateOperationsInput | string | null
    teamA?: NullableStringFieldUpdateOperationsInput | string | null
    teamAImg?: NullableStringFieldUpdateOperationsInput | string | null
    teamB?: NullableStringFieldUpdateOperationsInput | string | null
    teamBImg?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: NullableStringFieldUpdateOperationsInput | string | null
    scoreB?: NullableStringFieldUpdateOperationsInput | string | null
    matchTime?: NullableStringFieldUpdateOperationsInput | string | null
    matchStatus?: NullableStringFieldUpdateOperationsInput | string | null
    matchDate?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
  }

  export type TomorrowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    league?: NullableStringFieldUpdateOperationsInput | string | null
    leagueLogo?: NullableStringFieldUpdateOperationsInput | string | null
    teamA?: NullableStringFieldUpdateOperationsInput | string | null
    teamAImg?: NullableStringFieldUpdateOperationsInput | string | null
    teamB?: NullableStringFieldUpdateOperationsInput | string | null
    teamBImg?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: NullableStringFieldUpdateOperationsInput | string | null
    scoreB?: NullableStringFieldUpdateOperationsInput | string | null
    matchTime?: NullableStringFieldUpdateOperationsInput | string | null
    matchStatus?: NullableStringFieldUpdateOperationsInput | string | null
    matchDate?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
  }

  export type YesterdayCreateInput = {
    link?: string
    league?: string | null
    leagueLogo?: string | null
    teamA?: string | null
    teamAImg?: string | null
    teamB?: string | null
    teamBImg?: string | null
    scoreA?: string | null
    scoreB?: string | null
    matchTime?: string | null
    matchStatus?: string | null
    matchDate?: string | null
    channel?: string
  }

  export type YesterdayUncheckedCreateInput = {
    id?: number
    link?: string
    league?: string | null
    leagueLogo?: string | null
    teamA?: string | null
    teamAImg?: string | null
    teamB?: string | null
    teamBImg?: string | null
    scoreA?: string | null
    scoreB?: string | null
    matchTime?: string | null
    matchStatus?: string | null
    matchDate?: string | null
    channel?: string
  }

  export type YesterdayUpdateInput = {
    link?: StringFieldUpdateOperationsInput | string
    league?: NullableStringFieldUpdateOperationsInput | string | null
    leagueLogo?: NullableStringFieldUpdateOperationsInput | string | null
    teamA?: NullableStringFieldUpdateOperationsInput | string | null
    teamAImg?: NullableStringFieldUpdateOperationsInput | string | null
    teamB?: NullableStringFieldUpdateOperationsInput | string | null
    teamBImg?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: NullableStringFieldUpdateOperationsInput | string | null
    scoreB?: NullableStringFieldUpdateOperationsInput | string | null
    matchTime?: NullableStringFieldUpdateOperationsInput | string | null
    matchStatus?: NullableStringFieldUpdateOperationsInput | string | null
    matchDate?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
  }

  export type YesterdayUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    league?: NullableStringFieldUpdateOperationsInput | string | null
    leagueLogo?: NullableStringFieldUpdateOperationsInput | string | null
    teamA?: NullableStringFieldUpdateOperationsInput | string | null
    teamAImg?: NullableStringFieldUpdateOperationsInput | string | null
    teamB?: NullableStringFieldUpdateOperationsInput | string | null
    teamBImg?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: NullableStringFieldUpdateOperationsInput | string | null
    scoreB?: NullableStringFieldUpdateOperationsInput | string | null
    matchTime?: NullableStringFieldUpdateOperationsInput | string | null
    matchStatus?: NullableStringFieldUpdateOperationsInput | string | null
    matchDate?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
  }

  export type YesterdayCreateManyInput = {
    id?: number
    link?: string
    league?: string | null
    leagueLogo?: string | null
    teamA?: string | null
    teamAImg?: string | null
    teamB?: string | null
    teamBImg?: string | null
    scoreA?: string | null
    scoreB?: string | null
    matchTime?: string | null
    matchStatus?: string | null
    matchDate?: string | null
    channel?: string
  }

  export type YesterdayUpdateManyMutationInput = {
    link?: StringFieldUpdateOperationsInput | string
    league?: NullableStringFieldUpdateOperationsInput | string | null
    leagueLogo?: NullableStringFieldUpdateOperationsInput | string | null
    teamA?: NullableStringFieldUpdateOperationsInput | string | null
    teamAImg?: NullableStringFieldUpdateOperationsInput | string | null
    teamB?: NullableStringFieldUpdateOperationsInput | string | null
    teamBImg?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: NullableStringFieldUpdateOperationsInput | string | null
    scoreB?: NullableStringFieldUpdateOperationsInput | string | null
    matchTime?: NullableStringFieldUpdateOperationsInput | string | null
    matchStatus?: NullableStringFieldUpdateOperationsInput | string | null
    matchDate?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
  }

  export type YesterdayUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    league?: NullableStringFieldUpdateOperationsInput | string | null
    leagueLogo?: NullableStringFieldUpdateOperationsInput | string | null
    teamA?: NullableStringFieldUpdateOperationsInput | string | null
    teamAImg?: NullableStringFieldUpdateOperationsInput | string | null
    teamB?: NullableStringFieldUpdateOperationsInput | string | null
    teamBImg?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: NullableStringFieldUpdateOperationsInput | string | null
    scoreB?: NullableStringFieldUpdateOperationsInput | string | null
    matchTime?: NullableStringFieldUpdateOperationsInput | string | null
    matchStatus?: NullableStringFieldUpdateOperationsInput | string | null
    matchDate?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TodayOrderByRelevanceInput = {
    fields: TodayOrderByRelevanceFieldEnum | TodayOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TodayCountOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    league?: SortOrder
    leagueLogo?: SortOrder
    teamA?: SortOrder
    teamAImg?: SortOrder
    teamB?: SortOrder
    teamBImg?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    matchTime?: SortOrder
    matchStatus?: SortOrder
    matchDate?: SortOrder
    channel?: SortOrder
  }

  export type TodayAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TodayMaxOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    league?: SortOrder
    leagueLogo?: SortOrder
    teamA?: SortOrder
    teamAImg?: SortOrder
    teamB?: SortOrder
    teamBImg?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    matchTime?: SortOrder
    matchStatus?: SortOrder
    matchDate?: SortOrder
    channel?: SortOrder
  }

  export type TodayMinOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    league?: SortOrder
    leagueLogo?: SortOrder
    teamA?: SortOrder
    teamAImg?: SortOrder
    teamB?: SortOrder
    teamBImg?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    matchTime?: SortOrder
    matchStatus?: SortOrder
    matchDate?: SortOrder
    channel?: SortOrder
  }

  export type TodaySumOrderByAggregateInput = {
    id?: SortOrder
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

  export type TomorrowOrderByRelevanceInput = {
    fields: TomorrowOrderByRelevanceFieldEnum | TomorrowOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TomorrowCountOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    league?: SortOrder
    leagueLogo?: SortOrder
    teamA?: SortOrder
    teamAImg?: SortOrder
    teamB?: SortOrder
    teamBImg?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    matchTime?: SortOrder
    matchStatus?: SortOrder
    matchDate?: SortOrder
    channel?: SortOrder
  }

  export type TomorrowAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TomorrowMaxOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    league?: SortOrder
    leagueLogo?: SortOrder
    teamA?: SortOrder
    teamAImg?: SortOrder
    teamB?: SortOrder
    teamBImg?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    matchTime?: SortOrder
    matchStatus?: SortOrder
    matchDate?: SortOrder
    channel?: SortOrder
  }

  export type TomorrowMinOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    league?: SortOrder
    leagueLogo?: SortOrder
    teamA?: SortOrder
    teamAImg?: SortOrder
    teamB?: SortOrder
    teamBImg?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    matchTime?: SortOrder
    matchStatus?: SortOrder
    matchDate?: SortOrder
    channel?: SortOrder
  }

  export type TomorrowSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type YesterdayOrderByRelevanceInput = {
    fields: YesterdayOrderByRelevanceFieldEnum | YesterdayOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type YesterdayCountOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    league?: SortOrder
    leagueLogo?: SortOrder
    teamA?: SortOrder
    teamAImg?: SortOrder
    teamB?: SortOrder
    teamBImg?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    matchTime?: SortOrder
    matchStatus?: SortOrder
    matchDate?: SortOrder
    channel?: SortOrder
  }

  export type YesterdayAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type YesterdayMaxOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    league?: SortOrder
    leagueLogo?: SortOrder
    teamA?: SortOrder
    teamAImg?: SortOrder
    teamB?: SortOrder
    teamBImg?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    matchTime?: SortOrder
    matchStatus?: SortOrder
    matchDate?: SortOrder
    channel?: SortOrder
  }

  export type YesterdayMinOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    league?: SortOrder
    leagueLogo?: SortOrder
    teamA?: SortOrder
    teamAImg?: SortOrder
    teamB?: SortOrder
    teamBImg?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    matchTime?: SortOrder
    matchStatus?: SortOrder
    matchDate?: SortOrder
    channel?: SortOrder
  }

  export type YesterdaySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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