
import { useParams } from "react-router-dom";
import VendaItem from "../components/VendaItem";
import { IVenda, useData } from "../Context/DataContext"
import { useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import Loading from "../components/Loading";

type VendaSemData = Omit<IVenda, 'data'>; //Remover item de um type

function Venda() {
	const {id} = useParams();
	const { data, loading } = useFetch<VendaSemData>(`https://data.origamid.dev/vendas/${id}`);

	if(loading == true) return <Loading/>
	if (data === null) return null;

	return (
		<div>
			<div className="box mb">
				ID: {data.id}
			</div>
			<div className="box mb">
				Nome: {data.nome}
			</div>
			<div className="box mb">
				Preço: {data.preco.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
			</div>
			<div className="box mb">
				Status: {data.status}
			</div>
			<div className="box mb">
				Pagamento: {data.pagamento}
			</div>
		</div>
	)
}

export default Venda
