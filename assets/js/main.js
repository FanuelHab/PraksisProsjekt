(() => {
  const content = window.practiceContent || { journalEntries: [], projects: [] };

  const renderJournal = () => {
    const container = document.getElementById("journal-list");
    if (!container) {
      return;
    }

    container.innerHTML = content.journalEntries
      .map(
        (entry) => `
          <article class="timeline-entry" tabindex="0">
            <p class="meta">${entry.week} · ${entry.date}</p>
            <h3>${entry.title}</h3>
            <p class="entry-field"><strong>Sammendrag</strong> ${entry.summary}</p>
            <p class="entry-field"><strong>Hva jeg jobbet med</strong> ${entry.workedOn}</p>
            <p class="entry-field"><strong>Hva jeg lærte</strong> ${entry.learned}</p>
            <p class="entry-field"><strong>Utfordringer</strong> ${entry.challenges}</p>
            <p class="entry-field"><strong>Refleksjon</strong> ${entry.reflection}</p>
            <div class="tag-list" aria-label="Teknologier og verktøy">
              ${entry.tools.map((tool) => `<span class="tag">${tool}</span>`).join("")}
            </div>
          </article>
        `
      )
      .join("");
  };

  const renderProjects = () => {
    const container = document.getElementById("project-list");
    if (!container) {
      return;
    }

    container.innerHTML = content.projects
      .map(
        (project) => `
          <article class="project-entry" tabindex="0">
            <span class="status">${project.status}</span>
            <h3>${project.name}</h3>
            <p class="entry-field"><strong>Beskrivelse</strong> ${project.description}</p>
            <p class="entry-field"><strong>Min rolle</strong> ${project.role}</p>
            <p class="entry-field"><strong>Bidrag</strong> ${project.contribution}</p>
            <p class="entry-field"><strong>Læringsutbytte</strong> ${project.learned}</p>
            <div class="tag-list" aria-label="Prosjektteknologier">
              ${project.technologies.map((technology) => `<span class="tag">${technology}</span>`).join("")}
            </div>
          </article>
        `
      )
      .join("");
  };

  const setupMenuToggle = () => {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.getElementById("site-nav");

    if (!toggle || !nav) {
      return;
    }

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open", !expanded);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  };

  const setYear = () => {
    const yearNode = document.getElementById("year");
    if (yearNode) {
      yearNode.textContent = String(new Date().getFullYear());
    }
  };

  renderJournal();
  renderProjects();
  setupMenuToggle();
  setYear();
})();
