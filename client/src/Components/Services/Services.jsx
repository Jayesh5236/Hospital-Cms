import React from "react";

const Services = () => {
  return (
    <div className="bg-gradient-to-r from-slate-500 to-slate-800 p-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0">
          {/* Left: Image */}
          <img
            src="https://img.freepik.com/premium-photo/heart-patient_693425-28088.jpg"
            alt="Hospital-Image"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-white p-4 md:p-8">
          {/* Right: Services Information */}
          <h1 className="text-3xl font-bold mb-4">Our Services</h1>
          <p className="mb-4">
            At our hospital, we offer a wide range of medical services to meet
            the needs of our community. Our dedicated team of healthcare
            professionals is here to provide you with the highest quality care.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Emergency Care</li>
            <li>Cardiology</li>
            <li>Orthopedics</li>
            <li>Pediatrics</li>
            <li>Neurology</li>
            <li>Oncology</li>
            <li>Maternity Services</li>
            <li>Outpatient Services</li>
            <li>Rehabilitation Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
