"use client";

import { useState } from "react";
import Link from "next/link";
import { AlertTriangle, CalendarDays, CheckCircle2, ChevronDown, CircleHelp, Clock3, ExternalLink, Headset, MapPin, MessageCircle, Package, RefreshCcw, ShieldAlert, Truck } from "lucide-react";
import { orders, stateOptions } from "../lib/data";
import StatusBadge from "./StatusBadge";
import Timeline from "./Timeline";

const toneConfig = {
  blue: {
    icon: Truck,
    box: "border-blue-100 bg-blue-50/70",
    iconBox: "bg-blue-600 text-white",
    title: "text-blue-950",
    text: "text-blue-800/75"
  },
  amber: {
    icon: Clock3,
    box: "border-amber-200 bg-amber-50",
    iconBox: "bg-amber-500 text-white",
    title: "text-amber-950",
    text: "text-amber-900/75"
  },
  rose: {
    icon: ShieldAlert,
    box: "border-rose-200 bg-rose-50",
    iconBox: "bg-rose-500 text-white",
    title: "text-rose-950",
    text: "text-rose-900/75"
  },
  slate: {
    icon: Package,
    box: "border-slate-200 bg-slate-50",
    iconBox: "bg-slate-700 text-white",
    title: "text-slate-950",
    text: "text-slate-700"
  }
};

export default function TrackingClient({ orderId }) {
  const order = orders[orderId];
  const [state, setState] = useState("normal");
  const [detailsOpen, setDetailsOpen] = useState(false);

  if (!order) return null;

  const current = order.states[state];
  const config = toneConfig[current.tone];
  const Icon = config.icon;

  const isIssue = state === "delayed" || state === "deliveredNotReceived";
  const primaryAction = state === "deliveredNotReceived"
    ? "Report delivery issue"
    : state === "delayed"
      ? "Contact support"
      : "Get help";

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Order tracking</p>
            <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">#{order.id}</h1>
          </div>

          <div className="relative">
            <label htmlFor="demo-state" className="sr-only">Demo state</label>
            <select
              id="demo-state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pl-3 pr-9 text-xs font-semibold text-slate-700 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            >
              {stateOptions.map((option) => <option key={option.key} value={option.key}>{option.label}</option>)}
            </select>
            <ChevronDown size={15} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
          <section className="space-y-5">
            <div className={`rounded-2xl border p-4 shadow-sm sm:p-6 ${config.box}`}>
              <div className="flex gap-4">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${config.iconBox}`}>
                  <Icon size={21} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <StatusBadge tone={current.tone}>{current.label}</StatusBadge>
                  </div>
                  <h2 className={`mt-3 text-xl font-bold tracking-tight sm:text-2xl ${config.title}`}>
                    {current.headline}
                  </h2>
                  <p className={`mt-2 max-w-2xl text-sm leading-6 ${config.text}`}>
                    {current.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-black/5 bg-white/75 p-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <CalendarDays size={15} />
                    Estimated delivery
                  </div>
                  <p className="mt-1.5 text-sm font-bold text-slate-900">{current.eta}</p>
                </div>

                <div className="rounded-xl border border-black/5 bg-white/75 p-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <MapPin size={15} />
                    Destination
                  </div>
                  <p className="mt-1.5 truncate text-sm font-bold text-slate-900">{order.deliveryAddress}</p>
                </div>
              </div>

              {isIssue && (
                <div className="mt-4 flex flex-col gap-3 rounded-xl border border-black/5 bg-white/80 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex gap-3">
                    <AlertTriangle size={18} className="mt-0.5 shrink-0 text-amber-600" />
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {state === "delayed" ? "Need help with the delay?" : "Didn't receive your package?"}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Our support team can help you check the latest delivery information.
                      </p>
                    </div>
                  </div>
                  <button className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-slate-900 px-3.5 py-2.5 text-xs font-bold text-white transition hover:bg-slate-700">
                    <Headset size={15} />
                    {primaryAction}
                  </button>
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Progress</p>
                  <h2 className="mt-1 text-lg font-bold text-slate-950">Delivery timeline</h2>
                </div>
                <span className="hidden rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-500 sm:block">
                  {current.shortLabel}
                </span>
              </div>
              <Timeline steps={current.steps} />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <button
                onClick={() => setDetailsOpen(!detailsOpen)}
                className="flex w-full items-center justify-between text-left"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Order</p>
                  <h2 className="mt-1 text-lg font-bold text-slate-950">Order details</h2>
                </div>
                <ChevronDown size={19} className={`text-slate-400 transition ${detailsOpen ? "rotate-180" : ""}`} />
              </button>

              <div className="mt-5 flex gap-3">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-3xl">
                  {order.product.image}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-bold text-slate-900">{order.product.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">{order.product.variant} · Qty {order.product.quantity}</p>
                  <p className="mt-2 text-sm font-bold text-slate-900">৳{order.product.price.toLocaleString()}</p>
                </div>
              </div>

              {detailsOpen && (
                <div className="mt-5 grid gap-3 border-t border-slate-100 pt-5 text-sm sm:grid-cols-2">
                  <div><p className="text-xs text-slate-400">Order placed</p><p className="mt-1 font-semibold text-slate-800">{order.placedAt}</p></div>
                  <div><p className="text-xs text-slate-400">Carrier</p><p className="mt-1 font-semibold text-slate-800">{order.carrier}</p></div>
                  <div><p className="text-xs text-slate-400">Tracking number</p><p className="mt-1 font-semibold text-slate-800">{state === "trackingUnavailable" ? "Not available yet" : order.trackingNumber}</p></div>
                  <div><p className="text-xs text-slate-400">Delivery address</p><p className="mt-1 font-semibold text-slate-800">{order.deliveryAddress}</p></div>
                </div>
              )}
            </div>
          </section>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Headset size={20} />
                </div>
                <div>
                  <h2 className="font-bold text-slate-950">Need help?</h2>
                  <p className="mt-0.5 text-xs text-slate-500">We're here to help with your order.</p>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <button className="flex w-full items-center justify-between rounded-xl border border-slate-200 px-3.5 py-3 text-left text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                  <span className="flex items-center gap-2.5"><MessageCircle size={17} /> Chat with support</span>
                  <ExternalLink size={15} className="text-slate-400" />
                </button>
                <button className="flex w-full items-center justify-between rounded-xl border border-slate-200 px-3.5 py-3 text-left text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                  <span className="flex items-center gap-2.5"><CircleHelp size={17} /> Delivery FAQ</span>
                  <ExternalLink size={15} className="text-slate-400" />
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-900 p-5 text-white shadow-sm sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Tracking ID</p>
              <p className="mt-2 break-all text-sm font-bold">{state === "trackingUnavailable" ? "Pending carrier assignment" : order.trackingNumber}</p>
              <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/15">
                <RefreshCcw size={14} />
                Refresh tracking
              </button>
            </div>

            <Link href="/orders" className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50">
              <Package size={17} />
              View all orders
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}