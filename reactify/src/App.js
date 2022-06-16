/* eslint-disable no-unused-vars */
import './App.css';
import Home from './pages/Home'; 
import Deposit from './pages/Deposit';
import dashboardLottery from './pages/DashboardLottery';

function App() {
  return (
    <div className="App">
      <Home />
      <Deposit />
      <dashboardLottery />
    </div>
  );
}

export default App;
