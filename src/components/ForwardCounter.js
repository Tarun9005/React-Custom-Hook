
import Card from './Card';
import useCounter from './customHook/useCounter';

const ForwardCounter = () => {
  //Wherever useCounter is called every component will have its indvidual state.
  const counter=useCounter(); 
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
