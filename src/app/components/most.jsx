"use client";

import Card from './card_most'
import React from 'react'
import most from '../data/most'

export default function Most() {
    return (
        <div className="flex flex-row gap-6 py-3">
            {most.map((item, index) => (
                <Card key={index} data={item} />
            ))}
        </div>
    )
}
