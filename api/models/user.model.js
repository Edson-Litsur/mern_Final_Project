import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

    avatar: {
        type: String,
        default: "https://th.bing.com/th/id/OIP.s1b9yCCw10YqK0jbedmi-AAAAA?rs=1&pid=ImgDetMain"
    },

}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User; 
