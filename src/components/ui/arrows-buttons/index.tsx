"use client"
import React from 'react'
import { HiArrowSmallRight, HiArrowSmallLeft } from "react-icons/hi2";

export default function ArrowButton({
  direction,
  // handelFunction,
  variable,
}: {
  direction: "left" | "right";
  // handelFunction: () => void
  variable: number;
}) {
  const handler = () => {
    variable = variable + 3;
    console.log(variable)
  }
  return (
    <div onClick={handler} className='p-3 border border-gray rounded-full mx-1 cursor-pointer'>
      {direction == "left" ? <HiArrowSmallLeft /> : <HiArrowSmallRight />}
    </div>
  )
}
