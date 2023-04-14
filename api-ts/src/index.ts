import express from 'express'
import userRoute from './users'

const app = express()

app.use(express.json())
app.use('/', userRoute)


app.listen(3000, () => {
	console.log({message: 'Example app listening on port 3000!'})
})