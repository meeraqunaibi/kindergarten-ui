import React from "react";
import { Link } from "react-router-dom";
import navImg from "../../assets/images/navLogo.svg";
import Button542 from "../../component/button542/button542";
import Button from "../../component/page-components/hero-componetnt/button/button.component";
import Text917 from "../../component/text917/text917.component";
import "./feed.css";

const Feed = () => {
  return (
    <div className="body">
      <div className="navbar">
        <Button title="تسجيل الخروج" className="button headerb" />
        <div className="nav-button">
          <Link>الرئيسية</Link>
          <Link>ألعاب</Link>
          <Link>الزملاء</Link>
          <Link>حسابي</Link>
        </div>
        <div className="nav-icon">
          <img src={navImg} alt="icon" />
        </div>
      </div>
      <div className="feed-wrapper">
        <div className="posts">
          <div className="post-title">
            <Text917 title="المنشورات" />
            <Button542 content="إضافة منشور" />
          </div>
          <div className="post">
            <h3>مشاهدة فيديو الحروف باللغة الانجليزية</h3>
            <p>
              الأهل الكرام أرجو منكم مراجعة الحروف باللغة الانجليزية من خلال
              الفيديو المرفق
            </p>
            <span className="publisher">تم النشر بواسطة ميرة اقنيبي</span>
          </div>
        </div>
        <div className="tasks">
          <Text917 title="المهام" />
          <div className="task-cards">
            <div className="card">
              <input id="cb1" type="checkbox" />
              <label for="cb1"></label>
              <span className="task-title">مشاهدة فيديو الأرنب</span>
              <span className="task-date">22-2-2023</span>
              <span className="expand-task">رؤية المنشور</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
