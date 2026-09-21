// Uddannelser som virksomheder kan målrette til, og som jobsøgende kan vælge.
export const EDUCATIONS = [
  'HA (it.)',
  'Cand.merc. (Finance)',
  'Cand.merc. (Marketing)',
  'Softwareudvikling',
  'Datamatiker',
  'Cand.jur.',
  'Cand.soc.',
  'Grafisk design',
  'Sygeplejerske',
  'Elektriker',
];

// Fiktive virksomheder og stillinger til demo.
// "educations" = de uddannelser virksomheden har valgt at målrette stillingen til.
export const INITIAL_JOBS = [
  {
    id: '1',
    title: 'Junior Frontend-udvikler',
    company: 'Nordlys Digital',
    location: 'København',
    description:
      'Du skal udvikle mobilapps i React Native sammen med vores produktteam. Du får mentor fra dag ét og en fast ugentlig sparring.',
    educations: ['Softwareudvikling', 'Datamatiker', 'HA (it.)'],
  },
  {
    id: '2',
    title: 'Studentermedhjælper i Marketing',
    company: 'Havn & Co.',
    location: 'Frederiksberg',
    description:
      'Du hjælper med kampagneplanlægning, sociale medier og analyse af kampagneresultater. Ca. 15 timer om ugen.',
    educations: ['Cand.merc. (Marketing)', 'HA (it.)'],
  },
  {
    id: '3',
    title: 'Finansanalytiker (Graduate)',
    company: 'Kapital Partners',
    location: 'København',
    description:
      'Du bliver en del af vores analyseteam og arbejder med værdiansættelse, budgettering og rapportering til ledelsen.',
    educations: ['Cand.merc. (Finance)'],
  },
  {
    id: '4',
    title: 'Fuldmægtig',
    company: 'Lovhuset Advokater',
    location: 'Aarhus',
    description:
      'Du arbejder med erhvervsret og kontrakter og får hurtigt egne sager. Vi lægger vægt på faglig tyngde og godt samarbejde.',
    educations: ['Cand.jur.'],
  },
  {
    id: '5',
    title: 'Data- og BI-konsulent',
    company: 'Insight Lab',
    location: 'København',
    description:
      'Du hjælper kunder med at omsætte data til beslutninger via dashboards og analyser. Erfaring med SQL er en fordel.',
    educations: ['HA (it.)', 'Cand.merc. (Finance)', 'Datamatiker'],
  },
  {
    id: '6',
    title: 'Grafisk designer',
    company: 'Studio Fjord',
    location: 'Odense',
    description:
      'Du designer visuel identitet, digitale flader og trykte materialer til en bred kundekreds.',
    educations: ['Grafisk design'],
  },
  {
    id: '7',
    title: 'Sygeplejerske – medicinsk afdeling',
    company: 'Region Hovedstadens Hospitaler',
    location: 'Hillerød',
    description:
      'Du indgår i et tværfagligt team og har ansvar for pleje og behandling af indlagte patienter. Faste vagtrul.',
    educations: ['Sygeplejerske'],
  },
  {
    id: '8',
    title: 'Elektriker – servicetekniker',
    company: 'Strøm & Service',
    location: 'Roskilde',
    description:
      'Du udfører installation og fejlfinding hos erhvervskunder. Firmabil og moderne værktøj stilles til rådighed.',
    educations: ['Elektriker'],
  },
  {
    id: '9',
    title: 'Analytiker i Samfundsøkonomi',
    company: 'Tænketanken Fremsyn',
    location: 'København',
    description:
      'Du skriver analyser og notater om arbejdsmarked og velfærd, og du formidler resultater til politikere og presse.',
    educations: ['Cand.soc.', 'Cand.merc. (Finance)'],
  },
  {
    id: '10',
    title: 'UX-designer og udvikler',
    company: 'Nordlys Digital',
    location: 'København',
    description:
      'Du designer og prototyper brugeroplevelser og arbejder tæt sammen med udviklere om at få dem i luften.',
    educations: ['Grafisk design', 'Softwareudvikling', 'HA (it.)'],
  },
];
