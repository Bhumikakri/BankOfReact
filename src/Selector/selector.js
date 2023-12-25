import './selector.css';
import { useState } from 'react';

const Dropdown = () =>{

    const[selectValue,setselectValue] = useState('')

    function optionfuntion(e){
        setselectValue(e.target.value);
    }

    return(
        <div className='DropDown'>
            <select value={selectValue} onChange={optionfuntion}>
                <option value="Year_5">5 years</option>
                <option value="Year_10">10 years</option>
                <option value="Year_15">15 years</option>
                <option value="Year_20">20 years</option>
                <option value="Year_25">25 years</option>
            </select>
        </div>
    )
}

export default Dropdown;