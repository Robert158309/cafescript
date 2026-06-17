const container = document.getElementById("news");

fetch("../assets/data/news.json")
  .then((res) => res.json())
  .then((items) => {
    let html = "";

    items.forEach((item) => {
      html += `
        <article class = "news-card">

          <small class = "news-date">
            ${item.date}
          </small>

          <h3>${item.title}</h3>

          <p>${item.content}</p>

        </article>
      `;
    });

    container.innerHTML = html;
  })
  .catch((error) => {
    console.error(error);

    container.innerHTML = `
      <p>No se pudieron cargar las novedades.</p>
    `;
  });
