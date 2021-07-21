// IMPORTS
import "./style/style.css";
import { Route, Switch } from "react-router";
import Dashboard from "./pages/Dashboard";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Dashboard} />
			</Switch>
		</div>
	);
}

export default App;
