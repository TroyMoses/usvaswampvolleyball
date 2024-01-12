import mongoose from "mongoose";

const partnerSchema = new mongoose.Schema({
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
    address: {
        type: String,
        required: [true, 'Please provide your address'],
        trim: true,
    },
    phone: {
        type: String,
        required: [true, 'Please provide your phone number'],
        trim: true,
    },
    sponsor: {
        type: String,
        required: [true, 'Do you want to become a sponsor?'],
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

const Partner = mongoose.models.Partner || mongoose.model('Partner', partnerSchema);

export default Partner;
