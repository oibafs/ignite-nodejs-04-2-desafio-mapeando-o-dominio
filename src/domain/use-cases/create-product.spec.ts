import { fakeProductsRepository } from '../utils/test/fake-products-repository'
import { CreateProductUseCase } from './create-product'

test('create a product', async () => {
  const createProductUseCase = new CreateProductUseCase(fakeProductsRepository)

  const product = await createProductUseCase.execute({
    name: 'Novo produto',
    size: 'L',
    color: 'green',
    minimumStockLevel: 100,
  })

  expect(product.name).toEqual('Novo produto')
})
