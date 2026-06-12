const page = window.location.pathname.split("/").pop().replace(".html", "");

const container = document.getElementById("courses");

fetch(`../assets/data/${page}/cards.json`)
  .then((res) => res.json())
  .then((courses) => {
    let html = "";

    courses.forEach((course) => {
      html += `
            <article class="card">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <a href="viewer.html?lang=${page}&course=${course.slug}">
                    Ver curso →
                </a>
            </article>
            `;
    });

    container.innerHTML = html;
  })
  .catch((error) => {
    console.error("Error al cargar los cursos:", error);

    container.innerHTML = `
            <p>No se pudieron cargar los cursos.</p>
        `;
  });
