import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

interface SalesOrderProps {
  orderDate: Date
  productId: UniqueEntityId
  quantity: number
  createdAt: Date
  updatedAt?: Date
}

export class SalesOrder extends Entity<SalesOrderProps> {
  get orderDate() {
    return this.props.orderDate
  }

  get productId() {
    return this.props.productId
  }

  get quantity() {
    return this.props.quantity
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

  set orderDate(orderDate: Date) {
    this.props.orderDate = orderDate
    this.touch()
  }

  set productId(productId: UniqueEntityId) {
    this.props.productId = productId
    this.touch()
  }

  set quantity(quantity: number) {
    this.props.quantity = quantity
    this.touch()
  }

  static create(
    props: Optional<SalesOrderProps, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const question = new SalesOrder(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )

    return question
  }
}
