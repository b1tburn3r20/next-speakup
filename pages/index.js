import Link from 'next/link';
import Navbar from '../components/Navbar';
import BillCard from '../components/BillCard';
import bills from '@/data/bills';
import Footer from '@/components/Footer';


export default function Home() {
  const latestBill = bills[0]; 

  return (
    <main className="bg-gray-950 text-white font-thin">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-800">
        <h1 className="text-5xl font-bold mb-4">Stay Informed. Stay Engaged.</h1>
        <p className="text-xl mb-6">Explore the latest in U.S. legislation and political activities.</p>
        <Link href="/country/latestLegislation/latestLegislation">
          <p className="py-3 px-6 bg-vivid-cerulean rounded hover:bg-steel-blue transition-colors">
            Latest Legislation
          </p>
        </Link>
      </section>
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Latest Bill</h2>
        <div className="flex justify-center">
          <BillCard bill={latestBill} /> {/* Pass the latestBill as a prop */}
        </div>
        <div className="text-center mt-6">
          <Link href="/NationalBills">
            <p className="underline hover:text-vivid-cerulean transition-colors">
              See more -&gt;
            </p>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Why Vox Populi?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center">
            <h3 className="text-2xl mb-2">Real-Time Updates</h3>
            <p>Get instant updates on bills and events as they happen.</p>
          </div>
          {/* Feature 2 */}
          <div className="text-center">
            <h3 className="text-2xl mb-2">Community Driven</h3>
            <p>Join discussions, share opinions, and be part of the political process.</p>
          </div>
          {/* Feature 3 */}
          <div className="text-center">
            <h3 className="text-2xl mb-2">Data-Driven Insights</h3>
            <p>Access comprehensive data on state and national political health.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-800 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Become a More Informed Citizen</h2>
        <p className="mb-6">Join Vox Populi today and take part in shaping your future.</p>
        <Link href="/auth/signup">
          <p className="py-3 px-6 bg-vivid-cerulean rounded hover:bg-steel-blue transition-colors">
            Get Started
          </p>
        </Link>
      </section>
      <Footer />
      {/* Footer Section */}
      {/* Footer implementation goes here */}

    </main>
  )
}
