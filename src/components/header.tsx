import React from "react"
import { useData } from "../Context/DataContext"
function Header() {
	const { data } = useData();
	console.log(data)
  return (
    <div>
		Header
	</div>
  )
}

export default Header
