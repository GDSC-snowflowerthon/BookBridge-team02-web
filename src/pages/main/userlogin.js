import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/agencylogin.css";
import Header from '../../components/Layout/Header'

const AgencyLogin = () => {
const navigate = useNavigate();
const [id, setId] = useState("");
const [password, setPassword] = useState("");

const handleSignIn = async () => {
    try {
    const response = await axios.post("/login", {
        id,
        password,
    });
    navigate("/reciever/booklist");
    } catch (error) {
    console.log(error);
    }
};

return (
    <div className="login-container">
    <Header/>

    <div className="header-login">
        <h1 className="title">BookBridge</h1>
        <p className="subtitle">나의 시작이 될 수 있게</p>
    </div>
    <div className="form">
        <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="id"
        className="input-field"
        />
        <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="input-field"
        />
        <Link to="/donate/gui">

        <button onClick={handleSignIn} className="sign-in-button">
        Sign in
        </button>
        </Link>
        <Link to="/signup">
        <button className="sign-up-button">Sign up</button>
        </Link>
    </div>
    </div>
);
};

export default AgencyLogin;
