import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// locale-aware Link, redirect 등 wrapper
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
