"use client";

import Clock from "@/components/clock";
import LoginForm from "@/components/login";

import fetchAuth from "@/client-js/fetchAuth";
import { useEffect, useState } from "react";

export default function Home() {
    const [greeting, setGreeting] = useState("Loading...");
    const [data, setData] = useState({ own: { username: "loading" } });
    const [login, getLogin] = useState({ state: "loading" });

    useEffect(() => {
        handleData();
    }, [login]); // login als Abhängigkeit hinzugefügt

    async function handleData() {
        const response = await fetchAuth("https://api-time.tinyweb.net/user/list");

        console.log(response)
        if (response?.own?.username || login.state === "loggedin") {
            setGreeting(`Hi ${response.own.username.charAt(0).toUpperCase() + response.own.username.slice(1)}!`);
            getLogin({ state: "loggedin" });
        } else {
            getLogin({ state: "loggedout" });
        }
    }

    return (
        <>
            {login.state === "loggedout" && <LoginForm getLogin={getLogin} />}
            <h1>
                <span>{greeting}</span>
            </h1>
            <Clock />
            <br /> <br /> <br />
        </>
    );
}
