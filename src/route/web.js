import express from "express";
import homeController from "../controllers/HomeController"

let router = express.Router()

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage)
    router.get("/about", homeController.getAboutPage)
    router.get("/it", (req, res) => {
        return res.send('hello world with sena')
    })


    return app.use("/", router)
}

module.exports = initWebRoutes