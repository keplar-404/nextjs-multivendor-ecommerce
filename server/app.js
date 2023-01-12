import express, { json } from "express"
import { home, registerAdmin, registerCustomer, registerSeller,login, logout, products } from './routes'
import checkCurrentUser from "./middlewares/checkCurrentUser"
import cors from 'cors'


const app = express()
app.use(json())
app.use(cors())

app.use('/', home)
app.use('/admin', registerAdmin)
app.use('/registercustomer', registerCustomer)
app.use('/registerseller', registerSeller)
app.use('/login', login)
app.use('/logout', logout)
app.use('/products', checkCurrentUser, products)

app.use(checkCurrentUser)
export default app