import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    likes: {
        type:Number,
        default:0
    },
    tags:[String],
    selectedFile:String,
    createdAt:{
        type:Date,
        default: new Date()
    }
}, {
    timestamps:true
});

export default mongoose.model('PostMessageModel',postSchema);