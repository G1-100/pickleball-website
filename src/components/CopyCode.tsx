"use client";
import { useState } from "react";

// Copies a sponsor discount code and confirms in place.
export default function CopyCode({ code, className }: { code: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard blocked: the code is still visible to copy by hand.
    }
  };

  return (
    <button type="button" className={className} onClick={copy} data-copied={copied || undefined}>
      <span>{code}</span>
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
