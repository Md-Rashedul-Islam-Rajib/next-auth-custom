import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true,"Name is required"]
    },
    email: {
        type: String,
        require: [true, "Email is require"],
        unique: true,
    },
    password: {
        type: String,
        require: [true, "Password is required"]
    },
    date:{
    type: Date,
    default: Date.now,
    },
    isVerified: {
        type: boolean,
        default: false,
    },
    verifyToken: String,
    verifyTokenExpired: Date,
},{
    collection: "allUsers",
});

const user = mongoose.models.allUsers || mongoose.model("allUsers",userSchema);

export default user;