import { validateSync } from "class-validator"

import { FieldErrors, IValidator } from "../interfaces/validator.interface"

export abstract class ClassValidator<T> implements IValidator {
  errors: FieldErrors | null = null

  validate(props: T): boolean {
    const errors = validateSync(props)
    const hasErrors = errors.length > 0

    if (hasErrors) {
      this.errors = errors.reduce<FieldErrors>(
        (accumulator, { property, constraints }) => {
          const [key] = Object.keys(constraints)

          accumulator[property] = constraints[key]

          return accumulator
        },
        {},
      )
    }

    return !hasErrors
  }
}
