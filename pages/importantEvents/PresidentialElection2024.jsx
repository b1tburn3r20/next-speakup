// import CandidateList from "../components/CandidateList";
// import ElectionMap from "../components/ElectionMap";
// import PollingData from "../components/PollingData";
// import DebateSchedule from "../components/DebateSchedule";
// import VoterInfo from "../components/VoterInfo";
import ElectionCountdown from "../components/ElectionCountdown";
import Head from "next/head";
export default function PresidentialElection2024() {
  return (
    <main>
      <head>
        <title>SpeakUp | Presidential Election 2024</title>
      </head>
      <header>Presidential Election 2024</header>

      <ElectionCountdown />

      <section>
        <h1>Democratic Candidates</h1>
        {/* <CandidateList party="democrat" /> */}
      </section>

      <section>
        <h1>Republican Candidates</h1>
        {/* <CandidateList party="republican" /> */}
      </section>

      {/* <ElectionMap />

      <PollingData />

      <DebateSchedule />

      <VoterInfo /> */}

      {/* Additional sections here */}
    </main>
  );
}
