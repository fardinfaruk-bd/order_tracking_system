import { Check, Circle, PackageCheck, Truck } from "lucide-react";

export default function Timeline({ steps }) {
  return (
    <div className="relative">
      {steps.map((step, index) => {
        const last = index === steps.length - 1;

        return (
          <div key={step.title} className="relative flex gap-4 pb-7 last:pb-0">
            {!last && (
              <div className={`absolute left-4.25 top-9 h-[calc(100%-18px)] w-px ${step.done ? "bg-blue-200" : "bg-slate-200"}`} />
            )}

            <div className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 ${
              step.current
                ? "border-blue-600 bg-blue-600 text-white shadow-sm shadow-blue-200"
                : step.done
                  ? "border-blue-600 bg-white text-blue-600"
                  : "border-slate-200 bg-white text-slate-300"
            }`}>
              {step.done ? <Check size={17} strokeWidth={2.5} /> : step.current ? <Truck size={16} /> : <Circle size={13} />}
            </div>

            <div className="min-w-0 pt-0.5">
              <p className={`text-sm font-semibold ${step.current ? "text-blue-700" : step.upcoming ? "text-slate-400" : "text-slate-900"}`}>
                {step.title}
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">{step.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}