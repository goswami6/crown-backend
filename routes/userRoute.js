import express from 'express';
import { allBookings, bookvisit, cancelBooking, createUser, getallFav, toFav } from '../controllers/userCntrl.js';

const router = express.Router();

router.post("/register", createUser)
router.post("/bookVisit/:id", bookvisit)
router.post("/allBookings", allBookings)
router.post("/removeBooking/:id", cancelBooking)
router.post("/toFav/:rid", toFav)
router.post("/allFav", getallFav)


export {router as userRoute}