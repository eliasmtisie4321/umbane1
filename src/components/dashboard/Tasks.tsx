import { Headphones, MessageSquare, Target } from "lucide-react";
import Card from "../ui/Card";
import Task from "./Task";

export default function Tasks() {
  return (
    <Card
      title="My Tasks"
      action={
        <button
          type="button"
          className="text-xs text-violet-400 hover:text-violet-300"
        >
          This Week
        </button>
      }
    >
      <div className="divide-y divide-[#29233f]">
        <Task
          icon={Headphones}
          title="Call – Maria Rossi"
          time="10:00 – Today"
          status="Working"
          statusClass="bg-orange-500/10 text-orange-400"
        />

        <Task
          icon={MessageSquare}
          title="Email – Anna Bianchi"
          time="28 Nov – 2 Dec"
          status="Not Started"
          statusClass="bg-blue-500/10 text-blue-400"
        />

        <Task
          icon={Target}
          title="Follow up – New Lead"
          time="29 Nov – 30 Nov"
          status="Pending"
          statusClass="bg-violet-500/10 text-violet-400"
        />
      </div>

      <button
        type="button"
        className="w-full border-t border-[#29233f] px-4 py-3 text-xs font-medium text-violet-400 hover:bg-white/[0.02]"
      >
        View all tasks →
      </button>
    </Card>
  );
}
