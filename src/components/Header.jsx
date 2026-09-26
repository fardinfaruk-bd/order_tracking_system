import Link from "next/link";
import { Package, ArrowLeft } from "lucide-react";

export default function Header({ back = false }) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
            <Package size={19} />
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900">Trackly</span>
        </Link>

        {back ? (
          <Link href="/orders" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
            <ArrowLeft size={16} />
            Orders
          </Link>
        ) : (
          <Link href="/orders" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
            My Orders
          </Link>
        )}
      </div>
    </header>
  );
}