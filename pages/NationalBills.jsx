// pages/NationalBills.js
import Navbar from "../components/Navbar";
import BillCard from "../components/BillCard";
import bills from "@/data/bills";
import Footer from "../components/Footer";
//
import Head from "next/head";
import Link from "next/link";

export default function NationalBills() {
  // Placeholder functions for future implementation
  // const handleSearchChange = () => {/* ... */};
  // const handleCategoryChange = () => {/* ... */};
  // const handleSortChange = () => {/* ... */};

  return (
    <main className="bg-gray-950 text-white font-thin">
      <Head>
        <title>Vox Populi | Nationwide Legislation</title>
      </Head>
      <Navbar />

      <div className="container mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold text-center mb-10">National Bills</h1>

        {/* Search and Filter Section */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search bills..."
            className="w-full p-2 rounded"
            // onChange={handleSearchChange}
          />
          <select
            className="p-2 rounded"
            // onChange={handleCategoryChange}
          >
            <option value="">Filter by Category</option>
            {/* Dynamically generate categories */}
          </select>
          <select
            className="p-2 rounded"
            // onChange={handleSortChange}
          >
            <option value="">Sort by</option>
            <option value="date">Date</option>
            <option value="status">Status</option>
          </select>
        </div>

        {/* Bills Display Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bills.map((bill) => (
            <BillCard key={bill.id} bill={bill} />
          ))}
        </div>

        {/* Pagination or Load More Button (Placeholder) */}
        <div className="text-center mt-8">
          <button className="py-2 px-4 border border-white rounded hover:bg-gray-700">
            Load More
          </button>
        </div>

        {/* Informational Section (Placeholder) */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Understanding Legislative Processes
          </h2>
          <p>
            Learn more about how bills become law, the role of Congress, and how
            you can get involved in the legislative process.
          </p>
          {/* Link to informational content */}
        </div>
      </div>
      <Footer />
    </main>
  );
}
