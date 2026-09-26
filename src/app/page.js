import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, PackageSearch, ShieldCheck, Truck } from "lucide-react";
import Header from "@/components/Header";

const features = [
  { icon: Truck, title: "Clear delivery progress", text: "See exactly where your order is with a simple timeline." },
  { icon: Clock3, title: "Accurate expectations", text: "Estimated delivery information stays visible and easy to scan." },
  { icon: ShieldCheck, title: "Issue-ready support", text: "Delayed or missing deliveries have clear next steps." }
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="overflow-hidden border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                <CheckCircle2 size={14} />
                Modern order tracking
              </div>
              <h1 className="mt-5 max-w-2xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Know where your order is, at a glance.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
                A responsive e-commerce tracking experience designed to make delivery progress, delays and support actions instantly understandable.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/orders" className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-slate-700">
                  Track an order <ArrowRight size={17} />
                </Link>
                <Link href="/orders/SP248763?state=delayed" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50">
                  View delayed demo
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-xl shadow-slate-200/50 sm:p-5">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white"><Truck size={21} /></div>
                    <div><p className="text-xs font-semibold text-blue-700">Current status</p><p className="mt-1 text-lg font-black text-blue-950">Out for Delivery</p></div>
                  </div>
                  <div className="mt-5 rounded-xl bg-white p-4">
                    <div className="flex items-center justify-between text-xs"><span className="text-slate-500">Estimated arrival</span><span className="font-bold text-slate-900">Today, 5:30 PM</span></div>
                    <div className="mt-5 space-y-4">
                      {["Order placed", "Shipped", "Out for delivery", "Delivered"].map((x, i) => (
                        <div key={x} className="flex items-center gap-3">
                          <span className={`flex h-7 w-7 items-center justify-center rounded-full ${i < 3 ? "bg-blue-600 text-white" : "border-2 border-slate-200 text-slate-300"}`}>
                            {i < 3 ? <CheckCircle2 size={16} /> : <PackageSearch size={15} />}
                          </span>
                          <span className={`text-sm font-semibold ${i < 3 ? "text-slate-900" : "text-slate-400"}`}>{x}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700"><Icon size={19} /></div>
                <h2 className="mt-5 font-bold text-slate-950">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}