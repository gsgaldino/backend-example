import { Router } from './router'
import { ExpressHttpServerAdapter } from './infra'
import { UserMemoryRepository } from './infra/repository'

const httpServer = new ExpressHttpServerAdapter()
const userRepository = new UserMemoryRepository()

const router = new Router(httpServer, userRepository)

router.init()
router.httpServer.listen(3000)
