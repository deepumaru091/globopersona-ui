"use client";

import { useState } from "react";
import AppLayout from "../../components/AppLayout";

export default function CreateCampaignPage() {
  const [campaignName, setCampaignName] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCampaign = {
      name: campaignName,
      status: scheduleTime ? "Scheduled" : "Draft",
      scheduledAt: scheduleTime || null,
    };

    const existing =
      JSON.parse(localStorage.getItem("campaigns")) || [];

    localStorage.setItem(
      "campaigns",
      JSON.stringify([...existing, newCampaign])
    );

    setCampaignName("");
    setSubject("");
    setContent("");
    setScheduleTime("");
    setSuccess(true);

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <AppLayout active="create">
      <h1 className="text-3xl font-bold mb-2">Create Campaign</h1>
      <p className="text-gray-500 mb-8">
        Draft or schedule campaigns for future launch
      </p>

      <div className="bg-white rounded-2xl shadow p-8 max-w-3xl">
        {success && (
          <div className="bg-green-100 text-green-700 px-4 py-3 rounded-lg mb-6">
            ✅ Campaign created successfully
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
            placeholder="Campaign Name"
            className="w-full border rounded-lg px-4 py-2"
            required
          />

          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Email Subject"
            className="w-full border rounded-lg px-4 py-2"
            required
          />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="5"
            placeholder="Email Content"
            className="w-full border rounded-lg px-4 py-2"
            required
          />

          <input
            type="datetime-local"
            value={scheduleTime}
            onChange={(e) => setScheduleTime(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
          />

          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Create Campaign
          </button>
        </form>
      </div>
    </AppLayout>
  );
}
