import { Product } from '@/domain/entities/product'
import { ProductsRepository } from '@/domain/repositories/products-repository'

export const fakeProductsRepository: ProductsRepository = {
  create: async (product: Product) => {
    return
  },

  getStockBalance: async (productId: string) => {
    return 100
  },

  generateLowStockLevelAlert: async (productIds?: string[]) => {
    return ['fakeId-1', 'fakeId-2']
  },
}
