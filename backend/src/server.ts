import app from './app'
import config from './config/index'
async function main() {
    try {
        app.listen(config.port, () => {
            console.log('server is runing',config.port)
        })
    } catch (error) {
        console.log('errr -> server: ', error)
    }
}

main();