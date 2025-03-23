import express from 'express';
import { RegisterController } from '../controller/user.controller';

const Router = express.Router();

Router.post('/register', RegisterController)
Router.get('/', (req:any, res:any) => {
    return res.status(200).json({
        messgae:"test"
    })
})


export default Router;
