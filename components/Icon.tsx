import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  swords: <><path d="M3 3h3l11.5 11.5-3 3L3 6V3Zm12 3 3-3h3v3l-3 3" /><path d="m13 19 6-6m-3 3 4 4m-1 1 2-2M5 13l6 6m-3-3-4 4m-1-1 2 2" /></>,
  gamepad: <><path d="M8 7h8c3 0 5 4 5 9 0 3-3 3-5 0H8c-2 3-5 3-5 0 0-5 2-9 5-9Z" /><path d="M7 10v4m-2-2h4m6-1h.01M18 13h.01" /></>,
  trophy: <><path d="M7 3h10v5a5 5 0 0 1-10 0V3Zm5 10v7m-4 1h8" /><path d="M7 5H3v2a4 4 0 0 0 4 4m10-6h4v2a4 4 0 0 1-4 4" /></>,
  people: <><circle cx="9" cy="8" r="3" /><path d="M3 21v-2a6 6 0 0 1 12 0v2m1-16a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v2" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  shield: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6Z" /><path d="m8 12 3 3 5-6" /></>,
  bolt: <path d="m13 2-9 12h7l-1 8 10-13h-8Z" />,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
};

export default function Icon({ name, className = "" }: { name: keyof typeof paths; className?: string }) {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
