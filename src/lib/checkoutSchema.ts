import * as zod from 'zod'

export const checkoutSchema = zod.object({
  cep: zod.string().max(8).min(8),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string().optional(),
  city: zod.string(),
  estate: zod.string(),
  neighborhood: zod.string(),
  payment: zod.string(),
})

export type CheckoutSchemaType = zod.infer<typeof checkoutSchema>
