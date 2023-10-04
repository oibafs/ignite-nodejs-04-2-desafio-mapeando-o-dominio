import { SalesOrder } from '../entities/salesOrder'

export interface SalesOrdersRepository {
  // create(salesOrder: SalesOrder): Promise<void>
  fetchHistory(productId: string): Promise<SalesOrder[]>
}
