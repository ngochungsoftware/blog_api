const Course = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose')

class CourseController {
    // [GET] // search
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then((course) => {
                res.render('courses/show', {course: mongooseToObject(course)})
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('courses/create')
    }

    store(req, res, next) {
        // res.json(req.body)
        const formData = req.body
        formData.image = 'http://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg';
        const course = new Course(formData)
        course.save()
            .then(() => res.redirect('/'))
            .catch(Error => {
                
            });
        
    }
}

module.exports = new CourseController;

// const NewsController = require('./NewsController')
