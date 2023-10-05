import { fakeProductsRepository } from '../utils/test/fake-products-repository'
import { GetProductStockBalanceUseCase } from './get-product-stock-balance'

test('get stock balance for a product', async () => {
  const getProductStockBalanceUseCase = new GetProductStockBalanceUseCase(
    fakeProductsRepository,
  )

  const stockBalance = await getProductStockBalanceUseCase.execute({
    productId: 'fake-id',
  })

  expect(stockBalance).toEqual(100)
})
