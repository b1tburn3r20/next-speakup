import Head from "next/head";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import nationalEvents from "@/data/eventsData"; // Adjust the path as necessary

export default function EventsPageState() {
  return (
    <>
      <Head>
        <title>Vox Populi | States Events</title>
      </Head>
      <main className="bg-gray-950 text-white font-thin">
        <Navbar />

        <header className="text-center text-4xl font-bold py-6">
          State Events
        </header>

        <section className="my-8 px-4">
          {nationalEvents.map((event) => (
            <div
              key={event.id}
              className="mb-8 p-4 border border-gray-700 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
              <p className="mb-1 text-sm text-gray-400">
                {new Date(event.date).toLocaleDateString()}
              </p>
              <p className="mb-2">{event.description}</p>
              <p className="text-sm italic">Location: {event.location}</p>
            </div>
          ))}
        </section>

        <Footer />
      </main>
    </>
  );
}
