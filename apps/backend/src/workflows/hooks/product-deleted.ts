import { Modules } from '@medusajs/framework/utils'
import { deleteProductsWorkflow } from '@medusajs/medusa/core-flows'

deleteProductsWorkflow.hooks.productsDeleted(async ({ ids }, { container }) => {
  await container.resolve(Modules.EVENT_BUS).emit({
    name: AlgoliaEvents.PRODUCTS_DELETED,
    data: { ids }
  })
})
