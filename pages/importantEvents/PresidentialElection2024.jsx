import ElectionCountdown from "@/components/ElectionCountdown";
import Footer from "@/components/Footer";
import Head from "next/head";
import Navbar from "@/components/Navbar";
// import other components as they are ready

export default function PresidentialElection2024() {
  return (
    <>
      <Head>
        <title>Vox Populi | Presidential Election 2024</title>
      </Head>
      <main className="bg-gray-950 text-white font-thin">
        <Navbar />
        <header className="text-center text-4xl font-bold py-6">
          Presidential Election 2024
        </header>

        <ElectionCountdown />

        {/* Candidates Sections Container */}
        <div className="flex justify-between my-8">
          {/* Democratic Candidates Section */}
          <section className="px-4 w-1/2 flex justify-start bg-blue-950">
            <h2 className="text-3xl font-bold mb-4">Democratic Candidates</h2>
            {/* <CandidateList party="democrat" /> */}
            {/* Placeholder for candidate list */}
          </section>

          {/* Republican Candidates Section */}
          <section className="px-4 w-1/2 flex justify-end bg-red-950">
            <h2 className="text-3xl font-bold mb-4">Republican Candidates</h2>
            {/* <CandidateList party="republican" /> */}
            {/* Placeholder for candidate list */}
          </section>
        </div>

        {/* Additional Components and Placeholders */}
        {/* Uncomment these as they become ready */}
        {/* <ElectionMap /> */}
        {/* <PollingData /> */}
        {/* <DebateSchedule /> */}
        {/* <VoterInfo /> */}

        {/* Placeholder for additional information */}
        <section className="my-8 px-4">
          <h2 className="text-3xl font-bold">More Information</h2>
          <p>
            Details on debate schedules, voter information, and more will be
            available soon.
          </p>
        </section>
        <Footer />
      </main>
    </>
  );
}
