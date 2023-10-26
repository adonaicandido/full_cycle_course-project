import { InMemoryRepository } from "~/common/infrastructure/in-memory.repository"

import { Category } from "../domain/category.entity"

export class CategoryInMemoryRepository extends InMemoryRepository<Category> {}
