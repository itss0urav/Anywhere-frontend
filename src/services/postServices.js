import { callApi } from "./callApi";

export class PostServices {
  async createPost(data) {
    const res = await callApi({
      method: "post",
      relativePath: "/post",
      apiData:data,
    });
    if(res) return res.data
  }
}
