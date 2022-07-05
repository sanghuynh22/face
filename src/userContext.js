import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
const userContext = createContext();
const UserProvider = ({ children }) => {
	const [user, setUser] = useState([]);
	useEffect(() => {
		axios
			.get("https://randomuser.me/api/?results=10")
			.then((response) => setUser(response.data.results))
			.catch((error) => console.log("error", error));
	}, []);
	const value = {
		user,
	};
	return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export { UserProvider, userContext };
