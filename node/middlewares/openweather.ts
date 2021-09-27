export async function openweather(ctx: Context, next: () => Promise<any>) {
  const {
    query: { city: city },
    clients: { openweather: openWeatherClient },
  } = ctx

  console.info('Received city:', city)

  const openWeatherResponse = await openWeatherClient.getCurrentWeather(city)

  console.info('OpenWeather response:', openWeatherResponse)

  const {
    headers,
    data
  } = await openWeatherClient.getCurrentWeatherWithHeaders(city)

  console.info('OpenWeather headers', headers)
  console.info('OpenWeather data:', data)
  console.info('OpenWeather Context:', ctx)

  ctx.body = data
  ctx.set('Cache-Control', headers['cache-control'])

  await next()
}
