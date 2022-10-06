import { useState, useEffect } from 'react';
const useCounter=(forwards=true)=>{
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if(forwards){
            setCounter((prevCounter) => prevCounter + 1);
        }
        else{
            setCounter((prevCounter) => prevCounter - 1);
        }
        
      }, 1000);
  
      return () => clearInterval(interval);
    }, [forwards]);
  
    //Because we want to return this value from our custom Hook so that it can be used.

    return counter;

  };


export default useCounter;