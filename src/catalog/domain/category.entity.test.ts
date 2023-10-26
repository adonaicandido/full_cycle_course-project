import { Category } from "./category.entity"

describe("Category Entity Unit Tests", () => {
  it("should create a category", () => {
    const category = Category.create({
      name: "Category",
      description: "Category description",
    })

    expect(category).toBeInstanceOf(Category)
    expect(category.name).toBe("Category")
    expect(category.description).toBe("Category description")
    expect(category.isActive).toBe(false)
    expect(category.createdAt).toBeInstanceOf(Date)
  })

  it("should activate a category", () => {
    const category = Category.create({
      name: "Category",
      description: "Category description",
    })

    category.activate()

    expect(category.isActive).toBe(true)
  })

  it("should deactivate a category", () => {
    const category = Category.create({
      name: "Category",
      description: "Category description",
    })

    category.deactivate()

    expect(category.isActive).toBe(false)
  })

  it("should change name", () => {
    const category = Category.create({
      name: "Category",
      description: "Category description",
    })

    category.changeName("New Category")

    expect(category.name).toBe("New Category")
  })

  it("should change description", () => {
    const category = Category.create({
      name: "Category",
      description: "Category description",
    })

    category.changeDescription("New Category description")

    expect(category.description).toBe("New Category description")
  })
})
