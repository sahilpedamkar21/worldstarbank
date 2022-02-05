import React from 'react'
export default function Transhis(){
	const[trans,settrans] = React.useState([])




	React.useEffect(()=>{
	    fetch('https://stormy-inlet-66278.herokuapp.com/transactions')
	    .then(response=>response.json())
	    .then(data=>settrans(data))
	  } , [])






	const tdatabase = trans.map(info => {
		const c = info.id
		return(
			<tr>
	        <td className="lalign">{info.id}</td>
	        <td>{info.sender}</td>
	        <td>{info.reciever}</td>
	        <td>{info.amount}</td>
	        <td>{info.date.substring(0,10)}</td>
	        <td>{info.time.substring(0,8)}</td>
	      	</tr>

			)
	})


	return(
		<div id="wrapper">
	  <h1>TRANSACTION HISTORY</h1>
	  
	  <table id="keywords" cellSpacing="0" cellPadding="0">
	    <thead>
	      <tr>
	        <th><span>TRANSACTION ID</span></th>
	        <th><span>SENDER</span></th>
	        <th><span>RECIEVER</span></th>
	        <th><span>AMOUNT</span></th>
	        <th><span>DATE</span></th>
	        <th><span>TIME</span></th>
	      </tr>
	    </thead>
	    <tbody>
	      {tdatabase}
	    </tbody>
	  </table>
	 </div> 
	)
}