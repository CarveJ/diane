const Router = require('koa-router')
const router = new Router();
const controller = require('./controllers/index')

router.post('/calories', controller.calorieCalculator)

router.post('/foodRequirements', controller.foodTableCalculator)

module.exports = router
