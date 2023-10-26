import { InvalidUuidError, Uuid } from "./uuid"

describe("UUID Value Object Unit Tests", () => {
  it("should create a UUID", () => {
    const uuid = Uuid.create()

    expect(uuid).toBeInstanceOf(Uuid)
    expect(uuid.value).toHaveLength(36)
  })

  it("should create a UUID from a string", () => {
    const uuid = Uuid.create("c0a0f8a8-6a0e-4b5d-9b7f-5c5d2d2a8f1c")

    expect(uuid.value).toBe("c0a0f8a8-6a0e-4b5d-9b7f-5c5d2d2a8f1c")
  })

  it("should throw an error for an invalid UUID", () => {
    expect(() => Uuid.create("invalid-uuid")).toThrow(new InvalidUuidError())
  })
})
