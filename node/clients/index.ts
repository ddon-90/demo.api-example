import { IOClients } from '@vtex/api'

import OpenWeather from './openweather'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get openweather() {
    return this.getOrSet('openweather', OpenWeather)
  }
}
