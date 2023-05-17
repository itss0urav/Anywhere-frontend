import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { callApi } from "../../services/callApi";
import Post from "../Post/Post";

const Overview = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [highVal, setHighVal] = useState();
  useEffect(() => {
    async function getPostById() {
      const response = await callApi({
        relativePath: `/post?_id=${postId}`,
      });
      response && setPost(response.data[0]);
    }
    async function getTopComments() {
      const response = await callApi({
        relativePath: `/overview/${postId}`,
      });
      // response && setComments(response.data)
      setComments(response.data);
    }
    getPostById();
    getTopComments();
  }, []);
  console.log("comments", comments);
  return (
    <div
      style={{
        width: "50%",
        paddingLeft: "20%",
      }}>
      <Post
        title={post?.title}
        description={post?.description}
        imgUrl={post?.imageUrl}
        isNfsw={post?.isNfsw}
        vote={post?.vote}
        userid={post?.userId}
        postId={post?._id}
        username={post?.username}
        link={post?.link}
      />
      <div
        style={{ color: "black", backgroundColor: "white", paddingLeft: 40, fontFamily:"LAto" }}>
        <p>Most reviewed comment </p>
        <div style={{marginTop:10}}>
          <div style={{display:"flex", justifyContent:"space-between", fontFamily:"Roboto"}}>

          <p>{comments.content}</p>
          <p>Commented by {comments?.userId?.username}</p>
          <p>Vote count  {}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Overview;
