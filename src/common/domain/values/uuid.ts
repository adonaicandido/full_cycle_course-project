import { v4 as generateUuid, validate as validateUuid } from "uuid"

import { Value } from "../abstractions/value"

export class Uuid extends Value {
  readonly #value: string
  get value(): string {
    return this.#value
  }

  private validate() {
    const isValid = validateUuid(this.#value)

    if (!isValid) throw new InvalidUuidError()
  }

  private constructor(value?: string) {
    super()
    this.#value = value ?? generateUuid()
    this.validate()
  }

  static create(value?: string): Uuid {
    const uuid = new Uuid(value)

    return uuid
  }
}

export class InvalidUuidError extends Error {
  constructor() {
    super("INVALID_UUID")
  }
}
