import { callApi } from "./callApi";

export class PostServices {
  async createPost(data) {
    const res = await callApi({
      method: "post",
      relativePath: "/post",
      apiData: data,
    });
    if (res) return res.data;
  }

  async getPosts() {
    const res = await callApi({
      method: "get",
      relativePath: "/post",
    });
    if (res) return res.data;
  }

  async deletePost(id) {
    const res = await callApi({
      method: "delete",
      relativePath: `/post/${id}`,
    });

    return res?.data;
  }

  async getPostById({ queryKey }) {
    const response = await callApi({
      method: "get",
      relativePath: `/post?_id=${queryKey[0]}`,
    });
    return response?.data;
  }

  async createComment(args) {
    const response = await callApi({
      method: "post",
      relativePath: "/comment",
      apiData: args,
    });
    return response?.data;
  }
  async getComments({ queryKey }) {
    const response = await callApi({
      method: "get",
      relativePath: `/comment?postId=${queryKey[1]}`,
    });
    return response?.data;
  }
}
