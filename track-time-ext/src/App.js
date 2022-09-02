import TimerComponent from "./Timer/TimerComponent";
import {
  Routes,
  Route,
} from "react-router-dom";
import Reports from "./Reports";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path={'/'} element={<TimerComponent/>}/>
        <Route path={'/reports'} element={<Reports/>}/>


      </Routes>
    </div>
  );
}

export default App;
