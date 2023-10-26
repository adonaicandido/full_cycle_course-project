import { Entity } from "~/common/domain/abstractions"
import { Uuid } from "~/common/domain/values/uuid"
import { CategoryValidator } from "./category.validator"

export type CategoryProps = {
  id?: Uuid
  name: string
  description?: string | null
  isActive?: boolean
  createdAt?: Date
}

export type CreateCategoryCommand = {
  name: string
  description?: string
}

export class Category extends Entity<Uuid> {
  #name: string
  get name(): string {
    return this.#name
  }

  #description: string | null
  get description(): string | null {
    return this.#description
  }

  #active: boolean
  get isActive(): boolean {
    return this.#active
  }
  #createdAt: Date
  get createdAt(): Date {
    return this.#createdAt
  }

  private constructor(props: CategoryProps) {
    super(props.id ?? Uuid.create())
    this.#name = props.name
    this.#description = props.description ?? null
    this.#active = props.isActive ?? false
    this.#createdAt = props.createdAt ?? new Date()
  }

  static validate(props: CreateCategoryCommand): boolean {
    const validator = new CategoryValidator()

    return validator.validate(props)
  }

  static create(props: CreateCategoryCommand): Category {
    const category = new Category(props)
    Category.validate(props)

    return category
  }

  toJSON(): CategoryProps {
    return {
      id: this.id,
      name: this.#name,
      description: this.#description,
      isActive: this.#active,
      createdAt: this.#createdAt,
    }
  }

  changeName(name: string): void {
    this.#name = name
  }
  changeDescription(description: string): void {
    this.#description = description
  }
  activate(): void {
    this.#active = true
  }
  deactivate(): void {
    this.#active = false
  }
}
