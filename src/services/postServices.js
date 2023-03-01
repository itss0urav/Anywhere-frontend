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

  async getPosts(){
    const res = await callApi({
      method:"get",
      relativePath:"/post"
    })
    if(res) return res.data

  }

  async deletePost(id){
const res = await callApi({
  method:"delete",
  relativePath:`/post/${id}`,
 
})

return res?.data
  }
}
