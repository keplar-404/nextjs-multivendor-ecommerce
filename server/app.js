import express, { json } from "express"
import { home, registerCustomer, registerSeller,login, products } from './routes'
import checkCurrentUser from "./middlewares/checkCurrentUser"

const app = express()
app.use(json())


app.use('/', home)
app.use('/registercustomer', registerCustomer)
app.use('/registerseller', registerSeller)
app.use('/login', login)
app.use('/products', products)

app.use(checkCurrentUser)
export default app