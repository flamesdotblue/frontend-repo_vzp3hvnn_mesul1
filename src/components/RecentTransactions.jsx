import { Receipt, ChevronRight } from "lucide-react";

const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(value);

export default function RecentTransactions({ transactions }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <h3 className="text-sm font-semibold text-slate-800">Recent Transactions</h3>
        <a href="#" className="text-sm font-medium text-primary-700 hover:underline">View all</a>
      </div>
      <ul className="divide-y divide-slate-200">
        {transactions.slice(0, 6).map((tx) => (
          <li key={tx.id} className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <span className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${
                tx.type === "Receipt" ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
              }`}>
                <Receipt className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm font-medium text-slate-800">{tx.party}</div>
                <div className="text-xs text-slate-500">{tx.date} • {tx.projectName}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className={`text-sm font-semibold ${tx.type === "Receipt" ? "text-emerald-700" : "text-rose-700"}`}>
                {tx.type === "Receipt" ? "+" : "-"}{formatINR(tx.amount)}
              </div>
              <ChevronRight className="h-4 w-4 text-slate-400" />
            </div>
          </li>
        ))}
        {transactions.length === 0 && (
          <li className="px-4 py-8 text-center text-sm text-slate-500">No transactions yet — add your first entry</li>
        )}
      </ul>
    </section>
  );
}
