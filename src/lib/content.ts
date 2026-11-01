import { getCollection } from 'astro:content';

export async function getPrincipper() {
  return (await getCollection('program')).sort((a, b) => a.data.order - b.data.order);
}

export async function getNyheder() {
  return (await getCollection('nyheder', ({ data }) => import.meta.env.DEV || !data.kladde)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

export const formatDato = (d: Date) =>
  new Intl.DateTimeFormat('da-DK', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);

/** Slug-ankre til principperne, fx "digital-suveraenitet" */
export const principAnker = (id: string) => id.replace(/^\d+-/, '');
