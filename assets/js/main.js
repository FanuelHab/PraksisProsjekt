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
          <article class="card" tabindex="0">
            <p class="meta">${entry.week} · ${entry.date}</p>
            <h3>${entry.title}</h3>
            <p><strong>Summary:</strong> ${entry.summary}</p>
            <p><strong>What I worked on:</strong> ${entry.workedOn}</p>
            <p><strong>What I learned:</strong> ${entry.learned}</p>
            <p><strong>Challenges:</strong> ${entry.challenges}</p>
            <p><strong>Reflection:</strong> ${entry.reflection}</p>
            <div class="tag-list" aria-label="Technologies and tools used">
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
          <article class="card" tabindex="0">
            <h3>${project.name}</h3>
            <p><strong>Description:</strong> ${project.description}</p>
            <p><strong>My role:</strong> ${project.role}</p>
            <p><strong>What I contributed:</strong> ${project.contribution}</p>
            <p><strong>Current status:</strong> ${project.status}</p>
            <p><strong>What I learned:</strong> ${project.learned}</p>
            <div class="tag-list" aria-label="Project technologies and tools">
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
      yearNode.textContent = new Date().getFullYear();
    }
  };

  renderJournal();
  renderProjects();
  setupMenuToggle();
  setYear();
})();
