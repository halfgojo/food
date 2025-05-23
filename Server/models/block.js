const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Restaurant = require('./restaurant'); 

const BlockSchema = new Schema({
  name: { type: String, required: true },
  restaurants: { type: [Restaurant.schema], default: [] }
});

const Block = mongoose.model('Block', BlockSchema);
module.exports = Block;
