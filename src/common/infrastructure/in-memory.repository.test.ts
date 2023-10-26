import { StubEntity } from "../domain/abstractions/entity.test"
import { StubValue } from "../domain/abstractions/value.test"

import { InMemoryRepository } from "./in-memory.repository"

export class StubInMemoryRepository extends InMemoryRepository<StubEntity> {}

describe("InMemoryRepository Unit Tests", () => {
  let repository: StubInMemoryRepository

  beforeEach(() => {
    repository = new StubInMemoryRepository()
  })

  describe("create", () => {
    it("should create a new entity", async () => {
      const entity = new StubEntity(new StubValue("test"))
      await repository.create(entity)

      const result = await repository.selectById(entity.id)

      expect(result).toEqual(entity)
    })
  })
})
