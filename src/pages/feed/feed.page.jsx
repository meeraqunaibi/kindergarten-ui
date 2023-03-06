import React from "react";
import navImg from "../../assets/images/navLogo.svg";
import "./feed.css";

const Feed = () => {
  return (
    <div className="body">
      <div className="navbar">
        <button>تسجيل الخروج</button>
        <div className="nav-button">
          <button>الرئيسية</button>
          <button>ألعاب</button>
          <button>الزملاء</button>
          <button>حسابي</button>
        </div>
        <div className="nav-icon">
          <img src={navImg} alt="icon" />
        </div>
      </div>
      <div className="wrapper">
        <div className="posts">
          <div className="post-title">
            <span>المنشورات</span>
            <button>إضافة منشور</button>
          </div>
          <div className="post">
            <h3>مشاهدة فيديو الحروف باللغة الانجليزية</h3>
            <p>الأهل الكرام أرجو منكم مراجعة الحروف باللغة الانجليزية من خلال الفيديو المرفق</p>
            <span className="publisher">تم النشر بواسطة ميرة اقنيبي</span>
          </div>
        </div>
        <div className="tasks">
          <span>المهام</span>
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
