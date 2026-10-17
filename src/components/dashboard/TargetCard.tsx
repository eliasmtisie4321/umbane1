import Card from "../ui/Card";

export default function TargetCard() {
  return (
    <Card
      title="Monthly Target Progress"
      action={
        <button
          type="button"
          className="text-slate-500 hover:text-white"
        >
          ⋮
        </button>
      }
    >
      <div className="flex flex-col gap-6 p-5 sm:flex-row sm:items-center">
        {/* Donut */}

        <div className="relative mx-auto h-36 w-36 shrink-0 sm:mx-0">
          <div
            className="h-full w-full rounded-full"
            style={{
              background:
                "conic-gradient(#8b5cf6 0deg 180deg, #29233f 180deg 360deg)",
            }}
          />

          <div className="absolute inset-[13px] flex flex-col items-center justify-center rounded-full bg-[#171229]">
            <span className="text-2xl font-bold">
              50%
            </span>

            <span className="text-[10px] text-slate-500">
              Progress
            </span>
          </div>
        </div>

        {/* Legend */}

        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            <span className="flex-1 text-xs text-slate-400">
              Achieved
            </span>

            <strong className="text-xs">
              7
            </strong>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-blue-400" />

            <span className="flex-1 text-xs text-slate-400">
              Pending
            </span>

            <strong className="text-xs">
              13
            </strong>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-yellow-400" />

            <span className="flex-1 text-xs text-slate-400">
              Remaining
            </span>

            <strong className="text-xs">
              20
            </strong>
          </div>
        </div>
      </div>
    </Card>
  );
}
