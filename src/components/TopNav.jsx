import { Building2, LogOut, Menu, User } from "lucide-react";
import { useState } from "react";

export default function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary-600" />
            <span className="font-semibold tracking-tight text-slate-800">BuildLedger</span>
          </div>
        </div>

        <nav
          className={`${open ? "block" : "hidden"} absolute left-0 right-0 top-full border-b border-slate-200 bg-white px-4 py-3 md:static md:block md:border-0 md:bg-transparent md:p-0`}
        >
          <ul className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
            <li>
              <a className="text-sm font-medium text-slate-700 hover:text-primary-700" href="#">Dashboard</a>
            </li>
            <li>
              <a className="text-sm font-medium text-slate-700 hover:text-primary-700" href="#">Projects</a>
            </li>
            <li>
              <a className="text-sm font-medium text-slate-700 hover:text-primary-700" href="#">Cashbook</a>
            </li>
            <li>
              <a className="text-sm font-medium text-slate-700 hover:text-primary-700" href="#">Materials</a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <User className="h-4 w-4" />
            <span>Admin</span>
          </button>
          <button className="rounded-md p-2 text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500" aria-label="Logout">
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
