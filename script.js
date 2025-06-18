document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("repositorios");

  // Buscar repositórios do GitHub
  fetch("https://api.github.com/users/Renanmp14/repos")
    .then(response => response.json())
    .then(repos => {
      const wrapper = document.querySelector(".swiper-wrapper");

      repos.forEach(repo => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";

        slide.innerHTML = `
          <div class="repo-card">
            <h3>${repo.name}</h3>
            <p>${repo.description || "Sem descrição."}</p>
            <a href="${repo.html_url}" target="_blank">🔗 Ver repositório</a>
          </div>
        `;

        wrapper.appendChild(slide);
      });

      // Inicializar o Swiper
      const swiperInstance = new Swiper(".swiper-container", {
        slidesPerView: 1.2,
        spaceBetween: 16,
        loop: false,
        centeredSlides: false,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 2.5
          },
          1024: {
            slidesPerView: 3.5
          },
          1440: {
            slidesPerView: 4.5
          }
        }
      });

      // Botão externo para avançar manualmente o Swiper
      const btnAvancar = document.getElementById("btn-avancar");
      if (btnAvancar) {
        btnAvancar.addEventListener("click", () => {
          swiperInstance.slideNext();
        });
      }
    })
    .catch(error => {
      console.error("Erro ao buscar repositórios:", error);
    });

  // Funcionalidade do botão do menu (navbar mobile)
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});