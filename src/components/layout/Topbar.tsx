import { Menu, Search, Plus, CalendarDays, Bell, ChevronDown } from "lucide-react";

type Props = { setSidebarOpen: (value: boolean) => void };
export default function Topbar({setSidebarOpen}: Props) {
return (
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
                Umbane Administrator
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
);
}
