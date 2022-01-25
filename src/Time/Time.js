import React, { useState } from 'react'

var hr=0,min=0,sec=0,ms=0
var stop=false

const Time = () => {

    const [timer,setTimer]=useState({
        hr:0,
        min:0,
        sec:0,
        ms:0,
        value:'START',
        state:false
    })

    function start(){
        stop=false
        duration()
    }

    function pause(){
        stop=true
        setTimer({hr:hr,min:min,sec:sec,ms:ms,value:'RESUME',state:false})
    }

    function reset(){
        hr=0
        min=0
        sec=0
        ms=0
        stop=true
        setTimer({hr:hr,min:min,sec:sec,ms:ms,value:'START',state:false})
    }

    function duration(){
        if(stop===false){
            if(min===60){
                hr+=1
                min=0
            }
            if(sec===60){
                min+=1
                sec=0
            }
            if(ms===10){
                sec+=1
                ms=0
            }
            ms+=1
            setTimer({hr:hr,min:min,sec:sec,ms:ms,value:'RESUME',state:true})
            setTimeout(duration,100)
        }
    }

    return(
        <div className='body'>
            <div className='area'>
                <div className='hr'>
                    {timer.hr}
                </div>
                <div className='min'>
                    {timer.min}
                </div>
                <div className='sec'>
                    {timer.sec}
                </div>
                <div className='ms'>
                    {timer.ms}
                </div>
            </div><br/>
            <div className='switch'>
                {!timer.state && <button onClick={start} >{timer.value}</button>}
                {timer.state &&<button onClick={pause}>PAUSE</button>}
                <br/>
                <button onClick={reset} disabled={timer.state} id="reset">RESET</button>
            </div>
        </div>
    )
}

export default Time