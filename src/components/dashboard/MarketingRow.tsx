import type { LucideIcon } from "lucide-react";

export default function MarketingRow({
  icon: Icon,
  title,
  value,
  iconClass,
}: {
  icon: LucideIcon;
  title: string;
  value: string;
  iconClass: string;
}) {
  return (
    <div className="flex items-center gap-3 p-4">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-lg ${iconClass}`}
      >
        <Icon size={15} />
      </div>

      <span className="flex-1 text-xs text-slate-400">
        {title}
      </span>

      <strong className="text-sm">
        {value}
      </strong>
    </div>
  );
}