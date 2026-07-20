'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { ROUTES } from '@/lib/routes';

// Warms the App Router client cache for every internal (static) route during
// browser idle time. Because the whole site is only 21 prerendered pages, we
// can proactively prefetch them all after the current page settles.
//
// This is the core navigation-speed fix: the app navigates imperatively
// (router.push via the useNavigate shim, plus cards/carousels with custom drag
// logic), so links never received Next's automatic <Link> prefetch. Once a
// route's RSC payload + JS chunks are prefetched here, any later push resolves
// from cache and the transition feels instant — with no markup or UI changes.
export default function RoutePrefetcher() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    const targets = ROUTES.filter((r) => r !== pathname);

    const run = () => {
      // Stagger slightly so prefetch never contends with the current page's
      // own work or the user's first interaction.
      targets.forEach((route, i) => {
        setTimeout(() => {
          if (!cancelled) router.prefetch(route);
        }, i * 120);
      });
    };

    const hasRIC = typeof window !== 'undefined' && 'requestIdleCallback' in window;
    const handle = hasRIC ? window.requestIdleCallback(run) : setTimeout(run, 200);

    return () => {
      cancelled = true;
      if (hasRIC && typeof handle === 'number') window.cancelIdleCallback(handle);
    };
  }, [router, pathname]);

  return null;
}
