import { useState, useEffect } from "react";

const Intro = ({ onFinish }) => {
  const text = "this is the test site for reza.g ;-)"; // متن موردنظر
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index));
      index++;

      if (index > text.length) {
        clearInterval(interval);

        
        setTimeout(() => {
          onFinish();
        }, 1100);
      }
    }, 120); 

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="flex justify-center items-center h-screen bg-[linear-gradient(to_right,rgba(255,233,244,30%)_0%,rgba(234,243,255,50%)_100%)] text-white text-2xl font-bold transition-all duration-700">
      <p className="typing-animation w-[80%] text-center bg-[linear-gradient(to_right,#DC36FA_0%,#A167EF_50%,#609FE4_50%,#3ABFDE_50%,#04D18E_100%)] bg-clip-text text-transparent">{displayText}</p>
    </div>
  );
};

export default Intro;
