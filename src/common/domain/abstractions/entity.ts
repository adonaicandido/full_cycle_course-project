import { Value } from "./value"

export abstract class Entity<I extends Value> {
  #id: I
  get id() {
    return this.#id
  }

  protected constructor(id: I) {
    this.#id = id
  }
}
