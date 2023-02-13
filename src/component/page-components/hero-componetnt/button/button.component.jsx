import { Link } from 'react-router-dom';
import './button.css';
const Button = (props) => {
  return (
    <div>
      <Link className={props.className} to={props.link}>{props.title}</Link>
    </div>
  )
}
export default Button;