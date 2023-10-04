import { SalesOrdersRepository } from '../repositories/sales-orders-repository'

interface FetchSalesOrdersHistoryUseCaseRequest {
  productId: string
}

export class FetchSalesOrdersHistoryUseCase {
  constructor(private salesOrdersRepository: SalesOrdersRepository) {}

  async execute({ productId }: FetchSalesOrdersHistoryUseCaseRequest) {
    const salesOrdersHistory = await this.salesOrdersRepository.fetchHistory(
      productId,
    )

    return salesOrdersHistory
  }
}
