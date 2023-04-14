import { Router } from "express"

type Usuario = {
	id: number
	name: string
}

const router = Router()

router.get('/', (req, res) => {
	res.send('Hello World!')
})

router.post('/', (req,res) => {
	const { name } = req.body as Usuario
	res.send({
		name,
		message: 'Hello World!'
	})
})

export default router