import _isEqual from "lodash/isEqual"

export abstract class Value {
  isEqual(other: this): boolean {
    return _isEqual(this, other)
  }
}
