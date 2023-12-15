import { postModel } from "../../models/post.model.js";

class PostDao {
  async findPosts() {
    return await postModel.find();
  }

  async createPost(post) {
    return await postModel.create(post);
  }

  async updatePost(_id, post) {
    return await postModel.findOneAndUpdate({ _id }, post);
  }

  async deletePost(_id) {
    return await postModel.findByIdAndDelete({ _id });
  }
}

export default new PostDao();
