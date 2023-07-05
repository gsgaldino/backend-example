export type HttpServerMethod = "get" | "post" | "delete" | "put" | "patch" | "options"

export interface HttpServer {
  on(method: HttpServerMethod, url: string, callback: (params: unknown, body: unknown) => void): void
  listen(port: number): void
}
