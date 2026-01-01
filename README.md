
📧 Globopersona – Email Campaign Dashboard

Globopersona is a frontend email campaign management dashboard.
It allows companies to create, manage, and track email campaigns such as offers, announcements, and updates.

This project focuses on UI, user flow, and component-based design.

🚀 Features

$Dashboard overview with:

->Total Campaigns

->Active Campaigns

->Draft Campaigns

->Closed Campaigns

$Create Campaign form

$Campaign listing with status control:

->Draft

->Active

->Closed

$Campaign scheduling option (UI level)

$Reusable layout and sidebar components

Responsive and clean UI

🛠️ Tech Stack

@React

@Next.js (App Router)

@Tailwind CSS

@JavaScript

@Vercel (Deployment)

📂 Project Structure
src/
 ├── app/
 │   ├── dashboard/page.js
 │   ├── campaigns/page.js
 │   ├── create-campaign/page.js
 │   ├── layout.js
 │   └── page.js
 └── components/
     ├── AppLayout.jsx
     └── Sidebar.jsx

▶️ How to Run the Project Locally

Clone the repository:

->git clone https://github.com/deepumaru091/globopersona-ui

Open the project folder:

->cd globopersona-ui

Install dependencies:

->npm install

Start the development server:

->npm run dev

Open in browser:

http://localhost:3000

🌐 Live Demo

The project is deployed on Vercel:

https://globopersona-ui.vercel.app

📌 Notes

#This is a frontend-only project.

#Campaign data is stored using browser localStorage.

#Backend email sending and scheduling can be added in future.

👩‍💻 Author

Deepthi
Frontend Developer

💡 Purpose of This Project

->This project was built as part of a frontend UI assignment to demonstrate:

->React component structure

->Page routing using Next.js

->UI/UX design using Tailwind CSS

->Real-world email campaign workflow
