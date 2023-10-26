import { IRepository } from "~/common/domain/interfaces"

import { Category } from "../category.entity"

export interface ICategoryRepository extends IRepository<Category> {}
