export type HttpServerMethod = "get" | "post" | "delete" | "put" | "patch" | "options"

export interface HttpServer {
  on(method: HttpServerMethod, url: string, callback: (params: unknown, body: unknown) => Promise<any>): void
  listen(port: number): void
}
