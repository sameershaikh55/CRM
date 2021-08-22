// IMPORTS
import "./style/style.css";
import { Route, Switch } from "react-router";
import Dashboard from "./pages/Dashboard";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Reports from "./pages/Reports";
import Calender from "./pages/Calender";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	return (
		<div>
			<ScrollToTop />
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/report" component={Reports} />
				<Route exact path="/calender" component={Calender} />
			</Switch>
		</div>
	);
}

export default App;
