import Booking from "../models/Booking.js";
import Car from "../models/Car.js";
// function to check if a car is available for the given dates
const checkAvailability = async (car, pickupDate, returnDate) => {
    const bookings = await Booking.find({
        car,
        pickupDate: { $lte: returnDate },
        returnDate: { $gte: pickupDate },
    })
    return bookings.length === 0;
}

// API to check availability of a car for the given dates
export const checkAvailabilityOfCar = async (req, res) => {
    try{
        const {location, pickupDate, returnDate} = req.body;
        const cars = await Car.find({location,isAvailable: true});
        // check availiablty using range of date by promise function
        const availableCarsPromises = cars.map(async(car)=>{
            const isAvailable = await checkAvailability(car._id, pickupDate, returnDate) 
            return {...car._doc, isAvailable}
        })
        let availableCars = await Promise.all(availableCarsPromises);
        availableCars = availableCars.filter(car => car.isAvailable === true);
        res.json({success: true, availableCars})

    }catch(error){
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

export const createBooking = async (req, res) => {
    try{
        const {_id} = req.user;
        const {car, pickupDate, returnDate} = req.body;
        const isAvailable = await checkAvailability(car, pickupDate, returnDate);
        if(!isAvailable){
            return res.json({success: false, message: "Car is not available for the selected dates"});
        }
        const carData = await Car.findById(car);
        const picked = new Date(pickupDate);
        const returned = new Date(returnDate);
        const numberofDays = Math.ceil((returned - picked) / (1000 * 60 * 60 * 24));
        const price = numberofDays * carData.pricePerDay;

        await Booking.create({
            car,owner: carData.owner, user: _id, pickupDate, returnDate, price
        })
        res.json({success: true, message: "Booking created successfully"})

    }catch(error){
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

// api to list user bookings
export const getUserBookings = async (req, res) => {
    try{
        const {_id} = req.user;
        const bookings = await Booking.find({user: _id}).populate("car").sort({createdAt: -1});
        res.json({success: true, bookings})
    }catch(error){
        console.log(error.message);
        res.json({ success: false, message: error.message});
    }
}


// api to get owner bookings
export const getOwnerBookings = async (req, res) => {
    try{
        if(req.user.role !== "owner"){
            return res.json({success: false, message: "Only owners can access this resource"});
        }
        const {_id} = req.user;
        const bookings = await Booking.find({owner: _id}).populate("car user").select("-user.password").sort({createdAt: -1});
        res.json({success: true, bookings})
    }catch(error){
        console.log(error.message);
        res.json({ success: false, message: error.message});
    }
}

// API to change the booking status by owner
export const changeBookingStatus = async (req, res) => {
    try{
        const {_id} = req.user;
        const {bookingId, status} = req.body;
        const booking = await Booking.findById(bookingId);
        if(booking.owner.toString() !== _id.toString()){
            return res.json({success: false, message: "You are not authorized to change the status of this booking"});
        }
        booking.status = status;
        await booking.save();
        res.json({success: true, message: "Booking status updated successfully"})

    }catch(error){
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}
