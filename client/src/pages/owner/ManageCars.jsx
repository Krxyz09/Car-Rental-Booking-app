import React, { useEffect, useState } from 'react'
import { dummyCarData } from '../../assets/assets'

const ManageCars = () => {
  const [car,setCar] = useState([])
  const fetchOwnerCars = async () => {
    setCar(dummyCarData)
  }
  useEffect(() => {
    fetchOwnerCars()
  },[])
  return (
    <div>
      
    </div>
  )
}

export default ManageCars