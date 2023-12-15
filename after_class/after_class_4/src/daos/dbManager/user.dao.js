import { postModel } from "../../models/post.model.js";
import { userModel } from "../../models/user.model.js";

class UserDao {
  async findUsers() {
    return await userModel.find();
  }

  async findById(_id) {
    return await userModel.findById(_id);
  }

  async createUser(user) {
    return await userModel.create(user);
  }

  async updateUser(_id, user) {
    return await userModel.findByIdAndUpdate({ _id }, user);
  }

  async deleteUser(_id) {
    await postModel.deleteMany({ author: _id });

    return await userModel.findByIdAndDelete({ _id });
  }
}

export default new UserDao();
