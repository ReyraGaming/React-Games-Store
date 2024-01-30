"use client";

import Card from './genre_card'
import React from 'react'
import genre from '../data/genre'

export default function Genre() {
    return (
        <div className="flex flex-row gap-6 py-3">
            {genre.map((item, index) => (
                <Card key={index} data={item} />
            ))}
        </div>
    )
}
