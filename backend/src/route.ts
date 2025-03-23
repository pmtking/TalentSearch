import express from "express";

import UserRouter from './UserServies/routes/user.route'
const Router = express.Router()

Router.use('/v1', UserRouter)
Router.get('/' , (req:any, res:any ) => {
    return res.status(200).json({message:"test"})
})
export default Router 