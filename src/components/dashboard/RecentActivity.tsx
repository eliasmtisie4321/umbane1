import { Building2, WalletCards, Wrench, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Card from "../ui/Card";

export default function RecentActivity() {
  const rows: {
    name: string;
    text: string;
    time: string;
    icon: LucideIcon;
  }[] = [
    {
      name: "Maria Rossi",
      text: "Added a new property: House 24",
      time: "2 mins ago",
      icon: Building2,
    },
    {
      name: "Anna Bianchi",
      text: "Payment received: R2,500",
      time: "15 mins ago",
      icon: WalletCards,
    },
    {
      name: "Eleanor Pena",
      text: "New installation scheduled",
      time: "1 hour ago",
      icon: Wrench,
    },
    {
      name: "Robert Fox",
      text: "Updated contact information",
      time: "2 hours ago",
      icon: Users,
    },
  ];

  return (
    <Card title="Recent Activity">
      <div className="divide-y divide-[#29233f]">
        {rows.map((row) => {
          const Icon = row.icon;

          return (
            <div
              key={row.name}
              className="flex items-center gap-3 p-4"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                <Icon size={15} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold">
                  {row.name}
                </p>

                <p className="mt-1 truncate text-[10px] text-slate-500">
                  {row.text}
                </p>
              </div>

              <time className="shrink-0 text-[9px] text-slate-600">
                {row.time}
              </time>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className="w-full border-t border-[#29233f] px-4 py-3 text-xs font-medium text-violet-400 hover:bg-white/[0.02]"
      >
        View all activity →
      </button>
    </Card>
  );
}
