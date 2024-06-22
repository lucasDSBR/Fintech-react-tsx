
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Sidenav from './components/sidenav'
import { DataContextProvider } from './Context/DataContext'
import Resumo from './pages/resumo'
import Vendas from './pages/vendas'
import './style.css'
import Venda from './pages/venda'

function App() {


  return (
	<BrowserRouter>
		<DataContextProvider>
		<div className='container'>
			<Sidenav/>
			<main>
				<Header/>
				<Routes>
					<Route path='/' element={<Resumo/>} id='test'/>
					<Route path='/vendas' element={<Vendas/>}/>
					<Route path='/vendas/:id' element={<Venda/>}/>
				</Routes>

			</main>
		</div>
		</DataContextProvider>
	</BrowserRouter>
  )
}

export default App
