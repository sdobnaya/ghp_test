import logo from './logo.svg';
import './App.css';

import { Chart } from "react-google-charts";

function App() {
  return (
    <div className="App">
      <Chart
        chartType="ScatterChart"
        data={[["Age", "Weight"], [10, 10], [20, 50]]}
        width="100%"
        height="400px"
        legendToggle
        />
    </div>
  );
}

export default App;



