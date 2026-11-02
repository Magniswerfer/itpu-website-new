import forsideJson from './forside.json';
import settingsJson from './settings.json';

interface SocialLink {
  navn: string;
  url: string;
}

interface Settings {
  sitenavn: string;
  fuldtNavn: string;
  beskrivelse: string;
  email: string;
  kontaktperson: string;
  kontaktEmail: string;
  kontaktTelefon: string;
  medlemsLink: string;
  medlemsLinkTekst: string;
  sociale: SocialLink[];
}

interface Forside {
  heroMaerkat: string;
  heroOverskrift: string;
  heroTekst: string;
  heroKnap: string;
  principperOverskrift: string;
  principperTekst: string;
  citat: string;
  meldDigOverskrift: string;
  meldDigTekst: string;
}

/** Indstillinger og forsidetekster — redigeres i Sveltia CMS. */
export const settings: Settings = settingsJson;
export const forside: Forside = forsideJson;
