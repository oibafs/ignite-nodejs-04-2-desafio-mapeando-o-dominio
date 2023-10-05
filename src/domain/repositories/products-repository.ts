import { Product } from '../entities/product'

export interface ProductsRepository {
  create(product: Product): Promise<void>
  getStockBalance(productId: string): Promise<number>
  generateLowStockLevelAlert(): Promise<string[]>
}
