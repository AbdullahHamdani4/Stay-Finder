const popularDestinationsData = [
  {
    id: 1,
    name: "Hunza",
    pic: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=600&fit=crop",
    stays: 120
  },
  {
    id: 2,
    name: "Skardu",
    pic: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=600&fit=crop",
    stays: 85
  },
  {
    id: 3,
    name: "Murree",
    pic: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop",
    stays: 60
  },
  {
    id: 4,
    name: "Swat",
    pic: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=600&fit=crop",
    stays: 45
  },
  {
    id: 5,
    name: "Karachi",
    pic: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=600&fit=crop",
    stays: 90
  },
  {
    id: 6,
    name: "Islamabad",
    pic: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=600&fit=crop",
    stays: 70
  },
  {
    id: 7,
    name: "Lahore",
    pic: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=600&fit=crop",
    stays: 110
  },
  {
    id: 8,
    name: "Nathia Gali",
    pic: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=600&h=600&fit=crop",
    stays: 52
  },
  {
    id: 9,
    name: "Chitral",
    pic: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&h=600&fit=crop",
    stays: 38
  },
  {
    id: 10,
    name: "Kaghan",
    pic: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&h=600&fit=crop",
    stays: 42
  },
  {
    id: 11,
    name: "Neelum Valley",
    pic: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&h=600&fit=crop",
    stays: 35
  },
  {
    id: 12,
    name: "Fairy Meadows",
    pic: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=600&h=600&fit=crop",
    stays: 28
  },
  {
    id: 13,
    name: "Gwadar",
    pic: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop",
    stays: 32
  },
  {
    id: 14,
    name: "Ziarat",
    pic: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=600&fit=crop",
    stays: 25
  },
  {
    id: 15,
    name: "Kalam",
    pic: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop",
    stays: 48
  }
];


 const featuredStaysData = [
  {
    id: 1,
    name: "The Alpine House",
    location: "Hunza",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=500&fit=crop",
    badge: "Popular",
    rating: 4.9,
    reviews: 128,
    beds: 3,
    baths: 2,
    guests: 6,
    price: "18500"
  },
  {
    id: 2,
    name: "Hunza Valley Lodge",
    location: "Hunza",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&h=500&fit=crop",
    badge: "Top rated",
    rating: 4.8,
    reviews: 94,
    beds: 2,
    baths: 1,
    guests: 3,
    price: "12000"
  },
  {
    id: 3,
    name: "Royal Mountain Retreat",
    location: "Hunza",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&h=500&fit=crop",
    badge: "New",
    rating: 4.7,
    reviews: 51,
    beds: 3,
    baths: 2,
    guests: 8,
    price: "32000"
  },

  // ==================== SKARDU ====================
  {
    id: 4,
    name: "Lake Side Retreat",
    location: "Skardu",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&h=500&fit=crop",
    badge: "Popular",
    rating: 4.9,
    reviews: 76,
    beds: 3,
    baths: 2,
    guests: 5,
    price: "21500"
  },
  {
    id: 5,
    name: "Skardu Mountain Inn",
    location: "Skardu",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop",
    badge: "Top rated",
    rating: 4.8,
    reviews: 88,
    beds: 2,
    baths: 1,
    guests: 2,
    price: "8500"
  },
  {
    id: 6,
    name: "Baltistan Escape",
    location: "Skardu",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&h=500&fit=crop",
    badge: "New",
    rating: 4.6,
    reviews: 43,
    beds: 3,
    baths: 2,
    guests: 7,
    price: "28500"
  },

  // ==================== MURREE ====================
  {
    id: 7,
    name: "Mountain View Cabin",
    location: "Murree",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&h=500&fit=crop",
    badge: "Top rated",
    rating: 4.8,
    reviews: 96,
    beds: 2,
    baths: 1,
    guests: 4,
    price: "15500"
  },
  {
    id: 8,
    name: "Pine Hill Cottage",
    location: "Murree",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&h=500&fit=crop",
    badge: "Popular",
    rating: 4.7,
    reviews: 72,
    beds: 3,
    baths: 2,
    guests: 8,
    price: "37500"
  },
  {
    id: 9,
    name: "Misty Mountain House",
    location: "Murree",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop",
    badge: "New",
    rating: 4.6,
    reviews: 38,
    beds: 2,
    baths: 1,
    guests: 2,
    price: "7000"
  },

  // ==================== SWAT ====================
  {
    id: 10,
    name: "Pinewood Cottage",
    location: "Swat",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=500&fit=crop",
    badge: "Popular",
    rating: 4.7,
    reviews: 54,
    beds: 2,
    baths: 1,
    guests: 6,
    price: "17500"
  },
  {
    id: 11,
    name: "Swat Riverside Villa",
    location: "Swat",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=500&fit=crop",
    badge: "Top rated",
    rating: 4.8,
    reviews: 61,
    beds: 3,
    baths: 2,
    guests: 4,
    price: "13000"
  },
  {
    id: 12,
    name: "Emerald Valley Lodge",
    location: "Swat",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=500&fit=crop",
    badge: "New",
    rating: 4.6,
    reviews: 29,
    beds: 2,
    baths: 1,
    guests: 3,
    price: "9500"
  },

  // ==================== KARACHI ====================
  {
    id: 13,
    name: "Clifton Sea View House",
    location: "Karachi",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&h=500&fit=crop",
    badge: "Popular",
    rating: 4.7,
    reviews: 112,
    beds: 3,
    baths: 2,
    guests: 7,
    price: "26500"
  },
  {
    id: 14,
    name: "Coastal City Apartment",
    location: "Karachi",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=500&fit=crop",
    badge: "Top rated",
    rating: 4.8,
    reviews: 87,
    beds: 2,
    baths: 2,
    guests: 4,
    price: "14500"
  },
  {
    id: 15,
    name: "Harbour View Residence",
    location: "Karachi",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop",
    badge: "New",
    rating: 4.5,
    reviews: 34,
    beds: 2,
    baths: 1,
    guests: 2,
    price: "6500"
  },

  // ==================== ISLAMABAD ====================
  {
    id: 16,
    name: "Margalla View Villa",
    location: "Islamabad",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop",
    badge: "Popular",
    rating: 4.9,
    reviews: 134,
    beds: 4,
    baths: 3,
    guests: 8,
    price: "45000"
  },
  {
    id: 17,
    name: "Capital Heights Residence",
    location: "Islamabad",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=500&fit=crop",
    badge: "Top rated",
    rating: 4.8,
    reviews: 102,
    beds: 3,
    baths: 2,
    guests: 5,
    price: "22500"
  },
  {
    id: 18,
    name: "Serene Hills Retreat",
    location: "Islamabad",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop",
    badge: "New",
    rating: 4.7,
    reviews: 46,
    beds: 2,
    baths: 2,
    guests: 3,
    price: "16000"
  },

  // ==================== LAHORE ====================
  {
    id: 19,
    name: "The Heritage House",
    location: "Lahore",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=500&fit=crop",
    badge: "Popular",
    rating: 4.9,
    reviews: 145,
    beds: 3,
    baths: 2,
    guests: 6,
    price: "24500"
  },
  {
    id: 20,
    name: "Gulberg Grand Stay",
    location: "Lahore",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=500&fit=crop",
    badge: "Top rated",
    rating: 4.8,
    reviews: 118,
    beds: 2,
    baths: 2,
    guests: 4,
    price: "18000"
  },
  {
    id: 21,
    name: "Lahore Garden Villa",
    location: "Lahore",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=500&fit=crop",
    badge: "New",
    rating: 4.6,
    reviews: 53,
    beds: 3,
    baths: 2,
    guests: 7,
    price: "29500"
  },

  // ==================== NATHIA GALI ====================
  {
    id: 22,
    name: "Valley Escape",
    location: "Nathia Gali",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&h=500&fit=crop",
    badge: "Top rated",
    rating: 4.8,
    reviews: 83,
    beds: 3,
    baths: 2,
    guests: 5,
    price: "20000"
  },
  {
    id: 23,
    name: "Gali Mountain Chalet",
    location: "Nathia Gali",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&h=500&fit=crop",
    badge: "Popular",
    rating: 4.7,
    reviews: 64,
    beds: 2,
    baths: 1,
    guests: 3,
    price: "11500"
  },
  {
    id: 24,
    name: "Forest Edge Cottage",
    location: "Nathia Gali",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop",
    badge: "New",
    rating: 4.6,
    reviews: 31,
    beds: 3,
    baths: 2,
    guests: 8,
    price: "34500"
  },

  // ==================== CHITRAL ====================
  {
    id: 25,
    name: "Riverside Lodge",
    location: "Chitral",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&h=500&fit=crop",
    badge: "Popular",
    rating: 4.7,
    reviews: 62,
    beds: 3,
    baths: 2,
    guests: 6,
    price: "19000"
  },
  {
    id: 26,
    name: "Chitral Mountain House",
    location: "Chitral",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop",
    badge: "Top rated",
    rating: 4.8,
    reviews: 47,
    beds: 2,
    baths: 1,
    guests: 2,
    price: "5000"
  },
  {
    id: 27,
    name: "Hindukush View Retreat",
    location: "Chitral",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=500&fit=crop",
    badge: "New",
    rating: 4.6,
    reviews: 25,
    beds: 3,
    baths: 2,
    guests: 7,
    price: "27500"
  },

  // ==================== KAGHAN ====================
  {
    id: 28,
    name: "Forest Haven",
    location: "Kaghan",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&h=500&fit=crop",
    badge: "New",
    rating: 4.6,
    reviews: 41,
    beds: 2,
    baths: 1,
    guests: 4,
    price: "10500"
  },
  {
    id: 29,
    name: "Kaghan Valley Cabin",
    location: "Kaghan",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=500&fit=crop",
    badge: "Popular",
    rating: 4.8,
    reviews: 58,
    beds: 3,
    baths: 2,
    guests: 8,
    price: "38000"
  },
  {
    id: 30,
    name: "Riverstone Lodge",
    location: "Kaghan",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&h=500&fit=crop",
    badge: "Top rated",
    rating: 4.7,
    reviews: 36,
    beds: 2,
    baths: 1,
    guests: 3,
    price: "9000"
  },

  // ==================== NEELUM VALLEY ====================
  {
    id: 31,
    name: "Green Valley House",
    location: "Neelum Valley",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&h=500&fit=crop",
    badge: "Top rated",
    rating: 4.9,
    reviews: 89,
    beds: 4,
    baths: 2,
    guests: 8,
    price: "90000"
  },
  {
    id: 32,
    name: "Neelum Riverside Stay",
    location: "Neelum Valley",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&h=500&fit=crop",
    badge: "Popular",
    rating: 4.8,
    reviews: 63,
    beds: 3,
    baths: 2,
    guests: 5,
    price: "23500"
  },
  {
    id: 33,
    name: "Kashmir Forest Retreat",
    location: "Neelum Valley",
    image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=800&h=500&fit=crop",
    badge: "New",
    rating: 4.7,
    reviews: 32,
    beds: 2,
    baths: 1,
    guests: 2,
    price: "7500"
  },

  // ==================== FAIRY MEADOWS ====================
  {
    id: 34,
    name: "Meadow View Villa",
    location: "Fairy Meadows",
    image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=800&h=500&fit=crop",
    badge: "New",
    rating: 4.9,
    reviews: 37,
    beds: 2,
    baths: 1,
    guests: 4,
    price: "14500"
  },
  {
    id: 35,
    name: "Fairy Mountain Camp",
    location: "Fairy Meadows",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=500&fit=crop",
    badge: "Popular",
    rating: 4.8,
    reviews: 51,
    beds: 3,
    baths: 1,
    guests: 6,
    price: "26000"
  },
  {
    id: 36,
    name: "Nanga Parbat View Lodge",
    location: "Fairy Meadows",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop",
    badge: "Top rated",
    rating: 4.7,
    reviews: 29,
    beds: 2,
    baths: 1,
    guests: 3,
    price: "12500"
  },

  // ==================== GWADAR ====================
  {
    id: 37,
    name: "Coastal Breeze House",
    location: "Gwadar",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop",
    badge: "Popular",
    rating: 4.6,
    reviews: 48,
    beds: 2,
    baths: 2,
    guests: 5,
    price: "22000"
  },
  {
    id: 38,
    name: "Gwadar Sea View Villa",
    location: "Gwadar",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&h=500&fit=crop",
    badge: "Top rated",
    rating: 4.8,
    reviews: 67,
    beds: 3,
    baths: 2,
    guests: 8,
    price: "42000"
  },
  {
    id: 39,
    name: "Makran Coastal Retreat",
    location: "Gwadar",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&h=500&fit=crop",
    badge: "New",
    rating: 4.5,
    reviews: 26,
    beds: 2,
    baths: 1,
    guests: 2,
    price: "6000"
  },

  // ==================== ZIARAT ====================
  {
    id: 40,
    name: "Hilltop Hideaway",
    location: "Ziarat",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop",
    badge: "New",
    rating: 4.7,
    reviews: 33,
    beds: 2,
    baths: 1,
    guests: 3,
    price: "8000"
  },
  {
    id: 41,
    name: "Juniper Forest Lodge",
    location: "Ziarat",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop",
    badge: "Popular",
    rating: 4.8,
    reviews: 45,
    beds: 3,
    baths: 2,
    guests: 7,
    price: "25000"
  },
  {
    id: 42,
    name: "Ziarat Valley Cottage",
    location: "Ziarat",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=500&fit=crop",
    badge: "Top rated",
    rating: 4.6,
    reviews: 28,
    beds: 2,
    baths: 1,
    guests: 4,
    price: "13500"
  },

  // ==================== KALAM ====================
  {
    id: 43,
    name: "Pine Valley Retreat",
    location: "Kalam",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&h=500&fit=crop",
    badge: "Top rated",
    rating: 4.8,
    reviews: 71,
    beds: 3,
    baths: 2,
    guests: 6,
    price: "20500"
  },
  {
    id: 44,
    name: "Kalam River Lodge",
    location: "Kalam",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=500&fit=crop",
    badge: "Popular",
    rating: 4.7,
    reviews: 56,
    beds: 2,
    baths: 1,
    guests: 2,
    price: "5000"
  },
  {
    id: 45,
    name: "Blue Pine Mountain House",
    location: "Kalam",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&h=500&fit=crop",
    badge: "New",
    rating: 4.6,
    reviews: 34,
    beds: 3,
    baths: 2,
    guests: 8,
    price: "35000"
  }
];

const footerData = [
  {
    icon: "fa-regular fa-clipboard-check",
    title: "Handpicked stays",
    description: "We personally verify\nevery property."
  },
  {
    icon: "fa-solid fa-tags",
    title: "Best price guarantee",
    description: "Find a lower price?\nWe'll match it."
  },
  {
    icon: "fa-regular fa-calendar-check",
    title: "Flexible bookings",
    description: "Easy changes &\ncancellations."
  },
  {
    icon: "fa-solid fa-headset",
    title: "24/7 support",
    description: "We're here whenever\nyou need us."
  }
];
const  guestList=["Any",2,3,4,5,6,7,8]
export { popularDestinationsData, featuredStaysData, footerData, guestList}


//  return(
    //  <div className={`featuredStay flex gap-${gapVal} overflow-x-hidden popular-scroll pb-3 pt-3 ${wrapVal} ${justifyVal}`}>
    //          {featuredStaysData.filter((each)=>{
    //             destination.toLowerCase() === "any-destination"? true: destination.toLowerCase() === each.location && each.price>=minPrice && each.price <=maxPrice && guests.toLowerCase() === "any"?true: guests == each.guests
    //          })}
    //     </div>
    //  )

    // if (destination.toLowerCase() == "any-destination" && filter) {
    //     return <div className={`featuredStay flex gap-${gapVal} overflow-x-hidden popular-scroll pb-3 pt-3 ${wrapVal} ${justifyVal}`}>
    //         {featuredStaysData.map(each => <Card key={each.id} {...each} />)}
    //     </div>
    // }

    //  else {
    //     return <div className={`featuredStay flex gap-${gapVal} overflow-x-hidden popular-scroll pb-3 pt-3 ${wrapVal} ${justifyVal}`}>
    //         {featuredStaysData.filter(
    //             (each) => {destination.toLowerCase() === each.location.toLowerCase()})
    //             .map(each => <Card key={each.id} {...each} />)
    //         }
    //     </div>


    //     }