import { useMemo, useState, type ComponentType, type FormEvent } from "react";
import {
  Home,
  Users,
  Building2,
  UserPlus,
  TrendingUp,
  FileText,
  ShoppingCart,
  CreditCard,
  Wrench,
  IdCard,
  Megaphone,
  Zap,
  Headset,
  BarChart3,
  Settings,
  Bell,
  User,
  Menu,
  X,
  Plus,
  Search,
  MoreHorizontal,
  Eye,
  Pencil,
  MapPin,
  Gauge,
  Receipt,
  CalendarDays,
  AlertTriangle,
  CheckCircle2,
  Clock3,
  LogOut,
  Download,
  Upload,
  ChevronRight,
  Activity,
  MessageSquare,
  Phone,
  Mail,
} from "lucide-react";

type IconType = ComponentType<{ size?: number; className?: string }>;

type Customer = {
  id: string;
  name: string;
  phone: string;
  email: string;
  source: string;
  assignedStaff: string;
  joined: string;
  status: "Active" | "Inactive";
  propertyIds: string[];
};

type Property = {
  id: string;
  number: string;
  name: string;
  location: string;
  type: string;
  owner: string;
  unitIds: string[];
  status: "Active" | "Inactive";
};

type Unit = {
  id: string;
  propertyId: string;
  number: string;
  customerId: string;
  meterId: string;
  installationDate: string;
  status: "Active" | "Inactive";
};

type Meter = {
  id: string;
  number: string;
  customerId: string;
  propertyId: string;
  unitId: string;
  installationDate: string;
  status: "Active" | "Inactive";
};

type Purchase = {
  id: string;
  customerId: string;
  meterId: string;
  date: string;
  kwh: number;
  amount: number;
  reference: string;
  daysLasted: number;
};

type Lead = {
  id: string;
  customer: string;
  source: string;
  product: string;
  salesperson: string;
  value: number;
  date: string;
  nextFollowUp: string;
  stage: "New Inquiry" | "Contacted" | "Follow-up" | "Quote Sent" | "Negotiation" | "Won" | "Lost";
};

type Quote = {
  id: string;
  customerId: string;
  amount: number;
  status: "Draft" | "Sent" | "Accepted" | "Rejected";
  date: string;
};

type Order = {
  id: string;
  customerId: string;
  propertyId: string;
  product: string;
  salesperson: string;
  amount: number;
  paymentStatus: "Pending" | "Partial" | "Paid";
  installationStatus: "Pending" | "Scheduled" | "In Progress" | "Completed";
  status: "Pending" | "Confirmed" | "Paid" | "Scheduled" | "In Progress" | "Completed" | "Cancelled";
};

type Payment = {
  id: string;
  customerId: string;
  amount: number;
  date: string;
  method: string;
  status: "Paid" | "Pending" | "Partial";
};

type Installation = {
  id: string;
  customerId: string;
  propertyId: string;
  unitId: string;
  meterId: string;
  technician: string;
  date: string;
  time: string;
  status: "Scheduled" | "Assigned" | "On the Way" | "Installed" | "Completed" | "Cancelled";
};

type Staff = {
  id: string;
  name: string;
  role: string;
  department: string;
  phone: string;
  email: string;
  status: "Active" | "Inactive";
  tasks: number;
  completed: number;
  jobs: number;
  revenue: number;
};

type Ticket = {
  id: string;
  customerId: string;
  propertyId: string;
  unitId: string;
  meterId: string;
  issue: string;
  priority: "Low" | "Medium" | "High" | "Critical";
  assigned: string;
  created: string;
  status: "Open" | "Assigned" | "Investigating" | "Waiting" | "Resolved" | "Closed";
};

type ActivityItem = {
  id: string;
  customerId: string;
  date: string;
  text: string;
  type: "purchase" | "installation" | "payment" | "quote" | "inquiry" | "note";
};

type NavItem = {
  key: string;
  label: string;
  icon: IconType;
};

const NAV_ITEMS: NavItem[] = [
  { key: "dashboard", label: "Dashboard", icon: Home },
  { key: "customers", label: "Customers", icon: Users },
  { key: "properties", label: "Properties", icon: Building2 },
  { key: "leads", label: "Leads", icon: UserPlus },
  { key: "sales", label: "Sales", icon: TrendingUp },
  { key: "quotes", label: "Quotes", icon: FileText },
  { key: "orders", label: "Orders", icon: ShoppingCart },
  { key: "payments", label: "Payments", icon: CreditCard },
  { key: "installations", label: "Installations", icon: Wrench },
  { key: "staff", label: "Staff", icon: IdCard },
  { key: "marketing", label: "Marketing", icon: Megaphone },
  { key: "electricity", label: "Electricity", icon: Zap },
  { key: "support", label: "Support", icon: Headset },
  { key: "reports", label: "Reports", icon: BarChart3 },
  { key: "settings", label: "Settings", icon: Settings },
];

const customersSeed: Customer[] = [
  {
    id: "c1",
    name: "Mpho Nkosi",
    phone: "071 234 5678",
    email: "mpho@example.com",
    source: "Facebook",
    assignedStaff: "Joseph",
    joined: "5 Aug 2026",
    status: "Active",
    propertyIds: ["p1"],
  },
  {
    id: "c2",
    name: "Thabo Molefe",
    phone: "072 456 7812",
    email: "thabo@example.com",
    source: "WhatsApp",
    assignedStaff: "Zanele",
    joined: "2 Aug 2026",
    status: "Active",
    propertyIds: ["p1"],
  },
  {
    id: "c3",
    name: "Lerato Mokoena",
    phone: "073 987 1234",
    email: "lerato@example.com",
    source: "Referral",
    assignedStaff: "Joseph",
    joined: "28 Jul 2026",
    status: "Inactive",
    propertyIds: ["p1"],
  },
  {
    id: "c4",
    name: "Sipho Ndlovu",
    phone: "074 321 6548",
    email: "sipho@example.com",
    source: "Website",
    assignedStaff: "Zanele",
    joined: "10 Aug 2026",
    status: "Active",
    propertyIds: ["p2"],
  },
];

const propertiesSeed: Property[] = [
  {
    id: "p1",
    number: "P-1045",
    name: "House 24",
    location: "Tembisa",
    type: "Residential",
    owner: "Mpho Nkosi",
    unitIds: ["u1", "u2", "u3"],
    status: "Active",
  },
  {
    id: "p2",
    number: "P-1082",
    name: "House 18",
    location: "Soshanguve",
    type: "Residential",
    owner: "Sipho Ndlovu",
    unitIds: ["u4"],
    status: "Active",
  },
  {
    id: "p3",
    number: "P-1091",
    name: "Small Business Centre",
    location: "Mabopane",
    type: "Commercial",
    owner: "Umbane Client",
    unitIds: [],
    status: "Active",
  },
];

const unitsSeed: Unit[] = [
  { id: "u1", propertyId: "p1", number: "Unit 1", customerId: "c1", meterId: "m1", installationDate: "13 Aug 2026", status: "Active" },
  { id: "u2", propertyId: "p1", number: "Unit 2", customerId: "c2", meterId: "m2", installationDate: "12 Aug 2026", status: "Active" },
  { id: "u3", propertyId: "p1", number: "Unit 3", customerId: "c3", meterId: "m3", installationDate: "20 Jul 2026", status: "Inactive" },
  { id: "u4", propertyId: "p2", number: "Unit 1", customerId: "c4", meterId: "m4", installationDate: "15 Aug 2026", status: "Active" },
];

const metersSeed: Meter[] = [
  { id: "m1", number: "123456789", customerId: "c1", propertyId: "p1", unitId: "u1", installationDate: "13 Aug 2026", status: "Active" },
  { id: "m2", number: "987654321", customerId: "c2", propertyId: "p1", unitId: "u2", installationDate: "12 Aug 2026", status: "Active" },
  { id: "m3", number: "456789123", customerId: "c3", propertyId: "p1", unitId: "u3", installationDate: "20 Jul 2026", status: "Inactive" },
  { id: "m4", number: "555123789", customerId: "c4", propertyId: "p2", unitId: "u4", installationDate: "15 Aug 2026", status: "Active" },
];

const purchasesSeed: Purchase[] = [
  { id: "pu1", customerId: "c1", meterId: "m1", date: "14 Aug 2026", kwh: 90, amount: 200, reference: "SY-10452", daysLasted: 24 },
  { id: "pu2", customerId: "c1", meterId: "m1", date: "21 Jul 2026", kwh: 100, amount: 220, reference: "SY-10301", daysLasted: 30 },
  { id: "pu3", customerId: "c1", meterId: "m1", date: "11 Jul 2026", kwh: 40, amount: 100, reference: "SY-10255", daysLasted: 10 },
  { id: "pu4", customerId: "c1", meterId: "m1", date: "6 Jul 2026", kwh: 19, amount: 50, reference: "SY-10210", daysLasted: 5 },
  { id: "pu5", customerId: "c2", meterId: "m2", date: "12 Aug 2026", kwh: 70, amount: 160, reference: "SY-10411", daysLasted: 18 },
  { id: "pu6", customerId: "c4", meterId: "m4", date: "15 Aug 2026", kwh: 120, amount: 280, reference: "SY-10488", daysLasted: 25 },
];

const leadsSeed: Lead[] = [
  { id: "l1", customer: "Bongani M.", source: "WhatsApp", product: "Meter installation", salesperson: "Zanele", value: 8500, date: "19 Aug 2026", nextFollowUp: "20 Aug 2026", stage: "Contacted" },
  { id: "l2", customer: "Ayanda K.", source: "Facebook", product: "Electricity service", salesperson: "Thabo", value: 4500, date: "19 Aug 2026", nextFollowUp: "21 Aug 2026", stage: "New Inquiry" },
  { id: "l3", customer: "Refilwe S.", source: "Referral", product: "Meter + installation", salesperson: "Zanele", value: 12000, date: "18 Aug 2026", nextFollowUp: "19 Aug 2026", stage: "Won" },
  { id: "l4", customer: "Neo P.", source: "Website", product: "Prepaid meter", salesperson: "Thabo", value: 6500, date: "17 Aug 2026", nextFollowUp: "20 Aug 2026", stage: "Quote Sent" },
];

const quotesSeed: Quote[] = [
  { id: "Q-1001", customerId: "c1", amount: 15000, status: "Accepted", date: "8 Aug 2026" },
  { id: "Q-1002", customerId: "c2", amount: 9500, status: "Sent", date: "16 Aug 2026" },
  { id: "Q-1003", customerId: "c4", amount: 12000, status: "Draft", date: "18 Aug 2026" },
];

const ordersSeed: Order[] = [
  { id: "O-1001", customerId: "c1", propertyId: "p1", product: "Meter installation", salesperson: "Zanele", amount: 15000, paymentStatus: "Paid", installationStatus: "Completed", status: "Completed" },
  { id: "O-1002", customerId: "c2", propertyId: "p1", product: "Meter replacement", salesperson: "Zanele", amount: 9500, paymentStatus: "Partial", installationStatus: "Scheduled", status: "Scheduled" },
  { id: "O-1003", customerId: "c4", propertyId: "p2", product: "Prepaid meter", salesperson: "Thabo", amount: 12000, paymentStatus: "Pending", installationStatus: "Pending", status: "Pending" },
];

const paymentsSeed: Payment[] = [
  { id: "PAY-001", customerId: "c1", amount: 15000, date: "10 Aug 2026", method: "EFT", status: "Paid" },
  { id: "PAY-002", customerId: "c2", amount: 4000, date: "17 Aug 2026", method: "Cash", status: "Partial" },
  { id: "PAY-003", customerId: "c4", amount: 12000, date: "18 Aug 2026", method: "EFT", status: "Pending" },
];

const installationsSeed: Installation[] = [
  { id: "I-1045", customerId: "c1", propertyId: "p1", unitId: "u1", meterId: "m1", technician: "Joseph", date: "14 Aug 2026", time: "14:00", status: "Completed" },
  { id: "I-1046", customerId: "c2", propertyId: "p1", unitId: "u2", meterId: "m2", technician: "Lindiwe", date: "19 Aug 2026", time: "09:30", status: "On the Way" },
  { id: "I-1047", customerId: "c4", propertyId: "p2", unitId: "u4", meterId: "m4", technician: "Joseph", date: "20 Aug 2026", time: "16:00", status: "Scheduled" },
];

const staffSeed: Staff[] = [
  { id: "s1", name: "Joseph", role: "Technician", department: "Installations", phone: "071 111 1111", email: "joseph@umbane.co.za", status: "Active", tasks: 8, completed: 6, jobs: 4, revenue: 0 },
  { id: "s2", name: "Zanele", role: "Sales", department: "Sales", phone: "072 222 2222", email: "zanele@umbane.co.za", status: "Active", tasks: 5, completed: 3, jobs: 0, revenue: 24500 },
  { id: "s3", name: "Lindiwe", role: "Technician", department: "Installations", phone: "073 333 3333", email: "lindiwe@umbane.co.za", status: "Active", tasks: 4, completed: 3, jobs: 3, revenue: 0 },
];

const ticketsSeed: Ticket[] = [
  { id: "ISS-001", customerId: "c1", propertyId: "p1", unitId: "u1", meterId: "m1", issue: "No power after installation", priority: "High", assigned: "Joseph", created: "19 Aug 2026", status: "Open" },
  { id: "ISS-002", customerId: "c2", propertyId: "p1", unitId: "u2", meterId: "m2", issue: "Meter reading looks wrong", priority: "Medium", assigned: "Lindiwe", created: "18 Aug 2026", status: "Investigating" },
  { id: "ISS-003", customerId: "c4", propertyId: "p2", unitId: "u4", meterId: "m4", issue: "Customer needs installation update", priority: "Low", assigned: "Zanele", created: "18 Aug 2026", status: "Waiting" },
];

const activitiesSeed: ActivityItem[] = [
  { id: "a1", customerId: "c1", date: "14 Aug", text: "Electricity purchase recorded: 90 kWh", type: "purchase" },
  { id: "a2", customerId: "c1", date: "13 Aug", text: "Installation completed", type: "installation" },
  { id: "a3", customerId: "c1", date: "10 Aug", text: "Payment received: R15,000", type: "payment" },
  { id: "a4", customerId: "c1", date: "8 Aug", text: "Quote accepted: R15,000", type: "quote" },
  { id: "a5", customerId: "c1", date: "5 Aug", text: "Customer inquiry received", type: "inquiry" },
];

const revenueTrend = [62000, 74000, 58000, 91000, 83000, 104000];

const money = (value: number) =>
  `R${value.toLocaleString("en-ZA", { maximumFractionDigits: 0 })}`;

function Badge({ text }: { text: string }) {
  const tone =
    text === "Active" || text === "Completed" || text === "Paid" || text === "Won" || text === "Accepted" || text === "Installed"
      ? "bg-red-50 text-red-700"
      : text === "Inactive" || text === "Cancelled" || text === "Closed" || text === "Rejected" || text === "Lost"
        ? "bg-red-50 text-red-800"
        : text === "High" || text === "Critical" || text === "Open"
          ? "bg-red-50 text-red-700"
          : text === "Medium" || text === "Pending" || text === "Waiting" || text === "Quote Sent" || text === "Negotiation"
            ? "bg-red-50 text-red-700"
            : "bg-red-50 text-red-700";

  return <span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium ${tone}`}>{text}</span>;
}

function SectionHeader({
  title,
  subtitle,
  onAdd,
  addLabel,
}: {
  title: string;
  subtitle: string;
  onAdd?: () => void;
  addLabel?: string;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-red-950">{title}</h1>
        <p className="mt-1 text-sm text-red-700/70">{subtitle}</p>
      </div>
      {onAdd && (
        <button onClick={onAdd} className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-red-700">
          <Plus size={16} />
          {addLabel}
        </button>
      )}
    </div>
  );
}

function Modal({
  title,
  onClose,
  children,
  width = "max-w-lg",
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/45 p-0 sm:items-center sm:p-4">
      <div className={`max-h-[92vh] w-full ${width} overflow-auto rounded-t-2xl bg-white p-5 shadow-2xl sm:rounded-2xl`}>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-red-950">{title}</h2>
          <button onClick={onClose} className="rounded-lg p-2 text-red-700/50 hover:bg-red-50">
            <X size={18} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-red-800">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-lg border border-red-100 px-3 py-2.5 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
      />
    </label>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  change,
  description,
  onClick,
}: {
  icon: IconType;
  label: string;
  value: string | number;
  change?: string;
  description: string;
  onClick?: () => void;
}) {
  return (
    <button onClick={onClick} className="group rounded-xl border border-red-100 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="rounded-lg bg-red-50 p-2 text-red-900">
          <Icon size={18} />
        </div>
        {change && <span className="text-xs font-medium text-red-600">{change}</span>}
      </div>
      <p className="mt-4 text-xs font-medium text-red-700/70">{label}</p>
      <p className="mt-1 text-2xl font-bold text-red-950">{value}</p>
      <p className="mt-1 text-xs text-red-700/50">{description}</p>
    </button>
  );
}

function TableWrap({ children }: { children: React.ReactNode }) {
  return <div className="overflow-hidden rounded-xl border border-red-100 bg-white shadow-sm">{children}</div>;
}

function AddCustomerModal({
  onClose,
  onSave,
}: {
  onClose: () => void;
  onSave: (customer: Customer) => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [source, setSource] = useState("Website");
  const [staff, setStaff] = useState("Joseph");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    onSave({
      id: `c-${Date.now()}`,
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      source,
      assignedStaff: staff,
      joined: "19 Aug 2026",
      status: "Active",
      propertyIds: [],
    });
    onClose();
  };

  return (
    <Modal title="Add Customer" onClose={onClose}>
      <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" value={name} onChange={setName} placeholder="Mpho Nkosi" />
        <Field label="Phone" value={phone} onChange={setPhone} placeholder="071 234 5678" />
        <Field label="Email" value={email} onChange={setEmail} placeholder="customer@example.com" />
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-red-800">Source</span>
          <select value={source} onChange={(e) => setSource(e.target.value)} className="rounded-lg border border-red-100 px-3 py-2.5 text-sm">
            {["Website", "WhatsApp", "Facebook", "Instagram", "Referral", "Walk-in", "Other"].map((x) => <option key={x}>{x}</option>)}
          </select>
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-red-800">Assigned staff</span>
          <select value={staff} onChange={(e) => setStaff(e.target.value)} className="rounded-lg border border-red-100 px-3 py-2.5 text-sm">
            {["Joseph", "Zanele", "Lindiwe", "Thabo"].map((x) => <option key={x}>{x}</option>)}
          </select>
        </label>
        <div className="flex gap-2 sm:col-span-2">
          <button type="button" onClick={onClose} className="flex-1 rounded-lg border border-red-100 px-4 py-2.5 text-sm font-medium">Cancel</button>
          <button type="submit" className="flex-1 rounded-lg bg-red-700 px-4 py-2.5 text-sm font-medium text-white">Save Customer</button>
        </div>
      </form>
    </Modal>
  );
}

function CustomerProfile({
  customer,
  properties,
  units,
  meters,
  purchases,
  activities,
  onClose,
}: {
  customer: Customer;
  properties: Property[];
  units: Unit[];
  meters: Meter[];
  purchases: Purchase[];
  activities: ActivityItem[];
  onClose: () => void;
}) {
  const customerUnits = units.filter((u) => u.customerId === customer.id);
  const customerMeters = meters.filter((m) => m.customerId === customer.id);
  const customerPurchases = purchases.filter((p) => p.customerId === customer.id);
  const daily = customerPurchases.length
    ? customerPurchases.reduce((sum, p) => sum + p.kwh / Math.max(p.daysLasted, 1), 0) / customerPurchases.length
    : 0;
  const customerProperties = properties.filter((p) => customer.propertyIds.includes(p.id));

  return (
    <Modal title="Customer Profile" onClose={onClose} width="max-w-5xl">
      <div className="rounded-xl bg-red-50 p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">{customer.name}</h3>
              <Badge text={customer.status} />
            </div>
            <div className="mt-2 flex flex-wrap gap-4 text-xs text-red-700/70">
              <span className="flex items-center gap-1"><Phone size={13} />{customer.phone}</span>
              <span className="flex items-center gap-1"><Mail size={13} />{customer.email || "No email"}</span>
              <span>Source: {customer.source}</span>
            </div>
          </div>
          <button className="rounded-lg border border-red-100 bg-white px-3 py-2 text-xs font-medium">Edit Customer</button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ["Properties", customerProperties.length],
          ["Units", customerUnits.length],
          ["Meters", customerMeters.length],
          ["Purchases", customerPurchases.length],
          ["Total Sales", money(15000)],
          ["Outstanding", money(customer.id === "c4" ? 12000 : customer.id === "c2" ? 5500 : 0)],
          ["Daily Usage", `${daily.toFixed(2)} kWh/day`],
          ["Open Issues", customer.id === "c1" ? 1 : 0],
        ].map(([label, value]) => (
          <div key={String(label)} className="rounded-xl border border-red-100 p-3">
            <p className="text-xs text-red-700/70">{label}</p>
            <p className="mt-1 font-semibold text-red-950">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-red-100 p-4">
          <h4 className="font-semibold">Properties & Units</h4>
          <div className="mt-3 space-y-2">
            {customerProperties.map((p) => (
              <div key={p.id} className="rounded-lg bg-red-50 p-3">
                <p className="text-sm font-medium">{p.name} · {p.number}</p>
                <p className="text-xs text-red-700/70">{p.location} · {p.type}</p>
                {customerUnits.filter((u) => u.propertyId === p.id).map((u) => (
                  <div key={u.id} className="mt-2 flex items-center justify-between rounded-lg bg-white p-2">
                    <span className="text-xs">{u.number}</span>
                    <span className="text-xs text-red-700/70">Meter {meters.find((m) => m.id === u.meterId)?.number}</span>
                    <Badge text={u.status} />
                  </div>
                ))}
              </div>
            ))}
            {!customerProperties.length && <p className="text-sm text-red-700/50">No property linked yet.</p>}
          </div>
        </div>

        <div className="rounded-xl border border-red-100 p-4">
          <h4 className="font-semibold">Activity Timeline</h4>
          <div className="mt-3 space-y-4">
            {activities.filter((a) => a.customerId === customer.id).map((a) => (
              <div key={a.id} className="flex gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-red-700" />
                <div>
                  <p className="text-xs font-medium">{a.text}</p>
                  <p className="mt-0.5 text-[11px] text-red-700/50">{a.date}</p>
                </div>
              </div>
            ))}
            {!activities.filter((a) => a.customerId === customer.id).length && <p className="text-sm text-red-700/50">No activity yet.</p>}
          </div>
        </div>
      </div>
    </Modal>
  );
}

function CustomersPage({
  customers,
  properties,
  units,
  meters,
  purchases,
  activities,
  onAdd,
}: {
  customers: Customer[];
  properties: Property[];
  units: Unit[];
  meters: Meter[];
  purchases: Purchase[];
  activities: ActivityItem[];
  onAdd: (customer: Customer) => void;
}) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Customer | null>(null);
  const [add, setAdd] = useState(false);

  const filtered = customers.filter((c) => {
    const q = search.toLowerCase();
    const meter = meters.find((m) => m.customerId === c.id)?.number ?? "";
    const property = properties.find((p) => c.propertyIds.includes(p.id));
    const matchesSearch =
      !q ||
      c.name.toLowerCase().includes(q) ||
      c.phone.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q) ||
      meter.includes(q) ||
      property?.name.toLowerCase().includes(q);
    const matchesFilter =
      filter === "All" ||
      (filter === "Active" && c.status === "Active") ||
      (filter === "Inactive" && c.status === "Inactive") ||
      (filter === "New" && c.joined === "19 Aug 2026") ||
      (filter === "Has Outstanding Payment" && c.id === "c2") ||
      (filter === "Has Open Issue" && c.id === "c1");
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-5">
      <SectionHeader title="Customers" subtitle="Manage customers, properties, meters, purchases and customer activity." onAdd={() => setAdd(true)} addLabel="Add Customer" />
      <div className="flex flex-col gap-3 rounded-xl border border-red-100 bg-white p-3 shadow-sm lg:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-red-700/50" size={16} />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by customer name, phone, email, meter number or property..." className="w-full rounded-lg border border-red-100 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-slate-400" />
        </div>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="rounded-lg border border-red-100 px-3 py-2.5 text-sm">
          {["All", "Active", "Inactive", "New", "Has Outstanding Payment", "Has Open Issue"].map((x) => <option key={x}>{x}</option>)}
        </select>
        <button className="rounded-lg border border-red-100 px-3 py-2.5 text-sm"><Download size={15} className="inline mr-1" />Export</button>
      </div>

      <TableWrap>
        <div className="overflow-x-auto">
          <table className="min-w-[1100px] w-full text-left text-sm">
            <thead className="bg-red-50 text-xs text-red-700/70">
              <tr>
                {["Customer", "Phone", "Property", "Unit", "Meter Number", "Status", "Last Purchase", "Estimated Usage", "Next Expected Purchase", "Assigned Staff", "Actions"].map((h) => <th key={h} className="px-4 py-3 font-medium">{h}</th>)}
              </tr>
            </thead>
            <tbody className="divide-y divide-red-50">
              {filtered.map((c) => {
                const unit = units.find((u) => u.customerId === c.id);
                const meter = meters.find((m) => m.customerId === c.id);
                const property = properties.find((p) => c.propertyIds.includes(p.id));
                const ps = purchases.filter((p) => p.customerId === c.id);
                const avg = ps.length ? ps.reduce((s, p) => s + p.kwh / Math.max(p.daysLasted, 1), 0) / ps.length : 0;
                const latest = ps[0];
                const next = latest ? "7 Sep 2026" : "—";
                return (
                  <tr key={c.id} className="hover:bg-red-50">
                    <td className="px-4 py-3 font-medium">{c.name}</td>
                    <td className="px-4 py-3 text-red-700/70">{c.phone}</td>
                    <td className="px-4 py-3">{property ? `${property.name}, ${property.location}` : "—"}</td>
                    <td className="px-4 py-3">{unit?.number ?? "—"}</td>
                    <td className="px-4 py-3 font-mono text-xs">{meter?.number ?? "—"}</td>
                    <td className="px-4 py-3"><Badge text={c.status} /></td>
                    <td className="px-4 py-3">{latest?.date ?? "—"}</td>
                    <td className="px-4 py-3">{avg ? `${avg.toFixed(2)} kWh/day` : "—"}</td>
                    <td className="px-4 py-3">{next}</td>
                    <td className="px-4 py-3">{c.assignedStaff}</td>
                    <td className="px-4 py-3">
                      <button onClick={() => setSelected(c)} className="rounded-lg border border-red-100 p-2 hover:bg-red-50"><MoreHorizontal size={16} /></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </TableWrap>

      {add && <AddCustomerModal onClose={() => setAdd(false)} onSave={onAdd} />}
      {selected && (
        <CustomerProfile
          customer={selected}
          properties={properties}
          units={units}
          meters={meters}
          purchases={purchases}
          activities={activities}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}

function PropertiesPage({ properties, units, customers, meters }: { properties: Property[]; units: Unit[]; customers: Customer[]; meters: Meter[] }) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Property | null>(null);

  const filtered = properties.filter((p) => `${p.number} ${p.name} ${p.location} ${p.owner}`.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-5">
      <SectionHeader title="Properties" subtitle="Manage properties, units, meters, installations and property activity." addLabel="Add Property" onAdd={() => alert("Add Property form ready for backend integration.")} />
      <div className="rounded-xl border border-red-100 bg-white p-3 shadow-sm">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-red-700/50" size={16} />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search properties..." className="w-full rounded-lg border border-red-100 py-2.5 pl-9 pr-3 text-sm" />
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {filtered.map((p) => {
          const propertyUnits = units.filter((u) => u.propertyId === p.id);
          const propertyMeters = meters.filter((m) => m.propertyId === p.id);
          return (
            <button key={p.id} onClick={() => setSelected(p)} className="rounded-xl border border-red-100 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-start justify-between">
                <div className="rounded-lg bg-red-50 p-2"><Building2 size={18} /></div>
                <Badge text={p.status} />
              </div>
              <p className="mt-4 text-xs font-medium text-red-700/50">{p.number}</p>
              <h3 className="mt-1 text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 flex items-center gap-1 text-xs text-red-700/70"><MapPin size={13} />{p.location}</p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                <div className="rounded-lg bg-red-50 p-2"><p className="text-red-700/50">Owner</p><p className="mt-1 font-medium truncate">{p.owner}</p></div>
                <div className="rounded-lg bg-red-50 p-2"><p className="text-red-700/50">Units</p><p className="mt-1 font-medium">{propertyUnits.length}</p></div>
                <div className="rounded-lg bg-red-50 p-2"><p className="text-red-700/50">Meters</p><p className="mt-1 font-medium">{propertyMeters.length}</p></div>
              </div>
            </button>
          );
        })}
      </div>
      {selected && (
        <Modal title={`Property ${selected.number}`} onClose={() => setSelected(null)} width="max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-4">
            {[
              ["Property", selected.name],
              ["Location", selected.location],
              ["Type", selected.type],
              ["Owner", selected.owner],
            ].map(([a, b]) => <div key={a} className="rounded-lg bg-red-50 p-3"><p className="text-xs text-red-700/50">{a}</p><p className="mt-1 text-sm font-medium">{b}</p></div>)}
          </div>
          <h4 className="mt-6 font-semibold">Units & Meters</h4>
          <div className="mt-3 overflow-x-auto rounded-xl border border-red-100">
            <table className="min-w-[650px] w-full text-left text-sm">
              <thead className="bg-red-50 text-xs text-red-700/70"><tr><th className="px-3 py-2">Unit</th><th className="px-3 py-2">Customer</th><th className="px-3 py-2">Meter</th><th className="px-3 py-2">Installation</th><th className="px-3 py-2">Status</th></tr></thead>
              <tbody className="divide-y divide-red-50">
                {units.filter((u) => u.propertyId === selected.id).map((u) => (
                  <tr key={u.id}><td className="px-3 py-3">{u.number}</td><td className="px-3 py-3">{customers.find((c) => c.id === u.customerId)?.name}</td><td className="px-3 py-3 font-mono text-xs">{meters.find((m) => m.id === u.meterId)?.number}</td><td className="px-3 py-3">{u.installationDate}</td><td className="px-3 py-3"><Badge text={u.status} /></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </Modal>
      )}
    </div>
  );
}

function ElectricityPage({ customers, meters, purchases }: { customers: Customer[]; meters: Meter[]; purchases: Purchase[] }) {
  const [selectedCustomer, setSelectedCustomer] = useState("c1");
  const customer = customers.find((c) => c.id === selectedCustomer)!;
  const meter = meters.find((m) => m.customerId === selectedCustomer);
  const history = purchases.filter((p) => p.customerId === selectedCustomer);
  const daily = history.length ? history.reduce((sum, p) => sum + p.kwh / Math.max(p.daysLasted, 1), 0) / history.length : 0;
  const latest = history[0];
  const estimatedDuration = latest ? Math.round(latest.kwh / Math.max(daily, 0.01)) : 0;

  return (
    <div className="space-y-5">
      <SectionHeader title="Electricity" subtitle="Manage meters, purchases and estimated consumption without requiring a live Syntell balance." addLabel="Add Purchase" onAdd={() => alert("Add Purchase form ready for backend integration.")} />
      <div className="flex flex-col gap-3 rounded-xl border border-red-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
        <div className="flex-1">
          <p className="text-xs text-red-700/70">Customer / Meter</p>
          <select value={selectedCustomer} onChange={(e) => setSelectedCustomer(e.target.value)} className="mt-1 w-full rounded-lg border border-red-100 px-3 py-2.5 text-sm">
            {customers.map((c) => <option key={c.id} value={c.id}>{c.name} · {meters.find((m) => m.customerId === c.id)?.number ?? "No meter"}</option>)}
          </select>
        </div>
        <div className="rounded-xl bg-red-50 p-3 text-xs text-red-800">
          <strong>Estimate only.</strong> Actual remaining meter balance is not available here.
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-4">
        <StatCard icon={Zap} label="Latest Purchase" value={`${latest?.kwh ?? 0} kWh`} description={latest?.date ?? "No purchase"} />
        <StatCard icon={Gauge} label="Estimated Daily Usage" value={`${daily.toFixed(2)} kWh/day`} description="Based on purchase history" />
        <StatCard icon={Clock3} label="Estimated Duration" value={`${estimatedDuration} days`} description="Based on latest purchase" />
        <StatCard icon={CalendarDays} label="Estimated Next Purchase" value={estimatedDuration ? "7 Sep 2026" : "—"} description="Calculated estimate" />
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <TableWrap>
          <div className="border-b border-red-50 p-4"><h3 className="font-semibold">Purchase History</h3><p className="text-xs text-red-700/50">Meter {meter?.number}</p></div>
          <div className="overflow-x-auto">
            <table className="min-w-[700px] w-full text-left text-sm">
              <thead className="bg-red-50 text-xs text-red-700/70"><tr><th className="px-4 py-3">Date</th><th className="px-4 py-3">Units</th><th className="px-4 py-3">Amount</th><th className="px-4 py-3">Reference</th><th className="px-4 py-3">Days Estimated</th></tr></thead>
              <tbody className="divide-y divide-red-50">
                {history.map((p) => <tr key={p.id}><td className="px-4 py-3">{p.date}</td><td className="px-4 py-3 font-medium">{p.kwh} kWh</td><td className="px-4 py-3">{money(p.amount)}</td><td className="px-4 py-3 font-mono text-xs">{p.reference}</td><td className="px-4 py-3">{p.daysLasted} days</td></tr>)}
              </tbody>
            </table>
          </div>
        </TableWrap>
        <div className="rounded-xl border border-red-100 bg-white p-5 shadow-sm">
          <h3 className="font-semibold">How the estimate works</h3>
          <div className="mt-4 space-y-3 text-sm text-red-800">
            <p><strong>Daily consumption</strong> = units purchased ÷ days consumed.</p>
            <p>Historical purchases are averaged to estimate normal daily usage.</p>
            <p><strong>Estimated duration</strong> = latest kWh ÷ average daily usage.</p>
            <div className="rounded-lg bg-red-50 p-3 font-mono text-xs">
              90 kWh ÷ {daily.toFixed(2)} kWh/day ≈ {estimatedDuration} days
            </div>
            <p className="text-xs text-red-700/50">The estimate becomes more useful as additional purchase history is recorded.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardPage({ customers, properties, leads, payments, installations, tickets, purchases, onNavigate }: { customers: Customer[]; properties: Property[]; leads: Lead[]; payments: Payment[]; installations: Installation[]; tickets: Ticket[]; purchases: Purchase[]; onNavigate: (key: string) => void }) {
  const outstanding = payments.filter(p=>p.status!=="Paid").reduce((s,p)=>s+p.amount,0);
  const openTickets = tickets.filter(t=>!['Resolved','Closed'].includes(t.status)).length;
  const totalVisitors = 6670;
  const platforms = [
    {name:'Website', visitors:2840, leads:42, conversions:8, engagement:68},
    {name:'WhatsApp', visitors:1680, leads:31, conversions:12, engagement:82},
    {name:'Facebook', visitors:1210, leads:24, conversions:7, engagement:61},
    {name:'Instagram', visitors:940, leads:18, conversions:5, engagement:74},
  ];
  return <div className="space-y-6">
    <div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div><p className="text-sm text-red-700/60">Wednesday, 19 August 2026</p><h1 className="mt-1 text-2xl font-bold text-red-950">Good afternoon, <span className="text-red-700">ADMIN</span> 👋</h1><p className="mt-1 text-sm text-red-700/60">Marketing, leads, website traffic, social media and Umbane performance overview.</p></div><div className="flex items-center gap-2"><span className="rounded-full bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">● System Online</span><button className="rounded-xl border border-red-100 p-3 text-red-700">🔔</button><div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-700 text-white font-bold">A</div></div>
    </div>
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[['New Leads','42','From digital marketing'],['Contacted','14','Leads contacted'],['Qualified','5','Ready to convert'],['Lost','3','Needs review']].map(([a,b,c])=><button key={a} onClick={()=>onNavigate('leads')} className="rounded-2xl border border-red-100 bg-white p-5 text-left shadow-sm hover:border-red-200"><div className="h-11 w-11 rounded-xl bg-red-100 flex items-center justify-center text-red-700 font-bold">↗</div><p className="mt-4 text-sm text-red-700/60">{a}</p><p className="text-3xl font-bold text-red-950">{b}</p><p className="text-xs text-red-700/50">{c}</p></button>)}</div>
    <div className="grid gap-5 xl:grid-cols-3">
      <div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm"><h2 className="font-bold text-red-950">Monthly Target Progress</h2><p className="mt-1 text-xs text-red-700/60">Marketing / affiliate target</p><div className="relative mx-auto mt-6 h-40 w-40"><svg className="h-40 w-40 -rotate-90" viewBox="0 0 100 100"><circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="10" className="text-red-50"/><circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeDasharray="263.9" strokeDashoffset="131.95" className="text-red-600"/></svg><div className="absolute inset-0 flex flex-col items-center justify-center"><span className="text-3xl font-bold text-red-950">50%</span><span className="text-xs text-red-700/60">Progress</span></div></div><div className="grid grid-cols-3 text-center text-xs"><div><b>Achieved</b><p>50%</p></div><div><b>Pending</b><p>25%</p></div><div><b>Remaining</b><p>25%</p></div></div></div>
      <div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm xl:col-span-2"><div className="flex justify-between"><div><h2 className="font-bold text-red-950">Invited Affiliates</h2><p className="text-xs text-red-700/60">Users generating marketing leads</p></div><button className="text-sm font-semibold text-red-700">See all →</button></div><div className="divide-y divide-red-50 mt-4">{[['Mpho Nkosi','Gold','MN'],['Thabo Mokoena','Silver','TM'],['Lerato Molefe','Bronze','LM']].map(([n,l,i])=><div key={n} className="flex justify-between items-center py-4"><div className="flex gap-3 items-center"><div className="h-11 w-11 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold">{i}</div><div><p className="font-semibold text-red-950 text-sm">{n}</p><p className="text-xs text-red-700/60">Affiliate user</p></div></div><span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700">{l}</span></div>)}</div></div>
    </div>
    <div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm"><div className="flex justify-between items-center"><div><h2 className="font-bold text-red-950">Marketing Performance</h2><p className="mt-1 text-sm text-red-700/60">Website visitors and social-media performance feeding your lead pipeline.</p></div><button onClick={()=>onNavigate('marketing')} className="rounded-xl bg-red-700 px-4 py-2.5 text-sm font-bold text-white">View Marketing</button></div><div className="grid gap-3 sm:grid-cols-3 mt-5"><div className="rounded-xl bg-red-50 p-4"><p className="text-xs text-red-700/70">Total Visitors</p><p className="text-2xl font-bold text-red-950">{totalVisitors.toLocaleString()}</p><p className="text-xs text-red-700/50">Website + social</p></div><div className="rounded-xl bg-red-50 p-4"><p className="text-xs text-red-700/70">Marketing Leads</p><p className="text-2xl font-bold text-red-950">115</p><p className="text-xs text-red-700/50">Generated this month</p></div><div className="rounded-xl bg-red-50 p-4"><p className="text-xs text-red-700/70">Conversions</p><p className="text-2xl font-bold text-red-950">32</p><p className="text-xs text-red-700/50">Across all channels</p></div></div><div className="overflow-x-auto mt-5"><table className="min-w-[800px] w-full text-left"><thead><tr className="border-b border-red-50 text-xs uppercase text-red-700/50"><th className="px-3 py-3">Platform</th><th className="px-3 py-3">Visitors</th><th className="px-3 py-3">Leads</th><th className="px-3 py-3">Conversions</th><th className="px-3 py-3">Engagement</th><th className="px-3 py-3">Performance</th></tr></thead><tbody className="divide-y divide-red-50">{platforms.map(x=>{const rate=(x.leads/x.visitors*100).toFixed(2); return <tr key={x.name}><td className="px-3 py-4 font-semibold text-red-950">{x.name}</td><td className="px-3 py-4 text-red-900">{x.visitors.toLocaleString()}</td><td className="px-3 py-4 text-red-900">{x.leads}</td><td className="px-3 py-4 text-red-900">{x.conversions}</td><td className="px-3 py-4 text-red-800">{x.engagement}%</td><td className="px-3 py-4"><div className="w-32 h-2 bg-red-50 rounded-full overflow-hidden"><div className="h-full bg-red-600 rounded-full" style={{width:`${Math.min(x.engagement,100)}%`}}/></div><span className="text-[10px] text-red-700/60">{rate}% lead rate</span></td></tr>})}</tbody></table></div></div>
    <div className="grid gap-5 lg:grid-cols-2"><div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm"><h2 className="font-bold text-red-950">Contacts Overview</h2><div className="mt-4 overflow-x-auto"><table className="min-w-[650px] w-full text-left"><thead><tr className="border-b border-red-50 text-xs uppercase text-red-700/50"><th className="px-3 py-3">Contact</th><th className="px-3 py-3">Source</th><th className="px-3 py-3">Status</th><th className="px-3 py-3">Date</th></tr></thead><tbody>{customers.map(c=><tr key={c.id} className="border-b border-red-50"><td className="px-3 py-4 font-semibold text-red-950">{c.name}</td><td className="px-3 py-4">{c.source}</td><td className="px-3 py-4"><Badge text={c.status}/></td><td className="px-3 py-4">{c.joined}</td></tr>)}</tbody></table></div></div><div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm"><h2 className="font-bold text-red-950">Recent Activity</h2><div className="mt-5 space-y-5">{[['Admin','added a new lead from WhatsApp','12 min ago'],['Thabo','qualified a new marketing lead','35 min ago'],['Lerato','sent a follow-up message','1 hr ago'],['Admin','created a quotation','2 hrs ago']].map(([n,t,time])=><div key={t} className="flex gap-3"><div className="h-9 w-9 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold">{n[0]}</div><div><p className="text-sm text-red-900"><b>{n}</b> {t}</p><p className="text-xs text-red-700/50">{time}</p></div></div>)}</div></div></div>
    <div className="grid gap-5 xl:grid-cols-3"><div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm xl:col-span-2"><div className="flex justify-between"><div><h2 className="font-bold text-red-950">Commissions</h2><p className="text-xs text-red-700/60">Commission growth over time</p></div><p className="text-2xl font-bold text-red-950">€18,260</p></div><svg viewBox="0 0 800 220" className="mt-5 h-48 w-full"><path d="M0 180 L114 165 L228 145 L342 152 L456 118 L570 95 L684 65 L800 35 L800 200 L0 200 Z" fill="currentColor" className="text-red-50"/><polyline points="0,180 114,165 228,145 342,152 456,118 570,95 684,65 800,35" fill="none" stroke="currentColor" strokeWidth="4" className="text-red-600"/></svg><div className="flex justify-between text-xs text-red-700/50">{['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'].map(m=><span key={m}>{m}</span>)}</div></div><div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm"><h2 className="font-bold text-red-950">Rankings</h2><div className="mt-5 space-y-3">{[['Mpho Nkosi','Gold',18,'MN'],['Thabo Mokoena','Silver',14,'TM'],['Lerato Molefe','Bronze',10,'LM']].map(([n,l,c,i],idx)=><div key={n} className="flex gap-3 items-center rounded-xl bg-red-50 p-3"><span>#{idx+1}</span><div className="h-10 w-10 rounded-full bg-red-700 text-white flex items-center justify-center text-xs font-bold">{i}</div><div className="flex-1"><p className="font-semibold text-red-950 text-sm">{n}</p><p className="text-xs text-red-700/60">{l}</p></div><b className="text-red-950">{c}</b></div>)}</div></div></div>
    <div className="rounded-2xl border border-red-100 bg-red-50 p-6"><h2 className="font-bold text-red-950">Attention Required</h2><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mt-5"><div className="bg-white rounded-xl p-4"><p className="text-xs text-red-700/60">Overdue follow-ups</p><b className="text-xl">3</b></div><div className="bg-white rounded-xl p-4"><p className="text-xs text-red-700/60">Pending payments</p><b className="text-xl">{money(outstanding)}</b></div><div className="bg-white rounded-xl p-4"><p className="text-xs text-red-700/60">Installations today</p><b className="text-xl">{installations.filter(i=>i.date==='19 Aug 2026' && i.status!=='Completed').length}</b></div><div className="bg-white rounded-xl p-4"><p className="text-xs text-red-700/60">Open support issues</p><b className="text-xl">{openTickets}</b></div></div></div>
  </div>;
}

function GenericTablePage({
  title,
  subtitle,
  addLabel,
  headers,
  rows,
  onAdd,
}: {
  title: string;
  subtitle: string;
  addLabel: string;
  headers: string[];
  rows: string[][];
  onAdd?: () => void;
}) {
  return (
    <div className="space-y-5">
      <SectionHeader title={title} subtitle={subtitle} onAdd={onAdd} addLabel={addLabel} />
      <TableWrap>
        <div className="overflow-x-auto">
          <table className="min-w-[750px] w-full text-left text-sm">
            <thead className="bg-red-50 text-xs text-red-700/70"><tr>{headers.map((h) => <th key={h} className="px-4 py-3 font-medium">{h}</th>)}</tr></thead>
            <tbody className="divide-y divide-red-50">
              {rows.map((row, i) => <tr key={i} className="hover:bg-red-50">{row.map((cell, j) => <td key={j} className="px-4 py-3">{cell}</td>)}</tr>)}
            </tbody>
          </table>
        </div>
      </TableWrap>
    </div>
  );
}

function LeadsPage({ leads }: { leads: Lead[] }) {
  const stages: Lead["stage"][] = ["New Inquiry", "Contacted", "Follow-up", "Quote Sent", "Negotiation", "Won", "Lost"];
  return (
    <div className="space-y-5">
      <SectionHeader title="Leads" subtitle="Track inquiries from marketing through conversion." onAdd={() => alert("Add Lead form ready for backend integration.")} addLabel="Add Lead" />
      <div className="grid gap-3 overflow-x-auto xl:grid-cols-7">
        {stages.map((stage) => (
          <div key={stage} className="min-w-[210px] rounded-xl bg-red-50 p-3">
            <div className="flex items-center justify-between"><h3 className="text-xs font-semibold">{stage}</h3><span className="text-xs text-red-700/50">{leads.filter((l) => l.stage === stage).length}</span></div>
            <div className="mt-3 space-y-2">
              {leads.filter((l) => l.stage === stage).map((l) => <div key={l.id} className="rounded-lg border border-red-100 bg-white p-3 shadow-sm"><p className="text-sm font-medium">{l.customer}</p><p className="mt-1 text-xs text-red-700/70">{l.product}</p><p className="mt-2 text-xs font-semibold">{money(l.value)}</p><p className="mt-1 text-[10px] text-red-700/50">{l.source} · {l.salesperson}</p></div>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MarketingPage({ leads }: { leads: Lead[] }) {
  const channels = ["Facebook", "WhatsApp", "Instagram", "Website", "Referral", "Walk-in", "Other"];
  return (
    <div className="space-y-5">
      <SectionHeader title="Marketing" subtitle="Connect marketing activity directly to leads, customers and revenue." onAdd={() => alert("Add Campaign form ready for backend integration.")} addLabel="Add Campaign" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((channel) => {
          const data = leads.filter((l) => l.source === channel);
          const revenue = data.filter((l) => l.stage === "Won").reduce((s, l) => s + l.value, 0);
          return <div key={channel} className="rounded-xl border border-red-100 bg-white p-4 shadow-sm"><p className="text-sm font-semibold">{channel}</p><p className="mt-3 text-2xl font-bold">{data.length}</p><p className="text-xs text-red-700/50">Leads</p><p className="mt-3 text-xs text-red-600">{money(revenue)} revenue</p></div>;
        })}
      </div>
      <div className="rounded-xl border border-red-100 bg-white p-5 shadow-sm"><h3 className="font-semibold">Marketing insight</h3><p className="mt-2 text-sm text-red-700/70">The system can compare leads, customers, revenue, conversion rate and campaign performance by channel once connected to the backend.</p></div>
    </div>
  );
}

function ReportsPage({ customers, properties, leads, orders, payments, installations, staff, purchases, tickets }: { customers: Customer[]; properties: Property[]; leads: Lead[]; orders: Order[]; payments: Payment[]; installations: Installation[]; staff: Staff[]; purchases: Purchase[]; tickets: Ticket[] }) {
  const stats = [
    ["Customers", customers.length],
    ["Properties", properties.length],
    ["Leads", leads.length],
    ["Orders", orders.length],
    ["Payments", payments.length],
    ["Installations", installations.length],
    ["Staff", staff.length],
    ["Electricity Purchases", purchases.length],
    ["Open Support", tickets.filter((t) => !["Resolved", "Closed"].includes(t.status)).length],
  ];
  return (
    <div className="space-y-5">
      <SectionHeader title="Reports" subtitle="Business reporting across customers, properties, sales, payments, installations, staff, electricity and support." />
      <div className="flex flex-wrap gap-2">{["Today", "This Week", "This Month", "This Year", "Custom Range"].map((x) => <button key={x} className="rounded-lg border border-red-100 bg-white px-3 py-2 text-xs font-medium hover:bg-red-50">{x}</button>)}</div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map(([label, value]) => <div key={String(label)} className="rounded-xl border border-red-100 bg-white p-4 shadow-sm"><p className="text-xs text-red-700/70">{label}</p><p className="mt-1 text-2xl font-bold">{value}</p></div>)}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-red-100 bg-white p-5 shadow-sm"><h3 className="font-semibold">Revenue by Week</h3><div className="mt-6 space-y-3">{revenueTrend.map((v, i) => <div key={i} className="flex items-center gap-3"><span className="w-10 text-xs text-red-700/50">W{i + 1}</span><div className="h-3 flex-1 rounded-full bg-red-50"><div className="h-3 rounded-full bg-red-700" style={{ width: `${(v / Math.max(...revenueTrend)) * 100}%` }} /></div><span className="w-20 text-right text-xs font-medium">{money(v)}</span></div>)}</div></div>
        <div className="rounded-xl border border-red-100 bg-white p-5 shadow-sm"><h3 className="font-semibold">Business Decisions</h3><ul className="mt-4 space-y-3 text-sm text-red-800"><li>• Monitor outstanding payments before scheduling new work.</li><li>• Prioritize overdue customer follow-ups.</li><li>• Compare marketing channels by conversion and revenue.</li><li>• Use electricity purchase history to improve consumption estimates.</li></ul></div>
      </div>
    </div>
  );
}

export default function UmbaneDashboard() {
  const [active, setActive] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [customers, setCustomers] = useState(customersSeed);
  const [properties] = useState(propertiesSeed);
  const [units] = useState(unitsSeed);
  const [meters] = useState(metersSeed);
  const [purchases] = useState(purchasesSeed);
  const [leads] = useState(leadsSeed);
  const [quotes] = useState(quotesSeed);
  const [orders] = useState(ordersSeed);
  const [payments] = useState(paymentsSeed);
  const [installations] = useState(installationsSeed);
  const [staff] = useState(staffSeed);
  const [tickets] = useState(ticketsSeed);
  const [activities] = useState(activitiesSeed);
  const [globalSearch, setGlobalSearch] = useState("");
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const activePage = NAV_ITEMS.find((n) => n.key === active)?.label ?? "Dashboard";

  const searchResults = useMemo(() => {
    const q = globalSearch.trim().toLowerCase();
    if (!q) return [];
    const results: { type: string; title: string; subtitle: string; key: string }[] = [];
    customers.forEach((c) => {
      const meter = meters.find((m) => m.customerId === c.id);
      if (`${c.name} ${c.phone} ${c.email} ${meter?.number ?? ""}`.toLowerCase().includes(q)) results.push({ type: "Customer", title: c.name, subtitle: `${c.phone} · Meter ${meter?.number ?? "—"}`, key: "customers" });
    });
    properties.forEach((p) => {
      if (`${p.name} ${p.number} ${p.location}`.toLowerCase().includes(q)) results.push({ type: "Property", title: p.name, subtitle: `${p.number} · ${p.location}`, key: "properties" });
    });
    meters.forEach((m) => {
      if (m.number.includes(q)) results.push({ type: "Meter", title: m.number, subtitle: customers.find((c) => c.id === m.customerId)?.name ?? "", key: "electricity" });
    });
    orders.forEach((o) => {
      if (o.id.toLowerCase().includes(q)) results.push({ type: "Order", title: o.id, subtitle: customers.find((c) => c.id === o.customerId)?.name ?? "", key: "orders" });
    });
    return results.slice(0, 8);
  }, [globalSearch, customers, properties, meters, orders]);

  const navigate = (key: string) => {
    setActive(key);
    setSidebarOpen(false);
    setGlobalSearch("");
  };

  const renderPage = () => {
    switch (active) {
      case "dashboard":
        return <DashboardPage customers={customers} properties={properties} leads={leads} orders={orders} payments={payments} installations={installations} tickets={tickets} purchases={purchases} onNavigate={navigate} />;
      case "customers":
        return <CustomersPage customers={customers} properties={properties} units={units} meters={meters} purchases={purchases} activities={activities} onAdd={(c) => setCustomers((prev) => [c, ...prev])} />;
      case "properties":
        return <PropertiesPage properties={properties} units={units} customers={customers} meters={meters} />;
      case "leads":
      case "sales":
        return <LeadsPage leads={leads} />;
      case "quotes":
        return <GenericTablePage title="Quotes" subtitle="Create and manage customer quotations linked to the sales process." addLabel="Create Quote" onAdd={() => alert("Create Quote form ready for backend integration.")} headers={["Quote", "Customer", "Amount", "Status", "Date", "Action"]} rows={quotes.map((q) => [q.id, customers.find((c) => c.id === q.customerId)?.name ?? "", money(q.amount), q.status, q.date, "View"])} />;
      case "orders":
        return <GenericTablePage title="Orders" subtitle="Orders connected to customers, properties, payments and installations." addLabel="Add Order" onAdd={() => alert("Add Order form ready for backend integration.")} headers={["Order", "Customer", "Product", "Amount", "Payment", "Installation", "Status"]} rows={orders.map((o) => [o.id, customers.find((c) => c.id === o.customerId)?.name ?? "", o.product, money(o.amount), o.paymentStatus, o.installationStatus, o.status])} />;
      case "payments":
        return <GenericTablePage title="Payments" subtitle="Track payments, outstanding balances and payment status." addLabel="Record Payment" onAdd={() => alert("Record Payment form ready for backend integration.")} headers={["Payment", "Customer", "Amount", "Date", "Method", "Status"]} rows={payments.map((p) => [p.id, customers.find((c) => c.id === p.customerId)?.name ?? "", money(p.amount), p.date, p.method, p.status])} />;
      case "installations":
        return <GenericTablePage title="Installations" subtitle="Schedule technicians and track installation jobs from assignment to completion." addLabel="Schedule Installation" onAdd={() => alert("Schedule Installation form ready for backend integration.")} headers={["Installation", "Customer", "Property", "Unit", "Meter", "Technician", "Date", "Time", "Status"]} rows={installations.map((i) => [i.id, customers.find((c) => c.id === i.customerId)?.name ?? "", properties.find((p) => p.id === i.propertyId)?.name ?? "", units.find((u) => u.id === i.unitId)?.number ?? "", meters.find((m) => m.id === i.meterId)?.number ?? "", i.technician, i.date, i.time, i.status])} />;
      case "staff":
        return <GenericTablePage title="Staff" subtitle="Manage roles, tasks, jobs, follow-ups and performance." addLabel="Add Staff" onAdd={() => alert("Add Staff form ready for backend integration.")} headers={["Staff", "Role", "Department", "Tasks", "Completed", "Jobs", "Revenue", "Status"]} rows={staff.map((s) => [s.name, s.role, s.department, String(s.tasks), String(s.completed), String(s.jobs), money(s.revenue), s.status])} />;
      case "marketing":
        return <MarketingPage leads={leads} />;
      case "electricity":
        return <ElectricityPage customers={customers} meters={meters} purchases={purchases} />;
      case "support":
        return <GenericTablePage title="Support" subtitle="Customer support issues connected to properties, units and meters." addLabel="Add Support Issue" onAdd={() => alert("Add Support Issue form ready for backend integration.")} headers={["Issue", "Customer", "Property", "Unit", "Meter", "Priority", "Assigned", "Created", "Status"]} rows={tickets.map((t) => [t.id, customers.find((c) => c.id === t.customerId)?.name ?? "", properties.find((p) => p.id === t.propertyId)?.name ?? "", units.find((u) => u.id === t.unitId)?.number ?? "", meters.find((m) => m.id === t.meterId)?.number ?? "", t.priority, t.assigned, t.created, t.status])} />;
      case "reports":
        return <ReportsPage customers={customers} properties={properties} leads={leads} orders={orders} payments={payments} installations={installations} staff={staff} purchases={purchases} tickets={tickets} />;
      case "settings":
        return <GenericTablePage title="Settings" subtitle="Configure users, notifications, business preferences and future API connections." addLabel="Add User" onAdd={() => alert("Settings and user management form ready for backend integration.")} headers={["Setting", "Description", "Status", "Action"]} rows={[["User Management", "Manage system users and roles", "Ready", "Configure"], ["Notifications", "Business alerts and reminders", "Enabled", "Configure"], ["Electricity Provider", "External vending integration", "External", "Configure"], ["API / Backend", "Connect frontend to real database", "Prototype", "Configure"]]} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-red-50 text-red-950">
      {sidebarOpen && <div className="fixed inset-0 z-40 bg-slate-950/30 md:hidden" onClick={() => setSidebarOpen(false)} />}

      <aside className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-red-100 bg-white p-4 shadow-xl transition-transform md:translate-x-0 md:shadow-none ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between px-2">
          <div>
            <p className="text-lg font-extrabold tracking-tight">UMBANE</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-red-700/50">Control Centre</p>
          </div>
          <button className="rounded-lg p-2 text-red-700/50 hover:bg-red-50 md:hidden" onClick={() => setSidebarOpen(false)}><X size={18} /></button>
        </div>

        <nav className="mt-6 flex-1 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map(({ key, label, icon: Icon }) => (
            <button key={key} onClick={() => navigate(key)} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition ${active === key ? "bg-red-700 text-white" : "text-red-800 hover:bg-red-50"}`}>
              <Icon size={17} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-4 border-t border-red-50 pt-4">
          <div className="flex items-center gap-3 rounded-lg p-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-700 text-xs font-bold text-white">A</div>
            <div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">Admin</p><p className="text-xs text-red-700/50">Administrator</p></div>
            <button className="text-red-700/50"><LogOut size={15} /></button>
          </div>
        </div>
      </aside>

      <main className="min-h-screen md:pl-64">
        <header className="sticky top-0 z-30 border-b border-red-100 bg-white/95 px-4 py-3 backdrop-blur sm:px-6">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="rounded-lg p-2 text-red-800 hover:bg-red-50 md:hidden"><Menu size={19} /></button>
            <div className="hidden sm:block"><p className="text-sm font-semibold">{activePage}</p><p className="text-xs text-red-700/50">Wednesday, 19 August 2026</p></div>
            <div className="relative ml-auto w-full max-w-md">
              <Search size={16} className="absolute left-3 top-3 text-red-700/50" />
              <input value={globalSearch} onChange={(e) => setGlobalSearch(e.target.value)} placeholder="Search customers, properties, meters, orders..." className="w-full rounded-lg border border-red-100 bg-red-50 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-slate-400 focus:bg-white" />
              {searchResults.length > 0 && (
                <div className="absolute left-0 right-0 top-12 z-50 overflow-hidden rounded-xl border border-red-100 bg-white shadow-xl">
                  {searchResults.map((r, i) => <button key={i} onClick={() => navigate(r.key)} className="flex w-full items-center gap-3 border-b border-red-50 p-3 text-left last:border-0 hover:bg-red-50"><div className="rounded-lg bg-red-50 p-2"><Search size={14} /></div><div><p className="text-sm font-medium">{r.title}</p><p className="text-xs text-red-700/50">{r.type} · {r.subtitle}</p></div><ChevronRight size={15} className="ml-auto text-red-700/30" /></button>)}
                </div>
              )}
            </div>
            <button onClick={() => setNotificationsOpen((v) => !v)} className="relative rounded-lg border border-red-100 p-2 text-red-800 hover:bg-red-50"><Bell size={17} /><span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] text-white">3</span></button>
            <button className="hidden items-center gap-2 rounded-lg border border-red-100 px-3 py-2 text-sm sm:flex"><User size={16} />Admin</button>
          </div>
          {notificationsOpen && <div className="absolute right-4 top-16 z-50 w-80 rounded-xl border border-red-100 bg-white p-4 shadow-xl sm:right-6"><h3 className="font-semibold">Notifications</h3><div className="mt-3 space-y-3 text-xs text-red-800"><p>Installation #I-1046 is scheduled today.</p><p>3 customer follow-ups are overdue.</p><p>Payment of R8,500 is outstanding.</p></div></div>}
        </header>

        <section className="p-4 sm:p-6 lg:p-8">{renderPage()}</section>
      </main>
    </div>
  );
}
