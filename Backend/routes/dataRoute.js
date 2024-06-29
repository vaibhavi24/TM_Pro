import express from 'express';
import upload from '../middlware/multer.js';
import {
    createL2PageData,
    getAllL2PageData,
    getL2PageDataById,
    getL2PageDataByCourseCategory,
    updateL2PageData,
    deleteL2PageData
} from '../controllers/L2PageController/L2PageController.js';
import {
    createL3Page,
    getL3PagesByCategory,
    getL3PagesByCourseAndCategory,
    updateL3Page,
    deleteL3Page,
    getL3PagesData
} from '../controllers/L3Controller/L3Controller.js';
import { createBlog, deleteBlog, getAllBlogs, getBlogById, updateBlog } from '../controllers/blogs/blogController.js';
import { createFaq, deleteFaq, getAllFaqs, getFaqById, updateFaq } from '../controllers/faqData/AllFaqController.js';
import { createAboutUsPage, deleteAboutUsPageData, getAllAboutUsData } from '../controllers/aboutUs/aboutUsController..js';
import { createTestimonials, deleteTestimonials, getAllTestimonials, getTestimonialsById, updateTestimonials } from '../controllers/aboutUs/testimonials.js';
import { createMorqueData, deleteMorqueData, getAllMorqueData, getMorqueDataById, updateMorqueData } from '../controllers/morqueData/morqueData.js';
import { createReferAndEarnData, deleteReferAndEarnDataById, getAllReferAndEarnData, getReferAndEarnDataById } from '../controllers/referAndEarn/referAndEarnController.js';

const router = express.Router();

// L2 Page Routes
router.post('/add-course-category', upload.fields([
    { name: 'headerImage', maxCount: 1 },
    { name: 'practioners', maxCount: 100 },
    { name: 'masterClass', maxCount: 100 },
    { name: 'companyLogoImages', maxCount: 100 }
]), createL2PageData);

router.get('/get-course-category', getAllL2PageData);
router.get('/get-course-category-by-id/:id', getL2PageDataById);
router.get('/get-course-category-by-category/:Coursecategory', getL2PageDataByCourseCategory);
router.put('/update-course-category/:id', upload.fields([
    { name: 'headerImage', maxCount: 1 },
    { name: 'practioners', maxCount: 100 },
    { name: 'masterClass', maxCount: 100 },
    { name: 'companyLogoImages', maxCount: 100 }
]), updateL2PageData);
router.delete('/delete-course-category/:id', deleteL2PageData);

// L3 Page Routes
const cpUpload = upload.fields([
    { name: 'headerImage', maxCount: 1 },
    { name: 'aboutCourseLogoImages', maxCount: 100 },
    { name: 'studentReviewProfilePicImage', maxCount: 100 },
    { name: 'TopInDemadToolsLogoImages', maxCount: 100 },
    { name: 'PopularProjectsLogoImages', maxCount: 100 },
    { name: 'LatestProjectsLogoImages', maxCount: 100 },
    { name: 'PopulartechTools1', maxCount: 100 },
    { name: 'PopulartechTools2', maxCount: 100 },
    { name: 'PopulartechTools3', maxCount: 100 },
    { name: 'PopulartechTools4', maxCount: 100 },
    { name: 'PopulartechTools5', maxCount: 100 },
    { name: 'PopulartechTools6', maxCount: 100 },
    { name: 'LatesttechTools1', maxCount: 100 },
    { name: 'LatesttechTools2', maxCount: 100 },
    { name: 'LatesttechTools3', maxCount: 100 },
    { name: 'LatesttechTools4', maxCount: 100 },
    { name: 'LatesttechTools5', maxCount: 100 },
    { name: 'LatesttechTools6', maxCount: 100 },
    { name: 'upCommingBatchesBrocherImage', maxCount: 1 },
    { name: 'earnCertificatesCertificateImage', maxCount: 1 },
    { name: 'earnCertificatesGallaryImage', maxCount: 100 },
    { name: 'instructorProfileImage', maxCount: 100 },
    { name: 'creatorProfileImage', maxCount: 100 }
]);

router.post('/add-landingpage', cpUpload, createL3Page);
router.get('/get-landingpage-by-category/:category', getL3PagesByCategory);
router.get('/get-landingpage-by-course-and-category/:category/:course', getL3PagesByCourseAndCategory);
router.put('/update-landingpage/:id', cpUpload, updateL3Page);
router.delete('/delete-landingpage/:id', deleteL3Page);
router.get('/get-landingpage', getL3PagesData);

// blog routes
router.post('/add-blog', upload.single('blogImage'), createBlog);
router.get('/get-blogs', getAllBlogs);
router.get('/get-blog-by-id', getBlogById);
router.get('/update-blog-by-id', upload.single('blogImage'), updateBlog);
router.get('/delete-blog-by-id', deleteBlog);

// faq routes
router.post('/add-faq', createFaq);
router.get('/get-faq', getAllFaqs);
router.get('/get-faq-by-id', getFaqById);
router.get('/update-faq-by-id', updateFaq);
router.get('/delete-faq-by-id', deleteFaq);


// about Us routes 
const multerFields = upload.fields([
    { name: 'headerImg', maxCount: 1 },
    { name: 'socialIconLogo', maxCount: 100 },
    { name: 'memberProfilePic', maxCount: 100 },
    { name: 'companyLogo', maxCount: 100 },
    { name: 'galleryImage', maxCount: 100 }
]);

// Define the routes
router.post('/add-aboutus', multerFields, createAboutUsPage);
router.get('/get-aboutus', getAllAboutUsData);
router.delete('/delete-aboutus/:id', deleteAboutUsPageData);

// // query contact us routes 
// router.post('/create-queryformdata', createQueryFormData);
// router.get('/get-all-queryformdata', getAllQueryFormData);
// router.get('/get-data-by-id-queryformdata/:id', getQueryFormDataById);
// router.put('/update-queryformdata/:id', updateQueryFormData);
// router.delete('/delete-queryformdata/:id', deleteQueryFormData);

// testimonials data
router.post('/testimonials', upload.array('reviewVideo', 100), createTestimonials); // Adjust the field name as needed
router.get('/testimonials', getAllTestimonials);
router.get('/testimonials/:id', getTestimonialsById);
router.put('/testimonials/:id', upload.array('reviewVideo', 100), updateTestimonials); // Adjust the field name as needed
router.delete('/testimonials/:id', deleteTestimonials);

// Define the routes
router.post('/add-morqueData', createMorqueData);
router.get('/get-morqueData', getAllMorqueData);
router.get('/get-morque-data-by-id-morqueData/:id', getMorqueDataById);
router.put('/update-morqueData/:id', updateMorqueData);
router.delete('/delete-morqueData/:id', deleteMorqueData);

// refer and earn 
router.post('/add-refer-and-earn-data', upload.single('earnGreatRewardImage'), createReferAndEarnData)
router.get('/get-refer-and-earn-data', getAllReferAndEarnData)
router.get('/get-refer-and-earn-data-by-id/:id', getReferAndEarnDataById)
router.delete('/delette-refer-and-earn-data-by-id/:id', deleteReferAndEarnDataById)
export default router;
