import Link from "next/link";
import { ArrowRight, ChevronRight, Package, Truck } from "lucide-react";
import Header from "../../components/Header";
import StatusBadge from "../../components/StatusBadge";
import { orders } from "@/lib/data";

export default function OrdersPage() {
  const order = orders.SP248763;

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-64px)] bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Account</p>
            <h1 className="mt-1 text-2xl font-black tracking-tight text-slate-950">My Orders</h1>
            <p className="mt-2 text-sm text-slate-500">Track your recent purchases and delivery progress.</p>
          </div>

          <div className="space-y-4">
            <Link href={`/orders/${order.id}`} className="group block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-3xl">{order.product.image}</div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-bold text-slate-950">{order.product.name}</h2>
                    <StatusBadge tone="blue">Out for Delivery</StatusBadge>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">Order #{order.id} · {order.product.variant} · Qty {order.product.quantity}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-500">
                    <span className="inline-flex items-center gap-1.5"><Truck size={14} /> Today, 5:30 PM</span>
                    <span>৳{order.product.price.toLocaleString()}</span>
                  </div>
                </div>
                <span className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white transition group-hover:bg-blue-600">
                  Track <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          </div>

          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white/70 p-6 text-center">
            <Package className="mx-auto text-slate-300" size={28} />
            <p className="mt-3 text-sm font-semibold text-slate-700">Demo order only</p>
            <p className="mt-1 text-xs text-slate-500">Use the state switcher on the tracking page to review all required scenarios.</p>
          </div>
        </div>
      </main>
    </>
  );
}