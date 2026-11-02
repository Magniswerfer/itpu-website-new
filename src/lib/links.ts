import type { Nyhed, Princip } from './types';

/** Anker til et princip på programsiden, fx "digital-suveraenitet". */
export function principAnker(princip: Princip): string {
  return princip.id.replace(/^\d+-/, '');
}

/** Link til et princip på programsiden. */
export function principUrl(princip: Princip): string {
  return `/principprogram/#${principAnker(princip)}`;
}

/** Link til en nyhed. */
export function nyhedUrl(nyhed: Nyhed): string {
  return `/nyheder/${nyhed.id}/`;
}
