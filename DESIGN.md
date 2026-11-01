# ITPU designsystem

Designsystemet bygger på **Enhedslistens Designguide 2.0 (2024)** og Enhedslistens farveark. Farver, skrift og logo følger guiden; layout og komponenter er ITPU's egne. En levende oversigt findes på `/designsystem/`.

- Tokens: `src/styles/tokens.css`
- Base og komponenter: `src/styles/global.css`
- Logo: `src/components/Logo.astro`

## Farver

Enhedslistens primære farver er **rød og grøn** — én af dem skal altid være til stede.

| Navn | Token | HEX | RGB | Pantone |
| --- | --- | --- | --- | --- |
| Rød | `--el-red` | `#D0004D` | 208-0-78 | 7636C |
| Grøn | `--el-green` | `#159F6B` | 21-160-107 | 2417C |
| Rosa | `--el-pink` | `#F9D1D9` | 249-210-217 | |
| Lysegrøn | `--el-green-light` | `#C8E2C2` | 200-226-194 | |
| Lyseblå | `--el-blue-light` | `#BCE3FA` | 188-228-250 | |
| Mørkegrøn | `--el-green-dark` | `#005247` | 0-83-71 | |
| Lysegul | `--el-yellow` | `#FFFAD2` | 255-250-210 | |

Farvearket angiver HEX `#FFFFBF` for lysegul, men RGB 255-250-210 (= `#FFFAD2`); vi bruger RGB-værdien.

**Regler fra designguiden**

- Primære farver: overskrifter, budskaber og effekter (linjer, prikker).
- Sekundære farver: flader, kasser, baggrunde — og tekst på rød/grøn bund.
- Kombinér toner af samme farve (grøn + mørkegrøn) eller kontraster (rød + lysegrøn). Brug ikke for mange farver samtidig.
- Undgå rød og grøn direkte op ad hinanden (flimmer og farveblindhed).

**Flader** (`.surface--*`) samler guidens kombinationer og sætter baggrund, tekst, overskrifter, links og accent:

| Klasse | Kombination |
| --- | --- |
| `.surface--red` | Rød + hvid + lyseblå |
| `.surface--green` | Grøn + hvid + mørkegrøn — hvid tekst på grøn kun i store, fede tekster (kontrast 3,3:1) |
| `.surface--green-dark` | Mørkegrøn + lysegrøn |
| `.surface--green-light` | Lysegrøn + rød |
| `.surface--pink` | Rosa + mørkegrøn |
| `.surface--yellow` | Lysegul + rød/grøn |
| `.surface--blue-light` | Lyseblå + rød |

## Skrift

- **Maj** (Light, Regular, Bold) er hele partiets stemme. Overskrifter i Maj Bold — h1/h2 i versaler med linjeafstand 1,0; øvrige overskrifter ca. 1,2.
- Maj har **ingen kursiv**: fremhæv med bold, STORE BOGSTAVER eller farve. `<em>` er derfor sat til bold.
- Tekst er venstrestillet.
- Store, korte budskaber (`.budskab`) — fx forsidens hero — sættes i Maj Bold med versaler og linjeafstand 1,0.
- Citater sættes med »guillemets« (`.quote`).

## Logo

ITPU følger skabelonen for **lokalafdelinger**: markør (Ø) + navnetræk (ENHEDSLISTEN) + en tredje kasse med navnet. Proportionerne er målt i det officielle navnetræk:

- Navnekassen er lige så høj som E'et (0,566 × navnetrækkets højde).
- Afstanden mellem elementerne = bredden af E'ets lodrette streg (0,112 × højden).
- Markøren er lige så høj som navnetræk + afstand + navnekasse.

```astro
<Logo />                  <!-- fuldt logo -->
<Logo marker={false} />   <!-- uden markør -->
<Logo size="3rem" />      <!-- størrelse = navnetrækkets højde -->
```

## Komponenter

- **Kasse** (`.box`): tekst i et farvet rektangel — samme greb som logoets navnekasse. Mærkater og overlinjer.
- **Knap** (`.btn`, `.btn--green`, `.btn--white`, `.btn--outline`): rektangulær, Maj Bold i versaler.
- **Kort** (`.card` + `.surface--*`)
- **Prosa** (`.prose`): markdown fra CMS'et.
- Skarpe hjørner overalt (`--radius: 0`) — logoet er bygget af rektangler.
