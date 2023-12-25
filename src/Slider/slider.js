import './slider.css';
import { useState } from 'react';

const Slider = (props)=>{

    const [rangeValue,setrangeValue] = useState(props.minrang);

    function changefunction(e){
        setrangeValue(e.target.value);
    }

    return(
        <div className='rangeContainer'>
            <p>{props.title}</p>
            <h1>{props.sign} {rangeValue}</h1>
            <input type='range' value={rangeValue} min={props.minrang} max={props.maxrang} onChange={changefunction}/>
            <div className='ranges'>
                <span>{props.sign} {props.minrang}</span>
                <span>{props.sign} {props.maxrang}</span>
            </div>
        </div>
    )
}

export default Slider;