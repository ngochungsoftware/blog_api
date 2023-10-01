const Course = require('../models/Course')
const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose')

class MeController {
    // [GET] // me

    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('me/stored-courses', {courses: mutipleMongooseToObject(courses)})
                
            })
            .catch(next);
            
    }

}

module.exports = new MeController;

// const NewsController = require('./NewsController')
