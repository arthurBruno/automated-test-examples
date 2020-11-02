const Mongoose = require('mongoose');

const employeeSchema = new Mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    createdAt: { type: Date, default: new Date() }
}, { collection: 'employee' });

module.exports = Mongoose.model('employee', employeeSchema);
