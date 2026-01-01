"use client";

import { useEffect, useState } from "react";
import AppLayout from "../../components/AppLayout";

export default function DashboardPage() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("campaigns")) || [];
    setCampaigns(stored);
  }, []);

  const totalCampaigns = campaigns.length;
  const activeCampaigns = campaigns.filter(c => c.status === "Active").length;
  const draftCampaigns = campaigns.filter(c => c.status === "Draft").length;
  const closedCampaigns = campaigns.filter(c => c.status === "Closed").length;

  const stats = [
    { label: "Total Campaigns", value: totalCampaigns, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Active Campaigns", value: activeCampaigns, color: "text-green-600", bg: "bg-green-50" },
    { label: "Draft Campaigns", value: draftCampaigns, color: "text-yellow-600", bg: "bg-yellow-50" },
    { label: "Closed Campaigns", value: closedCampaigns, color: "text-red-600", bg: "bg-red-50" },
  ];

  return (
    <AppLayout active="dashboard">
      <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
      <p className="text-gray-500 mb-8">
        Campaign lifecycle overview for leadership
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg}`}>
              <span className={`text-xl font-bold ${item.color}`}>
                {item.value}
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-4">{item.label}</p>
            <p className={`text-4xl font-bold mt-1 ${item.color}`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}
