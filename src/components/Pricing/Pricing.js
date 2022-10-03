import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const Pricing = () => {
  const pricingOptions = [
    { id: 1, name: "Free", price: 0, features: [
        'Awesome Feature',
        'Extra Feature',
        'Premium Feature',
        'Extra Premium Features',
        'Extra Awesome Premium Features'
    ]},
    { id: 2, name: "Medium", price: 9.99, features: [
        'Everything is free',
        'Extra Feature',
        'Premium Feature',
        'Extra Premium Features',
        'Extra Awesome Premium Features'
    ] },
    { id: 3, name: "Premium", price: 19.99, features: [
        'Everything is premium',
        'Extra Feature',
        'Premium Feature',
        'Extra Premium Features',
        'Extra Awesome Premium Features'
    ] },
  ];
  return (
    <div>
      <h1 className="text-5xl font-bold bg-indigo-300 p-12 text-white">
        Best Deal Of The Town
      </h1>
      <div className="grid md:grid-cols-3 gap-3">
        {pricingOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
