import { Wallet, Building, ReceiptIndianRupee, ArrowUpRight } from "lucide-react";

const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);

export default function KPICards({ kpis }) {
  const items = [
    {
      title: "Total Projects",
      value: kpis.totalProjects,
      icon: Building,
      accent: "bg-primary-50 text-primary-700",
    },
    {
      title: "Cash Balance",
      value: formatINR(kpis.cashBalance),
      icon: Wallet,
      accent: "bg-emerald-50 text-emerald-700",
    },
    {
      title: "Outstanding Receivables",
      value: formatINR(kpis.receivables),
      icon: ArrowUpRight,
      accent: "bg-amber-50 text-amber-700",
    },
    {
      title: "Outstanding Payables",
      value: formatINR(kpis.payables),
      icon: ReceiptIndianRupee,
      accent: "bg-rose-50 text-rose-700",
    },
  ];

  return (
    <section aria-label="Key performance indicators" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ title, value, icon: Icon, accent }) => (
        <div
          key={title}
          className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
        >
          <div className={`mb-3 inline-flex rounded-lg ${accent} p-2`}> 
            <Icon className="h-5 w-5" />
          </div>
          <div className="text-xs uppercase tracking-wide text-slate-500">{title}</div>
          <div className="mt-1 text-xl font-semibold text-slate-800">{value}</div>
          <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 -translate-y-6 translate-x-6 rounded-full bg-gradient-to-br from-primary-100/60 to-transparent opacity-0 transition group-hover:opacity-100" />
        </div>
      ))}
    </section>
  );
}
