"use client";

import { useState } from "react";
import { Share2, Link as LinkIcon, Check, Mail, Globe } from "lucide-react";

interface ShareMenuProps {
  title: string;
  url?: string;
}

export function ShareMenu({ title, url }: ShareMenuProps) {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : url || "https://jcfl.law";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleEmail = () => {
    window.open(
      `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Read this article on the Journal of Corporate and Financial Laws: ${shareUrl}`)}`,
      "_blank"
    );
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-[#16324F]/15 bg-white hover:bg-[#F8F7F2] text-xs font-medium text-[#16324F] transition-colors shadow-2xs"
        aria-label="Share article"
      >
        <Share2 className="w-3.5 h-3.5 text-[#537C78]" />
        <span>Share</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-xl border border-[#16324F]/10 p-1.5 z-30 animate-in fade-in duration-100 text-xs">
          <button
            onClick={handleCopyLink}
            className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-[#F8F7F2] text-[#202832] transition-colors text-left"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-[#537C78]" />
            ) : (
              <LinkIcon className="w-3.5 h-3.5 text-[#697480]" />
            )}
            <span>{copied ? "Link Copied!" : "Copy Link"}</span>
          </button>

          <button
            onClick={handleLinkedIn}
            className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-[#F8F7F2] text-[#202832] transition-colors text-left"
          >
            <span className="w-3.5 h-3.5 font-bold text-[#0A66C2] flex items-center justify-center text-[10px]">in</span>
            <span>Share to LinkedIn</span>
          </button>

          <button
            onClick={handleTwitter}
            className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-[#F8F7F2] text-[#202832] transition-colors text-left"
          >
            <span className="w-3.5 h-3.5 font-bold text-black flex items-center justify-center text-[10px]">𝕏</span>
            <span>Share to X</span>
          </button>

          <button
            onClick={handleEmail}
            className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-[#F8F7F2] text-[#202832] transition-colors text-left"
          >
            <Mail className="w-3.5 h-3.5 text-[#697480]" />
            <span>Email Article</span>
          </button>
        </div>
      )}
    </div>
  );
}
