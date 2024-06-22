import React, { useEffect, useState } from "react"
import DateRange from "./DateRange";
import Meses from "./Meses";
import { useLocation } from "react-router-dom";
const Header = () => {
	const [title, setTtitle] = useState('Resumo');
	const location = useLocation()
	useEffect(() => {
		if(location.pathname ==="/") setTtitle("Resumo"), document.title = "Resumo";
		else if(location.pathname ==="/vendas") setTtitle("Vendas"), document.title = "Vendas";
	})
	return (
		<header className="mb">
			<div className="daterange mb">
				<DateRange/>
				<h1 className="box bg-3">{title}</h1>
			</div>

			<Meses/>
		</header>
	)
}

export default Header
