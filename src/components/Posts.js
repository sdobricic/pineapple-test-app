import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useComponentLogger from "./useComponentLogger";
import SearchInput from "./SearchInput";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const postsUrl = "https://jsonplaceholder.typicode.com/posts?_limit=10";

  useComponentLogger("Hello from", "Posts");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(postsUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='posts-container'>
      <h1>
        Hello, my name is Sveta. <br />
        <span>This is my blog page, hope you like it ;) 🍍</span>
      </h1>
      <div className='wrapper'>
        <SearchInput searchTerm={searchTerm} onSearch={handleSearch} />
      </div>
      <ul className='wrapper'>
        {filteredPosts.map((post) => (
          <li className='col post' key={post.id}>
            <h2 className='post-title'>{post.title}</h2>
            <small>
              <strong>{`${post.id}/${post.id}/2024`}</strong>
            </small>
            <p className='post-body'>{post.body.substring(0, 100)}...</p>
            <Link to={`/post/${post.id}`}>View More</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Posts;
