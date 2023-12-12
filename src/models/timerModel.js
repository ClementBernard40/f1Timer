const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let timerSchema = new Schema ({
    users_id: {
        type: String,
        required: true,
    },
    time:  {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Timer', timerSchema);
