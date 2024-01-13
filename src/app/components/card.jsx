'use client'

import Image from "next/link";
import React from "react";

export default function Card() {
  const games = [
    {
      id: 1,
      image: "joko",
      title: "telo",
      genre: "lol",
      price: "Rp. 16.000",
      discount: "Rp. 14.000",
    },
    {
      id: 2,
      image: "joko",
      title: "telo",
      genre: "lol",
      price: "Rp. 16.000",
      discount: "Rp. 14.000",
    },
    {
      id: 3,
      image: "joko",
      title: "telo",
      genre: "lol",
      price: "Rp. 16.000",
      discount: "Rp. 14.000",
    },
    {
      id: 4,
      image: "joko",
      title: "telo",
      genre: "lol",
      price: "Rp. 16.000",
      discount: "Rp. 14.000",
    },
  ];

  const cardList = games.map((game) => (
    <div
      className="flex flex-col gap-3 rounded-lg font-fireSans"
      key={game.id}
    >
      <p>{game.genre}</p>
      <h2>{game.title}</h2>
      <p>{game.price}</p>
      <p>{game.discount}</p>
    </div>
  ));
};
