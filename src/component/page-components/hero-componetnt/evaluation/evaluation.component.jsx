import { SkipBack, SkipForward } from 'phosphor-react';
import './evaluation.css';
const Evaluation=()=>{
  return(
    <div className='eva' id='evaluation'>
      <div className="rate">اراء الأهالي</div>
      <div>
        <div>
          <button className='pre rates'><SkipBack size={32} color="#201d1d" weight="duotone" /></button>
          <p className='opinion'>"انها روضة رائعة جدا"</p>
          <button className='next rates'><SkipForward size={32} color="#201d1d" weight="duotone" /></button>
        </div>
      </div>
    </div>
  )
}
export default Evaluation;