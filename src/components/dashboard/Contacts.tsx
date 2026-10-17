import Card from "../ui/Card";
import Status from "../ui/Status";
import { contacts } from "../../data/dashboardData";

export default function Contacts() {
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
            {contacts.map((contact) => (
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
