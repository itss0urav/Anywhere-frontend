import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../Post/Post"
const ReportMod = () => {
    const [reportedPosts, setReportedPosts] = useState([]);
    async function getReportedPosts() {
        const response = await axios.get("http://localhost:5000/report");
        response && setReportedPosts(response.data);
        console.log(response);
      }
      useEffect(() => {
        getReportedPosts();
      }, []);
  return (
    <div style={{padding:"20px 20px"}}>
        <h1 style={{fontFamily:"Roboto", color:"white"}}>Reported posts</h1>
        <div style={{color:"white"}}>
        <div
        style={{
          height: "5px",
          width: "100%",
          backgroundColor: "gray",
          borderRadius: "5px",
          marginBottom: "30px",
          marginTop:10
        }}
      ></div>

      <div style={{color:"black", display:"flex", flexDirection:"column", alignItems:"center"}}>
        {
            reportedPosts.map((post) => (
                <Post 
                imgUrl={post?.postId[0].imageUrl}
                title={post?.postId[0].title}
                description={post?.postId[0].description}
                vote={post?.postId[0].vote}
                postId={post.postId[0]._id}
                isNfsw={post.postId[0].isNfsw}
                link={post.postId[0].link}
                userid={post.postId[0].userId._id}
                username={post.postId[0].userId.username}
                />
            ))
        }
      </div>
        </div>
    </div>
  )
}

export default ReportMod