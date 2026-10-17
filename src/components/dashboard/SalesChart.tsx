import { ChevronDown } from "lucide-react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Card from "../ui/Card";
import { salesData } from "../../data/dashboardData";

export default function SalesChart() {
  return (
    <Card
      title="Sales Overview"
      action={
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-lg border border-[#302846] bg-[#1d1730] px-2.5 py-1.5 text-[10px] text-slate-400"
        >
          This Month

          <ChevronDown size={12} />
        </button>
      }
    >
      <div className="px-4 pt-4">
        <div className="flex items-end gap-3">
          <span className="text-2xl font-bold">
            R 18,260
          </span>

          <span className="pb-1 text-[10px] font-medium text-emerald-400">
            ↑ 15% vs last month
          </span>
        </div>
      </div>

      <div className="h-[260px] w-full px-2 pb-3 pt-5">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart
            data={salesData}
            margin={{
              top: 10,
              right: 10,
              left: -15,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient
                id="salesGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#8b5cf6"
                  stopOpacity={0.4}
                />

                <stop
                  offset="100%"
                  stopColor="#8b5cf6"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#29233f"
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              stroke="#625c72"
              fontSize={9}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              stroke="#625c72"
              fontSize={9}
              tickFormatter={(value) =>
                `R${Number(value) / 1000}k`
              }
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#171229",
                border:
                  "1px solid #352d4d",
                borderRadius: "12px",
                color: "#ffffff",
              }}
              labelStyle={{
                color: "#a78bfa",
                marginBottom: "4px",
              }}
              formatter={(value) => {
                const amount = Array.isArray(
                  value
                )
                  ? Number(value[0] ?? 0)
                  : Number(value ?? 0);

                return [
                  `R ${amount.toLocaleString()}`,
                  "Sales",
                ];
              }}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#9b6cff"
              strokeWidth={2.5}
              fill="url(#salesGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
