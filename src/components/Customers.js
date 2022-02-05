import React from 'react'
import data from "./data"
export default function Customers(props){
	const [database, setdatabase] = React.useState([])
	React.useEffect(()=>{
        fetch('https://stormy-inlet-66278.herokuapp.com/gettingusers')
        .then(response=>response.json())
        .then(data=>setdatabase(data))


        console.log(database)
      } , [])


	


	const tdatabase = database.map(info => {
		const c = info.id
		const un = info.name
		return(
			<tr>
	        <td className="lalign">{info.id}</td>
	        <td>{info.name}</td>
	        <td>{info.email}</td>
	        <td>{info.balance}</td>
	        <td><img onClick={()=>props.pageChange('trans',c,un)} className='icon-small' src='https://cdn-icons-png.flaticon.com/512/2878/2878547.png' /></td>
	      	</tr>

			)
	})
	return(
		<div id="wrapper">
	  <h1>CUSTOMER DETAILS</h1>
	  
	  <table id="keywords" cellSpacing="0" cellPadding="0">
	    <thead>
	      <tr>
	        <th><span>ID</span></th>
	        <th><span>NAME</span></th>
	        <th><span>EMAIL</span></th>
	        <th><span>AMOUNT</span></th>
	        <th><span>ACTION</span></th>
	      </tr>
	    </thead>
	    <tbody>
	      {tdatabase}
	    </tbody>
	  </table>
	 </div> 
	)
}