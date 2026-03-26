import React from "react";

function MapProductes() {
  const products = [
    {
      name: "Apple iPhone 15 (Black, 128 GB)",
      rating: "4.7 ⭐ 18,200 Ratings & 1,540 Reviews",
      price: "₹69,999",
      oldprice: "₹79,999",
      offer: "12% off",
      image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg",
      details: [
        "6 GB RAM | 128 GB ROM",
        "6.1 inch Super Retina XDR Display",
        "48MP + 12MP Camera",
        "A16 Bionic Chip",
        "All-day Battery Life",
        "1 Year Apple Warranty",
      ],
    },
    {
      name: "Google Pixel 8 (Hazel, 128 GB)",
      rating: "4.5 ⭐ 7,850 Ratings & 630 Reviews",
      price: "₹58,999",
      oldprice: "₹69,999",
      offer: "15% off",
      image: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-8-1.jpg",
      details: [
        "8 GB RAM | 128 GB ROM",
        "6.2 inch OLED Display",
        "50MP + 12MP Camera",
        "Tensor G3 Processor",
        "4575 mAh Battery",
        "1 Year Google Warranty",
      ],
    },
    {
      name: "Samsung Galaxy A55 (Ice Blue, 128 GB)",
      rating: "4.4 ⭐ 5,120 Ratings & 410 Reviews",
      price: "₹39,999",
      oldprice: "₹45,999",
      offer: "13% off",
      image:
        "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a55-1.jpg",
      details: [
        "8 GB RAM | 128 GB ROM",
        "6.6 inch Super AMOLED Display",
        "50MP + 12MP + 5MP Camera",
        "Exynos 1480 Processor",
        "5000 mAh Battery",
        "1 Year Samsung Warranty",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 grid gap-6">
      {products.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <div className="flex justify-center items-center">
              <img
                src={item.image}
                alt="product"
                className="w-48 h-48 object-cover rounded-lg"
              />
            </div>

            {/* Info */}
            <div className="flex-1 px-6 mt-4 md:mt-0">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-green-600">{item.rating}</p>

              <ul className="list-disc ml-5 mt-3 text-gray-600">
                {item.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div className="flex flex-col justify-between items-end mt-4 md:mt-0">
              <div>
                <h2 className="text-2xl font-bold">{item.price}</h2>
                <p className="line-through text-gray-500">{item.oldprice}</p>
                <p className="text-green-600">{item.offer}</p>
              </div>

              <div className="mt-4 flex gap-3">
                <button className="bg-yellow-400 px-4 py-2 rounded">
                  Add to Cart
                </button>
                <button className="bg-orange-500 text-white px-4 py-2 rounded">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MapProductes;
