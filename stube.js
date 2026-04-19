<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2">
<script>
const db = supabase.createClient(
  "https://kjnfykwqbmzscqsihvav.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqbmZ5a3dxYm16c2Nxc2lodmF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY1NjMyNjQsImV4cCI6MjA5MjEzOTI2NH0.AYcr2jCicnW9mYSMdaQwN0jezXino2GAvAOkricqiCo"
);

async function addVideo() {
  const title = document.getElementById("title").value;
  const url = document.getElementById("url").value;

  await db.from("videos").insert({
    title: title,
    url: url
  });

  loadVideos();
}

async function loadVideos() {
  const { data } = await db
    .from("videos")
    .select("*")
    .order("created_at", { ascending: false });

  const container = document.getElementById("videos");
  container.innerHTML = "";

  data.forEach(v => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${v.title}</h3>
      <iframe width="100%" height="200"
        src="${v.url.replace("watch?v=", "embed/")}"
        frameborder="0" allowfullscreen>
      </iframe>
    `;

    container.appendChild(div);
  });
}

loadVideos();
</script>
