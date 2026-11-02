import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getNyheder } from '../lib/collections';
import { nyhedUrl } from '../lib/links';
import { settings } from '../data/site';

export async function GET(context: APIContext): Promise<Response> {
  if (!context.site) throw new Error('Sæt `site` i astro.config.mjs for at generere RSS.');
  const nyheder = await getNyheder();
  return rss({
    title: `${settings.sitenavn} – ${settings.fuldtNavn}`,
    description: settings.beskrivelse,
    site: context.site,
    items: nyheder.map((nyhed) => ({
      title: nyhed.data.title,
      pubDate: nyhed.data.date,
      description: nyhed.data.resume,
      link: nyhedUrl(nyhed),
    })),
    customData: '<language>da</language>',
  });
}
