"use client";

import { useState } from "react";
import most from "../data/data_games";
import Card from "./card_explore";
import Link from "next/link"

const Genre = () => {
  const slug = 'detail'
  const [filtered, setFiltered] = useState(most);
  const [choose, setChoose] = useState("All");

  function filterByGenre(inputGenre) {
    if (inputGenre === "All") {
      setFiltered(most);
    } else {
      const result = most.filter(
        (value) => value.genre.toLowerCase() === inputGenre.toLowerCase()
      );
      setFiltered(result);
    }

    setChoose(inputGenre);
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-row py-2 gap-4">
        <h2 className="text-white">Choose Genre: </h2>
        <select
          value={choose}
          onChange={(item) => filterByGenre(item.target.value)}
          className="bg-transparent text-white"
        >
          {["All", "Action", "Adventure", "Fighting", "Horror", "RPG"].map(
            (data) => (
              <option value={data} className="text-blue-300" key={data}>
                {data}
              </option>
            )
          )}
        </select>
      </div>
      <div className="grid grid-cols-4 gap-8 py-3">
        {filtered.map((item, index) => (
          <Link key={index} href={`./explore/${slug}`}>
            <Card key={index} data={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Genre;
