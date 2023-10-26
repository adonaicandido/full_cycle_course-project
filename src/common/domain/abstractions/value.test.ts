import { Value } from "./value"

export class StubValue extends Value {
  readonly #value: string
  get value() {
    return this.#value
  }

  constructor(value: string) {
    super()
    this.#value = value
  }
}
