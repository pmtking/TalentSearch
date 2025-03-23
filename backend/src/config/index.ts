
import 'dotenv/config'

export default {    
    port:process.env.PORT || 4000 ,
    mongo_url : process.env.MONGO_URL

}