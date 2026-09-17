import { Construction } from "lucide-react";

export default function PlaceholderPage({
  title,
  group,
}: {
  title: string;
  group: string;
}) {
  return (
    <div>
      <p className="text-sm text-slate-400">{group}</p>
      <h1 className="mt-1 text-2xl font-semibold text-slate-800">{title}</h1>

      <div className="mt-6 flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
        <Construction className="h-10 w-10 text-teal-400" />
        <p className="mt-4 font-medium text-slate-600">
          โมดูลนี้ยังไม่เปิดใช้งาน
        </p>
        <p className="mt-1 max-w-sm text-sm text-slate-400">
          หน้า &ldquo;{title}&rdquo; จะถูกพัฒนาในลำดับถัดไปตามที่สั่งพัฒนา
        </p>
      </div>
    </div>
  );
}
