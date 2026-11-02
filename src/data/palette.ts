/** Enhedslistens farver (Designguide 2.0 + farveark). Bruges på /designsystem/. */
export interface Farve {
  navn: string;
  token: string;
  hex: string;
  rgb: string;
  pantone?: string;
  lysTekst: boolean;
}

export const primaereFarver: Farve[] = [
  { navn: 'Rød', token: '--el-red', hex: '#D0004D', rgb: '208-0-78', pantone: '7636C', lysTekst: true },
  { navn: 'Grøn', token: '--el-green', hex: '#159F6B', rgb: '21-160-107', pantone: '2417C', lysTekst: true },
];

export const sekundaereFarver: Farve[] = [
  { navn: 'Rosa', token: '--el-pink', hex: '#F9D1D9', rgb: '249-210-217', lysTekst: false },
  { navn: 'Lysegrøn', token: '--el-green-light', hex: '#C8E2C2', rgb: '200-226-194', lysTekst: false },
  { navn: 'Lyseblå', token: '--el-blue-light', hex: '#BCE3FA', rgb: '188-228-250', lysTekst: false },
  { navn: 'Mørkegrøn', token: '--el-green-dark', hex: '#005247', rgb: '0-83-71', lysTekst: true },
  { navn: 'Lysegul', token: '--el-yellow', hex: '#FFFAD2', rgb: '255-250-210', lysTekst: false },
];

export interface Flade {
  klasse: string;
  navn: string;
  note: string;
}

export const flader: Flade[] = [
  { klasse: 'surface--red', navn: 'Rød', note: 'Hvid tekst, lyseblå accent' },
  { klasse: 'surface--green', navn: 'Grøn', note: 'Hvid tekst — kun store, fede tekster' },
  { klasse: 'surface--green-dark', navn: 'Mørkegrøn', note: 'Lysegrønne overskrifter' },
  { klasse: 'surface--green-light', navn: 'Lysegrøn', note: 'Røde overskrifter' },
  { klasse: 'surface--pink', navn: 'Rosa', note: 'Mørkegrønne overskrifter' },
  { klasse: 'surface--yellow', navn: 'Lysegul', note: 'Grønne overskrifter, rød accent' },
  { klasse: 'surface--blue-light', navn: 'Lyseblå', note: 'Røde overskrifter' },
];
