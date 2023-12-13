document.querySelector("#send").addEventListener("click", (e) => {
  e.preventDefault();
  const id = document.querySelector("#id").value;
  console.log("Id: ", id);
  const data = {
    title: document.querySelector("#title").value,
    year: document.querySelector("#year").value,
    director: document.querySelector("#director").value,
  };
  fetch(`/api/movies/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      window.location.href = "/";
    });
});
