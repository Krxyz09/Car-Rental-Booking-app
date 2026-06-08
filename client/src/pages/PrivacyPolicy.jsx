import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 text-gray-700">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">Privacy Policy</h1>
        <div className="space-y-5 leading-7">
          <p>
            CarRental is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you use our platform.
          </p>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Information We Collect</h2>
            <p>
              We collect contact details, booking information, payment data, and usage data to provide our services, process reservations, and improve your experience.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">How We Use Your Data</h2>
            <p>
              Your information is used for booking management, customer support, fraud prevention, and service improvements. We do not sell your personal data to third parties.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Security</h2>
            <p>
              We use industry-standard security measures to protect your data. However, no system is completely secure, and users should also take care when sharing sensitive information.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Cookies and Tracking</h2>
            <p>
              We may use cookies and analytics tools to improve site performance, remember preferences, and provide a better rental experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
