import { Product } from '../entities/product'
import { ProductsRepository } from '../repositories/products-repository'

interface CreateProductUseCaseRequest {
  name: string
  size: string
  color: string
  minimumStockLevel: number
}

export class CreateProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    name,
    size,
    color,
    minimumStockLevel,
  }: CreateProductUseCaseRequest) {
    const product = Product.create({
      name,
      size,
      color,
      minimumStockLevel,
    })

    await this.productsRepository.create(product)

    return product
  }
}
