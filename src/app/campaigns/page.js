"use client";

import { useEffect, useState } from "react";
import AppLayout from "../../components/AppLayout";

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("campaigns")) || [];
    setCampaigns(stored);
  }, []);

  const updateStatus = (index, status) => {
    const updated = [...campaigns];
    updated[index].status = status;
    setCampaigns(updated);
    localStorage.setItem("campaigns", JSON.stringify(updated));
  };

  return (
    <AppLayout active="campaigns">
      <h1 className="text-3xl font-bold mb-6">Campaigns</h1>

      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {campaigns.map((c, i) => (
              <tr key={i} className="border-t">
                <td className="p-4">{c.name}</td>
                <td className="p-4">{c.status}</td>
                <td className="p-4 space-x-2">
                  {c.status === "Draft" && (
                    <button
                      onClick={() => updateStatus(i, "Active")}
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Activate
                    </button>
                  )}
                  {c.status === "Active" && (
                    <button
                      onClick={() => updateStatus(i, "Closed")}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Close
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppLayout>
  );
}
