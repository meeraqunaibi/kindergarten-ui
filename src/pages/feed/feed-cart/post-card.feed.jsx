import './feed-cart.css';

const PostCart = (props) => {
  return (
    <div className="post-inf">
      <h3>{props.data.title}</h3>
      <p>
        {props.data.content}
      </p>
      {props.data.addedBy && <label>تم النشر بواسطة {props.data.addedBy.username }</label>}
    </div>
  )
}
export default PostCart;