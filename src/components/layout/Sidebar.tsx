import { ChevronDown, X, Zap } from "lucide-react";
import { nav } from "../../data/navigation";

type Props = { active: string; setActive: (value: string) => void; sidebarOpen: boolean; setSidebarOpen: (value: boolean) => void };
export default function Sidebar({active,setActive,sidebarOpen,setSidebarOpen}: Props) {
return (
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
                UMBANE
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
);
}
