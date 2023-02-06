import logo from '../../assets/logo.svg';
import './Loading.css';

function Loading() {
  return (
    <div className='Load'>
      <img src={logo} className='Load-logo' alt='logo' />
    </div>
  );
}

export default Loading;
