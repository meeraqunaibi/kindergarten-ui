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
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('TaskList') || '[]'));

  console.log(tasks);
  const togglePost = () => {
    setIsOpen(true);
  }

  const addNewPost = () => {
    const newposts = [...posts, post];
    console.log(newposts);
    setPosts(newposts);
    localStorage.setItem("PostList", JSON.stringify(newposts));
    togglePost();
    setPost(initialPost);

  };
  const addNewtask = () => {
    const newtasks = [...tasks, post];
    console.log(newtasks);
    setTasks(newtasks);
    localStorage.setItem("TaskList", JSON.stringify(newtasks));
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
    <div className="feed">
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
                onAddtask={addNewtask}
                handleInputChange={handleInputChange}
                post={post}
              // type={post.type}
              />
            }

          </div>
          {
            posts.length &&
            <div className="posts">
              {posts.map(post => (
                <PostCart
                  title={post.title}
                  content={post.content}
                />
              ))}
            </div>
          }
        </div>
        {
          tasks.length &&
          <div className="tasks">
            {
              tasks.map(task => (
                <TaskCard title={task.title} content={task.content} />
              ))
            }
          </div>
        }
      </div>
    </div>
  );
};

export default Feed;
