import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator"

import { ClassValidator } from "~/common/domain/validators"

class CategoryRules {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name!: string

  @IsString()
  @IsOptional()
  description!: string | null

  @IsBoolean()
  isActive!: boolean

  constructor(props: CategoryRules) {
    Object.assign(this, props)
  }
}

export class CategoryValidator extends ClassValidator<CategoryRules> {
  validate2(props: CategoryRules): boolean {
    const rules = new CategoryRules(props)

    return super.validate(rules)
  }
}
