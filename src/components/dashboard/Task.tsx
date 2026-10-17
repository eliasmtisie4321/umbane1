import type { LucideIcon } from "lucide-react";

export default function Task({
  icon: Icon,
  title,
  time,
  status,
  statusClass,
}: {
  icon: LucideIcon;
  title: string;
  time: string;
  status: string;
  statusClass: string;
}) {
  return (
    <div className="flex items-center gap-3 p-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#211a34] text-violet-400">
        <Icon size={16} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-semibold">
          {title}
        </p>

        <p className="mt-1 text-[10px] text-slate-500">
          {time}
        </p>
      </div>

      <span
        className={`rounded-full px-2 py-1 text-[9px] font-semibold ${statusClass}`}
      >
        {status}
      </span>
    </div>
  );
}
