import type { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

const APP_ID = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

export default class OpenWeather extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://api.openweathermap.org', context, options)
  }

  public async getCurrentWeather(location: string, units: string): Promise<string> {
    return this.http.get(`/data/2.5/weather?q=${location}&units=${units}&appid=${APP_ID}`, {
      metric: 'current-weather-get',
    })
  }

  public async getCurrentWeatherWithHeaders(location: string, units: string): Promise<IOResponse<string>> {
    return this.http.getRaw(`/data/2.5/weather?q=${location}&units=${units}&appid=${APP_ID}`, {
      metric: 'current-weather-raw',
    })
  }
}
