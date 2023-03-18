import { callApi } from "./callApi";

export class VoteService {
  constructor() {}
  async upVote(data) {
    const result = await callApi({
      relativePath: "/vote",
      method: "post",
      apiData: data,
    });
    return result?.data;
  }
  async downVote(data) {
    const result = await callApi({
      relativePath: "/vote",
      method: "post",
      apiData: data,
    });
    return result?.data;
  }
  async getVoteCount() {
    const result = await callApi({
      relativePath: "/vote",
      method: "get",
    });
    return result?.data
  }
}
