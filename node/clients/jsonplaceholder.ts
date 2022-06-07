import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class Jsonplaceholder extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://jsonplaceholder.typicode.com', context, options)
  }

  public async getPosts(): Promise<string> {
    return this.http.get(`/posts`, {
      metric: 'current-posts-get',
    })
  }

  public async getPostsById(id: string): Promise<string> {
    return this.http.get(`/posts/${id}`, {
      metric: 'current-posts-get',
    })
  }

  public async getUsers(): Promise<string> {
    return this.http.get(`/users`, {
      metric: 'current-posts-get',
    })
  }
}
