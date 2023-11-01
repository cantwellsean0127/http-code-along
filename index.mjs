import http from "http"
import routes from "./routes.mjs"
import dotenv from "dotenv"

// Configures enviroment variables
dotenv.config()

const requestHandler = (request, response) => {
    (routes[request.url] || routes["/pageNotFound"])(request, response)
}

const server = http.createServer(requestHandler)
server.listen(process.env.port, (error) => {
    if (error !== undefined) {
        console.log(`Unable to start server.`)
        console.log(error)
    }

    else {
        console.log(`Server started `)
    }
})