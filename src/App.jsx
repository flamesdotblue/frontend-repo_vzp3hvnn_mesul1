import TopNav from "./components/TopNav";
import KPICards from "./components/KPICards";
import RecentTransactions from "./components/RecentTransactions";
import ProjectsSnapshot from "./components/ProjectsSnapshot";

const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);

function App() {
  // Mock projects
  const projects = [
    { id: "P001", name: "Residential Tower A", client: "Kumar Builders", location: "Pune", startDate: "2024-01-15", endDate: "2025-03-30", budget: 95000000, status: "In Progress", progress: 62 },
    { id: "P002", name: "NH-48 Flyover Repairs", client: "NHAI", location: "Surat", startDate: "2024-05-10", endDate: "2024-12-20", budget: 18000000, status: "In Progress", progress: 45 },
    { id: "P003", name: "Warehouse Complex", client: "LogiMart Pvt Ltd", location: "Bhiwandi", startDate: "2023-09-01", endDate: "2024-11-15", budget: 42000000, status: "In Progress", progress: 78 },
    { id: "P004", name: "Luxury Villa", client: "Mr. Shah", location: "Ahmedabad", startDate: "2024-02-05", endDate: "2025-02-01", budget: 15000000, status: "On Hold", progress: 20 },
    { id: "P005", name: "School Expansion", client: "City Public School", location: "Nagpur", startDate: "2024-03-12", endDate: "2024-12-31", budget: 12000000, status: "In Progress", progress: 55 },
  ];

  // Mock transactions
  const transactions = [
    { id: "T001", date: "2024-10-02", type: "Receipt", party: "City Public School", projectId: "P005", projectName: "School Expansion", amount: 2500000 },
    { id: "T002", date: "2024-10-03", type: "Payment", party: "Shree Cement", projectId: "P003", projectName: "Warehouse Complex", amount: 780000 },
    { id: "T003", date: "2024-10-03", type: "Payment", party: "Patel Transport", projectId: "P002", projectName: "NH-48 Flyover Repairs", amount: 125000 },
    { id: "T004", date: "2024-10-04", type: "Receipt", party: "NHAI", projectId: "P002", projectName: "NH-48 Flyover Repairs", amount: 3200000 },
    { id: "T005", date: "2024-10-04", type: "Payment", party: "UltraTech Cement", projectId: "P001", projectName: "Residential Tower A", amount: 920000 },
    { id: "T006", date: "2024-10-05", type: "Payment", party: "Larsen Tools", projectId: "P003", projectName: "Warehouse Complex", amount: 210000 },
    { id: "T007", date: "2024-10-06", type: "Receipt", party: "Kumar Builders", projectId: "P001", projectName: "Residential Tower A", amount: 4500000 },
    { id: "T008", date: "2024-10-06", type: "Payment", party: "Ahmedabad Steel", projectId: "P004", projectName: "Luxury Villa", amount: 150000 },
    { id: "T009", date: "2024-10-07", type: "Receipt", party: "LogiMart Pvt Ltd", projectId: "P003", projectName: "Warehouse Complex", amount: 1800000 },
  ];

  const kpis = {
    totalProjects: projects.length,
    cashBalance: 18500000,
    receivables: 7600000,
    payables: 3150000,
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <TopNav />

      <main className="mx-auto max-w-7xl px-4 pb-12 pt-6 md:px-6">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-800">Welcome back</h1>
            <p className="text-sm text-slate-500">At-a-glance view of projects and cashbook</p>
          </div>
          <div className="rounded-lg bg-white px-4 py-2 text-sm shadow-sm">
            <span className="text-slate-600">Cash Balance</span>
            <span className="ml-3 font-semibold text-slate-900">{formatINR(kpis.cashBalance)}</span>
          </div>
        </div>

        <KPICards kpis={kpis} />

        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <RecentTransactions transactions={transactions} />
          </div>
          <div className="lg:col-span-5">
            <ProjectsSnapshot projects={projects} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
