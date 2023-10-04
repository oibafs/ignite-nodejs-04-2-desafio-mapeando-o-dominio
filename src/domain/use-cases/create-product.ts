import { Product } from '../entities/product'
import { ProductsRepository } from '../repositories/products-repository'

interface CreateProductUseCaseRequest {
  name: string
  minimumStockLevel: number
}

export class CreateProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({ name, minimumStockLevel }: CreateProductUseCaseRequest) {
    const product = Product.create({
      name,
      minimumStockLevel,
    })

    await this.productsRepository.create(product)

    return product
  }
}
