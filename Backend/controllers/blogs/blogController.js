import Blog from '../../models/blogsModel/blog.js';
import cloudinary from '../../middlware/cloudinary.js'; // Ensure you have the cloudinary configuration file correctly set up

// Create a new blog entry
export const createBlog = async (req, res) => {
    const { blogHeading, blogDesc } = req.body;

    try {
        // Upload blog image to Cloudinary if it exists
        let blogImage = null;
        if (req.file) {
            const uploadResult = await cloudinary.v2.uploader.upload(req.file.path);
            blogImage = uploadResult.secure_url;
        }

        const newBlog = new Blog({ blogHeading, blogDesc, blogImage });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all blogs
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get blog by ID
export const getBlogById = async (req, res) => {
    const { id } = req.params;

    try {
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update blog by ID
export const updateBlog = async (req, res) => {
    const { id } = req.params;
    const { blogHeading, blogDesc } = req.body;

    try {
        // Upload new blog image to Cloudinary if it exists
        let blogImage = null;
        if (req.file) {
            const uploadResult = await cloudinary.v2.uploader.upload(req.file.path);
            blogImage = uploadResult.secure_url;
        }

        const updateData = { blogHeading, blogDesc };
        if (blogImage) {
            updateData.blogImage = blogImage;
        }

        const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete blog by ID
export const deleteBlog = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBlog = await Blog.findByIdAndDelete(id);

        if (!deletedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
