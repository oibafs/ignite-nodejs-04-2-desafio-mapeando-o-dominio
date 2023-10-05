import { Product } from '../entities/product'
import { ProductsRepository } from '../repositories/products-repository'
import { CreateProductUseCase } from './create-product'

const fakeProductsRepository: ProductsRepository = {
  create: async (product: Product) => {
    return
  },

  getStockBalance: async (productId: string) => {
    return 100
  },
}

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
