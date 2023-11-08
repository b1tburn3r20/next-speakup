import Head from "next/head";
import Link from "next/link";

export default function latestLegislation() {
  return (
    <main>
      <Head>
        <title>Nationwide News</title>
      </Head>
      <div>
        <header>Nationwide News</header>
        <div>
          <h2>Important Happenings</h2>
          <h3>
            <Link href="/importantEvents/PresidentialElection2024">
              Presidential Election 2024
            </Link>
          </h3>
        </div>
      </div>
    </main>
  );
}
