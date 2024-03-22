import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useComponentLogger from "./useComponentLogger";

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (isNaN(id)) {
      // If id is not a valid number, navigate to 404 page
      navigate("/404");
      return;
    }
    const fetchPostAndComments = async () => {
      await fetchPost();
      await fetchComments();
    };

    fetchPostAndComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, navigate]);

  useComponentLogger("Watch out, Radioactive Man!", "Post Details");

  const fetchPost = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch post");
      }
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch comments");
      }
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className='post-details'>
      <div className='post-details-header'>
        <h2 className='post-details-title'>{post.title}</h2>
        <p className='post-details-body'>{post.body}</p>
      </div>

      <h3>Comments:</h3>
      <ul>
        {comments.map((comment) => (
          <li className='post-details-comments' key={comment.id}>
            <strong>
              {comment.name}, {comment.email}
            </strong>
            <div>
              <p>{comment.body}</p>
            </div>
          </li>
        ))}
      </ul>
      <Link className='back-link' to='/posts'>
        Back to Posts
      </Link>
    </div>
  );
};

export default PostDetails;
