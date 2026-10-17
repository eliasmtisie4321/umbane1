import type { ReactNode } from "react";

export default function Card({
  title,
  children,
  action,
}: {
  title: string;
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-[#29233f] bg-[#171229]">
      <div className="flex items-center justify-between border-b border-[#29233f] px-4 py-4">
        <h2 className="text-sm font-semibold">
          {title}
        </h2>

        {action}
      </div>

      {children}
    </section>
  );
}
