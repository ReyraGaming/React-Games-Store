"use client";
import Card from "./card";
import React from "react";
import Data from "../data/populars";

export default function Populars() {
  return (
    <div className="flex flex-col md:flex-row gap-6 py-3">
      {Data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
}
