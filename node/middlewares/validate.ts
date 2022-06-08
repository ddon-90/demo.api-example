// import { UserInputError } from '@vtex/api'

export async function validate(ctx: Context, next: () => Promise<any>) {

  console.info(ctx)
  
  /* Here you can validate the api request

  Example:

  const { param } = ctx.query


  if (param == null) {
    throw new UserInputError('Parameter xxxx is required.')
  }
  */

  await next()
}
