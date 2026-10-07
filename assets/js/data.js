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
    },
    {
      week: "Uke 5",
      date: "23.09.2026",
      title: "HubSpot-integrasjon, nytt utseende og opprydding",
      summary: "Koblet på HubSpot: møtet logges nå som et notat på firmaet og deltakerne, i samme format som salgsreferatene («Hva ble diskutert» og «Neste steg»), og hvert action point blir en oppgave til den som er ansvarlig. Deals søkes opp på firmanavn i stedet for deal-ID, og integrasjonen er testet mot ekte HubSpot. Forbedret skjemaet ved at deltakere fra Reviver hentes fra HubSpot-brukerne, møteholder holdes i sync med deltakerlisten, utkast lagres automatisk og potensialet formateres likt i HubSpot, SharePoint og Teams. Appen fikk navnet «Møtereferat AI» og følger nå Revivers visuelle profil. Mot slutten av dagen ryddet jeg i koden: backend ble delt i egne klasser med tester, og frontend-komponenten på rundt 1100 linjer ble delt opp i mindre deler. Notatfeltet støtter nå innliming, filer og hurtigtaster, og hver oppgave har en navnevelger for ansvarlig. Endringene ble merget til main.",
      challenges: "Å gi appen tilgang til HubSpot uten å gi den mer makt enn nødvendig. Jeg la inn en sperre som bare tillater lesing og opprettelse av nye notater og oppgaver, og flyttet hemmeligheter til en lokal .env-fil som ikke ligger i git. Valideringen i skjemaet krevde også litt prøving og feiling før den ble diskret nok.",
      reflection: "Det var en produktiv dag hvor appen gikk fra å fungere til å føles som et ferdig verktøy. Vi begynte også å diskutere om løsningen heller burde bli en Claude-skill som kan sparre med møteholderen ut fra sparsomme notater. Det fikk meg til å tenke på om en egen app alltid er riktig svar, eller om verdien ligger mer i selve samtalen med AI-en.",
      tools: ["Kotlin", "Spring Boot", "React", "TypeScript", "HubSpot API"]
    },
    {
      week: "Uke 6",
      date: "07.10.2026",
      title: "Referat-skillen bruker Excel i stedet for HubSpot, og testing",
      summary: "Hele dagen gikk med til referat-skillen i Claude. HubSpot er lagt ned, så pipeline-arket i Excel overtar jobben. Skillen leter nå opp dealen i arket og foreslår endringer, men skriver ingenting før møteholderen har godkjent. Jeg skrev egne referanser for pipeline-arket, med kolonner, formater, hvor nye rader skal inn og hvilke formler som skal kopieres. Skillen støtter også et nytt lead-dashboard laget av en kollega, og slår alltid opp i begge arkene før referatet skrives. I tillegg håndterer den både fyldige notater og stikkord, og flere møtetyper, som oppfølging av eksisterende kunder og leverandørmøter med salgsdel. Den kan også lage en oppfølgingsepost til kunden, bygget på mønsteret fra selgernes ekte e-poster og uten interne tall. Resten av dagen gikk til systematisk testing, både i Claude i Excel og i claude.ai, med ekte møtenotater.",
      challenges: "Testene avdekket at skillen slo opp dealen først etter at referatet var godkjent når to deals lignet hverandre. Testene viste også at den stilte for mange spørsmål i første svar, og at lead-dashboardet mangler en fast plassering. Jeg rettet dette underveis. Jeg fant også ut at Microsoft 365-koblingen i claude.ai bare kan lese, så skillen må gi en liste over endringene i stedet for å skrive i arket selv.",
      reflection: "Overgangen fra egen app til en Claude-skill, som vi begynte å diskutere i forrige uke, ble nå konkret. Mye av arbeidet handlet om å skrive presise instruksjoner og teste dem mot ekte notater, ikke om å skrive kode. Det var lærerikt å se hvor mye rekkefølgen på stegene og små formuleringer betyr for at AI-en oppfører seg riktig.",
      tools: ["Claude", "Claude-skills", "Excel", "Microsoft 365", "Markdown"]
    }
  ],
  projects: [
    {
      name: "Automatisering av kundemøter",
      description: "Reviver ønsker en strukturert prosess der innsikt fra kundemøter fanges opp konsistent, kvalitetssikres av en AI-assistent og deles med hele teamet.",
      role: "Utvikle og utforske en løsning som gjør oppfølgingen etter kundemøter mer effektiv og mindre personavhengig.",
      technologies: ["Claude", "Claude-skills", "Excel", "SharePoint", "Teams"],
      contribution: "Bygget først en egen app, «Møtereferat AI», med integrasjoner mot SharePoint, Teams og HubSpot. Videreutviklet deretter løsningen til en Claude-skill som lager strukturerte referater med action points, pain points, en vurdering av Revivers løsningsmulighet og kvantifisert potensial. Skillen foreslår også oppdateringer i pipeline-arket og lead-dashboardet i Excel, og kan skrive en oppfølgingsepost til kunden.",
      status: "Under testing",
      learned: "Prosjektet har gitt erfaring med programmering, API-integrasjoner mot Microsoft 365 og HubSpot, sikker håndtering av tilganger og å skrive og teste instruksjoner til en AI-assistent mot ekte møtenotater."
    }
  ]
};
