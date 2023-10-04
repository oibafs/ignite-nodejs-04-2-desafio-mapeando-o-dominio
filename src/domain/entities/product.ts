import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

interface ProductProps {
  name: string
  minimumStockLevel: number
  stockBalance: number
  createdAt: Date
  updatedAt?: Date
}

export class Product extends Entity<ProductProps> {
  get name() {
    return this.props.name
  }

  get minimumStockLevel() {
    return this.props.minimumStockLevel
  }

  get stockBalance() {
    return this.props.stockBalance
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  set name(name: string) {
    this.props.name = name
    this.touch()
  }

  set minimumStockLevel(minimumStockLevel: number) {
    this.props.minimumStockLevel = minimumStockLevel
    this.touch()
  }

  static create(
    props: Optional<ProductProps, 'createdAt' | 'stockBalance'>,
    id?: UniqueEntityId,
  ) {
    const question = new Product(
      {
        ...props,
        createdAt: new Date(),
        stockBalance: props.stockBalance ?? 0,
      },
      id,
    )

    return question
  }
}
