import { useState } from "react";

import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";

import "./styles.css";

export default function Register() {
  let history = useHistory();
  const [errors, setError] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    const registerData = {
      user: event.target.user.value,
      password: event.target.password.value,
      confirmPassword: event.target.confirmPassword.value,
    };

    const validationErrors = {};
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[$*&@#]).{8,}$/;

    if (!registerData.user) {
      validationErrors.user = "Informe o usuario";
    }

    if (!registerData.password) {
      validationErrors.password = "Informe a senha";
    } else if (!regex.exec(registerData.password)) {
      validationErrors.password =
        "A senha deve possuir ao menos 8 caracteres, com um caracter especial, um numerico e um alfanumerico";
    } else if (registerData.password !== registerData.confirmPassword) {
      validationErrors.confirmPassword = "Senhas não são iguais";
    }

    if (Object.keys(validationErrors).length === 0) {
      history.push("/Leads");
    } else {
      setError(validationErrors);
    }
  }

  return (
    <>
      <div className="container-register">
        <div>
          <header className="header-register">
            ELO<strong>GROUP</strong>
          </header>
        </div>
        <form className="form-register" onSubmit={handleSubmit}>
          <Input id="user" label="Usuario *" error={errors["user"]} />
          <Input
            id="password"
            label="Senha *"
            type="password"
            error={errors["password"]}
          />
          <Input
            id="confirmPassword"
            label="Confirmação de Senha *"
            type="password"
            error={errors["confirmPassword"]}
          />
          <Button label="Registrar" type="submit" />
        </form>
      </div>
    </>
  );
}
