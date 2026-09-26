import { orders } from "@/lib/data";
import Header from "../../../components/Header";
import TrackingClient from "../../../components/TrackingClient";

export default async function OrderTrackingPage({ params }) {
  const { id } = await params;
  const exists = Boolean(orders[id]);

  if (!exists) {
    return (
      <>
        <Header back />
        <main className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-slate-50 px-4">
          <div className="text-center">
            <p className="text-5xl font-black text-slate-200">404</p>
            <h1 className="mt-3 text-xl font-bold text-slate-900">Order not found</h1>
            <p className="mt-2 text-sm text-slate-500">We couldn't find that order.</p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header back />
      <TrackingClient orderId={id} />
    </>
  );
}