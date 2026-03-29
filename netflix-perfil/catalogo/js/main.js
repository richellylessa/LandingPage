import { categories } from "./data.js";
import { createCarousel } from "./components/Carousel.js";

document.addEventListener("DOMContentLoaded", () => {
  const nomePerfil = localStorage.getItem("perfilAtivoNome");
  const imagemPerfil = localStorage.getItem("perfilAtivoImagem");

  if (nomePerfil || imagemPerfil) {
    const kidsLink = document.querySelector(".kids-link");
    const profileIcon = document.querySelector(".profile-icon");

    if (kidsLink && nomePerfil) kidsLink.textContent = nomePerfil;

    if (profileIcon && imagemPerfil) {
      // Arquivo salvo como 'imagens/perfil-x.jpg' no index; aqui a rota precisa subir um nível
      let profilePath = imagemPerfil.replace(/^\.\//, "");
      if (!/^https?:\/\//i.test(profilePath) && !profilePath.startsWith("/")) {
        profilePath = "../" + profilePath;
      }
      profileIcon.src = profilePath;
    }
  }

  const container = document.getElementById("main-content");

  if (container) {
    categories.forEach((category) => {
      const carousel = createCarousel(category);
      container.appendChild(carousel);
    });
  }
});
