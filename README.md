# ITPU — Enhedslistens IT-politiske udvalg

Website for IT-Politisk Udvalg (ITPU). Statisk site bygget med [Astro](https://astro.build), redigeret med [Sveltia CMS](https://github.com/sveltia/sveltia-cms).

## Kom i gang

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # statisk site i ./dist
npm run preview
npm run check      # alle kvalitetstjek (køres også i CI)
```

## Kodekvalitet

`npm run check` kører alle tjek og skal være grønt før merge. CI (`.github/workflows/ci.yml`) kører det samme på hver pull request.

| Script         | Værktøj                                                                                                | Tjekker                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `check:types`  | `astro check` + TypeScript `strictest`                                                                 | Typer i `.ts`- og `.astro`-filer, inkl. templates                              |
| `lint`         | ESLint: `typescript-eslint` strict + stylistic (typebaseret), `eslint-plugin-astro`, `jsx-a11y` strict | Fejl, usikre typer, tilgængelighed                                             |
| `lint:css`     | Stylelint (`stylelint-config-standard`, BEM-klassenavne, ingen `!important`/id-selektorer)             | CSS                                                                            |
| `format:check` | Prettier (+ Astro-plugin)                                                                              | Formatering. CMS-indhold er undtaget, så redigeringer i Sveltia ikke bryder CI |
| `fallow`       | [fallow](https://fallow.tools) med `--fail-on-issues`                                                  | Død kode, ubrugte afhængigheder, duplikering, kompleksitet                     |

`npm run format` retter formateringen automatisk.

## Struktur

```text
src/
  components/
    layout/        Header, Footer
    ui/            Logo, PageHeader, ProseSection, ContactDetails
    home/          Forsidens sektioner
    program/       Indholdsfortegnelse og sektioner til principprogrammet
    news/          Nyhedsliste og artikelhoved
    designsystem/  Sektionerne på /designsystem/
  content/         Markdown fra CMS'et (principper, nyheder, sider)
  data/            Indstillinger (JSON fra CMS'et) + typede moduler (site.ts, palette.ts)
  lib/             collections.ts (data), links.ts (URL'er), format.ts, types.ts
  scripts/         Klientside-TypeScript (mobilmenu)
  styles/          tokens.css (designtokens) og global.css (base + fælles komponenter)
  pages/           Ruter
```

Hver komponent har sin CSS i en fil ved siden af (fx `Header.astro` + `header.css`) med BEM-klassenavne præfikset med komponentens navn.

## Sider

| Side               | Fil                              | Indhold fra                                                        |
| ------------------ | -------------------------------- | ------------------------------------------------------------------ |
| `/`                | `src/pages/index.astro`          | `src/data/forside.json`, principper, nyheder                       |
| `/principprogram/` | `src/pages/principprogram.astro` | `src/content/sider/principprogram.md` + `src/content/program/*.md` |
| `/nyheder/`        | `src/pages/nyheder/`             | `src/content/nyheder/*.md`                                         |
| `/om/`             | `src/pages/om.astro`             | `src/content/sider/om.md`, `src/data/settings.json`                |
| `/kommissorium/`   | `src/pages/kommissorium.astro`   | `src/content/sider/kommissorium.md`                                |
| `/designsystem/`   | `src/pages/designsystem.astro`   | Levende oversigt over designsystemet                               |
| `/rss.xml`         | `src/pages/rss.xml.ts`           | Nyheder som RSS                                                    |

## Redigering med Sveltia CMS

CMS'et ligger på `/admin/` og er konfigureret i `public/admin/config.yml`.

**Lokalt (anbefalet til udvikling):** Kør `npm run dev`, åbn <http://localhost:4321/admin/> i Chrome eller Edge, vælg _Work with Local Repository_ og peg på mappen med repoet. Ændringer skrives direkte til filerne.

**Online:** Sveltia gemmer ændringer som commits i GitHub-repoet `magniswerfer/itpu-website-new` (gren `main`). Redaktører kan logge ind på to måder:

1. **Personligt adgangstoken** — vælg _Sign in with Token_ og indsæt et GitHub fine-grained token med _Contents: read and write_ på repoet.
2. **GitHub-login** — deploy [Sveltia CMS Authenticator](https://github.com/sveltia/sveltia-cms-auth) (gratis Cloudflare Worker) og sæt `base_url` i `public/admin/config.yml`.

Sitet skal genbygges efter hver ændring — sæt hosting op til at bygge automatisk ved push til `main` (fx Cloudflare Pages, Netlify eller GitHub Pages med Actions).

## Deploy

- Byggekommando: `npm run build`
- Output-mappe: `dist`
- Node 22+
- Sæt miljøvariablen `SITE` til det endelige domæne (bruges til kanoniske URL'er og RSS), og opdater `site_url` i `public/admin/config.yml`.

## Designsystem

Se [DESIGN.md](./DESIGN.md) og `/designsystem/` på sitet.

## Skrifter og logo

- **Maj** er Enhedslistens egen skrift (ÅBC/Kontrapunkt), udgivet under en open source-licens, der giver partiets medlemmer ret til at bruge den uændret.
- Logo-filerne i `public/images/` er konverteret fra Enhedslistens officielle `.ai`-filer.

## Licens

Koden er udgivet under GNU AGPL v3 — se [LICENSE](./LICENSE). Enhedslistens logo og skriften Maj er ikke omfattet af AGPL-licensen.
