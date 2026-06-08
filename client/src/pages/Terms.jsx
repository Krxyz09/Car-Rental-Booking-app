import React from 'react'

const Terms = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 text-gray-700">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">Terms of Service</h1>
        <div className="space-y-5 leading-7">
          <p>
            By using CarRental, you agree to our terms for booking, renting, and using vehicles through the platform. These terms cover account use, payment, cancellations, and liability.
          </p>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Bookings and Payments</h2>
            <p>
              All bookings are subject to availability. Payment details must be accurate, and payments must be completed before confirmation. We may cancel bookings if payment or identity verification fails.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Cancellations and Refunds</h2>
            <p>
              Cancellation policies vary by booking. Refunds will be handled in accordance with the selected vehicle provider's terms and any applicable platform fees.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">User Conduct</h2>
            <p>
              Users must follow all traffic laws and rental requirements, and only authorized drivers may operate rented vehicles. Damage caused by misuse may result in additional charges.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Liability</h2>
            <p>
              CarRental acts as a booking platform and is not liable for damage or loss beyond what is covered by the insurance policy. Users are responsible for reviewing coverage details before finalizing a rental.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terms
