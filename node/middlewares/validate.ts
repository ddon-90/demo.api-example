import { UserInputError } from '@vtex/api'

export async function validate(ctx: Context, next: () => Promise<any>) {
  
  console.info('Received params:', ctx.query)

  const { city } = ctx.query

  if (!city) {
    throw new UserInputError('City is required')
  }

  await next()
}
