import { BrowserRouter } from "react-router-dom";
import Routes from "./views/pages/Routes";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </DndProvider>
  );
}

export default App;
