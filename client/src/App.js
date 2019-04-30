import React from "react";
import AppNavbar from "./components/AppNavbar";
import Posts from "./components/Posts";
import PostModal from "./components/PostModal";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <AppNavbar />
                <Container>
                    <PostModal />
                    <Posts />
                </Container>
            </div>
        </Provider>
    );
}

export default App;
