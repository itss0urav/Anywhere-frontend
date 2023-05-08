import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { callApi } from "../../services/callApi";
import Post from "../Post/Post";

const Overview = () => {
  const { postId } = useParams()
 const [post, setPost] = useState({})
 const [comments, setComments] = useState([])
 const [highVal, setHighVal] = useState()
  useEffect(() => {

    async function getPostById(){

      const response = await callApi({
        relativePath:`/post?_id=${postId}`
      })
      response && setPost(response.data[0])
      
    }
    async function getComments(){
      const response = await callApi({
        relativePath:`/comment?postId=${postId}`
      })
      // response && setComments(response.data)
      response && setHighVal(response.data.map((comment) => comment.vote.vote))
      response && setComments(response.data.find((comment) => comment.vote.vote === highVal ))
    }
    getPostById()
    getComments()
  }, [])
  console.log("comments", comments)
  return (
    <div
      style={{
        width: "50%", paddingLeft: "20%" 
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
       <div>
        <p>Most </p>
       {JSON.stringify(comments)}
       </div>
    </div>
  );
};

export default Overview;
