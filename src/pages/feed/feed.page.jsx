import React, { useContext, useEffect, useState } from "react";
import AddPost from "../../component/add/post/add-post.component";
import Button542 from "../../component/button542/button542";
import Navbar from "../../component/navbar/navbar.component";
import Text917 from "../../component/text917/text917.component";
import PostCart from "./feed-cart/post-card.feed";
import TaskCard from "./feed-cart/task-card.feed";
import "./feed.css";
import { createPost, getAllPost } from "../../data/integration";
import { UserContext } from "../../component/providers/user-provider.component";

const Feed = () => {
  const { post, setPost, user } = useContext(UserContext);

  const initialPost = {
    title: '',
    content: '',
    type: '',
    levelOfEducation: "",
    date: "",
    addedBy: user?.id
  };
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [tasks, setTasks] = useState([]);

  const togglePost = () => {
    setIsOpen(true);
  }

  const addNewPost = () => {
    createPost(post).then(() => {
      getAllPost().then(posts => setPosts(posts));
    });
  
    togglePost();
    setPost(initialPost);
  };

  const handleInputChange = (value, key) => {
    setPost({
      ...post,
      [key]: value
    });
  };
  useEffect(() => {
    getAllPost().then(posts => setPosts(posts));
  }, []);

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
                // onAddtask={addNewtask}
                handleInputChange={handleInputChange}
                post={post}
              />
            }

          </div>
          {
            posts.length &&
            <div className="post">
              {posts.map(post => (
                <PostCart
                  data={post}
                // title={post.title}
                // content={post.content}
                // addedBy={post.addedBy}
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
                <TaskCard title={task.title} content={task.content} date={task.date} />
              ))
            }
          </div>
        }
      </div>
    </div>
  );
};

export default Feed;
