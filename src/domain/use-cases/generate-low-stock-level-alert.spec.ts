import { fakeProductsRepository } from '../utils/test/fake-products-repository'
import { GenerateLowStockLevelAlertUseCase } from './generate-low-stock-level-alert'

test('get product ids with low stock level', async () => {
  const generateLowStockLevelAlertUseCase =
    new GenerateLowStockLevelAlertUseCase(fakeProductsRepository)

  const productIdsWithLowStockLevel =
    await generateLowStockLevelAlertUseCase.execute()

  expect(productIdsWithLowStockLevel).toEqual(['fakeId-1', 'fakeId-2'])
})
