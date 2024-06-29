import referAndEarnModel from '../../models/referAndEarnModel/referAndEarn.js';
import cloudinary from '../../middlware/cloudinary.js';
import fs from 'fs';


// Function to upload image to Cloudinary
const uploadToCloudinary = (filePath) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(filePath, (error, result) => {
            if (error) reject(error);
            else resolve(result);
        });
    });
};

// Controller function to create a new refer and earn data entry
export const createReferAndEarnData = async (req, res) => {
    try {
        const { headerData, earnGreatReward } = req.body;

        // Check if file is uploaded
        if (!req.file) {
            return res.status(400).json({ message: 'Image file is required' });
        }

        // Upload file to Cloudinary
        const result = await uploadToCloudinary(req.file.path);

        // Create new entry with Cloudinary image URL
        const newReferAndEarnData = new referAndEarnModel({
            headerData: {
                headerImg: headerData.headerImg,
                heading: headerData.heading,
                subTitle: headerData.subTitle
            },
            earnGreatReward: {
                title: earnGreatReward.title,
                subTitle: earnGreatReward.subTitle,
                image: result.secure_url, // Use Cloudinary URL
                desc: earnGreatReward.desc,
                programHighlights: earnGreatReward.programHighlights.map(highlight => ({
                    point: highlight.point
                }))
            }
        });

        await newReferAndEarnData.save();

        // Delete file from local storage
        fs.unlinkSync(req.file.path);

        res.status(201).json(newReferAndEarnData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller function to get all refer and earn data entries
export const getAllReferAndEarnData = async (req, res) => {
    try {
        const referAndEarnData = await referAndEarnModel.find();
        res.status(200).json(referAndEarnData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to get a single refer and earn data entry by ID
export const getReferAndEarnDataById = async (req, res) => {
    try {
        const referAndEarnData = await referAndEarnModel.findById(req.params.id);
        if (!referAndEarnData) return res.status(404).json({ message: 'Refer and Earn data not found' });
        res.status(200).json(referAndEarnData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to delete a refer and earn data entry by ID
export const deleteReferAndEarnDataById = async (req, res) => {
    try {
        const referAndEarnData = await referAndEarnModel.findById(req.params.id);
        if (!referAndEarnData) return res.status(404).json({ message: 'Refer and Earn data not found' });

        // Delete image from Cloudinary
        const imageId = referAndEarnData.earnGreatReward.image.split('/').pop().split('.')[0];
        await cloudinary.uploader.destroy(imageId);

        // Delete the entry from the database
        await referAndEarnData.remove();

        res.status(200).json({ message: 'Refer and Earn data deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};