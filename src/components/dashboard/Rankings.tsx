import Card from "../ui/Card";
import { rankings } from "../../data/dashboardData";

export default function Rankings() {
  return (
    <Card
      title="Top Salespersons"
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
        {rankings.map(
          (person, index) => (
            <div
              key={person.name}
              className={`flex items-center gap-2 p-3 ${
                person.name === "You"
                  ? "bg-violet-500/[0.04]"
                  : ""
              }`}
            >
              <span className="w-4 text-center text-[10px] font-bold text-slate-600">
                {index + 1}
              </span>

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#29233f] text-[9px] font-bold text-slate-300">
                {person.name
                  .split(" ")
                  .map((x) => x[0])
                  .join("")}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold">
                  {person.name}
                </p>

                <div className="mt-1 h-1 overflow-hidden rounded-full bg-[#2a2440]">
                  <div
                    className="h-full rounded-full bg-violet-500"
                    style={{
                      width: `${person.progress}%`,
                    }}
                  />
                </div>
              </div>

              <strong className="text-[10px] text-slate-300">
                {person.value}
              </strong>
            </div>
          )
        )}
      </div>
    </Card>
  );
}