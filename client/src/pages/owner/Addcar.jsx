import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'
const Addcar = () => {
  const currency = import.meta.env.VITE_CURRENCY
  const [image, setImage] = useState(null)
  const [car,setCar]= useState({
    brand:'',
    model:'',
    year:0,
    pricePerDay:0,
    category:'',
    transmission:'',
    fuel_type:'',
    seating_capacity:0,
    location:'',
    description:''
  })
  const onsubmithandler = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
  }
  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
      <Title title="Add Car" subTitle="Fill in the details to add a new car" />
      <form onSubmit={onsubmithandler} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>
        <div className='flex items-center gap-2 w-full'>
          <label htmlFor="car-image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="Car" className='h-14 rounded cursor-pointer'/>
            <input type="file" id="car-image" accept='image/*' hidden onChange={e=>setImage(e.target.files[0])}/>
          </label>
          <p className='text-xs text-gray-500 '>Upload your own car</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col w-full'>
            <label htmlFor="brand">Brand</label>
            <input type="text" id='brand' placeholder='e.g. BMW,Mercedes,Audi....' value={car.brand} onChange={e=>setCar({...car,brand:e.target.value})} className='mt-1 border border-borderColor rounded-md px-3 py-2 outline-none' required/>
          </div>
          <div className='flex flex-col w-full'>
            <label htmlFor="model">Model</label>
            <input type="text" id='model' placeholder='e.g. X5,E Class,A4....' value={car.model} onChange={e=>setCar({...car,model:e.target.value})} className='mt-1 border border-borderColor rounded-md px-3 py-2 outline-none' required/>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='flex flex-col w-full'>
            <label htmlFor="year">Year</label>
            <input type="number" id='year' placeholder='1900' value={car.year} onChange={e=>setCar({...car,year:e.target.value})} className='mt-1 border border-borderColor rounded-md px-3 py-2 outline-none' min="1900" required/>
          </div>
          <div className='flex flex-col w-full'>
            <label htmlFor="pricePerDay">Daily Price ({currency})</label>
            <input type="number" id='pricePerDay' placeholder='0' value={car.pricePerDay} onChange={e=>setCar({...car,pricePerDay:e.target.value})} className='mt-1 border border-borderColor rounded-md px-3 py-2 outline-none' min="0" required/>
          </div>
          <div className='flex flex-col w-full'>
            <label>Category</label>
            <select value={car.category} onChange={e=>setCar({...car,category:e.target.value})} className='mt-1 border border-borderColor rounded-md px-3 py-2 outline-none' required>
              <option value="">Select Category</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Van">Van</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Coupe">Coupe</option>
            </select>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Transmission</label>
            <select value={car.transmission} onChange={e=>setCar({...car,transmission:e.target.value})} className='mt-1 border border-borderColor rounded-md px-3 py-2 outline-none' required>
              <option value="">Select Transmission</option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
              <option value="Semi-Automatic">Semi-Automatic</option>
            </select>
          </div>
          <div className='flex flex-col w-full'>
            <label>Fuel Type</label>
            <select value={car.fuel_type} onChange={e=>setCar({...car,fuel_type:e.target.value})} className='mt-1 border border-borderColor rounded-md px-3 py-2 outline-none' required>
              <option value="">Select Fuel Type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Gas">Gas</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div className='flex flex-col w-full'>
            <label htmlFor="seating_capacity">Seating Capacity</label>
            <input type="number" id='seating_capacity' placeholder='e.g. 4,5,7....' value={car.seating_capacity} onChange={e=>setCar({...car,seating_capacity:e.target.value})} className='mt-1 border border-borderColor rounded-md px-3 py-2 outline-none' required/>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col w-full'>
            <label htmlFor="location">Location</label>
            <input type="text" id='location' placeholder='e.g. New York, London....' value={car.location} onChange={e=>setCar({...car,location:e.target.value})} className='mt-1 border border-borderColor rounded-md px-3 py-2 outline-none' required/>
          </div>
          <div className='flex flex-col w-full'>
            <label htmlFor="description">Description</label>
            <textarea id='description' placeholder='Brief description of the car....' value={car.description} onChange={e=>setCar({...car,description:e.target.value})} className='mt-1 border border-borderColor rounded-md px-3 py-2 outline-none' rows="3" required></textarea>
          </div>
        </div>
          <button type="submit" className='bg-primary text-white cursor-pointer px-6 py-2 rounded-md mt-4 hover:bg-primary/90 flex items-center gap-50'>
          <img src={assets.tick_icon} alt="" className='w-4 h-4' />
          List Your Car</button>
      </form>
    </div>
  )
}

export default Addcar