import { React } from "react";
import { Pie } from "react-chartjs-2";

const PieChart=()=>{

    const Data={
        labels: ['red','blue'],
        datasets: [{
            label: '# of votes',
            data: [40,60],
            borderWidth: 1
        }]
    }

    return(
        <>
        <Pie/>
        </>
    )
}

export default PieChart;