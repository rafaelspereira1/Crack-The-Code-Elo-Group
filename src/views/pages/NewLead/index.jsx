import { useState } from "react";

import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Table from "../../components/Table";
import { createLead } from "../../../services/lead-service";

import "./styles.css";

export default function NewLead() {
  let history = useHistory();
  const [errors, setErrors] = useState({});
  const [opportunities, setOpportunities] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const newLeadData = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      opportunities: opportunities,
      stage: 0,
    };

    const validationErrors = {};

    if (!newLeadData.name) {
      validationErrors.name = "Nome obrigatório";
    }
    if (!newLeadData.phone) {
      validationErrors.phone = "Telefone obrigatorio";
    }

    if (!newLeadData.email) {
      validationErrors.email = "Email obrigatorio";
    }
    if (!opportunities.length) {
      validationErrors.opportunities = "Informe uma oportunidade";
    }

    if (Object.keys(validationErrors).length === 0) {
      // eslint-disable-next-line no-restricted-globals
      const response = confirm("Lead incluído com sucesso!");
      if (response) {
        createLead(newLeadData);
        history.push("/Leads");
      }
    } else {
      setErrors(validationErrors);
    }
  }

  function addOpportunity(name) {
    setOpportunities((prev) => {
      const exists = prev.includes(name);
      return exists ? prev : [...prev, name];
    });
  }

  function removeOpportunity(name) {
    setOpportunities((prev) => prev.filter((opp) => opp !== name));
  }

  function handleRowClick(data, { target }) {
    if (target instanceof HTMLInputElement) {
      const opportunity = data[1];

      if (target.checked) {
        addOpportunity(opportunity);
      } else {
        removeOpportunity(opportunity);
      }
    }
  }
  function handleCheckOpportunities(event) {
    if (event.target.checked) {
      setOpportunities(["RPA", "Produto Digital", "Analytics", "BPM"]);
    } else {
      setOpportunities([]);
    }
  }

  return (
    <>
      <div className="container-new-lead">
        <div>
          <header className="header-new-lead">
            ELO<strong>GROUP</strong>
          </header>
          <span className="description-new-lead">Novo Lead</span>
        </div>
        <div>
          <form className="form-new-lead" onSubmit={handleSubmit}>
            <div className="input-new-lead">
              <Input id="name" label="Nome *" error={errors["name"]} />
              <Input
                id="phone"
                label="Telefone *"
                type="number"
                error={errors["phone"]}
              />
              <Input
                id="email"
                label="Email *"
                type="email"
                error={errors["email"]}
              />
            </div>
            <div className="opportunity">
              <span>Oportunidades *</span>
              <Table
                className="table-new-lead"
                label="Oportunidades *"
                columns={[
                  <input
                    className="input-checkbox"
                    type="checkbox"
                    onClick={handleCheckOpportunities}
                  />,
                  "",
                ]}
                rows={[
                  [
                    <input
                      name="opportunity"
                      className="input-checkbox"
                      type="checkbox"
                      checked={opportunities.includes("RPA")}
                      readOnly={true}
                    />,
                    "RPA",
                  ],
                  [
                    <input
                      name="opportunity"
                      className="input-checkbox"
                      type="checkbox"
                      checked={opportunities.includes("Produto Digital")}
                      readOnly={true}
                    />,
                    "Produto Digital",
                  ],
                  [
                    <input
                      name="opportunity"
                      className="input-checkbox"
                      type="checkbox"
                      checked={opportunities.includes("Analytics")}
                      readOnly={true}
                    />,
                    "Analytics",
                  ],
                  [
                    <input
                      name="opportunity"
                      className="input-checkbox"
                      type="checkbox"
                      checked={opportunities.includes("BPM")}
                      readOnly={true}
                    />,
                    "BPM",
                  ],
                ]}
                onRowClick={handleRowClick}
              />
              <span className="error">{errors["opportunities"]}</span>
              <Button
                className="button-new-lead"
                label="Salvar"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
