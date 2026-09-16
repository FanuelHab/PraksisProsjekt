window.practiceContent = {
  journalEntries: [
    {
      week: "Uke 1",
      date: "25.08.2026",
      title: "Oppstart og prosjektforståelse",
      summary: "Introduksjon til teamet, systemene og målet om å automatisere oppfølgingen etter kundemøter. Onboarding, oppsett av arbeidsmiljø og første gjennomgang av kundemøteprosessen. Jeg fikk innsikt i hvordan kundemøter kan dokumenteres, og hvorfor strukturert informasjon er viktig for videre oppfølging.",
      challenges: "Å forstå hvordan behov fra kundemøter kan oversettes til en arbeidsflyt som fungerer for hele teamet.",
      reflection: "Oppstarten ga meg et tydelig bilde av hvordan prosjektet kan knytte programmering og AI til et konkret forretningsbehov.",
      tools: ["Kotlin", "JavaScript", "Node"]
    },
    {
      week: "Uke 2",
      date: "02.09.2026",
      title: "Klargjøring av applikasjonen og API-tilkobling",
      summary: "Jobbet med å gjøre applikasjonen klar for integrasjon med Claude, men ble forsinket av innloggingsproblemer mot systemene som trengs for Claude- og SharePoint-integrasjonen. Gjorde applikasjonen klar til å ta imot en API-nøkkel fra Claude, slik at den kan legges inn senere.",
      challenges: "Problemer med innlogging til systemene som trengs for å integrere Claude og SharePoint gjorde at planlagt arbeid måtte utsettes.",
      reflection: "Til tross for forsinkelsene fikk jeg gjort nyttig grunnarbeid. Kontoret var også roligere enn vanlig ettersom flere kolleger var på reise for jobb.",
      tools: ["Kotlin", "HTML", "JavaScript", "Node", "BootStrap"]
    },
    {
      week: "Uke 3",
      date: "09.09.2026",
      title: "Fra mock til ekte SharePoint- og Teams-integrasjon",
      summary: "Rettet opp AI-outputet fra Claude slik at det faktisk matcher prosjektspesifikasjonen, med strukturerte felt for pain points, løsningsvurdering og potensial i stedet for løs tekst. Bygget en ekte integrasjon mot SharePoint via Microsoft Graph API, fikk den godkjent og satt opp av veileder, og gikk dermed fra en simulert løsning til noe som faktisk lagrer ekte dokumenter. Bygget og verifiserte også integrasjonen mot Teams, inkludert feilsøking av kortformatet som skal vises i en kanal, og pusset opp frontend med Revivers fargeprofil og logo.",
      challenges: "Ekte bruk avdekket ting testene ikke fanget opp: norske bokstaver (æøå) ble ulesbare, og dokumentformateringen ble feil i SharePoint sin visning. Kortformatet i Teams krevde også litt fram-og-tilbake før det så riktig ut i kanalen.",
      reflection: "Det var en litt annen følelse å gå fra mock-data til ekte dokumenter. Plutselig betyr små feil noe for ekte brukere. Startet også dialogen med veileder om å stramme inn tilgangsrettighetene appen har, som minnet meg på at sikkerhet er like mye en del av løsningen som funksjonaliteten.",
      tools: ["Kotlin", "Spring Boot", "React", "Microsoft Graph API", "REST API"]
    },
    {
      week: "Uke 4",
      date: "15.–16.09.2026",
      title: "Verifisert hele kjeden i skarpt miljø",
      summary: "Undersøkte hva som trengs for å koble på HubSpot: ingen kode fantes fra før, så jeg la en plan for arkitekturen, men omfanget (kun logging av møter, eller også oppdatering av salgspipeline) er fortsatt ikke bestemt. Gikk gjennom og forbedret selve AI-forespørselen til Claude: fant en reell feil der møtedatoen aldri ble sendt med, slik at frister som «om to uker» ikke kunne regnes ut riktig, gjorde parsingen av svaret mer robust, og forankret produktforslagene i Revivers faktiske tjenester. Flyttet også SharePoint-lagringen fra en midlertidig testside til det faktiske målnettstedet hos Reviver, tilpasset til mappestrukturen som allerede fantes der.",
      challenges: "Møtte en uventet 500-feil ved lagring som forsvant av seg selv ved neste forsøk, uten at jeg fikk helt taket på hvorfor. Undersøkte innstramming av tilgangsrettigheter videre, men det viste seg å kreve en administratorrolle verken jeg eller veileder har, noe som må løses organisatorisk, ikke teknisk.",
      reflection: "Fikk spredt arbeidet utover flere dager denne uken siden det var travelt med Techpoint og andre forpliktelser, men det ga også litt is i magen når jeg verifiserte at hele kjeden (møtenotat → AI-analyse → godkjenning → SharePoint-lagring → Teams-varsling) faktisk fungerer mot de ekte systemene, ikke bare i testmiljø.",
      tools: ["Kotlin", "Spring Boot", "TypeScript", "Microsoft Graph API", "REST API"]
    }
  ],
  projects: [
    {
      name: "Automatisering av kundemøter",
      description: "Reviver ønsker en strukturert prosess der innsikt fra kundemøter fanges opp konsistent, kvalitetssikres av en AI-assistent og deles med hele teamet.",
      role: "Utvikle og utforske en løsning som gjør oppfølgingen etter kundemøter mer effektiv og mindre personavhengig.",
      technologies: ["Claude", "SharePoint", "Teams", "HubSpot", "Kalender"],
      contribution: "Løsningen skal generere strukturerte referater med action points, pain points, en vurdering av Revivers løsningsmulighet og kvantifisert potensial i tonn og kroner.",
      status: "Planlagt",
      learned: "Prosjektet skal gi erfaring med programmering, AI-integrasjon, systemflyt og utvikling av praktiske løsninger for en virksomhet."
    }
  ]
};
