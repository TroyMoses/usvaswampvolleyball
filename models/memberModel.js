import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, 'Please provide your first name'],
        trim: true,
    },
    lname: {
        type: String,
        required: [true, 'Please provide your last name'],
        trim: true,
    },
    gender: {
        type: String,
        required: [true, 'Please provide your gender'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide your email address'],
        trim: true,
    },
    category: {
        type: String,
        required: [true, 'Please specify your membership type'],
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

const Member = mongoose.models.Member || mongoose.model('Member', memberSchema);

export default Member;


