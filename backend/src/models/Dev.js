const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId, 
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId, 
        ref: 'Dev',
    }],
}, {
    timestamps: true,
    //cria automaticamente pelo mongoose uma coluna automatica CreatedAt e UpdatedAt 
});

module.exports = model('Dev', DevSchema);