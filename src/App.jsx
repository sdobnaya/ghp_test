import { Chart } from 'react-google-charts';
import './App.css';

import logo from './logo.svg';



function App() {
    const a = 0;
    const b = 20;

    return (
        <div className="App">
            <Chart
                chartType="ScatterChart"
                data={[['Age', 'Weight'], [20, 10], [20, 50]]}
                width="100%"
                height="400px"
                legendToggle
            />
        </div>
    );
}

export default App;



