import { ProductsRepository } from '../repositories/products-repository'

interface GetProductStockBalanceUseCaseRequest {
  productId: string
}

export class GetProductStockBalanceUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({ productId }: GetProductStockBalanceUseCaseRequest) {
    const stockBalance = await this.productsRepository.getStockBalance(
      productId,
    )

    return stockBalance
  }
}
