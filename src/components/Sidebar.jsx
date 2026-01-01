import Link from "next/link";

export default function Sidebar({ active }) {
  const linkClass = (name) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
      active === name
        ? "bg-blue-100 text-blue-700 font-medium"
        : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
    }`;

  return (
    <div className="w-64 bg-white shadow-lg p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-10">
        Globopersona
      </h2>

      <nav className="space-y-2">
        <Link href="/dashboard" className={linkClass("dashboard")}>
          📊 Dashboard
        </Link>
        <Link href="/campaigns" className={linkClass("campaigns")}>
          📢 Campaigns
        </Link>
        <Link href="/create-campaign" className={linkClass("create")}>
          ✉️ Create Campaign
        </Link>
      </nav>
    </div>
  );
}
