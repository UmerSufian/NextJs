"use client";

import { contactTypes, onChangeEventType } from "@/types/componenttypes";
import DisplayContact from "../displaycontact/displaycontact";
import { useState } from "react";
import * as yup from "yup";

export default function ContactForm() {
  const [contactInfo, setContactInfo] = useState<contactTypes>({
    name: "",
    email: "",
    phone: 0,
    message: "",
    company: "",
    address: "",
    city: "",
    country: "",
    topic: "",
    postalCode: "",
  });

  const [errors, setError] = useState<string[]>([]);

  const contactInfoSchema = yup.object().shape({
    name: yup.string().required().min(3).max(30),
    email: yup.string().required().email(),
    message: yup.string().required(),
    company: yup.string().required(),
    address: yup.string().required(),
    city: yup.string().required(),
    country: yup.string().required(),
    topic: yup.string().required(),
    postalCode: yup.string().required(),
  });

  const [contactList, setContactList] = useState<contactTypes[]>([]);

  const onChangeHandler = (e: onChangeEventType) => {
    let userDetails = {
      ...contactInfo,
      [e.target.name]: e.target.value,
    };
    setContactInfo(userDetails);
  };

  const onClickHandler = async () => {
    try {
      const result = await contactInfoSchema.validate(contactInfo);
      console.log(result);

      if (!result) {
        return;
      }

      let newContactList: contactTypes[] = [...contactList, contactInfo];
      setContactList(newContactList);

      setError([]);
      setContactInfo({
        name: "",
        email: "",
        phone: 0,
        message: "",
        company: "",
        address: "",
        city: "",
        country: "",
        topic: "",
        postalCode: "",
      });
    } catch (err: any) {
      //    setError(err.errors)
      //    let errorsObject:any = {}
      //    err.inner.forEach((err:any) => {
      //      errorsObject[err.path] = err.errors;
      //  });

      //  console.log(errorsObject);

      console.log("error", err.errors);
    }
  };
  return (
    <>
      <form className="max-w-md mx-auto mt-8">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-600 text-sm font-medium"
          >
            Name
          </label>
          <input
            value={contactInfo.name}
            onChange={onChangeHandler}
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-medium"
          >
            Email
          </label>
          <input
            value={contactInfo.email}
            onChange={onChangeHandler}
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-600 text-sm font-medium"
          >
            Phone
          </label>
          <input
            value={contactInfo.phone} 
            onChange={onChangeHandler}
            type="number"
            id="phone"
            name="phone"
            className="mt-1 p-2 w-full border rounded-md text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="company"
            className="block text-gray-600 text-sm font-medium"
          >
            Company
          </label>
          <input
            value={contactInfo.company}
            onChange={onChangeHandler}
            type="text"
            id="company"
            name="company"
            className="mt-1 p-2 w-full border rounded-md text-black"
            required
          />
        </div>
        <div className="mb-4 flex">
          <div className="w-1/2 mr-2">
            <label
              htmlFor="country"
              className="block text-gray-600 text-sm font-medium"
            >
              Country
            </label>
            <input
              value={contactInfo.country}
              onChange={onChangeHandler}
              type="text"
              id="country" 
              name="country"
              className="mt-1 p-2 w-full border rounded-md text-black"
              required
            />
          </div>
          <div className="w-1/2 ml-2">
            <label
              htmlFor="city"
              className="block text-gray-600 text-sm font-medium"
            >
              City
            </label>
            <input
              value={contactInfo.city}
              onChange={onChangeHandler}
              type="text"
              id="city" 
              name="city"
              className="mt-1 p-2 w-full border rounded-md text-black"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-600 text-sm font-medium"
          >
            Address
          </label>
          <input
            value={contactInfo.address}
            onChange={onChangeHandler}
            type="text"
            id="address" 
            name="address"
            className="mt-1 p-2 w-full border rounded-md text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="postalCode"
            className="block text-gray-600 text-sm font-medium"
          >
            Postal Code
          </label>
          <input
            value={contactInfo.postalCode}
            onChange={onChangeHandler}
            type="text"
            id="postalCode" 
            name="postalCode"
            className="mt-1 p-2 w-full border rounded-md text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="topic"
            className="block text-gray-600 text-sm font-medium"
          >
            Subject
          </label>
          <input
            value={contactInfo.topic}
            onChange={onChangeHandler}
            type="text"
            id="topic" 
            name="topic"
            className="mt-1 p-2 w-full border rounded-md text-black"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-600 text-sm font-medium"
          >
            Message
          </label>
          <textarea
            value={contactInfo.message}
            onChange={onChangeHandler}
            id="message"
            name="message"
            rows= {4}
            className="mt-1 p-2 w-full border rounded-md text-black"
            required
          ></textarea>
        </div>
        <div>
          {errors.map((item) => {
            return (
              <div style={{ color: "red" }}>
                <h1>{item}</h1>
              </div>
            );
          })}
          <button
            onClick={onClickHandler}
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
      <DisplayContact contactData={contactList} />
    </>
  );
}
