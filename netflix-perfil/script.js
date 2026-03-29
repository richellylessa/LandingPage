// Sistema de Dark/Light Mode
class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById("theme-toggle");
    this.themeIcon = document.querySelector(".theme-icon");
    this.body = document.body;

    this.init();
  }

  init() {
    const savedTheme = localStorage.getItem("netflix-theme") || "dark";
    this.setTheme(savedTheme);
    this.themeToggle.addEventListener("click", () => this.toggleTheme());
  }

  setTheme(theme) {
    this.body.setAttribute("data-theme", theme);
    localStorage.setItem("netflix-theme", theme);
    this.updateIcon(theme);
  }

  toggleTheme() {
    const currentTheme = this.body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    this.setTheme(newTheme);
  }

  updateIcon(theme) {
    this.themeIcon.textContent = theme === "dark" ? "🌙" : "☀️";
  }
}

// Sistema de seleção de perfil (index.html)
class ProfileManager {
  constructor() {
    this.profileLinks = document.querySelectorAll(".perfil");
    this.init();
  }

  init() {
    this.profileLinks.forEach((profileLink) => {
      profileLink.addEventListener("click", () => {
        const img = profileLink.querySelector("img");
        const caption = profileLink.querySelector("figcaption");

        if (!img || !caption) return;

        const name = caption.textContent.trim();
        // Ajusta o caminho para armazenar de forma neutra (raiz do site)
        const path = img.getAttribute("src").replace(/^\.\//, "");

        if (name) localStorage.setItem("perfilAtivoNome", name);
        if (path) localStorage.setItem("perfilAtivoImagem", path);
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ThemeManager();
  new ProfileManager();
});
