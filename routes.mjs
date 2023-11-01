export default {
    "/pageNotFound": (request, response) => {
        response.write("404 Error - Page Not Found")
        response.end()
    },
    "/special-message": (request, response) => {
        response.write("You're special!")
        response.end()
    },
    "/non-special-message": (request, response) => {
        response.write("You're not that special.")
        response.end()
    }
}