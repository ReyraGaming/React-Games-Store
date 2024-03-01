"use client";

import Card from './card_most'
import React from 'react'
import most from '../data/most'
import Link from 'next/link'
export default function Most() {
    const slug= 'detail'
    return (
        <div className="flex flex-row gap-6 py-3">
            {most.map((item, index) => (
                <Link href={`./explore/${slug}`} key={index}>
                 <Card data={item} />
                </Link>
            ))}
        </div>
    )
}
