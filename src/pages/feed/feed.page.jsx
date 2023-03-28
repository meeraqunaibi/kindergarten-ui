import React, { useState } from "react";
import AddPost from "../../component/add/post/add-post.component";
import Button542 from "../../component/button542/button542";
import Navbar from "../../component/navbar/navbar.component";
import Text917 from "../../component/text917/text917.component";
import PostCart from "./feed-cart/post-card.feed";
import TaskCard from "./feed-cart/task-card.feed";
import "./feed.css";

const initialPost = {
  title: '',
  content: '',
  class: '',
  type: '',
};

const Feed = () => {
  const [post, setPost] = useState(initialPost)

  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('PostList') || '[]'));

  const togglePost = () => {
    setIsOpen(true);
  }

  const addNewPost = () => {
    const newposts = [...posts, post];
    setPosts(newposts);
    localStorage.setItem("PostList", JSON.stringify(newposts));
    togglePost();
    setPost(initialPost);

  };
  const handleInputChange = (value, key) => {
    setPost({
      ...post,
      [key]: value
    });
  };

  return (
    <div className="body">
      <Navbar />
      <div className="feed-wrapper">
        <div className="posts">
          <div className="post-title">
            <Text917 title="المنشورات" />
            <Button542 onClick={togglePost} content="إضافة منشور" />
            {
              isOpen && <AddPost
                close={() => setIsOpen(false)}
                onAddpost={addNewPost}
                handleInputChange={handleInputChange}
                post={post}
              />
            }
          </div>
          <div className="posts">
            {posts.map(post => (
              <PostCart
                title={post.title}
                content={post.content}
              />
            ))}
          </div>
        </div>
        <div className="tasks">
          <Text917 title="المهام" />
          <TaskCard />
        </div>
      </div>
    </div>
  );
};

export default Feed;
