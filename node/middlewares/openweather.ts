export async function openweather(ctx: Context, next: () => Promise<any>) {
  const {
    query: { location: location, units: units },
    clients: { openweather: openWeatherClient },
  } = ctx

  console.info('Received location:', location)

  const data = await openWeatherClient.getCurrentWeather(location,units)

  console.info('OpenWeather response:', data)

  // const { headers, data } = await openWeatherClient.getCurrentWeatherWithHeaders(location,units)
  // console.info('OpenWeather Headers:', headers)
  // console.info('OpenWeather Data:', data)
  // console.info('VTEX Context:', ctx)

  ctx.status = 200
  ctx.body = data
  ctx.set('Cache-Control', 'max-age=120')

  await next()
}
