export async function postsMiddleware(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { jsonplaceholder: jsonplaceholderClient },
  } = ctx

  const data = await jsonplaceholderClient.getPosts()

  console.info('I am the postsMiddleware fuction and this is the API response: ', data)

  ctx.status = 200
  ctx.body = data
  ctx.set('Cache-Control', 'max-age=120')

  await next()
}

export async function postByIdMiddleware(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: { route: { params: { id } } },
    clients: { jsonplaceholder: jsonplaceholderClient },
  } = ctx

  const data = await jsonplaceholderClient.getPostsById(String(id))

  console.info('I am the postByIdMiddleware fuction and this is the API response: ', data)

  ctx.status = 200
  ctx.body = data
  ctx.set('Cache-Control', 'max-age=120')

  await next()
}

export async function usersMiddleware(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { jsonplaceholder: jsonplaceholderClient },
  } = ctx

  const data = await jsonplaceholderClient.getUsers()

  console.info('I am the usersMiddleware fuction and this is the API response: ', data)

  ctx.status = 200
  ctx.body = data
  ctx.set('Cache-Control', 'max-age=120')

  await next()
}
