import { CategoryType } from "../tools/types"

export class Category {
    name: CategoryType
    image: any

    constructor(name: CategoryType, image: any) {
        this.name = name
        this.image = image
    }
}