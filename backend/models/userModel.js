import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
     email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["EMPLOYEE", "MANAGER", "ADMIN"],
      default: "EMPLOYEE"
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department"
    },
    isActive: {
      type: Boolean,
      default: true
    },
    lastSeen: {
      type: Date
    }
  },
  { timestamps: true }
)
const userModel = mongoose.model('User', userSchema)
export default userModel