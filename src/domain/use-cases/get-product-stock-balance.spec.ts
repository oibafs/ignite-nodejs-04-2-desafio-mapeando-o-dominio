import { Product } from '../entities/product'
import { ProductsRepository } from '../repositories/products-repository'
import { GetProductStockBalanceUseCase } from './get-product-stock-balance'

const fakeProductsRepository: ProductsRepository = {
  create: async (product: Product) => {
    return
  },

  getStockBalance: async (productId: string) => {
    return 100
  },
}

test('get stock balance for a product', async () => {
  const getProductStockBalanceUseCase = new GetProductStockBalanceUseCase(
    fakeProductsRepository,
  )

  const stockBalance = await getProductStockBalanceUseCase.execute({
    productId: 'fake-id',
  })

  expect(stockBalance).toEqual(100)
})
