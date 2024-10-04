import "./App.css";
import { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

export default class App extends Component {
    c = 5;
    render() {
        return (
            <div>
                <NavBar />
                <News />
            </div>
        );
    }
}
