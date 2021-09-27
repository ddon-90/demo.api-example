export async function openweather(ctx: Context, next: () => Promise<any>) {
  const {
    query: { location: location, units: units },
    clients: { openweather: openWeatherClient },
  } = ctx

  console.info('Received location:', location)

  const openWeatherResponse = await openWeatherClient.getCurrentWeather(location,units)

  console.info('OpenWeather response:', openWeatherResponse)

  const {
    headers,
    data
  } = await openWeatherClient.getCurrentWeatherWithHeaders(location,units)

  console.info('OpenWeather headers', headers)
  console.info('OpenWeather data:', data)
  console.info('OpenWeather Context:', ctx)

  ctx.body = data
  ctx.set('Cache-Control', headers['cache-control'])

  await next()
}
