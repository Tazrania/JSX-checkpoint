import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import './App.css'
import ProfileImage from './ProfileImage';

const App = () => {

    const firstName = "Arthémis";

  return (
    <div className='container'>
    <div className='card'>
      <Image />
      <Name />
      <Price />
      <Description />
    </div>
    <div className="message-container">
      <p className="message">{`Hello, ${firstName ? firstName : 'there'}!`}</p>
      {firstName && <ProfileImage firstName={firstName} />}
    </div>
  </div>
);
}

export default App;
