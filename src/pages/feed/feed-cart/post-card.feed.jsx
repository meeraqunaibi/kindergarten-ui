import './feed-cart.css';

const PostCart = (props) =>{
  return(
    <div className="post-inf">
      <h3>{props.title}</h3>
      <p>
        {props.content}
      </p>
      <span className="publisher">تم النشر بواسطة ميرة اقنيبي</span>

    </div>
  )
}
export default PostCart;