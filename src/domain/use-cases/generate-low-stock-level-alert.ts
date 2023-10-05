import { ProductsRepository } from '../repositories/products-repository'

export class GenerateLowStockLevelAlertUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute() {
    const productIdsWithLowStockLevel =
      await this.productsRepository.generateLowStockLevelAlert()

    return productIdsWithLowStockLevel
  }
}
