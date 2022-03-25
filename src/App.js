import { BroswerRouter } from "react-router-dom";
import Routes from "./views/pages/Routes";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <BroswerRouter>
        <Routes />
      </BroswerRouter>
    </DndProvider>
  );
}

export default App;
