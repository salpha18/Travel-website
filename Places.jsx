import React from "react";
import "./Places.css"; 




const destinations = [
  {
    name: "Singapore",
    description: "Singapore, officially the Republic of Singapore.",
    price: " ₹60,800",
    distance: "1200 Kms",
    duration: "Approx 3 night trip",
    image:
      "https://media.istockphoto.com/id/590050726/photo/singapore-glowing-at-night.jpg?s=612x612&w=0&k=20&c=43tSsy1yC0iOAGL3ZVq3-nl84KnmWTnHGI5mwQtp8zo=",
  },
  {
    name: "Thailand",
    description: "Thailand is a Southeast Asian country.",
    price: " ₹95,200",
    distance: "1000 Kms",
    duration: "Approx 3 night trip",
    image:
      "https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Paris",
    description: "Paris, France's capital, is a major European city.",
    price: " ₹1,80,500",
    distance: "1000 Kms",
    duration: "Approx 6 night trip",
    image: "https://thumbs.dreamstime.com/b/paris-eiffel-tower-river-seine-sunset-france-one-most-iconic-landmarks-107376702.jpg",
  },
  {
    name: "New York",
    description:
      "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean.",
    price: " ₹4,65,000",
    distance: "1200 Kms",
    duration: "Approx 5 night trip",
    image:
      "https://as2.ftcdn.net/v2/jpg/00/05/68/15/1000_F_5681513_8WtMHmfkbSkEy51czKBdiKivaS6QgBTf.jpg",
  },
  {
    name: "Tokyo",
    description:
      "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional",
    price: " ₹1,70,000",
    distance: "1300 Kms",
    duration: "Approx 6 night trip",
    image:
      "https://www.celebritycruises.com/blog/content/uploads/2021/03/what-is-japan-known-for-mt-fuji-hero-1920x890.jpg",
  },
  {
    name: "Sydney",
    description:
      "Sydney, capital of New South Wales and one of Australia's largest citie ",
    price: "₹3,20,000",
    distance: "9,352 Kms",
    duration: "Approx 4 night trip",
    image:
      "https://images.squarespace-cdn.com/content/v1/55ee34aae4b0bf70212ada4c/1577545161018-1F9Z9ZZQG9JO2O4WCWQX/keith-zhu-qaNcz43MeY8-unsplash+%281%29.jpg?format=1500w",
  },
];


const indiadestination=[

  {
    name: "Ladakh",
    description: "Ladakh is a region administered by India as a union territory.",
    price: " ₹80,200",
    duration: "Approx 7 night trip",
    image:
    "https://images.blacktomato.com/2024/07/Ladakh3.jpg?auto=compress%2Cformat&fit=crop&h=800&ixlib=php-3.3.1&q=82&w=1520&s=5451be49358d2a7f8142ecf8fbfc2f8d",
  },
  {
    name: "Agra",
    description: "Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh.",
    price: " ₹42,000",
    duration: "Approx 4 night trip",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Taj_Mahal%2C_Agra%2C_India.jpg/1280px-Taj_Mahal%2C_Agra%2C_India.jpg",
  },
  {
    name: "kerala",
    description: "Munnar is a town and hill station located in the Idukki district of the southwestern Indian state of Kerala.",
    price: " ₹30,000",
    duration: "Approx 7 night trip",
    image:
      "https://static.toiimg.com/photo/54327403.cms",
  },
  {
    name: "Rajasthan",
    description: "Rajasthan, 'Land of Kings' is a state in northwestern India.",
    price: " ₹26,800",
    duration: "Approx 5 night trip",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/2-mehrangarh-fort-jodhpur-rajasthan-city-hero?qlt=82&ts=1726660925514",
  },
  {
    name: "Delhi",
    description: "Delhi, officially the National Capital Territory (NCT) of Delhi, is a city and a union territory of India containing New Delhi, the capital of India.",
    price: " ₹50,800",
    duration: "Approx 3 night trip",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/red-fort-delhi1-attr-hero?qlt=82&ts=1727352314555",
  },
  {
    name: "karnataka",
    description: "Karnataka is a state in the southwestern region of India. It was formed as Mysore.",
    price: " ₹47,000",
    duration: "Approx 6 night trip",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/2-vitthala-temple-complex-hampi-karnataka-city-hero?qlt=82&ts=1726721012585",
  },
  {
    name: "Maharashtra",
    description: "Maharashtra is a state in the western peninsular region of India occupying a substantial portion of the Deccan Plateau.",
    price: " ₹40,800",
    duration: "Approx 4 night trip",
    image:
      "https://static.toiimg.com/photo/msid-97307893,width-96,height-65.cms",
  },
  {
    name: "Goa",
    description: "Goa is a state on the southwestern coast of India within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats.",
    price: " ₹60,800",
    duration: "Approx 5 night trip",
    image:
      "https://c.ndtvimg.com/gws/ms/trip-to-goa-3-day-itinerary/assets/2.webp",
  },

]



const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <img
        src={destination.image}
        alt={destination.name}
        className="destination-image"
      />
      <h3 className="destination-title">{destination.name}</h3>
      <br />
      <p className="destination-description">{destination.description}</p>
      
      <div className="destination-info">
        <span className="destination-price">{destination.price}</span>
      </div>
      
      <div>
        <span className="destination-distance">{destination.distance}</span>
      </div>

      <p className="destination-duration">{destination.duration}</p>

    </div>
  );
};


const Places = () => {
  return (
    <div className="places-container">

      <h2 className="title">Recommended Destinations</h2>
      <br />

      <div className="tabs">
        <span >The Holiday Package </span>
      </div>


      <div className="destinations-wrapper">
        {destinations.map((destination, index) => (
          <DestinationCard key={index} destination={destination} />
        ))}
      </div><br /><br /><br /><br />


      <div className="tabs"><span >All INDIA Package</span></div>
      <div className="destinations-wrapper">
        {indiadestination.map((destination, index) => (
          <DestinationCard key={index} destination={destination} onclick={{}} />
        ))}
      </div>
      
    </div>
  );
};

export default Places;
