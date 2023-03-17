import Express from 'express'

const mainRouter = Express.Router()

mainRouter.get('/', async (req: Express.Request, res: Express.Response) => {
  res.send('hi!')
})

export default mainRouter
