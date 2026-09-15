import React, { useState } from "react";
import { featuredStaysData } from "../data/data";
import { useParams } from "react-router-dom";
import FeaturedStaysCard from "../components/featuredStayCard";
import {
  HouseIcon,
  MapPinIcon,
  StarIcon,
  UsersThreeIcon,
  BedIcon,
  BathtubIcon,
  CarIcon,
  WifiHighIcon,
  TelevisionIcon,
  DoorOpenIcon,
  CookingPotIcon,
  CampfireIcon,
  ThermometerIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react";
import Navbar from "../components/Navbar";
import Button from "../components/AuthenticationButton";
const StayDetailedPage = () => {
  const [review, setReview] = useState(0);
  const { id } = useParams();
  const obj = featuredStaysData.find((each) => each.id == id);
  const {
    location,
    name,
    image,
    images,
    rating,
    reviews,
    about,
    beds,
    baths,
    guests,
    price,
    nearby,
  } = obj;

  return (
    <>
      <Navbar />

      <main className="p-4 sm:p-8 w-full">
        <div className="flex items-center gap-2  text-[11px] sm:text-sm text-[#6B716D] -mt-1.5 sm:-mt-2.5 mb-2 sm:mb-4 ml-3 font-semibold">
          <span>Home</span>

          <i className="fa-solid fa-chevron-right text-[10px]"></i>

          <span>Featured Stays</span>
          <i className="fa-solid fa-chevron-right text-[10px]"></i>

          <span>{name}</span>
        </div>
        <div className="w-full grid grid-cols-1 grid-rows-[1.5fr_1fr] lg:grid-rows-1 lg:grid-cols-[3fr_1fr] h-[300px] sm:h-[430px]">
          <div className="rounded-l bg-red-700 min-h-0 min-w-0">
            <img
              src={image}
              alt=""
              className="rounded-l h-full w-full object-cover"
            />
          </div>
          <div className="bg-blue-700 grid grid-cols-3 lg:grid-rows-3 lg:grid-cols-1 rounded-r">
            <div className="min-h-0 min-w-0 rounded-r ">
              <img
                src={images[0]}
                alt=""
                className="h-full w-full object-cover rounded-tr"
              />
            </div>
            <div className="min-h-0 min-w-0 rounded-r">
              <img
                src={images[1]}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-h-0 min-w-0 rounded-r">
              <img
                src={images[2]}
                alt=""
                className="h-full w-full object-cover rounded-br"
              />
            </div>
          </div>
        </div>
        <section className="firstSec">
          <div className=" w-full flex flex-col py-4 gap-2">
            <div className="top w-full flex flex-col sm:flex-row justify-between mb-4   gap-2 pl-2">
              <div>
                <div className="text-sm text-[#555] flex items-center gap-2">
                  <MapPinIcon weight="light" />
                  {location}, Pakistan
                </div>

                <h2 className="font-bold text-2xl leading-tight">{name}</h2>

                <div className="text-sm flex items-center gap-1">
                  <span>{rating}</span>
                  <StarIcon weight="fill" color="#023020" />
                  <StarIcon weight="fill" color="#023020" />
                  <StarIcon weight="fill" color="#023020" />
                  <StarIcon weight="fill" color="#023020" />
                  <StarIcon weight="fill" color="#023020" />
                  <span className="text-[#555]">({reviews} reviews)</span>
                </div>
              </div>
              <ul className="flex gap-2 mt-2 text-xs sm:text-sm font-semibold">
                <li className="flex flex-col items-center justify-center gap-1 p-2 sm:px-4 sm:py-3 bg-[#eaeaea] rounded  ">
                  <UsersThreeIcon weight="light" />
                  <span>{guests} Guests</span>
                </li>

                <li className="flex flex-col items-center justify-center gap-1 px-4 py-3 bg-[#eaeaea] rounded  ">
                  <BedIcon weight="light" />
                  <span>{beds} Bedrooms</span>
                </li>

                <li className="flex flex-col items-center justify-center gap-1 px-4 py-3 bg-[#eaeaea] rounded  ">
                  <BathtubIcon weight="light" />
                  <span>{baths} Bathrooms</span>
                </li>
              </ul>
            </div>
            <div className="middle flex flex-col lg:flex-row w-full">
              <div className="w-full lg:max-w-180 flex border border-[#ccc] rounded-l flex-col sm:flex-row ">
                <div className="sm:w-[50%] p-4 px-5">
                  <h3 className="font-bold text-xl mb-3">About this stay</h3>

                  <p className="text-xs sm:text-sm text-[#5d5b5b] leading-6">
                    {about}
                  </p>
                </div>

                <div className="p-4 pl-6 border-t sm:border-t-0 sm:border-l border-[#ccc]">
                  <h3 className="font-bold text-xl mb-3">Amenities</h3>

                  <div className="flex gap-8">
                    <ul className="flex flex-col gap-2 text-[13px] sm:text-sm">
                      <li className="flex items-center">
                        <CarIcon weight="light" className="mr-2" />
                        Free Parking
                      </li>

                      <li className="flex items-center">
                        <WifiHighIcon weight="light" className="mr-2" />
                        Wi-Fi
                      </li>

                      <li className="flex items-center">
                        <TelevisionIcon weight="light" className="mr-2" />
                        TV
                      </li>

                      <li className="flex items-center">
                        <DoorOpenIcon weight="light" className="mr-2" />
                        Balcony
                      </li>
                    </ul>

                    <ul className="flex flex-col gap-2 text-[13px] sm:text-sm">
                      <li className="flex items-center">
                        <CookingPotIcon weight="light" className="mr-2" />
                        Kitchen
                      </li>

                      <li className="flex items-center">
                        <CampfireIcon weight="light" className="mr-2" />
                        Bonfire Area
                      </li>

                      <li className="flex items-center">
                        <ThermometerIcon weight="light" className="mr-2" />
                        Heating
                      </li>

                      <li className="flex items-center">
                        <ShieldCheckIcon weight="light" className="mr-2" />
                        24/7 Security
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="w-full lg:flex-1 border border-[#ccc] rounded-r p-4 px-5">
                <div className="flex gap-1 mb-3 items-center">
                  <span className="text-xl font-bold">PKR {price}</span>

                  <span className="text-[13px] text-gray-600">/ Night</span>
                </div>

                <div className="flex w-full gap-4 mb-4">
                  <div className="w-[50%]">
                    <label className="block text-[13.5px] mb-1 ml-0.5">
                      Check-in
                    </label>

                    <input
                      type="date"
                      defaultValue="2025-06-15"
                      className="w-full h-[38px] px-3 rounded-md border border-[#ccc] bg-white text-[14px] outline-none"
                    />
                  </div>

                  <div className="w-[50%]">
                    <label className="block text-[13.5px] mb-1 ml-0.5">
                      Check-out
                    </label>

                    <input
                      type="date"
                      defaultValue="2025-06-18"
                      className="w-full h-[38px] px-3 rounded-md border border-[#ccc] bg-white text-[14px] outline-none"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-[13.5px] mb-1 ml-0.5">
                    Guests
                  </label>

                  <select
                    defaultValue="2"
                    className="flex items-center w-full h-[38px] px-3 rounded-md border border-[#ccc] bg-white text-[14px] outline-none"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                  </select>
                </div>

                <button className="w-full h-[40px] rounded-md bg-[#064e3b] text-white text-[14px] font-medium hover:bg-[#053f31] transition">
                  Check Availability
                </button>
              </div>
            </div>

            <div className="map w-full min-h-[250px] flex flex-col sm:flex-row gap-6 rounded border border-[#ccc] p-5 mt-2">
              <div className="w-full sm:w-[40%] flex flex-col">
                <h2 className="text-lg font-semibold">Where you'll be</h2>

                <h3 className="mt-2 text-sm font-semibold">
                  {location}, Pakistan
                </h3>

                <p className="mt-2 text-sm leading-5 text-gray-600">
                  Enjoy a convenient location with easy access to nearby
                  attractions and local highlights.
                </p>

                <div className="mt-3 flex flex-col gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPinIcon size={17} weight="regular" />
                    <span>{nearby[0]}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPinIcon size={17} weight="regular" />
                    <span>{nearby[1]}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPinIcon size={17} weight="regular" />
                    <span>{nearby[2]}</span>
                  </div>
                </div>
              </div>

              <div className="w-full sm:flex-1 h-[160px] sm:h-auto rounded-lg bg-[#ccdcd2]">
                <div className="relative w-full h-full">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 1000 470"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M70 35 C150 90,155 125,235 145
             C300 162,285 215,350 245
             C400 270,390 320,350 380
             C325 415,355 445,340 470"
                      fill="none"
                      stroke="#dcebe5"
                      strokeWidth="3"
                    />

                    <path
                      d="M610 235 C675 205,710 175,755 135
             C800 95,850 85,930 45"
                      fill="none"
                      stroke="#dcebe5"
                      strokeWidth="3"
                    />

                    <path
                      d="M760 135 C790 180,820 205,850 250
             C880 295,900 325,960 345"
                      fill="none"
                      stroke="#e3eee9"
                      strokeWidth="2"
                    />

                    <path
                      d="M520 470 C545 425,580 405,630 390
             C685 375,735 390,790 420"
                      fill="none"
                      stroke="#e3eee9"
                      strokeWidth="2"
                    />

                    <path
                      d="M25 110 C100 70,160 75,220 115"
                      fill="none"
                      stroke="#e8f0ed"
                      strokeWidth="2"
                    />

                    <path
                      d="M700 65 C770 35,830 45,900 85"
                      fill="none"
                      stroke="#e8f0ed"
                      strokeWidth="2"
                    />
                  </svg>

                  <div className="absolute left-[34%] top-[43%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <MapPinIcon
                      size={15}
                      weight="fill"
                      className="text-[#3d8f82]"
                    />

                    <span className="mt-0.5 whitespace-nowrap text-[11px] text-[#71827e]">
                      {nearby[0].split("—")[0]}
                    </span>
                  </div>

                  <div className="absolute left-[76%] top-[36%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <MapPinIcon
                      size={15}
                      weight="fill"
                      className="text-[#3d8f82]"
                    />

                    <span className="mt-0.5 whitespace-nowrap text-[11px] text-[#71827e]">
                      {nearby[1].split("—")[0]}
                    </span>
                  </div>

                  <div className="absolute left-[70%] top-[76%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <MapPinIcon
                      size={15}
                      weight="fill"
                      className="text-[#3d8f82]"
                    />

                    <span className="mt-0.5 whitespace-nowrap text-[11px] text-[#71827e]">
                      {nearby[2].split("—")[0]}
                    </span>
                  </div>

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative flex size-[32px] sm:size-[42px] items-center justify-center rounded-full bg-[#214b4d]">
                      <HouseIcon
                        weight="fill"
                        className="text-white size-[15px] sm:size-[19px]"
                      />

                      <div className="absolute -bottom-[2px] left-1/2 h-[9px] w-[9px] -translate-x-1/2 rotate-45 bg-[#214b4d]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-200 border border-[#ccc] p-4 flex mt-2 rounded justify-between items-center">
               <div> <Button
                  onClick={() =>
                    review == 0 ? setReview(2) : setReview(review - 1)
                  }
                  name="←"
                ></Button>
                </div>


              <div className="flex flex-col mx-auto my-auto justify-center items-center  bg-amber-300 ">
               
               <div>
                  <h3 className="text-xl font-bold">What guests say</h3>
                <div className="text-sm flex items-center gap-1">
                  <span>{rating}</span>
                  <StarIcon weight="fill" color="#023020" />
                  <StarIcon weight="fill" color="#023020" />
                  <StarIcon weight="fill" color="#023020" />
                  <StarIcon weight="fill" color="#023020" />
                  <StarIcon weight="fill" color="#023020" />
                  <span className="text-[#555]">({reviews} reviews)</span>
                </div>
               </div>
                <div className="flex">
                    <div className="flex gap-1">
                  <img
                    src="https://randomuser.me/api/portraits/women/8.jpg"
                    alt=""
                    className="size-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <span>Fatima Khan</span>
                    <span className="text-sm text-[#555]">May 2025</span>
                  </div>
                </div>
               
                <p className="w-[30%] text-sm text-[#555]">
                  Amazing stray Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Neque, ratione.
                </p>
                </div>
              </div>





              <div>
                  <Button
                  onClick={() =>
                    review == 2 ? setReview(0) : setReview(review + 1)
                  }
                  name="→"
                ></Button>
              </div>
               
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default StayDetailedPage;
