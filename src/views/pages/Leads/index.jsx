import { useHistory } from "react-router-dom";
import Board from "../../components/Board";
import Button from "../../components/Button";

import "./styles.css";

export default function Leads() {
  const history = useHistory();

  function handleClick(event) {
    history.push("/newLead");
  }

  return (
    <>
      <div className="container-leads">
        <div>
          <header className="header-leads">
            ELO<strong>GROUP</strong>
          </header>
          <span className="description">Painel de Leads</span>
        </div>

        <div className="content-leads">
          <div className="button-lead">
            <Button label="Novo Lead (+)" onClick={handleClick} />
          </div>
          <Board className="board" />
        </div>
      </div>
    </>
  );
}
