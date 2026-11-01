import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getNyheder } from '../lib/content';
import settings from '../data/settings.json';

export async function GET(context: APIContext) {
  const nyheder = await getNyheder();
  return rss({
    title: `${settings.sitenavn} – ${settings.fuldtNavn}`,
    description: settings.beskrivelse,
    site: context.site!,
    items: nyheder.map((n) => ({
      title: n.data.title,
      pubDate: n.data.date,
      description: n.data.resume,
      link: `/nyheder/${n.id}/`,
    })),
    customData: '<language>da</language>',
  });
}
