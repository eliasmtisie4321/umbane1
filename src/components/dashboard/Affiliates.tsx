import Card from "../ui/Card";
import { affiliates } from "../../data/dashboardData";

export default function Affiliates() {
  return (
    <Card
      title="Invited Affiliates"
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
        {affiliates.map((affiliate) => (
          <div
            key={affiliate.name}
            className="flex items-center gap-3 p-4"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-[10px] font-bold text-violet-300">
              {affiliate.name
                .split(" ")
                .map((x) => x[0])
                .join("")}
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold">
                {affiliate.name}
              </p>

              <p className="mt-0.5 text-[10px] text-slate-500">
                {affiliate.level}
              </p>

              <div className="mt-2 h-1 overflow-hidden rounded-full bg-[#2a2440]">
                <div
                  className="h-full rounded-full bg-violet-500"
                  style={{
                    width: `${affiliate.progress}%`,
                  }}
                />
              </div>
            </div>

            <span className="text-slate-600">
              ⋮
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-[#29233f] p-4">
        <button
          type="button"
          className="w-full rounded-xl bg-violet-600 py-2.5 text-xs font-semibold text-white hover:bg-violet-500"
        >
          See all Affiliates →
        </button>
      </div>
    </Card>
  );
}
