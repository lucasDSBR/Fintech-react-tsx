import React from "react"
import { NavLink } from "react-router-dom"
const Sidenav = () => {


  return (
    <nav className="sidenav box bg-3">
		<img src="#" alt="Logo Fintech"/>
		<ul>
			<li>
				<span>
					<img src="#" alt=""/>
				</span>
				<NavLink to={'/'}>Resumo</NavLink>
			</li>
			<li>
				<span>
					<img src="#" alt=""/>
				</span>
				<NavLink to={'/vendas'}>Vendas</NavLink>
			</li>
			<li>
				<span>
					<img src="#" alt=""/>
				</span>
				<a href="#">Webhooks</a>
			</li>
			<li>
				<span>
					<img src="#" alt=""/>
				</span>
				<a href="#">Configurações</a>
			</li>
			<li>
				<span>
					<img src="#" alt=""/>
				</span>
				<a href="#">Contato</a>
			</li>
			<li>
				<span>
					<img src="#" alt=""/>
				</span>
				<a href="#">Sair</a>
			</li>
		</ul>
	</nav>
  )
}

export default Sidenav
