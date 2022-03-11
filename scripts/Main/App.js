import React from "react";
import axios from "axios";
import { LineChart, ScatterChart, Scatter, Line, BarChart, Bar, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { scaleLog } from 'd3-scale';
import Chart from "./Chart"

const data = [
	{ x: 100, y: 200, z: 200 },
	{ x: 120, y: 100, z: 260 },
	{ x: 170, y: 300, z: 400 },
	{ x: 140, y: 250, z: 280 },
	{ x: 150, y: 400, z: 500 },
	{ x: 110, y: 280, z: 200 },
];

const scale = scaleLog().base(10);

class App extends React.Component {

    state = {
        data: []
    }

    async getData() {
        console.log("API requests...");

        const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        url: 'http://localhost:3000/contract-transactions/0x4e76c23fe2a4e37b5e07b5625e17098baab86c18',
        // url: 'http://localhost:3000/checkdb/0xef09fa561d37fc452e5c58b08621f90a051dd7e6dce7d3f20c8b602744dafc10',
        };

        let response = await axios.request(options).then(function (response) {
            return(response.data);
        }).catch(function (error) {
        console.error(error);
        });

        this.setState({data: response}); 
        
    }

    async componentDidMount(){
        await this.getData();
        console.log(this.state.data);
    }

    render(){
        // <LineChart width={1000} height={500} data={this.state.data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        //             <CartesianGrid strokeDasharray="3 3" />
        //             <XAxis />
        //             <YAxis dataKey="value" />
        //             <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        // </LineChart> 

        // <ScatterChart width={1000} height={500} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        //     <CartesianGrid />
        //     <XAxis type="number" dataKey="txn_timestamp" name="timestamp" unit="sec" domain={[1644012926, 1644133650]} />
        //     <YAxis type="number" dataKey="value" name="value" unit="ETH" />
        //     <Tooltip cursor={{ strokeDasharray: '3 3' }} isAnimationActive={false} />
        //     <Scatter name="A school" data={this.state.data} fill="#8884d8" />
		// </ScatterChart>
        

        return(
            <div>
                <h1>aaa</h1>
                <BarChart width={1000} height={400} data={this.state.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="txn_timestamp" name="timestamp"/>
                    <YAxis type="number" name="value" domain={[0, 2]} dataKey="value" allowDataOverflow={true} />
                    <ZAxis dataKey="txn_hash" name="hash"/>
                    <Tooltip isAnimationActive={false}/>
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
                 
            </div>
        );
    }
   
}

export default App;