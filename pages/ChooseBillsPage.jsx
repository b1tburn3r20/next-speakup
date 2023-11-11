import Link from "next/link";
import React from "react";

export default function ChooseBillsPage() {
  return (
    <div className="w-screen h-screen bg-gray-950 text-white flex justify-center">
      <Link
        href="/NationalBills"
        className="w-1/3 h-70vh mt-16 mb-16 mx-4 flex justify-center items-center cursor-pointer border border-white rounded-3xl transition-all hover:bg-white hover:text-gray-950 hover:border-gray-950 transform rotate-10"
      >
        <p className="text-4xl">National</p>
      </Link>
      <Link
        href="/StateBills"
        className="w-1/3 h-70vh mt-16 mb-16 mx-4 flex justify-center items-center cursor-pointer border border-white rounded-3xl transition-all hover:bg-white hover:text-gray-950 hover:border-gray-950 transform -rotate-10"
      >
        <p className="text-4xl">Local</p>
      </Link>
    </div>
  );
}
