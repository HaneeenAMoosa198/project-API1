import React from "react";

import { Link, Route, Routes } from "react-router-dom";

import Home from './routes/home/Home'

import ContactUs from './routes/contacus/ContactUs'
import About from './routes/About/About'
function App() {
    return (<div>

        <nav>

            <ul>
                <li>

                    <Link to="/home">home page </Link>
                </li>
                <li>

                    <Link to="/aboutuS">about us  </Link>


                </li>
                <li>
                    <Link to="/contactUs">Contact Us page </Link>


                </li>


            </ul>
        </nav>

        <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/aboutuS" element={<About />}></Route>

            <Route path="/contactUs" element={<ContactUs />}></Route>

        </Routes>


    </div>);
}

export default App;