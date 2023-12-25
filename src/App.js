import './App.css';
import Header  from "./header/Header";
import Slider from "./Slider/slider";
import Dropdown from './Selector/selector';
import PieChart from './piechat/Piechart'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='allSliders'>
      <Slider title="Home Value" minrang="1000" maxrang="10000" sign="$"/>
      <Slider title="Down Payment" minrang="0" maxrang="10000" sign="$"/>
      <Slider title="Loan Amount" minrang="0" maxrang="10000"sign="$"/>
      <Slider title="Interest Rate" minrang="2" maxrang="18" sign="%"/>
      <Dropdown/>
      </div>
      
    </div>
  );
}

export default App;
