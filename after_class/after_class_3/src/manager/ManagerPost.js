import fs from "fs";

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

  async savePost(post) {
    if (!post) {
      return console.log("El post está vacío");
    }

    const existsPost = this.posts.find((p) => p.id === post.id);

    if (existsPost) {
      console.log("El post ya existe");
      throw Error(`Post with id ${post.id} already exists`);
    }

    try {
      this.posts.push(post);
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(this.posts, null, "\t")
      );
    } catch (error) {
      console.log(`Hubo un error al guardar los datos: ${error}`);
      throw Error("Hubo un error al crear el post: " + error);
    }
  }

  async deletePost(id) {
    const post = this.posts.find((p) => p.id === id);

    if (!post) {
      console.log("El post no existe");
      throw Error("El post no existe");
    }

    const index = this.posts.findIndex((p) => p.id === id);

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

export { ManagerPost, Post };
