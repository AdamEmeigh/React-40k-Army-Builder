import './Title.css';

const Title = () => {
  return (
    <div className='title'>
      <img src={require("./Images/Black_Templar_Symbol.webp")} alt='Black Templar Logo' />
      <h1>Black Templar Army</h1>
      <img src={require("./Images/Black_Templar_Symbol.webp")} alt='Black Templar Logo' />
    </div>
  );
};

export default Title;