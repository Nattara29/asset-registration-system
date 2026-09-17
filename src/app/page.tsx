import Link from "next/link";
import {
  Package,
  Building2,
  RefreshCcw,
  Wrench,
  Trash2,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

const stats: { label: string; icon: LucideIcon }[] = [
  { label: "วัสดุคงคลังทั้งหมด", icon: Package },
  { label: "ครุภัณฑ์ทั้งหมด", icon: Building2 },
  { label: "รายการยืมค้างคืน", icon: RefreshCcw },
  { label: "แจ้งซ่อมรอดำเนินการ", icon: Wrench },
];

const quickLinks: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "วัสดุ", href: "/materials/register", icon: Package },
  { label: "ครุภัณฑ์", href: "/equipment/register", icon: Building2 },
  { label: "ยืม–คืน", href: "/borrow/list", icon: RefreshCcw },
  { label: "ซ่อมบำรุง", href: "/maintenance/report", icon: Wrench },
  { label: "จำหน่าย", href: "/disposal/propose", icon: Trash2 },
  { label: "รายงาน", href: "/reports/material-balance", icon: BarChart3 },
];

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-800">Dashboard</h1>
      <p className="mt-1 text-sm text-slate-400">
        ภาพรวมระบบทะเบียนวัสดุและครุภัณฑ์
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-500">{label}</p>
              <div className="rounded-lg bg-teal-50 p-2">
                <Icon className="h-5 w-5 text-teal-600" />
              </div>
            </div>
            <p className="mt-3 text-3xl font-semibold text-slate-800">–</p>
            <p className="mt-1 text-xs text-slate-400">รอเชื่อมข้อมูลจริง</p>
          </div>
        ))}
      </div>

      <h2 className="mt-8 text-lg font-semibold text-slate-800">
        เมนูลัด
      </h2>
      <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {quickLinks.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-colors hover:border-teal-300 hover:bg-teal-50"
          >
            <div className="rounded-lg bg-cyan-50 p-3">
              <Icon className="h-6 w-6 text-cyan-600" />
            </div>
            <span className="text-sm font-medium text-slate-700">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
