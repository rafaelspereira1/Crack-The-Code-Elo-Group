import { Route, Switch } from "react-router-dom";
import Register from "../pages/Register";
import Leads from "../pages/Leads";
import NewLead from "../pages/NewLead";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Register} exact />
      <Route path="/leads" component={Leads} exact />
      <Route path="/newLead" component={NewLead} exact />
    </Switch>
  );
}
