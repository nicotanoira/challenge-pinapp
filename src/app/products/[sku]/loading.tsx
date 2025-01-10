import LoadSpinner from "@/components/LoadSpinner";

export default function Loading() {
  return (
    <div className="justify-center bg-slate-200 w-full flex-1 h-full flex flex-col items-center gap-8 py-8">
      <LoadSpinner />
    </div>
  );
}
