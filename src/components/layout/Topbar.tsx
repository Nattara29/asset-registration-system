"use client";

import { Menu, ChevronDown, UserCircle } from "lucide-react";
import { useState } from "react";

const fiscalYears = ["2569", "2568", "2567", "2566"];

export default function Topbar({ onMenuClick }: { onMenuClick?: () => void }) {
  const [fiscalYear, setFiscalYear] = useState(fiscalYears[0]);
  const [yearMenuOpen, setYearMenuOpen] = useState(false);

  return (
    <header className="flex h-16 items-center justify-between gap-4 border-b border-slate-200 bg-white px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
          aria-label="เปิดเมนู"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative">
          <button
            type="button"
            onClick={() => setYearMenuOpen((v) => !v)}
            className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            <span className="text-slate-500">ปีงบประมาณ</span>
            <span className="font-semibold text-teal-700">{fiscalYear}</span>
            <ChevronDown className="h-4 w-4 text-slate-400" />
          </button>

          {yearMenuOpen && (
            <ul className="absolute right-0 z-10 mt-1 w-32 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
              {fiscalYears.map((year) => (
                <li key={year}>
                  <button
                    type="button"
                    onClick={() => {
                      setFiscalYear(year);
                      setYearMenuOpen(false);
                    }}
                    className={`block w-full px-3 py-2 text-left text-sm hover:bg-teal-50 ${
                      year === fiscalYear
                        ? "bg-teal-50 font-semibold text-teal-700"
                        : "text-slate-600"
                    }`}
                  >
                    {year}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center gap-2 border-l border-slate-200 pl-2 sm:pl-4">
          <UserCircle className="h-8 w-8 text-slate-400" />
          <div className="hidden text-sm sm:block">
            <p className="font-medium text-slate-700">ผู้ใช้งาน</p>
            <p className="text-xs text-slate-400">เจ้าหน้าที่พัสดุ</p>
          </div>
        </div>
      </div>
    </header>
  );
}
