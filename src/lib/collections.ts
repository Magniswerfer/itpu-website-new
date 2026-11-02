import { getCollection } from 'astro:content';
import type { Nyhed, Princip } from './types';

/** Principperne i programmets rækkefølge. */
export async function getPrincipper(): Promise<Princip[]> {
  const principper = await getCollection('program');
  return principper.sort((a, b) => a.data.order - b.data.order);
}

/** Publicerede nyheder, nyeste først. Kladder vises kun under udvikling. */
export async function getNyheder(): Promise<Nyhed[]> {
  const nyheder = await getCollection('nyheder', ({ data }) => import.meta.env.DEV || !data.kladde);
  return nyheder.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
