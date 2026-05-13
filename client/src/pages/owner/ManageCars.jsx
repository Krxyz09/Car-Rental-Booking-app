import React, { useEffect, useState } from 'react'
import { assets, dummyCarData } from '../../assets/assets'
import Title from '../../components/owner/Title'

const ManageCars = () => {
  const currency = import.meta.env.VITE_CURRENCY
  const [car,setCar] = useState([])
  const fetchOwnerCars = async () => {
    setCar(dummyCarData)
  }

  const toggleCarAvailability = (carId) => {
    setCar(car.map(c => 
      c._id === carId ? {...c, isAvaliable: !c.isAvaliable} : c
    ))
  }

  const deleteCar = (carId) => {
    setCar(car.filter(c => c._id !== carId))
  }

  useEffect(() => {
    fetchOwnerCars()
  },[])
  return (
    <div className='px-4 pt-10 md:px-10 w-full'>
      <Title title="Manage Cars" subTitle="View, edit, or remove your listed cars to keep your inventory up-to-date." />
      <div className='max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6'>
        <table className='w-full border-collapse text-left text-sm text-gray-600'>
          <thead className='text-gray-600'>
            <tr>
              <th className='p-3 font-medium'>Car</th>
              <th className='p-3 font-medium max-md:hidden'>Category</th>
              <th className='p-3 font-medium'>Price</th>
              <th className='p-3 font-medium max-md:hidden'>Status</th>
              <th className='p-3 font-medium'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {car.map((car,index) => (
              <tr key={index} className='border-t border-borderColor'>
                <td className='p-3 flex items-center gap-2'>
                  <img src={car.image} alt={car.name} className='w-12 h-12 aspect-square object-cover rounded-md' />
                  <div className='max-md:hidden'>
                    <p className='font-medium'>{car.brand} {car.model}</p>
                    <p className='text-xs text-gray-500'>{car.seating_capacity} seats -- {car.transmission}</p>
                  </div>
                </td>
                <td className='p-3 max-md:hidden'>{car.category}</td>
                <td className='p-3'>{currency}{car.pricePerDay}/day</td>
                <td className='p-3 max-md:hidden'>
                  <span>
                    {car.isAvaliable ? <span className='px-3 py-0.5 bg-green-100 text-green-800 text-xs rounded-full'>Available</span> : <span className='px-3 py-0.5 bg-red-100 text-red-800 text-xs rounded-full'>Unavailable</span>}
                  </span>
                </td>
                <td className='flex items-center p-3'>
                  <img src={car.isAvaliable ? assets.eye_close_icon : assets.eye_icon} alt="" className='cursor-pointer mr-3' onClick={() => toggleCarAvailability(car._id)} />
                  <img src={assets.delete_icon} alt="" className='cursor-pointer' onClick={() => deleteCar(car._id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageCars