import { Progress } from "./ui/Progress";

export default function ProjectsSnapshot({ projects }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <h3 className="text-sm font-semibold text-slate-800">Projects Snapshot</h3>
        <a href="#" className="text-sm font-medium text-primary-700 hover:underline">View projects</a>
      </div>
      <ul className="divide-y divide-slate-200">
        {projects.slice(0, 5).map((p) => (
          <li key={p.id} className="grid grid-cols-1 gap-2 px-4 py-3 sm:grid-cols-12 sm:items-center">
            <div className="sm:col-span-5">
              <div className="text-sm font-medium text-slate-800">{p.name}</div>
              <div className="text-xs text-slate-500">{p.client} • {p.location}</div>
            </div>
            <div className="sm:col-span-5">
              <Progress value={p.progress} />
            </div>
            <div className="sm:col-span-2 text-right text-sm font-semibold text-slate-700">
              {p.progress}%
            </div>
          </li>
        ))}
        {projects.length === 0 && (
          <li className="px-4 py-8 text-center text-sm text-slate-500">No projects yet — create your first project</li>
        )}
      </ul>
    </section>
  );
}
