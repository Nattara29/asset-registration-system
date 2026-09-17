"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Boxes } from "lucide-react";
import { nav } from "@/lib/nav";

function isGroupActive(pathname: string, children?: { href: string }[]) {
  if (!children) return false;
  return children.some((c) => pathname.startsWith(c.href));
}

export default function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const [openGroups, setOpenGroups] = useState<Set<string>>(() => {
    const initial = nav.find((g) => isGroupActive(pathname, g.children));
    return new Set(initial ? [initial.label] : []);
  });

  function toggleGroup(label: string) {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  }

  return (
    <nav className="flex h-full w-64 flex-col bg-teal-900 text-teal-50">
      <div className="flex items-center gap-2 border-b border-teal-800 px-5 py-4">
        <Boxes className="h-6 w-6 text-cyan-300" />
        <div>
          <p className="text-sm font-semibold leading-tight text-white">
            ระบบทะเบียนวัสดุ
          </p>
          <p className="text-xs leading-tight text-teal-300">และครุภัณฑ์</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-2 py-3">
        <ul className="space-y-1">
          {nav.map((item) => {
            const Icon = item.icon;

            if (!item.children) {
              const active = item.href === pathname;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href ?? "#"}
                    onClick={onNavigate}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-teal-600 text-white"
                        : "text-teal-100 hover:bg-teal-800"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            }

            const open = openGroups.has(item.label);
            const groupActive = isGroupActive(pathname, item.children);

            return (
              <li key={item.label}>
                <button
                  type="button"
                  onClick={() => toggleGroup(item.label)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    groupActive
                      ? "bg-teal-800 text-white"
                      : "text-teal-100 hover:bg-teal-800"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="flex-1 text-left">{item.label}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open && (
                  <ul className="mt-1 space-y-0.5 border-l border-teal-800 pl-6">
                    {item.children.map((child) => {
                      const active = pathname.startsWith(child.href);
                      return (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={onNavigate}
                            className={`block rounded-md px-3 py-1.5 text-sm transition-colors ${
                              active
                                ? "bg-cyan-600 text-white"
                                : "text-teal-200 hover:bg-teal-800 hover:text-white"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
