const fs = require("fs");

class ManagerPost {
  constructor(path) {
    this.path = path;
    try {
      let posts = fs.readFileSync(this.path, "utf-8");
      this.posts = JSON.parse(posts);
    } catch {
      this.posts = [];
    }
  }

  validate(post) {
    if (!post.userId || !post.id || !post.title || !post.body) {
      return false;
    }
    return true;
  }

  async savePost(post) {
    if (!post) {
      return console.log("El post está vacío");
    }

    const existsPost = this.posts.find((p) => p.id === post.id);

    if (existsPost) {
      return console.log("El post ya existe");
    }

    try {
      this.posts.push(post);
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(this.posts, null, "\t")
      );
    } catch (error) {
      console.log(`Hubo un error al guardar los datos: ${error}`);
      return;
    }
  }

  async deletePost(id) {
    const post = this.posts.find((p) => p.id === id);

    if (!post) {
      return console.log("El post no existe");
    }

    const index = this.posts.findIndex(post);

    try {
      this.posts.splice(index, 1);
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(this.posts, null, "\t")
      );
    } catch (error) {
      console.log(`Hubo un error al guardar los datos: ${error}`);
      return;
    }
  }

  getPosts() {
    return this.posts;
  }
}

class Post {
  constructor(userId, id, title, body) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }
}

async function fetchDatos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    // console.log(data);

    const manager = new ManagerPost("./posts.json");

    // console.log("Creando los posts");
    // for (let i = 0; i <= 12; i++) {
    //   const post = new Post(
    //     data[i].userId,
    //     data[i].id,
    //     data[i].title,
    //     data[i].body
    //   );
    //   console.log(post);

    //   manager.savePost(post);
    //   console.log("Post guardado");

    //   console.log("-----------------------------------");
    // }

    // console.log(manager.getPosts());
  } catch (error) {
    console.log(`Hubo un error al utilizar fetch: ${error}`);
  }
}

fetchDatos();
