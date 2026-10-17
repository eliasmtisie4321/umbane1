import { Users, Zap, ShoppingCart, CircleDollarSign, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export default function BottomStats() {
  const stats: {
    title: string;
    value: string;
    change: string;
    icon: LucideIcon;
    iconClass: string;
  }[] = [
    {
      title: "Active Customers",
      value: "1,284",
      change: "+12%",
      icon: Users,
      iconClass:
        "bg-violet-500/10 text-violet-400",
    },
    {
      title: "Low Electricity Alerts",
      value: "43",
      change: "+8%",
      icon: Zap,
      iconClass:
        "bg-orange-500/10 text-orange-400",
    },
    {
      title: "Purchases This Month",
      value: "126",
      change: "+16%",
      icon: ShoppingCart,
      iconClass:
        "bg-blue-500/10 text-blue-400",
    },
    {
      title: "Amount Collected",
      value: "R256,430",
      change: "+20%",
      icon: CircleDollarSign,
      iconClass:
        "bg-emerald-500/10 text-emerald-400",
    },
    {
      title: "Open Invoices",
      value: "27",
      change: "+5%",
      icon: FileText,
      iconClass:
        "bg-yellow-500/10 text-yellow-400",
    },
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="relative overflow-hidden rounded-2xl border border-[#29233f] bg-[#171229] p-4"
          >
            <p className="text-[10px] text-slate-500">
              {stat.title}
            </p>

            <div className="mt-2 flex items-center justify-between gap-3">
              <div>
                <p className="text-lg font-bold">
                  {stat.value}
                </p>

                <p className="mt-1 text-[10px] text-emerald-400">
                  ↑ {stat.change}
                </p>
              </div>

              <div
                className={`flex h-9 w-9 items-center justify-center rounded-xl ${stat.iconClass}`}
              >
                <Icon size={16} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
