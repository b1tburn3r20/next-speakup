import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-950 text-white p-4 font-thin">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl">
          Vox Populi
        </Link>

        <div className="flex gap-4">
          <Link href="/importantEvents/PresidentialElection2024">
            2024 Presidential Election
          </Link>
          |
          <Link href="/ChooseBillsPage">
            <p className="cursor-pointer hover:underline">Vote on Bills</p>
          </Link>
          |<Link href="/ChooseEventsPage">Important Events</Link>|
          <Link href="/states-representatives">
            Check Your State's Political Health
          </Link>
        </div>

        <Link
          href="/auth"
          className="py-2 px-4 border border-white rounded hover:bg-white hover:text-black"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
