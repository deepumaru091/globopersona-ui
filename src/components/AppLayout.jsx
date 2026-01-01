import Sidebar from "./Sidebar";

export default function AppLayout({ children, active }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar active={active} />
      <div className="flex-1 p-10">{children}</div>
    </div>
  );
}
