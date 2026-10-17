import type { StatProps } from "../../types/dashboard";

export default function Stat({
  title,
  value,
  change,
  icon: Icon,
  iconClass,
  down = false,
}: StatProps) {
  return (
    <div className="rounded-2xl border border-[#29233f] bg-[#171229] p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-slate-500">
            {title}
          </p>

          <p className="mt-1 text-2xl font-bold">
            {value}
          </p>

          <p
            className={`mt-1 text-[10px] ${
              down
                ? "text-red-400"
                : "text-emerald-400"
            }`}
          >
            {down ? "↓" : "↑"} {change}{" "}
            <span className="text-slate-600">
              from last month
            </span>
          </p>
        </div>

        <div
          className={`flex h-9 w-9 items-center justify-center rounded-xl ${iconClass}`}
        >
          <Icon size={18} />
        </div>
      </div>
    </div>
  );
}
