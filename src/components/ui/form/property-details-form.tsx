"use client"
import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredLocation: string;
  propertyType: string;
  noOfBathrooms: string;
  noOfBedrooms: string;
  budget: string;
  contactMethod: string;
  message: string;
  agree: boolean;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredLocation: '',
    propertyType: '',
    noOfBathrooms: '',
    noOfBedrooms: '',
    budget: '',
    contactMethod: '',
    message: '',
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6  p-8 text-white rounded-lg my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="p-3 bg-gray rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="p-3 bg-gray rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 bg-gray rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 bg-gray rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Preferred Location</label>
          <select
            name="preferredLocation"
            value={formData.preferredLocation}
            onChange={handleChange}
            className="p-3 bg-gray rounded-md w-full"
          >
            <option value="">Select Location</option>
            {/* Add location options here */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Property Type</label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="p-3 bg-gray rounded-md w-full"
          >
            <option value="">Select Property Type</option>
            {/* Add property type options here */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">No. of Bathrooms</label>
          <select
            name="noOfBathrooms"
            value={formData.noOfBathrooms}
            onChange={handleChange}
            className="p-3 bg-gray rounded-md w-full"
          >
            <option value="">Select No. of Bathrooms</option>
            {/* Add bathroom options here */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">No. of Bedrooms</label>
          <select
            name="noOfBedrooms"
            value={formData.noOfBedrooms}
            onChange={handleChange}
            className="p-3 bg-gray rounded-md w-full"
          >
            <option value="">Select No. of Bedrooms</option>
            {/* Add bedroom options here */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Budget</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="p-3 bg-gray rounded-md w-full"
          >
            <option value="">Select Budget</option>
            {/* Add budget options here */}
          </select>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Preferred Contact Method</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="contactMethod"
                value="phone"
                checked={formData.contactMethod === 'phone'}
                onChange={handleChange}
                className="form-radio"
              />
              <span>Phone</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="contactMethod"
                value="email"
                checked={formData.contactMethod === 'email'}
                onChange={handleChange}
                className="form-radio"
              />
              <span>Email</span>
            </label>
          </div>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          name="message"
          placeholder="Enter your Message here.."
          value={formData.message}
          onChange={handleChange}
          className="p-3 bg-gray rounded-md w-full h-32"
        />
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
          className="form-checkbox"
        />
        <span>I agree with <a href="#" className="text-blue-500 underline">Terms of Use</a> and <a href="#" className="text-blue-500 underline">Privacy Policy</a></span>
      </div>
      <button type="submit" className="p-3 bg-purple rounded-md text-white w-full md:w-auto">
        Send Your Message
      </button>
    </form>
  );
};

export default Form;