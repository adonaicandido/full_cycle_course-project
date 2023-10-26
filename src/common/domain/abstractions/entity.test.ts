import { Entity } from "./entity"
import { StubValue } from "./value.test"

export class StubEntity extends Entity<StubValue> {
  constructor(id: StubValue) {
    super(id)
  }
}
