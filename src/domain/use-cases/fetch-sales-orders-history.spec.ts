import { FetchSalesOrdersHistoryUseCase } from './fetch-sales-orders-history'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { SalesOrdersRepository } from './../repositories/sales-orders-repository'
import { SalesOrder } from '../entities/salesOrder'

const fakeSalesOrdersRepository: SalesOrdersRepository = {
  fetchHistory: async (productId: string) => {
    const salesOrder = SalesOrder.create({
      orderDate: new Date(),
      productId: new UniqueEntityId(),
      quantity: 100,
    })
    const salesOrderHistory = [salesOrder]

    return salesOrderHistory
  },
}

test('fetch sales order history for a product', async () => {
  const fetchSalesOrdersHistoryUseCase = new FetchSalesOrdersHistoryUseCase(
    fakeSalesOrdersRepository,
  )

  const salesOrdersHistory = await fetchSalesOrdersHistoryUseCase.execute({
    productId: 'fake-id',
  })

  expect(salesOrdersHistory).toEqual([
    expect.objectContaining({
      quantity: 100,
    }),
  ])
})
