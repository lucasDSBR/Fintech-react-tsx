
import Header from './components/header'
import Sidenav from './components/sidenav'
import { DataContextProvider } from './Context/DataContext'
import Resumo from './pages/resumo'
import './style.css'

function App() {


  return (
	<DataContextProvider>
    <div>
		<Sidenav/>
		<main>
			<Header/>
			<Resumo/>
		</main>
	</div>
	</DataContextProvider>
  )
}

export default App
