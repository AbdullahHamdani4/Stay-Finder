const popularDestinationsData = [
  {
    name: "Hunza",
    pic: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=600&fit=crop",
    stays: 120
  },
  {
    name: "Skardu",
    pic: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=600&fit=crop",
    stays: 85
  },
  {
    name: "Murree",
    pic: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop",
    stays: 60
  },
  {
    name: "Swat",
    pic: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=600&fit=crop",
    stays: 45
  },
  {
    name: "Karachi",
    pic: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=600&fit=crop",
    stays: 90
  },
  {
    name: "Islamabad",
    pic: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=600&fit=crop",
    stays: 70
  },
  {
    name: "Lahore",
    pic: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=600&fit=crop",
    stays: 110
  },
  {
    name: "Nathia Gali",
    pic: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=600&h=600&fit=crop",
    stays: 52
  },
  {
    name: "Chitral",
    pic: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&h=600&fit=crop",
    stays: 38
  },
  {
    name: "Kaghan",
    pic: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&h=600&fit=crop",
    stays: 42
  },
  {
    name: "Neelum Valley",
    pic: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&h=600&fit=crop",
    stays: 35
  },
  {
    name: "Fairy Meadows",
    pic: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=600&h=600&fit=crop",
    stays: 28
  },
  {
    name: "Gwadar",
    pic: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop",
    stays: 32
  },
  {
    name: "Ziarat",
    pic: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=600&fit=crop",
    stays: 25
  },
  {
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
    price: "18,500"
  },
  {
    id: 2,
    name: "Mountain View Cabin",
    location: "Murree",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&h=500&fit=crop",
    badge: "Top rated",
    rating: 4.8,
    reviews: 96,
    beds: 2,
    baths: 1,
    guests: 4,
    price: "12,500"
  },
  {
    id: 3,
    name: "Lake Side Retreat",
    location: "Skardu",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&h=500&fit=crop",
    badge: "New",
    rating: 4.9,
    reviews: 76,
    beds: 3,
    baths: 2,
    guests: 6,
    price: "16,000"
  },
  {
    id: 4,
    name: "Pinewood Cottage",
    location: "Swat",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=500&fit=crop",
    badge: "Popular",
    rating: 4.7,
    reviews: 54,
    beds: 2,
    baths: 1,
    guests: 6,
    price: "9,800"
  },
  {
    id: 5,
    name: "Valley Escape",
    location: "Nathia Gali",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&h=500&fit=crop",
    badge: "Top rated",
    rating: 4.8,
    reviews: 83,
    beds: 3,
    baths: 2,
    guests: 5,
    price: "14,500"
  },
  {
    id: 6,
    name: "Forest Haven",
    location: "Kaghan",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&h=500&fit=crop",
    badge: "New",
    rating: 4.6,
    reviews: 41,
    beds: 2,
    baths: 1,
    guests: 4,
    price: "10,500"
  },
  {
    id: 7,
    name: "Riverside Lodge",
    location: "Chitral",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&h=500&fit=crop",
    badge: "Popular",
    rating: 4.7,
    reviews: 62,
    beds: 3,
    baths: 2,
    guests: 6,
    price: "11,500"
  },
  {
    id: 8,
    name: "Meadow View Villa",
    location: "Fairy Meadows",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&h=500&fit=crop",
    badge: "New",
    rating: 4.9,
    reviews: 37,
    beds: 2,
    baths: 1,
    guests: 4,
    price: "13,500"
  },
  {
    id: 9,
    name: "Pine Valley Retreat",
    location: "Kalam",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&h=500&fit=crop",
    badge: "Top rated",
    rating: 4.8,
    reviews: 71,
    beds: 3,
    baths: 2,
    guests: 6,
    price: "15,000"
  },
  {
    id: 10,
    name: "Coastal Breeze House",
    location: "Gwadar",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop",
    badge: "Popular",
    rating: 4.6,
    reviews: 48,
    beds: 2,
    baths: 2,
    guests: 5,
    price: "17,500"
  },
  {
    id: 11,
    name: "Hilltop Hideaway",
    location: "Ziarat",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop",
    badge: "New",
    rating: 4.7,
    reviews: 33,
    beds: 2,
    baths: 1,
    guests: 4,
    price: "8,500"
  },
  {
    id: 12,
    name: "Green Valley House",
    location: "Neelum Valley",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&h=500&fit=crop",
    badge: "Top rated",
    rating: 4.9,
    reviews: 89,
    beds: 4,
    baths: 2,
    guests: 8,
    price: "16,500"
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
export { popularDestinationsData, featuredStaysData, footerData }