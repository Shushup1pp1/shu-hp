let videos = [];

function addVideo() {
  const title = document.getElementById("title").value;
  const url = document.getElementById("url").value;

  videos.unshift({ title, url });
  render();
}

function render() {
  const container = document.getElementById("videos");
  container.innerHTML = "";

  videos.forEach(v => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${v.title}</h3>
      <iframe width="100%" height="200"
        src="${convertURL(v.url)}"
        frameborder="0" allowfullscreen>
      </iframe>
    `;

    container.appendChild(div);
  });
}

function convertURL(url) {
  return url.replace("watch?v=", "embed/");
}
