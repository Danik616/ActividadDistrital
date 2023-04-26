import httpServer from '#Config/http.js'
import '#Config/env.js'

const bootstrap= () => {
    httpServer.listen(process.env.PORT, () =>{
        console.log(`Servidor escuchando en el puerto ${process.env.PORT}`)
    })
}

bootstrap()