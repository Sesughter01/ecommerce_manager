'use client';
import React from 'react';
import { useState, ChangeEvent } from "react";

export default function RangeSlider(): React.JSX.Element {
  const [value, setValue] = useState<number>(25000);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Math.ceil(Number(e.target.value) / 5) * 5);
  };

  return (
    <>
      <div className="productsidebar__range">
        <div className="price-filter mt-10">
          <input
            type="range"
            min="1"
            max="50000"
            value={value}
            className="range"
            onChange={handleChange}
          />
          <p>{value}</p>
        </div>
      </div>
    </>
  );
}
