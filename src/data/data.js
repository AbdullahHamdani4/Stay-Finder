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
  // ==================== HUNZA ====================
  {
    id: 1,
    name: "Hunza Serena Inn",
    location: "Hunza",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&h=800&fit=crop"
    ],
    badge: "Popular",
    rating: 4.9,
    reviews: 128,
    reviewData: [
      {
        name: "Ayesha Khan",
        rating: 5,
        comment: "The mountain views from the room were incredible. Everything was clean and the staff was very helpful."
      },
      {
        name: "Hamza Ali",
        rating: 5,
        comment: "Great location for exploring Hunza. The room was comfortable and the valley view at sunrise was worth it."
      },
      {
        name: "Sara Ahmed",
        rating: 4.8,
        comment: "Beautiful stay with a peaceful atmosphere. Breakfast was good and the staff were welcoming."
      }
    ],
    about: "A peaceful mountain stay surrounded by the dramatic peaks of Hunza. Ideal for guests looking to explore Karimabad, Baltit Fort and the surrounding valleys while returning to a comfortable retreat.",
    amenities: [
      "Mountain view",
      "Free Wi-Fi",
      "Breakfast included",
      "Heating",
      "Private balcony",
      "Free parking",
      "24/7 reception"
    ],
    nearby: [
      "Karimabad — 5 min",
      "Baltit Fort — 8 min",
      "Altit Fort — 15 min",
      "Attabad Lake — 35 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop"
    ],
    badge: "Top rated",
    rating: 4.8,
    reviews: 94,
    reviewData: [
      {
        name: "Usman Raza",
        rating: 5,
        comment: "Very peaceful lodge with beautiful views. The room was exactly as shown in the pictures."
      },
      {
        name: "Mariam Noor",
        rating: 4.8,
        comment: "Loved the location. It was quiet at night but still close enough to Karimabad."
      },
      {
        name: "Bilal Hassan",
        rating: 4.7,
        comment: "Clean rooms, friendly staff and a great view. Would definitely stay here again."
      }
    ],
    about: "A cozy lodge designed for travelers who want a quieter side of Hunza. Surrounded by mountain scenery, it offers an easy base for exploring Karimabad and nearby attractions.",
    amenities: [
      "Mountain view",
      "Free Wi-Fi",
      "Heating",
      "Breakfast available",
      "Garden",
      "Parking",
      "Room service"
    ],
    nearby: [
      "Karimabad — 7 min",
      "Baltit Fort — 10 min",
      "Altit Fort — 17 min",
      "Attabad Lake — 38 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop"
    ],
    badge: "New",
    rating: 4.7,
    reviews: 51,
    reviewData: [
      {
        name: "Daniyal Ahmed",
        rating: 5,
        comment: "Spacious rooms and fantastic mountain scenery. A great option for a group trip."
      },
      {
        name: "Hira Malik",
        rating: 4.6,
        comment: "The property is beautiful and the staff were very accommodating."
      },
      {
        name: "Omar Farooq",
        rating: 4.7,
        comment: "Quiet, comfortable and clean. The balcony view was my favorite part."
      }
    ],
    about: "A spacious retreat for families and groups visiting Hunza. The property combines comfortable interiors with expansive views of the surrounding mountains.",
    amenities: [
      "Panoramic mountain view",
      "Free Wi-Fi",
      "Heating",
      "Large terrace",
      "Breakfast",
      "Free parking",
      "Family rooms"
    ],
    nearby: [
      "Karimabad — 6 min",
      "Baltit Fort — 9 min",
      "Altit Fort — 16 min",
      "Attabad Lake — 36 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop"
    ],
    badge: "Popular",
    rating: 4.9,
    reviews: 76,
    reviewData: [
      {
        name: "Saad Ahmed",
        rating: 5,
        comment: "The scenery around the property is beautiful. Perfect place to relax after exploring Skardu."
      },
      {
        name: "Fatima Zahra",
        rating: 5,
        comment: "Very peaceful stay and the room was clean and comfortable."
      },
      {
        name: "Ali Raza",
        rating: 4.8,
        comment: "Excellent location with easy access to the main Skardu attractions."
      }
    ],
    about: "A scenic retreat for travelers exploring Skardu's lakes, forts and mountain landscapes. The property offers a relaxed atmosphere with views that make the most of the surrounding terrain.",
    amenities: [
      "Mountain view",
      "Garden",
      "Free Wi-Fi",
      "Breakfast",
      "Heating",
      "Parking",
      "Outdoor seating"
    ],
    nearby: [
      "Skardu Bazaar — 12 min",
      "Shangrila Resort — 25 min",
      "Upper Kachura Lake — 30 min",
      "Mansehra Road viewpoint — 15 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&h=800&fit=crop"
    ],
    badge: "Top rated",
    rating: 4.8,
    reviews: 88,
    reviewData: [
      {
        name: "Taha Khan",
        rating: 5,
        comment: "Great value for money. The room was simple but very clean and comfortable."
      },
      {
        name: "Muneeb Shah",
        rating: 4.8,
        comment: "Staff were friendly and helped us arrange transport around Skardu."
      },
      {
        name: "Iqra Hassan",
        rating: 4.7,
        comment: "Nice mountain views and a convenient location."
      }
    ],
    about: "A comfortable and affordable mountain inn suited to couples and small groups. A practical base for exploring Skardu without compromising on comfort.",
    amenities: [
      "Mountain view",
      "Free Wi-Fi",
      "Heating",
      "Breakfast available",
      "Parking",
      "24/7 reception"
    ],
    nearby: [
      "Skardu Bazaar — 8 min",
      "Shangrila Resort — 22 min",
      "Upper Kachura Lake — 28 min",
      "Skardu Airport — 25 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop"
    ],
    badge: "New",
    rating: 4.6,
    reviews: 43,
    reviewData: [
      {
        name: "Zainab Ali",
        rating: 4.7,
        comment: "Beautiful property and very peaceful. The surroundings are exactly what you want from a Skardu trip."
      },
      {
        name: "Adeel Khan",
        rating: 4.5,
        comment: "Spacious and comfortable. The staff were helpful with local recommendations."
      },
      {
        name: "Maryam Riaz",
        rating: 4.6,
        comment: "Loved sitting outside in the evening. The mountain scenery was amazing."
      }
    ],
    about: "A spacious escape inspired by the landscapes of Baltistan, offering a quiet setting for families and groups traveling through Skardu.",
    amenities: [
      "Mountain view",
      "Outdoor seating",
      "Free Wi-Fi",
      "Heating",
      "Breakfast",
      "Free parking",
      "Family rooms"
    ],
    nearby: [
      "Skardu Bazaar — 15 min",
      "Shangrila Resort — 28 min",
      "Upper Kachura Lake — 32 min",
      "Katpana Desert — 20 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop"
    ],
    badge: "Top rated",
    rating: 4.8,
    reviews: 96,
    reviewData: [
      {
        name: "Ahmed Bilal",
        rating: 5,
        comment: "Beautiful cabin with a fantastic view. Mall Road was only a short drive away."
      },
      {
        name: "Laiba Tariq",
        rating: 4.8,
        comment: "Very cozy and clean. Perfect for a weekend trip with family."
      },
      {
        name: "Usman Malik",
        rating: 4.7,
        comment: "The mountain atmosphere was exactly what we were looking for."
      }
    ],
    about: "A cozy cabin surrounded by the pine forests of Murree. Perfect for a peaceful mountain getaway while remaining close to the town's main attractions.",
    amenities: [
      "Pine forest view",
      "Fireplace",
      "Heating",
      "Free Wi-Fi",
      "Private balcony",
      "Parking",
      "Kitchen"
    ],
    nearby: [
      "Mall Road — 10 min",
      "Pindi Point — 12 min",
      "Kashmir Point — 8 min",
      "Patriata Chairlift — 25 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop"
    ],
    badge: "Popular",
    rating: 4.7,
    reviews: 72,
    reviewData: [
      {
        name: "Hassan Raza",
        rating: 5,
        comment: "Great cottage for a family. Plenty of space and beautiful pine trees all around."
      },
      {
        name: "Anam Sheikh",
        rating: 4.7,
        comment: "The cottage felt private and peaceful. We really enjoyed the balcony."
      },
      {
        name: "Saif Ahmed",
        rating: 4.6,
        comment: "Comfortable stay and a good location for exploring Murree."
      }
    ],
    about: "A spacious pine-surrounded cottage for families and larger groups. Enjoy cool mountain air, forest views and easy access to Murree's attractions.",
    amenities: [
      "Forest view",
      "Fireplace",
      "Heating",
      "Large balcony",
      "Free Wi-Fi",
      "Kitchen",
      "Free parking"
    ],
    nearby: [
      "Mall Road — 12 min",
      "Kashmir Point — 10 min",
      "Pindi Point — 15 min",
      "Patriata Chairlift — 23 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1200&h=800&fit=crop"
    ],
    badge: "New",
    rating: 4.6,
    reviews: 38,
    reviewData: [
      {
        name: "Rimsha Noor",
        rating: 4.7,
        comment: "Small but very cozy. The morning fog around the property was beautiful."
      },
      {
        name: "Fahad Khan",
        rating: 4.5,
        comment: "Good option for a couple looking for a quiet stay in Murree."
      },
      {
        name: "Eman Ali",
        rating: 4.6,
        comment: "Clean room, comfortable bed and a lovely forest view."
      }
    ],
    about: "A compact mountain house designed for couples and short getaways. Its forest setting makes it especially peaceful during misty Murree mornings.",
    amenities: [
      "Forest view",
      "Heating",
      "Free Wi-Fi",
      "Private balcony",
      "Breakfast",
      "Parking"
    ],
    nearby: [
      "Mall Road — 10 min",
      "Kashmir Point — 7 min",
      "Pindi Point — 13 min",
      "Patriata Chairlift — 27 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&h=800&fit=crop"
    ],
    badge: "Popular",
    rating: 4.7,
    reviews: 54,
    reviewData: [
      {
        name: "Talha Iqbal",
        rating: 5,
        comment: "Beautiful cottage surrounded by greenery. Great place for a family weekend."
      },
      {
        name: "Sana Khan",
        rating: 4.6,
        comment: "Very peaceful and comfortable. The surroundings were the highlight."
      },
      {
        name: "Waleed Ahmed",
        rating: 4.7,
        comment: "Clean rooms and helpful hosts. Great base for exploring Swat."
      }
    ],
    about: "A peaceful cottage surrounded by the greenery and mountains of Swat. Suitable for families looking for a relaxed escape close to the valley's main sights.",
    amenities: [
      "Garden",
      "Mountain view",
      "Free Wi-Fi",
      "Heating",
      "Breakfast",
      "Parking",
      "Outdoor seating"
    ],
    nearby: [
      "Mingora — 20 min",
      "Malam Jabba — 45 min",
      "Fizagat Park — 15 min",
      "Swat River — 8 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&h=800&fit=crop"
    ],
    badge: "Top rated",
    rating: 4.8,
    reviews: 61,
    reviewData: [
      {
        name: "Haris Ahmed",
        rating: 5,
        comment: "The river nearby made this stay special. Very relaxing and the villa was spacious."
      },
      {
        name: "Mehwish Raza",
        rating: 4.8,
        comment: "Excellent family stay. Rooms were clean and the staff were welcoming."
      },
      {
        name: "Arslan Shah",
        rating: 4.7,
        comment: "Great views and a peaceful atmosphere away from the busy areas."
      }
    ],
    about: "A spacious villa positioned close to the Swat River, offering a relaxing retreat for families and small groups.",
    amenities: [
      "River view",
      "Garden",
      "Free Wi-Fi",
      "Heating",
      "Breakfast",
      "Free parking",
      "Family rooms"
    ],
    nearby: [
      "Swat River — 5 min",
      "Fizagat Park — 12 min",
      "Mingora — 18 min",
      "Malam Jabba — 48 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop"
    ],
    badge: "New",
    rating: 4.6,
    reviews: 29,
    reviewData: [
      {
        name: "Areeba Khan",
        rating: 4.6,
        comment: "Lovely new property with a peaceful setting. Everything was fresh and clean."
      },
      {
        name: "Danish Ali",
        rating: 4.5,
        comment: "Good value for money and the hosts were very helpful."
      },
      {
        name: "Nimra Hassan",
        rating: 4.7,
        comment: "Beautiful greenery around the lodge. Would visit again."
      }
    ],
    about: "A newly listed lodge surrounded by Swat's lush landscapes. A simple and comfortable option for travelers wanting to explore the valley.",
    amenities: [
      "Garden",
      "Mountain view",
      "Free Wi-Fi",
      "Heating",
      "Breakfast",
      "Parking"
    ],
    nearby: [
      "Mingora — 22 min",
      "Fizagat Park — 17 min",
      "Swat River — 10 min",
      "Malam Jabba — 47 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=800&fit=crop"
    ],
    badge: "Popular",
    rating: 4.7,
    reviews: 112,
    reviewData: [
      {
        name: "Faisal Ahmed",
        rating: 5,
        comment: "Excellent location in Clifton. The sea view and nearby restaurants made the stay very convenient."
      },
      {
        name: "Maham Khan",
        rating: 4.7,
        comment: "Spacious house and very comfortable for our family."
      },
      {
        name: "Rayan Malik",
        rating: 4.6,
        comment: "Good property with easy access to Sea View and Clifton's main attractions."
      }
    ],
    about: "A spacious coastal home in Clifton, ideal for families and groups wanting easy access to Karachi's restaurants, shopping and the Arabian Sea.",
    amenities: [
      "Sea view",
      "Air conditioning",
      "Free Wi-Fi",
      "Kitchen",
      "Parking",
      "Living room",
      "24/7 security"
    ],
    nearby: [
      "Clifton Beach — 7 min",
      "Dolmen Mall Clifton — 8 min",
      "Mohatta Palace — 10 min",
      "Sea View — 12 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop"
    ],
    badge: "Top rated",
    rating: 4.8,
    reviews: 87,
    reviewData: [
      {
        name: "Aiman Siddiqui",
        rating: 5,
        comment: "Modern apartment in a very convenient part of Karachi. Everything was clean and comfortable."
      },
      {
        name: "Hamza Farooq",
        rating: 4.8,
        comment: "Great for a short business or family trip. The apartment had everything we needed."
      },
      {
        name: "Sadia Ahmed",
        rating: 4.7,
        comment: "Loved the modern interior and location."
      }
    ],
    about: "A modern apartment suited to travelers who want a comfortable city base near Clifton's dining, shopping and coastal attractions.",
    amenities: [
      "Air conditioning",
      "Free Wi-Fi",
      "Kitchen",
      "Smart TV",
      "Parking",
      "24/7 security",
      "Elevator"
    ],
    nearby: [
      "Dolmen Mall Clifton — 6 min",
      "Clifton Beach — 9 min",
      "Mohatta Palace — 8 min",
      "Sea View — 12 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&h=800&fit=crop"
    ],
    badge: "New",
    rating: 4.5,
    reviews: 34,
    reviewData: [
      {
        name: "Kashif Ali",
        rating: 4.5,
        comment: "Simple, clean and affordable. Good option for a short Karachi stay."
      },
      {
        name: "Iqra Shah",
        rating: 4.6,
        comment: "The location was convenient and the room was comfortable."
      },
      {
        name: "Muneeb Hassan",
        rating: 4.4,
        comment: "Good value for the price. Staff were friendly."
      }
    ],
    about: "A compact coastal residence offering an affordable base for travelers visiting Karachi for a short stay.",
    amenities: [
      "Air conditioning",
      "Free Wi-Fi",
      "Parking",
      "Breakfast available",
      "24/7 reception",
      "Security"
    ],
    nearby: [
      "Clifton Beach — 10 min",
      "Dolmen Mall Clifton — 9 min",
      "Mohatta Palace — 12 min",
      "Sea View — 15 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop"
    ],
    badge: "Popular",
    rating: 4.9,
    reviews: 134,
    reviewData: [
      {
        name: "Owais Ahmed",
        rating: 5,
        comment: "Fantastic villa with a beautiful view of the Margalla Hills. Very spacious and peaceful."
      },
      {
        name: "Sarah Khan",
        rating: 5,
        comment: "Perfect for a family gathering. The property was spotless and beautifully maintained."
      },
      {
        name: "Hammad Raza",
        rating: 4.9,
        comment: "Excellent location and one of the best stays we have had in Islamabad."
      }
    ],
    about: "A premium villa overlooking the Margalla Hills, designed for families and groups seeking privacy, comfort and easy access to Islamabad's attractions.",
    amenities: [
      "Margalla Hills view",
      "Private garden",
      "Free Wi-Fi",
      "Air conditioning",
      "Fully equipped kitchen",
      "Free parking",
      "Large living room"
    ],
    nearby: [
      "Faisal Mosque — 12 min",
      "Daman-e-Koh — 15 min",
      "Monal viewpoint — 18 min",
      "Centaurus Mall — 14 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop"
    ],
    badge: "Top rated",
    rating: 4.8,
    reviews: 102,
    reviewData: [
      {
        name: "Ali Hamza",
        rating: 5,
        comment: "Very comfortable residence in a convenient part of Islamabad."
      },
      {
        name: "Maham Tariq",
        rating: 4.8,
        comment: "Clean, modern and quiet. Perfect for our three-night stay."
      },
      {
        name: "Saad Raza",
        rating: 4.7,
        comment: "Good facilities and easy access to the main city."
      }
    ],
    about: "A modern residence offering comfortable city living in Islamabad, ideal for business travelers and families.",
    amenities: [
      "Air conditioning",
      "Free Wi-Fi",
      "Smart TV",
      "Kitchen",
      "Parking",
      "Elevator",
      "24/7 security"
    ],
    nearby: [
      "Centaurus Mall — 8 min",
      "Faisal Mosque — 12 min",
      "Daman-e-Koh — 18 min",
      "F-6 Markaz — 10 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop"
    ],
    badge: "New",
    rating: 4.7,
    reviews: 46,
    reviewData: [
      {
        name: "Areej Khan",
        rating: 4.8,
        comment: "Beautiful quiet property with lots of natural light and greenery."
      },
      {
        name: "Zubair Ahmed",
        rating: 4.7,
        comment: "Very relaxing stay. The property felt private despite being close to the city."
      },
      {
        name: "Nida Raza",
        rating: 4.6,
        comment: "Clean, modern and comfortable. Would definitely return."
      }
    ],
    about: "A serene modern retreat surrounded by greenery, offering a quieter side of Islamabad while remaining close to the city's major landmarks.",
    amenities: [
      "Garden",
      "Air conditioning",
      "Free Wi-Fi",
      "Kitchen",
      "Private terrace",
      "Parking"
    ],
    nearby: [
      "Faisal Mosque — 14 min",
      "Daman-e-Koh — 16 min",
      "Centaurus Mall — 15 min",
      "F-6 Markaz — 12 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop"
    ],
    badge: "Popular",
    rating: 4.9,
    reviews: 145,
    reviewData: [
      {
        name: "Ahmed Saeed",
        rating: 5,
        comment: "Beautifully designed house with a classic Lahore feel. The location was excellent."
      },
      {
        name: "Hina Malik",
        rating: 5,
        comment: "We loved the heritage-inspired interiors and the hospitality."
      },
      {
        name: "Usman Tariq",
        rating: 4.9,
        comment: "Perfect stay for exploring the historic side of Lahore."
      }
    ],
    about: "A heritage-inspired residence combining traditional Lahore character with modern comforts. An excellent base for exploring the city's historic landmarks and food scene.",
    amenities: [
      "Air conditioning",
      "Free Wi-Fi",
      "Breakfast",
      "Courtyard",
      "Kitchen",
      "Parking",
      "Daily housekeeping"
    ],
    nearby: [
      "Badshahi Mosque — 15 min",
      "Lahore Fort — 15 min",
      "Minar-e-Pakistan — 18 min",
      "Food Street — 14 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop"
    ],
    badge: "Top rated",
    rating: 4.8,
    reviews: 118,
    reviewData: [
      {
        name: "Muneeb Ahmed",
        rating: 5,
        comment: "Excellent location in Gulberg with restaurants and shopping nearby."
      },
      {
        name: "Ayesha Raza",
        rating: 4.8,
        comment: "Modern, clean and comfortable. Great for a city trip."
      },
      {
        name: "Fahad Ali",
        rating: 4.7,
        comment: "Very convenient location and the apartment had everything we needed."
      }
    ],
    about: "A modern stay in the heart of Gulberg, ideal for travelers who want restaurants, shopping and Lahore's business districts close by.",
    amenities: [
      "Air conditioning",
      "Free Wi-Fi",
      "Smart TV",
      "Kitchen",
      "Parking",
      "Elevator",
      "24/7 security"
    ],
    nearby: [
      "Liberty Market — 6 min",
      "MM Alam Road — 5 min",
      "Packages Mall — 15 min",
      "Minar-e-Pakistan — 25 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop"
    ],
    badge: "New",
    rating: 4.6,
    reviews: 53,
    reviewData: [
      {
        name: "Saira Khan",
        rating: 4.7,
        comment: "Spacious villa with a lovely garden. Great for families."
      },
      {
        name: "Hassan Raza",
        rating: 4.5,
        comment: "Comfortable rooms and a peaceful outdoor area."
      },
      {
        name: "Eman Tariq",
        rating: 4.6,
        comment: "Good property for a group. The hosts were helpful and responsive."
      }
    ],
    about: "A spacious family villa with a private garden, offering a relaxed stay away from the busiest parts of Lahore.",
    amenities: [
      "Private garden",
      "Air conditioning",
      "Free Wi-Fi",
      "Kitchen",
      "Living room",
      "Parking",
      "Family rooms"
    ],
    nearby: [
      "Liberty Market — 10 min",
      "MM Alam Road — 9 min",
      "Lahore Museum — 20 min",
      "Badshahi Mosque — 25 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200&h=800&fit=crop"
    ],
    badge: "Top rated",
    rating: 4.8,
    reviews: 83,
    reviewData: [
      {
        name: "Maham Ahmed",
        rating: 5,
        comment: "Beautiful forest surroundings and a very peaceful atmosphere."
      },
      {
        name: "Danish Khan",
        rating: 4.8,
        comment: "The property was cozy and the hiking trails nearby were a big plus."
      },
      {
        name: "Sara Raza",
        rating: 4.7,
        comment: "Great family stay in Nathia Gali. Loved the cool weather and views."
      }
    ],
    about: "A forest-surrounded retreat in Nathia Gali, ideal for travelers looking for cool weather, mountain walks and a peaceful escape.",
    amenities: [
      "Forest view",
      "Fireplace",
      "Heating",
      "Free Wi-Fi",
      "Breakfast",
      "Parking",
      "Outdoor seating"
    ],
    nearby: [
      "Nathia Gali Bazaar — 6 min",
      "Mushkpuri Trail — 15 min",
      "Ayubia National Park — 20 min",
      "Pipeline Track — 10 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop"
    ],
    badge: "Popular",
    rating: 4.7,
    reviews: 64,
    reviewData: [
      {
        name: "Ali Hassan",
        rating: 4.8,
        comment: "Cozy chalet with a great mountain atmosphere. Very relaxing weekend."
      },
      {
        name: "Zoya Khan",
        rating: 4.7,
        comment: "Good value and a nice location near the main bazaar."
      },
      {
        name: "Rashid Ahmed",
        rating: 4.6,
        comment: "The chalet was clean and comfortable. Would stay again."
      }
    ],
    about: "A compact mountain chalet close to the center of Nathia Gali, making it convenient for exploring the area's trails and viewpoints.",
    amenities: [
      "Mountain view",
      "Fireplace",
      "Heating",
      "Free Wi-Fi",
      "Breakfast",
      "Parking"
    ],
    nearby: [
      "Nathia Gali Bazaar — 5 min",
      "Mushkpuri Trail — 16 min",
      "Pipeline Track — 9 min",
      "Ayubia Chairlift — 25 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1200&h=800&fit=crop"
    ],
    badge: "New",
    rating: 4.6,
    reviews: 31,
    reviewData: [
      {
        name: "Hiba Noor",
        rating: 4.7,
        comment: "The forest setting was beautiful and very quiet."
      },
      {
        name: "Farhan Ali",
        rating: 4.5,
        comment: "Spacious cottage and a good option for a larger family."
      },
      {
        name: "Mariam Shah",
        rating: 4.6,
        comment: "Loved the cool weather and peaceful surroundings."
      }
    ],
    about: "A larger cottage sitting near the forest edge, offering privacy and plenty of room for families visiting the Galiyat region.",
    amenities: [
      "Forest view",
      "Fireplace",
      "Heating",
      "Large terrace",
      "Free Wi-Fi",
      "Kitchen",
      "Parking"
    ],
    nearby: [
      "Nathia Gali Bazaar — 8 min",
      "Mushkpuri Trail — 18 min",
      "Ayubia National Park — 20 min",
      "Pipeline Track — 12 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop"
    ],
    badge: "Popular",
    rating: 4.7,
    reviews: 62,
    reviewData: [
      {
        name: "Waqas Khan",
        rating: 4.8,
        comment: "Peaceful lodge with beautiful mountain scenery and a relaxing riverside atmosphere."
      },
      {
        name: "Ayesha Noor",
        rating: 4.7,
        comment: "The staff were very welcoming and the room was comfortable."
      },
      {
        name: "Bilal Ahmed",
        rating: 4.6,
        comment: "Great base for exploring Chitral and nearby valleys."
      }
    ],
    about: "A peaceful riverside lodge surrounded by the dramatic landscapes of Chitral, suited to travelers wanting a quiet mountain escape.",
    amenities: [
      "River view",
      "Mountain view",
      "Heating",
      "Free Wi-Fi",
      "Breakfast",
      "Garden",
      "Parking"
    ],
    nearby: [
      "Chitral Bazaar — 12 min",
      "Chitral Fort — 15 min",
      "Shahi Mosque — 14 min",
      "Chitral River — 5 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop"
    ],
    badge: "Top rated",
    rating: 4.8,
    reviews: 47,
    reviewData: [
      {
        name: "Hamza Shah",
        rating: 5,
        comment: "Very affordable and comfortable. The mountain view was excellent."
      },
      {
        name: "Sadia Khan",
        rating: 4.8,
        comment: "Clean room and very friendly hosts."
      },
      {
        name: "Usman Ali",
        rating: 4.7,
        comment: "Simple but exactly what we needed for our Chitral trip."
      }
    ],
    about: "A simple mountain house offering an affordable and comfortable stay for couples and solo travelers exploring Chitral.",
    amenities: [
      "Mountain view",
      "Heating",
      "Free Wi-Fi",
      "Breakfast",
      "Parking",
      "Room service"
    ],
    nearby: [
      "Chitral Bazaar — 10 min",
      "Chitral Fort — 13 min",
      "Shahi Mosque — 12 min",
      "Chitral River — 7 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&h=800&fit=crop"
    ],
    badge: "New",
    rating: 4.6,
    reviews: 25,
    reviewData: [
      {
        name: "Muneeb Raza",
        rating: 4.6,
        comment: "The mountain views are the best thing about this property."
      },
      {
        name: "Hira Ahmed",
        rating: 4.7,
        comment: "Spacious and peaceful. The hosts were very helpful."
      },
      {
        name: "Daniyal Khan",
        rating: 4.5,
        comment: "Good stay for a group exploring Chitral."
      }
    ],
    about: "A spacious retreat with sweeping mountain views, created for families and groups looking for a comfortable base in Chitral.",
    amenities: [
      "Hindukush mountain view",
      "Heating",
      "Free Wi-Fi",
      "Garden",
      "Breakfast",
      "Parking",
      "Large terrace"
    ],
    nearby: [
      "Chitral Bazaar — 15 min",
      "Chitral Fort — 18 min",
      "Shahi Mosque — 17 min",
      "Chitral River — 8 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop"
    ],
    badge: "New",
    rating: 4.6,
    reviews: 41,
    reviewData: [
      {
        name: "Ammar Khan",
        rating: 4.7,
        comment: "Very peaceful location surrounded by trees. Perfect for disconnecting."
      },
      {
        name: "Esha Ahmed",
        rating: 4.5,
        comment: "Cozy and clean. We enjoyed the quiet surroundings."
      },
      {
        name: "Taimoor Ali",
        rating: 4.6,
        comment: "Good value for a mountain getaway."
      }
    ],
    about: "A quiet forest-side stay in the Kaghan Valley, suited to travelers looking for nature, fresh air and a slower pace.",
    amenities: [
      "Forest view",
      "Heating",
      "Free Wi-Fi",
      "Fireplace",
      "Breakfast",
      "Parking"
    ],
    nearby: [
      "Kaghan Bazaar — 8 min",
      "Naran — 35 min",
      "Saif-ul-Malook Lake — 55 min",
      "Kunhar River — 10 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop"
    ],
    badge: "Popular",
    rating: 4.8,
    reviews: 58,
    reviewData: [
      {
        name: "Rafay Ahmed",
        rating: 5,
        comment: "Beautiful cabin with lots of space. Great for a family trip to Kaghan."
      },
      {
        name: "Maham Raza",
        rating: 4.8,
        comment: "Loved the views and the peaceful environment."
      },
      {
        name: "Saifullah Khan",
        rating: 4.7,
        comment: "Very comfortable and close to the main valley road."
      }
    ],
    about: "A spacious cabin for families and groups, surrounded by the dramatic scenery of Kaghan Valley and close to the route toward Naran.",
    amenities: [
      "Mountain view",
      "Fireplace",
      "Heating",
      "Kitchen",
      "Free Wi-Fi",
      "Parking",
      "Large terrace"
    ],
    nearby: [
      "Kaghan Bazaar — 10 min",
      "Naran — 32 min",
      "Kunhar River — 7 min",
      "Saif-ul-Malook Lake — 52 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&h=800&fit=crop"
    ],
    badge: "Top rated",
    rating: 4.7,
    reviews: 36,
    reviewData: [
      {
        name: "Ahsan Malik",
        rating: 4.8,
        comment: "The river nearby made the stay very relaxing."
      },
      {
        name: "Zainab Ahmed",
        rating: 4.7,
        comment: "Clean and affordable. Good option for a couple."
      },
      {
        name: "Faraz Khan",
        rating: 4.6,
        comment: "Friendly hosts and beautiful mountain scenery."
      }
    ],
    about: "A compact lodge near the Kunhar River, offering an affordable stay for travelers passing through the Kaghan Valley.",
    amenities: [
      "River view",
      "Mountain view",
      "Heating",
      "Free Wi-Fi",
      "Breakfast",
      "Parking"
    ],
    nearby: [
      "Kaghan Bazaar — 7 min",
      "Kunhar River — 4 min",
      "Naran — 38 min",
      "Saif-ul-Malook Lake — 58 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=1200&h=800&fit=crop"
    ],
    badge: "Top rated",
    rating: 4.9,
    reviews: 89,
    reviewData: [
      {
        name: "Haris Mahmood",
        rating: 5,
        comment: "Incredible valley views. The property felt completely surrounded by nature."
      },
      {
        name: "Ayesha Malik",
        rating: 5,
        comment: "Beautiful family stay with excellent views and very friendly hosts."
      },
      {
        name: "Omer Khan",
        rating: 4.8,
        comment: "One of the most peaceful places we have stayed in Kashmir."
      }
    ],
    about: "A spacious valley house surrounded by the green mountains and river landscapes of Neelum Valley. Designed for families seeking a scenic Kashmir escape.",
    amenities: [
      "Valley view",
      "River view",
      "Heating",
      "Free Wi-Fi",
      "Garden",
      "Breakfast",
      "Parking"
    ],
    nearby: [
      "Keran — 20 min",
      "Neelum River — 5 min",
      "Sharda — 1 hr 45 min",
      "Kutton Waterfall — 35 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=1200&h=800&fit=crop"
    ],
    badge: "Popular",
    rating: 4.8,
    reviews: 63,
    reviewData: [
      {
        name: "Bilal Shah",
        rating: 5,
        comment: "The river view from the property was beautiful, especially in the evening."
      },
      {
        name: "Sana Ahmed",
        rating: 4.8,
        comment: "Very peaceful and clean. A great option for a Kashmir trip."
      },
      {
        name: "Hamza Raza",
        rating: 4.7,
        comment: "Good location and very welcoming staff."
      }
    ],
    about: "A comfortable riverside stay where guests can enjoy the natural beauty of Neelum Valley from a peaceful base.",
    amenities: [
      "River view",
      "Mountain view",
      "Heating",
      "Free Wi-Fi",
      "Breakfast",
      "Outdoor seating",
      "Parking"
    ],
    nearby: [
      "Keran — 15 min",
      "Neelum River — 2 min",
      "Kutton Waterfall — 30 min",
      "Sharda — 1 hr 40 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&h=800&fit=crop"
    ],
    badge: "New",
    rating: 4.7,
    reviews: 32,
    reviewData: [
      {
        name: "Noor Fatima",
        rating: 4.8,
        comment: "Very quiet and surrounded by trees. Exactly what we wanted."
      },
      {
        name: "Taha Ahmed",
        rating: 4.6,
        comment: "Cozy property with beautiful views."
      },
      {
        name: "Mariam Khan",
        rating: 4.7,
        comment: "Great place for couples who want a peaceful escape."
      }
    ],
    about: "A secluded forest retreat for couples and small groups looking to experience the quieter, greener side of Neelum Valley.",
    amenities: [
      "Forest view",
      "River view",
      "Heating",
      "Free Wi-Fi",
      "Breakfast",
      "Outdoor seating"
    ],
    nearby: [
      "Keran — 18 min",
      "Neelum River — 6 min",
      "Kutton Waterfall — 33 min",
      "Sharda — 1 hr 42 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop"
    ],
    badge: "New",
    rating: 4.9,
    reviews: 37,
    reviewData: [
      {
        name: "Hassan Ali",
        rating: 5,
        comment: "The Nanga Parbat view was unforgettable. One of the best mountain experiences we've had."
      },
      {
        name: "Aiman Raza",
        rating: 5,
        comment: "Absolutely beautiful location. The meadows are even better in person."
      },
      {
        name: "Daniyal Khan",
        rating: 4.8,
        comment: "Simple accommodation but the scenery makes it completely worth it."
      }
    ],
    about: "A scenic mountain stay in the Fairy Meadows region with dramatic views toward Nanga Parbat. Best suited to travelers prioritizing nature and adventure.",
    amenities: [
      "Nanga Parbat view",
      "Mountain view",
      "Campfire area",
      "Breakfast",
      "Outdoor seating",
      "Hiking access"
    ],
    nearby: [
      "Fairy Meadows viewpoint — 5 min",
      "Nanga Parbat viewpoint — 10 min",
      "Raikot Bridge — 1 hr 30 min",
      "Beyal Camp — 2 hr hike"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop"
    ],
    badge: "Popular",
    rating: 4.8,
    reviews: 51,
    reviewData: [
      {
        name: "Saad Khan",
        rating: 5,
        comment: "Fantastic camping experience with incredible mountain views."
      },
      {
        name: "Hira Ahmed",
        rating: 4.8,
        comment: "Loved the atmosphere and the clear night sky."
      },
      {
        name: "Owais Raza",
        rating: 4.7,
        comment: "Great option for friends or groups looking for an outdoor adventure."
      }
    ],
    about: "A mountain camp built around the outdoor experience of Fairy Meadows, with easy access to hiking routes and spectacular views.",
    amenities: [
      "Mountain view",
      "Campfire",
      "Breakfast",
      "Hiking access",
      "Outdoor seating",
      "Shared lounge"
    ],
    nearby: [
      "Fairy Meadows viewpoint — 3 min",
      "Nanga Parbat viewpoint — 8 min",
      "Beyal Camp — 2 hr hike",
      "Raikot Bridge — 1 hr 25 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop"
    ],
    badge: "Top rated",
    rating: 4.7,
    reviews: 29,
    reviewData: [
      {
        name: "Fahad Ahmed",
        rating: 4.8,
        comment: "The mountain view from the lodge was incredible."
      },
      {
        name: "Maham Noor",
        rating: 4.7,
        comment: "Very peaceful and comfortable considering the remote location."
      },
      {
        name: "Ali Raza",
        rating: 4.6,
        comment: "Perfect for anyone coming mainly for the hiking and views."
      }
    ],
    about: "A simple mountain lodge focused on the spectacular Nanga Parbat experience, ideal for hikers and adventure travelers.",
    amenities: [
      "Nanga Parbat view",
      "Breakfast",
      "Campfire",
      "Hiking access",
      "Outdoor seating"
    ],
    nearby: [
      "Nanga Parbat viewpoint — 5 min",
      "Fairy Meadows viewpoint — 4 min",
      "Beyal Camp — 2 hr hike",
      "Raikot Bridge — 1 hr 30 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1200&h=800&fit=crop"
    ],
    badge: "Popular",
    rating: 4.6,
    reviews: 48,
    reviewData: [
      {
        name: "Asad Khan",
        rating: 4.7,
        comment: "Beautiful coastal atmosphere and a very relaxing stay."
      },
      {
        name: "Sana Ahmed",
        rating: 4.6,
        comment: "Comfortable house with good access to the main beaches."
      },
      {
        name: "Bilal Raza",
        rating: 4.5,
        comment: "Great option for a group visiting Gwadar."
      }
    ],
    about: "A coastal house designed for travelers exploring Gwadar's beaches, cliffs and waterfront scenery.",
    amenities: [
      "Sea view",
      "Air conditioning",
      "Free Wi-Fi",
      "Kitchen",
      "Outdoor seating",
      "Parking"
    ],
    nearby: [
      "Gwadar Beach — 8 min",
      "Hammerhead — 15 min",
      "Marine Drive — 12 min",
      "Gwadar Port — 20 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1200&h=800&fit=crop"
    ],
    badge: "Top rated",
    rating: 4.8,
    reviews: 67,
    reviewData: [
      {
        name: "Hamza Siddiqui",
        rating: 5,
        comment: "The sea view was fantastic and the villa was perfect for our group."
      },
      {
        name: "Mariam Khan",
        rating: 4.8,
        comment: "Very spacious and comfortable. Great place for a family vacation."
      },
      {
        name: "Omar Ahmed",
        rating: 4.7,
        comment: "Beautiful sunsets and a peaceful atmosphere."
      }
    ],
    about: "A spacious sea-view villa for families and groups wanting a more premium coastal experience in Gwadar.",
    amenities: [
      "Sea view",
      "Private terrace",
      "Air conditioning",
      "Free Wi-Fi",
      "Kitchen",
      "Parking",
      "Living room"
    ],
    nearby: [
      "Gwadar Beach — 7 min",
      "Hammerhead — 12 min",
      "Marine Drive — 10 min",
      "Gwadar Port — 18 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&h=800&fit=crop"
    ],
    badge: "New",
    rating: 4.5,
    reviews: 26,
    reviewData: [
      {
        name: "Rayan Khan",
        rating: 4.6,
        comment: "Affordable and peaceful. Good place for a short coastal trip."
      },
      {
        name: "Iqra Ahmed",
        rating: 4.5,
        comment: "Loved the sea breeze and quiet surroundings."
      },
      {
        name: "Talha Raza",
        rating: 4.4,
        comment: "Simple stay with a good location."
      }
    ],
    about: "A simple coastal retreat inspired by the Makran coastline, suited to couples and travelers looking for an affordable Gwadar stay.",
    amenities: [
      "Sea view",
      "Air conditioning",
      "Free Wi-Fi",
      "Parking",
      "Outdoor seating",
      "Breakfast"
    ],
    nearby: [
      "Gwadar Beach — 10 min",
      "Marine Drive — 12 min",
      "Hammerhead — 18 min",
      "Gwadar Port — 22 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop"
    ],
    badge: "New",
    rating: 4.7,
    reviews: 33,
    reviewData: [
      {
        name: "Waleed Khan",
        rating: 4.8,
        comment: "Very peaceful property surrounded by Ziarat's beautiful hills."
      },
      {
        name: "Ayesha Raza",
        rating: 4.7,
        comment: "Comfortable stay and a great place to experience the cool weather."
      },
      {
        name: "Sami Ahmed",
        rating: 4.6,
        comment: "Quiet and clean with beautiful scenery."
      }
    ],
    about: "A peaceful hilltop hideaway in Ziarat, surrounded by cool mountain air and the region's distinctive juniper landscapes.",
    amenities: [
      "Mountain view",
      "Heating",
      "Garden",
      "Free Wi-Fi",
      "Breakfast",
      "Parking"
    ],
    nearby: [
      "Ziarat Residency — 8 min",
      "Juniper Forest — 15 min",
      "Prospect Point — 20 min",
      "Ziarat Bazaar — 6 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop"
    ],
    badge: "Popular",
    rating: 4.8,
    reviews: 45,
    reviewData: [
      {
        name: "Hamza Ali",
        rating: 5,
        comment: "The forest surroundings were beautiful and the lodge was very comfortable."
      },
      {
        name: "Maha Khan",
        rating: 4.8,
        comment: "Great location for exploring the juniper forests and Ziarat Residency."
      },
      {
        name: "Fahad Raza",
        rating: 4.7,
        comment: "Peaceful, clean and excellent for a family weekend."
      }
    ],
    about: "A comfortable lodge surrounded by Ziarat's famous juniper landscapes, offering a peaceful retreat for families and nature lovers.",
    amenities: [
      "Juniper forest view",
      "Heating",
      "Fireplace",
      "Free Wi-Fi",
      "Breakfast",
      "Garden",
      "Parking"
    ],
    nearby: [
      "Juniper Forest — 5 min",
      "Ziarat Residency — 10 min",
      "Prospect Point — 18 min",
      "Ziarat Bazaar — 8 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop"
    ],
    badge: "Top rated",
    rating: 4.6,
    reviews: 28,
    reviewData: [
      {
        name: "Nimra Ahmed",
        rating: 4.7,
        comment: "Cozy cottage with a lovely mountain atmosphere."
      },
      {
        name: "Usman Khan",
        rating: 4.5,
        comment: "Good affordable stay and the hosts were friendly."
      },
      {
        name: "Sara Raza",
        rating: 4.6,
        comment: "Quiet and comfortable. Great for a short Ziarat trip."
      }
    ],
    about: "A cozy cottage offering an affordable way to experience Ziarat's mountains, forests and historic attractions.",
    amenities: [
      "Mountain view",
      "Heating",
      "Free Wi-Fi",
      "Breakfast",
      "Garden",
      "Parking"
    ],
    nearby: [
      "Ziarat Residency — 7 min",
      "Juniper Forest — 12 min",
      "Prospect Point — 19 min",
      "Ziarat Bazaar — 5 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200&h=800&fit=crop"
    ],
    badge: "Top rated",
    rating: 4.8,
    reviews: 71,
    reviewData: [
      {
        name: "Adeel Khan",
        rating: 5,
        comment: "Beautiful pine-covered surroundings and a very peaceful atmosphere."
      },
      {
        name: "Hira Ahmed",
        rating: 4.8,
        comment: "Excellent family stay with great views and comfortable rooms."
      },
      {
        name: "Rafay Raza",
        rating: 4.7,
        comment: "Great location for exploring Kalam and nearby waterfalls."
      }
    ],
    about: "A peaceful retreat surrounded by pine forests in Kalam, offering a comfortable base for exploring the Swat Valley's northern attractions.",
    amenities: [
      "Pine forest view",
      "Mountain view",
      "Heating",
      "Free Wi-Fi",
      "Breakfast",
      "Garden",
      "Parking"
    ],
    nearby: [
      "Kalam Bazaar — 8 min",
      "Ushu Forest — 20 min",
      "Mahodand Lake — 2 hr",
      "Kalam Waterfall — 12 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&h=800&fit=crop"
    ],
    badge: "Popular",
    rating: 4.7,
    reviews: 56,
    reviewData: [
      {
        name: "Bilal Ahmed",
        rating: 4.8,
        comment: "Very peaceful lodge with the river close by. Great for relaxing."
      },
      {
        name: "Ayesha Khan",
        rating: 4.7,
        comment: "Affordable and clean. The hosts were very helpful."
      },
      {
        name: "Taha Raza",
        rating: 4.6,
        comment: "Great base for exploring Kalam's waterfalls and forests."
      }
    ],
    about: "A compact riverside lodge for travelers who want a simple, affordable stay close to Kalam's natural attractions.",
    amenities: [
      "River view",
      "Mountain view",
      "Heating",
      "Free Wi-Fi",
      "Breakfast",
      "Parking"
    ],
    nearby: [
      "Kalam Bazaar — 6 min",
      "Kalam River — 3 min",
      "Kalam Waterfall — 10 min",
      "Ushu Forest — 22 min"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop"
    ],
    badge: "New",
    rating: 4.6,
    reviews: 34,
    reviewData: [
      {
        name: "Muneeb Khan",
        rating: 4.7,
        comment: "Spacious mountain house with beautiful views of the surrounding pine trees."
      },
      {
        name: "Sana Raza",
        rating: 4.6,
        comment: "Very comfortable for our group. The location was peaceful."
      },
      {
        name: "Hassan Ahmed",
        rating: 4.5,
        comment: "Good property for a group trip to Kalam."
      }
    ],
    about: "A spacious mountain house surrounded by Kalam's pine-covered hills, designed for families and larger groups.",
    amenities: [
      "Pine forest view",
      "Mountain view",
      "Heating",
      "Fireplace",
      "Free Wi-Fi",
      "Kitchen",
      "Parking"
    ],
    nearby: [
      "Kalam Bazaar — 10 min",
      "Kalam Waterfall — 14 min",
      "Ushu Forest — 20 min",
      "Mahodand Lake — 2 hr"
    ],
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
const guestList = ["Any", 2, 3, 4, 5, 6, 7, 8]
export { popularDestinationsData, featuredStaysData, footerData, guestList }


 