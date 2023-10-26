import { Entity, Value } from "../abstractions"

export interface IRepository<E extends Entity<Value>> {
  create(entity: E): Promise<void>
  createMany(entities: E[]): Promise<void>

  selectById<I extends Value>(id: I): Promise<E | null>
  selectMany(): Promise<E[]>

  update(entity: E): Promise<void>
  updateMany(entities: E[]): Promise<void>

  delete(entity: E): Promise<void>
  deleteMany(entities: E[]): Promise<void>
}

export interface ISearchableRepository<E extends Entity<Value>> {}
