import { useDrop } from "react-dnd";
import Card from "../Card";
import { v4 as uuidv4 } from "uuid";
import { updateLead } from "../../../../services/lead-service";

import "./styles.css";

const titles = [
  "Cliente em Potencial",
  "Dados Confirmados",
  "Reunião Agendada",
];

export default function List({ cards = [], stage, loadLeads }) {
  const [test, dropRef] = useDrop({
    accept: "CARD",
    drop(item, monitor) {
      const diff = stage - item.stage;

      if (diff === 1) {
        updateLead({
          ...item,
          stage: stage,
        });
        loadLeads();
      }
    },
  });

  return (
    <div className="board-list" ref={dropRef}>
      {<div className="list-title">{titles[stage]}</div>}
      {cards.map((lead) => {
        return <Card lead={lead} key={lead?.id || uuidv4()} />;
      })}
    </div>
  );
}
