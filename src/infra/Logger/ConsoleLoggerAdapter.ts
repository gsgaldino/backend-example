import { ILogger } from './ILogger'

export class ConsoleLogger implements ILogger {
  log(...str: string[]): void {
    console.log(str)
  }
}
