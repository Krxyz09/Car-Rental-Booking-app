import express from "express";
import { protect } from "../middleware/auth.js";
import { addCar, changeRoleToOwner,getOwnerCars,toggleCarAvailability,deleteCar,getDashboardData,updateProfilePicture } from "../controllers/ownerController.js";
import upload from "../middleware/multer.js";

const ownerRouter = express.Router();
ownerRouter.post("/change-owner",protect,changeRoleToOwner)
ownerRouter.post("/add-car",upload.single("image"),protect,addCar)
ownerRouter.get("/cars",protect,getOwnerCars)
ownerRouter.post("/toggle-car",protect,toggleCarAvailability)
ownerRouter.post("/delete-car",protect,deleteCar)

ownerRouter.get("/dashboard",protect,getDashboardData)
ownerRouter.post("/update-image",upload.single("image"),protect,updateProfilePicture)

export default ownerRouter;