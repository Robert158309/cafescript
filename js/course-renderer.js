const params = new URLSearchParams(window.location.search);

const lang = params.get("lang");
const course = params.get("course");

const header = document.getElementById("course-header");
const container = document.getElementById("course-content");

fetch(`../assets/data/${lang}/${course}.json`)
  .then((res) => res.json())
  .then((data) => {
    header.innerHTML = `
      <h1>${data.title}</h1>
      <p>${data.description}</p>
    `;

    let html = "";

    data.content.forEach((block) => {
      switch (block.type) {
        case "heading":
          html += `<h2>${block.text}</h2>`;
          break;

        case "paragraph":
          html += `<p>${block.text}</p>`;
          break;

        case "example":
          html += `
            <div class="example">
              <h3>${block.title}</h3>
              <p>${block.text}</p>
            </div>
          `;
          break;

        case "list":
          html += "<ul>";

          block.items.forEach((item) => {
            html += `<li>${item}</li>`;
          });

          html += "</ul>";
          break;
      }
    });

    container.innerHTML = html;
  })
  .catch((error) => {
    console.error(error);

    container.innerHTML = `
      <h2>Error</h2>
      <p>No se pudo cargar el curso.</p>
    `;
  });
