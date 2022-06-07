import { IOClients } from '@vtex/api'

import Jsonplaceholder from './jsonplaceholder'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get jsonplaceholder() {
    return this.getOrSet('jsonplaceholder', Jsonplaceholder)
  }
}
