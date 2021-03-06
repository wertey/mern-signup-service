const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const ClientSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
});

ClientSchema.index({ firstName: 'text', lastName: 'text', email: 'text' });
ClientSchema.plugin(mongoosePaginate);
ClientSchema.set('toJSON', {
    virtuals: true,
})

module.exports = model('Client', ClientSchema);
