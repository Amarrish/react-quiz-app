import React, { useEffect, useState } from 'react';
import { qadatas } from '../utils/constants';
import './style.css';

const Qsstans = ({qstnumber, setQstnumber,setStop }) => {
  const [question, setQuestion] = useState(null);
  const [selectedanswer,setSelectedanswer] = useState(null)
  const [select,setSelect] = useState("selected")

  const delay = (duration,callback)=>{
    setTimeout(()=>{
        callback()
    },duration)
  }

  const handlesubmit = (data) =>{
    setSelectedanswer(data)
    setSelect("selected active")
    delay(2000, ()=>setSelect(data.answer?"answer correct" : "answer wrong"));
    delay(4000, ()=>
    {
        if(data.answer){
            setQstnumber((prev)=>prev+1)
            setSelectedanswer(null)
        }else{
            setStop(true)
        }
    })
  }
 

  useEffect(() => {
    setQuestion(qadatas[qstnumber - 1]);
  }, [qadatas, qstnumber]);

  return (
    <>
      <div className="qsstans">
        <div className="question">
          <h4>{question?.questions}</h4>
        </div>

        <div className="answer">
          {question?.answer.map((data) => (
            <p  className={selectedanswer===data? select:"answer"} onClick={()=>handlesubmit(data)}> {data.option}</p>
          ))}
        </div>

      </div>
    </>
  );
};

export default Qsstans;
