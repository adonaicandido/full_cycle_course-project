export type FieldErrors = {
  [field: string]: string
}

export type IValidator = {
  errors: FieldErrors | null
  validate(props: unknown): boolean
}
