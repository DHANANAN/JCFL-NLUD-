import Link from "next/link";
import { ArrowLeft, BookOpen, Search, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-[#F8F7F2]">
      <div className="max-w-lg text-center space-y-6 bg-white p-10 sm:p-14 rounded-2xl border border-[#16324F]/10 shadow-xs">
        <div className="font-mono-meta text-5xl sm:text-6xl font-extrabold text-[#B99A5E]">
          404
        </div>

        <div className="space-y-2">
          <h1 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#16324F]">
            This citation leads nowhere.
          </h1>
          <p className="text-sm text-[#697480] font-sans-ui font-light leading-relaxed">
            The page may have moved, or the legal reference may be incomplete.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#16324F] text-white text-xs font-semibold hover:bg-[#0D1F31] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/publications"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md border border-[#16324F]/20 text-[#16324F] text-xs font-semibold hover:bg-[#F8F7F2] transition-colors"
          >
            <BookOpen className="w-4 h-4 text-[#537C78]" />
            <span>Browse Publications</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-[#16324F]/08 text-[11px] font-mono-meta text-[#697480]">
          Journal of Corporate and Financial Laws · CCLGFL
        </div>
      </div>
    </div>
  );
}
