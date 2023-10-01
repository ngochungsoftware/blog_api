const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug)

const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String },
  description: {type: String, maxLength : 600},
  videoId: {type: String, maxLength : 600},
  level: {type: String, maxLength :200},
  image : {type: String, maxLength : 225},
  slug: {type: String,  slug: 'name', unique: true},
}, {
  timestamps: true,
});

module.exports = mongoose.model('Course', Course);