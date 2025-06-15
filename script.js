document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("repositorios");

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

      // Inicializa o Swiper depois que os slides foram adicionados
      new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
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
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          },
          2048: {
            slidesPerView: 4
          },
          3400: {
            slidesPerView: 5
          }
        }
      });
    });
});
