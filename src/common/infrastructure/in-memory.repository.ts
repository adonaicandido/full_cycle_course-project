import { Entity, Value } from "../domain/abstractions"
import { IRepository } from "../domain/interfaces"

export abstract class InMemoryRepository<E extends Entity<Value>>
  implements IRepository<E>
{
  #entities: E[] = []

  async create(entity: E): Promise<void> {
    this.#entities.push(entity)
  }
  async createMany(entities: E[]): Promise<void> {
    this.#entities.push(...entities)
  }

  async selectById<I extends Value>(id: I): Promise<E | null> {
    const entity = this.#entities.find((e) => e.id.isEqual(id))
    return entity ?? null
  }
  async selectMany(): Promise<E[]> {
    return this.#entities
  }

  async update(entity: E): Promise<void> {
    const index = this.#entities.findIndex((e) => e.id.isEqual(entity.id))
    this.#entities[index] = entity
  }
  async updateMany(entities: E[]): Promise<void> {
    entities.forEach((entity) => this.update(entity))
  }

  async delete(entity: E): Promise<void> {
    const index = this.#entities.findIndex((e) => e.id.isEqual(entity.id))
    this.#entities.splice(index, 1)
  }
  async deleteMany(entities: E[]): Promise<void> {
    entities.forEach((entity) => this.delete(entity))
  }
}
