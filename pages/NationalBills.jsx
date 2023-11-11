// pages/NationalBills.js
import Link from "next/link";
import Navbar from "./components/Navbar";
import BillCard from "./components/BillCard";
import bills from "@/data/bills";
export default function NationalBills() {
  return (
    <main className="bg-gray-950 text-white font-thin">
      <Navbar />

      <div className="container mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold text-center">National Bills</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bills.map((bill) => (
            <BillCard key={bill.id} bill={bill} />
          ))}
        </div>
      </div>
    </main>
  );
}
