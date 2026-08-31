import { useState } from "react";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bell,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  FileText,
  Headphones,
  Home,
  LayoutDashboard,
  Megaphone,
  Menu,
  MessageSquare,
  Package,
  Plus,
  Search,
  Settings,
  ShoppingCart,
  Target,
  Ticket,
  Users,
  WalletCards,
  Wrench,
  X,
  Zap,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/* =========================================================
   TYPES
========================================================= */

type NavItem = {
  label: string;
  icon: LucideIcon;
  badge?: string;
};

type StatProps = {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  iconClass: string;
  down?: boolean;
};

/* =========================================================
   NAVIGATION
========================================================= */

const nav: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Customers", icon: Users },
  { label: "Properties", icon: Home },
  { label: "Electricity / Meters", icon: Zap },
  { label: "Leads", icon: Target },
  { label: "Sales & Orders", icon: ShoppingCart },
  { label: "Invoices", icon: FileText },
  { label: "Installations", icon: Wrench },
  { label: "Inventory", icon: Package },
  { label: "Support Tickets", icon: Ticket },
  { label: "Marketing", icon: Megaphone, badge: "New" },
  { label: "Communications", icon: MessageSquare },
  { label: "Team", icon: Users },
  { label: "Reports", icon: BarChart3 },
  { label: "Automations", icon: Activity },
  { label: "Notifications", icon: Bell, badge: "8" },
  { label: "Settings", icon: Settings },
];

/* =========================================================
   CONTACT DATA
========================================================= */

const contacts = [
  {
    name: "Jenny Wilson",
    phone: "(071) 555-0123",
    email: "jenny.wilson@email.com",
    status: "New",
    date: "Nov 28, 2024",
    source: "Website",
  },
  {
    name: "Robert Fox",
    phone: "(072) 444-0174",
    email: "robert.fox@email.com",
    status: "Customer",
    date: "Nov 27, 2024",
    source: "Referral",
  },
  {
    name: "Jacob Jones",
    phone: "(076) 888-0199",
    email: "jacob.jones@email.com",
    status: "Waiting",
    date: "Nov 26, 2024",
    source: "Facebook",
  },
  {
    name: "Savannah Nguyen",
    phone: "(073) 555-0102",
    email: "savannah.nguyen@email.com",
    status: "Lost",
    date: "Nov 25, 2024",
    source: "Walk-in",
  },
  {
    name: "Cameron Williamson",
    phone: "(078) 123-4567",
    email: "cameron@email.com",
    status: "Customer",
    date: "Nov 25, 2024",
    source: "Instagram",
  },
];

/* =========================================================
   SALES DATA
========================================================= */

const salesData = [
  { day: "Oct 01", value: 3200 },
  { day: "Oct 04", value: 4100 },
  { day: "Oct 07", value: 5800 },
  { day: "Oct 10", value: 6900 },
  { day: "Oct 13", value: 9300 },
  { day: "Oct 15", value: 16842 },
  { day: "Oct 17", value: 11800 },
  { day: "Oct 20", value: 13900 },
  { day: "Oct 22", value: 15100 },
  { day: "Oct 24", value: 16600 },
  { day: "Oct 27", value: 15800 },
  { day: "Oct 31", value: 19800 },
];

/* =========================================================
   AFFILIATES
========================================================= */

const affiliates = [
  {
    name: "Amelia Flores",
    level: "Level 5",
    progress: 72,
  },
  {
    name: "Sofia Davis",
    level: "Level 5",
    progress: 61,
  },
  {
    name: "James Russell",
    level: "Level 4",
    progress: 48,
  },
];

/* =========================================================
   RANKINGS
========================================================= */

const rankings = [
  {
    name: "Amelia Flores",
    value: "R 45,230",
    progress: 92,
  },
  {
    name: "James Cooper",
    value: "R 38,420",
    progress: 78,
  },
  {
    name: "Floyd Miles",
    value: "R 27,840",
    progress: 61,
  },
  {
    name: "You",
    value: "R 22,100",
    progress: 53,
  },
  {
    name: "Cody Fisher",
    value: "R 18,760",
    progress: 45,
  },
];

/* =========================================================
   MAIN DASHBOARD
========================================================= */

export default function Dashboard() {
  const [active, setActive] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f0b1d] text-white">
      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-[250px]
          flex-col border-r border-[#29233f]
          bg-[#120d22] transition-transform duration-300
          lg:translate-x-0
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Brand */}

        <div className="flex h-[72px] items-center gap-3 border-b border-[#29233f] px-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-900/30">
            <Zap
              size={20}
              fill="currentColor"
            />
          </div>

          <span className="text-sm font-bold tracking-[0.18em]">
            UMBANE CRM
          </span>

          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="ml-auto rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation */}

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <div className="space-y-1">
            {nav.map((item) => {
              const Icon = item.icon;
              const selected = active === item.label;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    setActive(item.label);
                    setSidebarOpen(false);
                  }}
                  className={`
                    flex w-full items-center gap-3 rounded-xl px-3 py-2.5
                    text-left text-sm transition
                    ${
                      selected
                        ? "bg-violet-600 text-white shadow-lg shadow-violet-950/30"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  <Icon
                    size={17}
                    strokeWidth={1.8}
                  />

                  <span className="flex-1">
                    {item.label}
                  </span>

                  {item.badge && (
                    <span
                      className={`
                        rounded-md px-1.5 py-0.5 text-[9px] font-bold
                        ${
                          item.badge === "New"
                            ? "bg-emerald-500/15 text-emerald-400"
                            : "bg-red-500 text-white"
                        }
                      `}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        {/* User */}

        <div className="border-t border-[#29233f] p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold">
              EM
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">
                Elias Mtisie
              </p>

              <p className="truncate text-xs text-slate-500">
                Administrator
              </p>
            </div>

            <ChevronDown
              size={15}
              className="text-slate-500"
            />
          </div>
        </div>
      </aside>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <main className="lg:pl-[250px]">
        {/* ===================================================
            TOP BAR
        ==================================================== */}

        <header className="sticky top-0 z-30 flex h-[72px] items-center gap-4 border-b border-[#29233f] bg-[#100c1d]/95 px-4 backdrop-blur-xl sm:px-6">
          {/* Mobile menu */}

          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="rounded-xl border border-[#29233f] bg-[#171229] p-2 text-slate-400 hover:text-white lg:hidden"
          >
            <Menu size={20} />
          </button>

          {/* Search */}

          <div className="hidden max-w-md flex-1 items-center gap-3 rounded-xl border border-[#29233f] bg-[#171229] px-3 py-2.5 md:flex">
            <Search
              size={17}
              className="text-slate-500"
            />

            <input
              type="text"
              placeholder="Search anything..."
              className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
            />

            <kbd className="rounded-md border border-[#352d4d] bg-[#211a34] px-2 py-0.5 text-[10px] text-slate-500">
              ⌘ K
            </kbd>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              className="rounded-xl border border-[#29233f] bg-[#171229] p-2.5 text-slate-400 transition hover:text-white"
            >
              <Plus size={18} />
            </button>

            <button
              type="button"
              className="hidden rounded-xl border border-[#29233f] bg-[#171229] p-2.5 text-slate-400 transition hover:text-white sm:block"
            >
              <CalendarDays size={18} />
            </button>

            <button
              type="button"
              className="relative rounded-xl border border-[#29233f] bg-[#171229] p-2.5 text-slate-400 transition hover:text-white"
            >
              <Bell size={18} />

              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
            </button>

            <div className="hidden items-center gap-3 border-l border-[#29233f] pl-4 sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-xs font-bold">
                EM
              </div>

              <div className="hidden xl:block">
                <p className="text-sm font-semibold">
                  Umbane Energy
                </p>

                <p className="text-xs text-slate-500">
                  Administrator
                </p>
              </div>

              <ChevronDown
                size={14}
                className="text-slate-500"
              />
            </div>
          </div>
        </header>

        {/* ===================================================
            CONTENT
        ==================================================== */}

        <section className="p-4 sm:p-6">
          {/* Heading */}

          <div className="mb-6 flex flex-col justify-between gap-4 xl:flex-row xl:items-center">
            <div>
              <p className="mb-1 text-xs text-slate-500">
                Friday, November 28
              </p>

              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Good afternoon, Elias{" "}
                <span>👋</span>
              </h1>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl border border-[#29233f] bg-[#171229] px-3 py-2.5 text-xs font-medium text-slate-300 hover:bg-[#1c1630]"
              >
                <CalendarDays size={15} />

                This Month

                <ChevronDown size={13} />
              </button>

              <button
                type="button"
                className="flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-violet-950/30 hover:bg-violet-500"
              >
                <Plus size={16} />

                Create
              </button>
            </div>
          </div>

          {/* =================================================
              STAT CARDS
          ================================================== */}

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
            <Stat
              title="New Leads"
              value="42"
              change="+32%"
              icon={Users}
              iconClass="bg-blue-500/10 text-blue-400"
            />

            <Stat
              title="Contacted"
              value="14"
              change="+12%"
              icon={Headphones}
              iconClass="bg-violet-500/10 text-violet-400"
            />

            <Stat
              title="Qualified"
              value="5"
              change="+25%"
              icon={CheckCircle2}
              iconClass="bg-emerald-500/10 text-emerald-400"
            />

            <Stat
              title="Pending Orders"
              value="8"
              change="-8%"
              icon={ShoppingCart}
              iconClass="bg-orange-500/10 text-orange-400"
              down
            />

            <Stat
              title="Installations"
              value="12"
              change="+18%"
              icon={Wrench}
              iconClass="bg-fuchsia-500/10 text-fuchsia-400"
            />

            <div className="rounded-2xl border border-[#29233f] bg-[#171229] p-4">
              <button
                type="button"
                className="mb-4 flex w-full items-center justify-between rounded-lg border border-[#302846] bg-[#1d1730] px-3 py-2 text-xs text-slate-300"
              >
                This Month

                <ChevronDown size={13} />
              </button>

              <div className="mb-3 flex items-center gap-1.5 text-[10px] text-slate-500">
                <CheckCircle2
                  size={12}
                  className="text-emerald-400"
                />

                Last updated: 2 mins ago
              </div>

              <button
                type="button"
                className="text-xs font-medium text-violet-400 hover:text-violet-300"
              >
                Customize
              </button>
            </div>
          </div>

          {/* =================================================
              DASHBOARD GRID
          ================================================== */}

          <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
            {/* MAIN CONTENT */}

            <div className="min-w-0 space-y-4">
              {/* Target */}

              <TargetCard />

              {/* Contacts */}

              <Contacts />

              {/* Sales */}

              <SalesChart />

              {/* Bottom Stats */}

              <BottomStats />
            </div>

            {/* RIGHT COLUMN */}

            <div className="space-y-4">
              <Tasks />

              <RecentActivity />

              <Affiliates />

              <MarketingPosts />

              <Rankings />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* =========================================================
   STAT
========================================================= */

function Stat({
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

/* =========================================================
   CARD
========================================================= */

function Card({
  title,
  children,
  action,
}: {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
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

/* =========================================================
   TARGET CARD
========================================================= */

function TargetCard() {
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

/* =========================================================
   TASKS
========================================================= */

function Tasks() {
  return (
    <Card
      title="My Tasks"
      action={
        <button
          type="button"
          className="text-xs text-violet-400 hover:text-violet-300"
        >
          This Week
        </button>
      }
    >
      <div className="divide-y divide-[#29233f]">
        <Task
          icon={Headphones}
          title="Call – Maria Rossi"
          time="10:00 – Today"
          status="Working"
          statusClass="bg-orange-500/10 text-orange-400"
        />

        <Task
          icon={MessageSquare}
          title="Email – Anna Bianchi"
          time="28 Nov – 2 Dec"
          status="Not Started"
          statusClass="bg-blue-500/10 text-blue-400"
        />

        <Task
          icon={Target}
          title="Follow up – New Lead"
          time="29 Nov – 30 Nov"
          status="Pending"
          statusClass="bg-violet-500/10 text-violet-400"
        />
      </div>

      <button
        type="button"
        className="w-full border-t border-[#29233f] px-4 py-3 text-xs font-medium text-violet-400 hover:bg-white/[0.02]"
      >
        View all tasks →
      </button>
    </Card>
  );
}

/* =========================================================
   TASK
========================================================= */

function Task({
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

/* =========================================================
   CONTACTS
========================================================= */

function Contacts() {
  return (
    <Card
      title="Contacts Overview"
      action={
        <button
          type="button"
          className="text-xs font-medium text-violet-400 hover:text-violet-300"
        >
          View All Contacts
        </button>
      }
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b border-[#29233f] text-left">
              <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wide text-slate-600">
                #
              </th>

              <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wide text-slate-600">
                Name
              </th>

              <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wide text-slate-600">
                Phone
              </th>

              <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wide text-slate-600">
                Email
              </th>

              <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wide text-slate-600">
                Status
              </th>

              <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wide text-slate-600">
                Last Contact
              </th>

              <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wide text-slate-600">
                Source
              </th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact, index) => (
              <tr
                key={contact.name}
                className="border-b border-[#29233f] last:border-0 hover:bg-white/[0.02]"
              >
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    className="accent-violet-500"
                  />
                </td>

                <td className="px-4 py-3 text-xs font-semibold">
                  {contact.name}
                </td>

                <td className="px-4 py-3 text-xs text-slate-500">
                  {contact.phone}
                </td>

                <td className="px-4 py-3 text-xs text-slate-500">
                  {contact.email}
                </td>

                <td className="px-4 py-3">
                  <Status status={contact.status} />
                </td>

                <td className="px-4 py-3 text-xs text-slate-500">
                  {contact.date}
                </td>

                <td className="px-4 py-3 text-xs text-slate-500">
                  {contact.source}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

/* =========================================================
   STATUS
========================================================= */

function Status({
  status,
}: {
  status: string;
}) {
  const classes: Record<
    string,
    string
  > = {
    New: "bg-blue-500/10 text-blue-400",
    Customer:
      "bg-emerald-500/10 text-emerald-400",
    Waiting:
      "bg-yellow-500/10 text-yellow-400",
    Lost: "bg-red-500/10 text-red-400",
  };

  return (
    <span
      className={`rounded-full px-2 py-1 text-[9px] font-semibold ${
        classes[status] ??
        "bg-slate-500/10 text-slate-400"
      }`}
    >
      {status}
    </span>
  );
}

/* =========================================================
   SALES CHART
========================================================= */

function SalesChart() {
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

/* =========================================================
   RECENT ACTIVITY
========================================================= */

function RecentActivity() {
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

/* =========================================================
   AFFILIATES
========================================================= */

function Affiliates() {
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

/* =========================================================
   MARKETING POSTS
========================================================= */

function MarketingPosts() {
  return (
    <Card
      title="Marketing Posts"
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
        <MarketingRow
          icon={CalendarDays}
          title="Scheduled Posts"
          value="12"
          iconClass="bg-blue-500/10 text-blue-400"
        />

        <MarketingRow
          icon={CheckCircle2}
          title="Published Today"
          value="5"
          iconClass="bg-emerald-500/10 text-emerald-400"
        />

        <MarketingRow
          icon={AlertTriangle}
          title="Failed Posts"
          value="3"
          iconClass="bg-red-500/10 text-red-400"
        />
      </div>
    </Card>
  );
}

/* =========================================================
   MARKETING ROW
========================================================= */

function MarketingRow({
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

/* =========================================================
   RANKINGS
========================================================= */

function Rankings() {
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

/* =========================================================
   BOTTOM STATS
========================================================= */

function BottomStats() {
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