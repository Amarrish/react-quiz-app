import { useEffect, useState } from 'react';
import Qsstans from './components/Qsstans';
import { datas } from './utils/constants';
import './App.css';

function App() {
  const [qstnumber, setQstnumber] = useState(1)
  const [stop,setStop] = useState(false)
  const [earned, setEarned] = useState(0)
  const isLastQuestion = qstnumber === datas.length+1;
  const handleBackToHome = () => {
    
    setQstnumber(1);
    setStop(false);
    setEarned(0);
  };
 
  useEffect(()=>{
    qstnumber >1 && setEarned(datas.find(money=> money.id === qstnumber -1).cash)
  },[datas,qstnumber])
  return (
    <>
    <div><h1 className='text-center bg-secondary p-2 '>Quiz App</h1></div>
    {stop || isLastQuestion ? (
        <div className='over'>
        <div>
          <h1 className='earn'>You earned: {earned}</h1>
          <button className='playagain' onClick={handleBackToHome}>Play Again</button>
          </div>
        </div>
      ) : (
   <div className='d-flex w-100' style={{height:'100vh'}}>
    <div className='qstans w-50 align-items-center justify-content-center d-flex'><Qsstans qstnumber={qstnumber} setQstnumber={setQstnumber} setStop={setStop}/>
    </div>
    <div className='moneylist w-50 align-items-center justify-content-center d-flex '>
      <div>
        <div className='moneyitems'>
          {
            datas.map((data)=>(
              <ul className={qstnumber===data.id?"active":"moneyitems"}>
              <li className='qstnmbr'>{data.id}</li>
              <li className='cash'>{data.cash}</li>
            </ul>
            ))
          }
         
        </div>
      </div>
    </div>
   </div>
  )}
    </>
  );
}

export default App;
