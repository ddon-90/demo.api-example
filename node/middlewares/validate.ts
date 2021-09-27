import { UserInputError } from '@vtex/api'

export async function validate(ctx: Context, next: () => Promise<any>) {
  
  console.info('Received params:', ctx.query)

  const { location } = ctx.query

  if (!location) {
    // You can call by city name or city name, state code and country code {city name},{state code},{country code}.
    // Please note that searching by states available only for the USA locations.
    throw new UserInputError('Parameter location is required. Example: location=London,GB')
  }

  await next()
}
