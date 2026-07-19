import Sidebar from "@/components/Sidebar";
import AIChat from "@/components/AIChat";

export default function AIPage() {
  return (
    <main className="flex min-h-screen bg-[#020617]">

      <Sidebar />

      <div className="flex-1">
        <AIChat />
      </div>

    </main>
  );
}