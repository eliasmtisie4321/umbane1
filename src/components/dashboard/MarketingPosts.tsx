import { CalendarDays, CheckCircle2, AlertTriangle } from "lucide-react";
import Card from "../ui/Card";
import MarketingRow from "./MarketingRow";

export default function MarketingPosts() {
  return (
    <Card
      title="Marketing Posts"
      action={
        <button
          type="button"
          className="text-xs font-medium text-violet-400"
        >
          View All
        </button>
      }
    >
      <div className="divide-y divide-[#29233f]">
        <MarketingRow
          icon={CalendarDays}
          title="Scheduled Posts"
          value="12"
          iconClass="bg-blue-500/10 text-blue-400"
        />

        <MarketingRow
          icon={CheckCircle2}
          title="Published Today"
          value="5"
          iconClass="bg-emerald-500/10 text-emerald-400"
        />

        <MarketingRow
          icon={AlertTriangle}
          title="Failed Posts"
          value="3"
          iconClass="bg-red-500/10 text-red-400"
        />
      </div>
    </Card>
  );
}
