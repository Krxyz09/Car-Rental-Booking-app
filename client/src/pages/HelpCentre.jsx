import React from 'react'

const HelpCentre = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 text-gray-700">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">Help Centre</h1>
        <p className="mb-5 leading-8">
          Need help with your booking or rental? Browse our help topics below or get in touch with our support team for assistance.
        </p>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Booking Support</h2>
            <p className="leading-7">
              Learn how to search for cars, select the right vehicle, and complete your reservation with confidence.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Payment and Refunds</h2>
            <p className="leading-7">
              Find answers about accepted payment methods, booking confirmation, and refund or cancellation policies.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Account Assistance</h2>
            <p className="leading-7">
              Get help updating your account details, managing bookings, and accessing support when you need it.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Contact Support</h2>
            <p className="leading-7">
              If you need direct support, email us at <a className="text-primary" href="mailto:jindalkrish25@gmail.com">jindalkrish25@gmail.com</a> or call +91-80825-xxxxx.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpCentre
