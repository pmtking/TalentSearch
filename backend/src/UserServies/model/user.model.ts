import mongoose from 'mongoose'


// start modlex 
const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true }, // نام
    lastName: { type: String, required: true }, // نام خانوادگی
    phoneNumber: { type: String, required: true }, // شماره تماس
    email: { type: String, require: true }, // ایمیل 
    skills: { type: [String], required: true }, // مهارت‌ها
    resume: { type: String } // لینک یا توضیح رزومه
})

const User = mongoose.model('User', UserSchema);
export default User