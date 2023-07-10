import React from 'react';

const propertyData = [
  {
    "address": "123 Main St, Los Angeles, CA",
    "price": 1200.00,
    "image_url": "https://example.com/images/property1.jpg",
    "sq_footage": 1500
  },
  {
    "address": "456 Pine St, San Francisco, CA",
    "price": 2400.00,
    "image_url": "https://example.com/images/property2.jpg",
    "sq_footage": 1800
  },
  {
    "address": "789 Oak St, San Diego, CA",
    "price": 1800.00,
    "image_url": "https://example.com/images/property3.jpg",
    "sq_footage": 1600
  },
  {
    "address": "1011 Maple St, Sacramento, CA",
    "price": 1000.00,
    "image_url": "https://example.com/images/property4.jpg",
    "sq_footage": 1400
  }
]

const Listing = ({ properties }) => {
    return (
        <div>
            {properties.map((property, index) => (
                <div key={index} style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
                    <h2>{property.address}</h2>
                    <img src={property.image_url} alt={property.address} style={{width: '100%', height: '200px', objectFit: 'cover'}}/>
                    <p>Price: ${property.price}</p>
                    <p>Square footage: {property.sq_footage}</p>
                </div>
            ))}
        </div>
    );
}

export default function App() {
  return (
    <div>
      <Listing properties={propertyData} />
    </div>
  );
}
