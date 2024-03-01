"use client";
import Card from "./card";
import React from "react";
import Data from "../data/populars";
import Link from "next/link";

export default function Populars() {
  const slug = 'detail'
  return (
    <div className="flex flex-col md:flex-row gap-6 py-3">
      {Data.map((item, index) => (
        <Link href={`./explore/${slug}`} key={index}>
          <Card data={item} />
        </Link>
      ))}
    </div>
  );
}
