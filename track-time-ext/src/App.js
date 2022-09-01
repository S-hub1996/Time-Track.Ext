import Timer from "./Timer/Timer";
import {
  Routes,
  Route,
} from "react-router-dom";
import Reports from "./Reports";
function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Timer/>}/>
        <Route path={'/reports'} element={<Reports/>}/>


      </Routes>
    </div>
  );
}

export default App;
