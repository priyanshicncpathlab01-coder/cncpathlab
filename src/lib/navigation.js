'use client';

// Drop-in replacements for the two react-router-dom hooks this app used,
// implemented on top of the Next.js App Router. Keeping the same API means
// the existing components (Navbar, Footer, IntroServices, BiomarkerAnalysis,
// LabServices) work unchanged after only swapping their import path.
import { useRouter, usePathname } from 'next/navigation';

// react-router's useNavigate() returns navigate(path). Next's router.push does
// the same client-side navigation and resets scroll to the top by default.
export function useNavigate() {
  const router = useRouter();
  return (path) => router.push(path);
}

// react-router's useLocation() exposes { pathname, ... }. The components here
// only ever read `location.pathname`, so that is all we need to mirror.
export function useLocation() {
  const pathname = usePathname();
  return { pathname };
}
