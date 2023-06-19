const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { getAllUsersController, getAllDoctorsController, blockUserController, changeAccountStatusController } = require('../controllers/adminCtrl');
const router = express.Router();

// GET METHOD || USERS
router.get('/getAllUsers', authMiddleware, getAllUsersController);

// GET METHOD || DOCTORS
router.get('/getAllDoctors', authMiddleware, getAllDoctorsController);

// PUT METHOD || BLOCK USER
router.put('/blockUser/:userId', authMiddleware, blockUserController);
//POST ACCOUNT STATUS
router.post('/changeAccountStatus', authMiddleware,changeAccountStatusController)

module.exports = router;
