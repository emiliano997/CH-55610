const socket = io();

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const post = {
    userId: Number(formData.get("userId")),
    id: Number(formData.get("id")),
    title: formData.get("title"),
    body: formData.get("body"),
  };

  socket.emit("post_send", post);
  form.reset();
});

socket.on("posts", (data) => {
  const posts = document.querySelector("#posts");

  posts.innerHTML = data
    .map((post) => {
      return `
      <p>
        Id: ${post.id} -
        User id: ${post.id} -
        Title: ${post.title} -
        Body: ${post.body} -
        <button id="button-${post.id}> Eliminar </button>
      </p>
    `;
    })
    .join(" ");
});
