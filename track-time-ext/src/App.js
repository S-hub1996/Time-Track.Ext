import TimerComponent from "./Timer/TimerComponent";
import {
  Routes,
  Route,
} from "react-router-dom";
import Reports from "./Reports";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box h={'100vh'} 
    
    >
      
      <Routes >
        <Route path={'/'} element={<TimerComponent/>}/>
        <Route path={'/reports'} element={<Reports/>}/>


      </Routes>
    </Box>
  );
}

export default App;
