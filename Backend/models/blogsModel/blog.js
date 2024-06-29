import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    blogHeading:{ type: String, required: true },
    blogDesc: { type: String, required: true },
    blogImage: { type: String, required: true },
});

const blogModel = mongoose.model('blog', blogSchema);

export default blogModel;