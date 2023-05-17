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
      }}
    >
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
      <div style={{ border: "40px solid white", padding: "5px" }}>
        <div
          style={{
            color: "black",
            backgroundColor: "white",
            paddingLeft: 40,
            paddingTop: 20,
            paddingBottom: 10,
            fontFamily: "Lato",
            fontWeight: "bold",
          }}
        >
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "1.5rem",
              color: "blue",
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            Most Agreed Comment
          </p>
          <div style={{ marginTop: 20 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Roboto",
              }}
            >
              <p
                style={{
                  fontSize: "1.2rem",
                  textAlign: "center",
                  paddingBottom: "1.5rem",
                }}
              >
                {comments.content}
              </p>
              <p style={{ fontSize: "14px", color: "black" }}>
                Commented by{" "}
                <p style={{ color: "red" }}>{comments?.userId?.username}</p>
              </p>
              {/* <p style={{ color: "red" }} >Vote count {comments?.vote}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
