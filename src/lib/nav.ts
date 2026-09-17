import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Package,
  Building2,
  RefreshCcw,
  Wrench,
  Trash2,
  BarChart3,
  FileText,
  Settings,
  ShieldCheck,
} from "lucide-react";

export type NavChild = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  icon: LucideIcon;
  href?: string;
  children?: NavChild[];
};

export const nav: NavGroup[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    label: "วัสดุ",
    icon: Package,
    children: [
      { label: "ทะเบียนวัสดุ", href: "/materials/register" },
      { label: "รับเข้าวัสดุ", href: "/materials/receive" },
      { label: "เบิกจ่ายวัสดุ", href: "/materials/issue" },
      { label: "โอนวัสดุ", href: "/materials/transfer" },
      { label: "ตรวจนับวัสดุ", href: "/materials/stocktake" },
      { label: "รายการคงเหลือ", href: "/materials/balance" },
    ],
  },
  {
    label: "ครุภัณฑ์",
    icon: Building2,
    children: [
      { label: "ทะเบียนครุภัณฑ์", href: "/equipment/register" },
      { label: "รับเข้าครุภัณฑ์", href: "/equipment/receive" },
      { label: "โอนครุภัณฑ์", href: "/equipment/transfer" },
      { label: "เปลี่ยนผู้รับผิดชอบ/สถานที่", href: "/equipment/reassign" },
      { label: "ตรวจสอบครุภัณฑ์", href: "/equipment/inspect" },
      { label: "ประวัติครุภัณฑ์", href: "/equipment/history" },
    ],
  },
  {
    label: "ยืม–คืน",
    icon: RefreshCcw,
    children: [
      { label: "รายการยืม", href: "/borrow/list" },
      { label: "รายการคืน", href: "/borrow/return" },
      { label: "ติดตามรายการค้างคืน", href: "/borrow/overdue" },
    ],
  },
  {
    label: "ซ่อมบำรุง",
    icon: Wrench,
    children: [
      { label: "แจ้งซ่อม", href: "/maintenance/report" },
      { label: "รายการซ่อม", href: "/maintenance/list" },
      { label: "ประวัติการซ่อม", href: "/maintenance/history" },
    ],
  },
  {
    label: "จำหน่าย",
    icon: Trash2,
    children: [
      { label: "เสนอจำหน่าย", href: "/disposal/propose" },
      { label: "รายการรอจำหน่าย", href: "/disposal/pending" },
      { label: "จำหน่ายแล้ว", href: "/disposal/completed" },
      { label: "ประวัติการจำหน่าย", href: "/disposal/history" },
    ],
  },
  {
    label: "รายงาน",
    icon: BarChart3,
    children: [
      { label: "รายงานวัสดุคงเหลือ", href: "/reports/material-balance" },
      { label: "รายงานรับ–จ่ายวัสดุ", href: "/reports/material-movement" },
      { label: "รายงานทะเบียนครุภัณฑ์", href: "/reports/equipment-register" },
      { label: "รายงานตามหน่วยงาน/สถานที่", href: "/reports/by-department" },
      { label: "รายงานการตรวจนับ", href: "/reports/stocktake" },
      { label: "รายงานยืม–คืน", href: "/reports/borrow" },
      { label: "รายงานซ่อม", href: "/reports/maintenance" },
      { label: "รายงานจำหน่าย", href: "/reports/disposal" },
    ],
  },
  {
    label: "เอกสาร",
    icon: FileText,
    children: [
      { label: "ใบรับวัสดุ", href: "/documents/receive-note" },
      { label: "ใบเบิกวัสดุ", href: "/documents/issue-note" },
      { label: "ใบโอน", href: "/documents/transfer-note" },
      { label: "ใบยืม–คืน", href: "/documents/borrow-note" },
      { label: "ใบตรวจนับ", href: "/documents/stocktake-note" },
      { label: "เอกสารประกอบ", href: "/documents/attachments" },
    ],
  },
  {
    label: "ตั้งค่า",
    icon: Settings,
    children: [
      { label: "ปีงบประมาณ", href: "/settings/fiscal-year" },
      { label: "ผู้ใช้งาน", href: "/settings/users" },
      { label: "หน่วยงาน/ฝ่าย", href: "/settings/departments" },
      { label: "สถานที่เก็บ", href: "/settings/locations" },
      { label: "หมวดวัสดุ", href: "/settings/material-categories" },
      { label: "ประเภทครุภัณฑ์", href: "/settings/equipment-types" },
      { label: "เลขที่เอกสาร", href: "/settings/document-numbering" },
    ],
  },
  {
    label: "สำรองข้อมูล / Audit Log",
    icon: ShieldCheck,
    children: [
      { label: "สำรองข้อมูล", href: "/audit/backup" },
      { label: "ประวัติการแก้ไข", href: "/audit/change-log" },
      { label: "Log การใช้งาน", href: "/audit/usage-log" },
    ],
  },
];
