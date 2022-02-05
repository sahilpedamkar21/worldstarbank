import React from 'react'
import Moneysent from './Moneysent'
export default function Popup(props){
	const [sent, setsent] = React.useState(false)
	const [amount, setamount] = React.useState(0)
	const [sent2, setsent2] = React.useState(false)


	function onamountchange(event){

		setamount(event.target.value)
	}
	


	


	function addingval(r){
		fetch('https://stormy-inlet-66278.herokuapp.com/adding', {
			method : 'PUT',
			headers: {'Content-Type': 'application/json'},
			body : JSON.stringify({
				r: r,
				amount : amount
			})
		})
	}

	function addingrecord(s,r){
		const cdate = new Date()
		const dispdate = (cdate.getDate()+1) + "/" + (cdate.getMonth()+1) + "/" + cdate.getFullYear()

		const disptime = cdate.getHours() + ":" + cdate.getMinutes() + ":" + cdate.getSeconds()
		console.log(dispdate)
		console.log(disptime)

		fetch('https://stormy-inlet-66278.herokuapp.com/recording', {
			method : 'POST',
			headers: {'Content-Type': 'application/json'},
			body : JSON.stringify({
				s : props.sname,
				r: props.rname,
				amount : amount,
				dispdate : dispdate,
				disptime : disptime
			})
		})

	}
	function togglesent(){
		


		const s = props.senderid
		const r = props.recieverid
		console.log(s)
		console.log(r)

		fetch('https://stormy-inlet-66278.herokuapp.com/sending', {
			method : 'PUT',
			headers: {'Content-Type': 'application/json'},
			body : JSON.stringify({
				s : s,
				r: r,
				amount : amount
			})
		})
		.then(response=>response.json())
		.then(addingval(r))
		.then(addingrecord(s,r))
		
		setsent(oldsent => !oldsent)
		
		
		

		
	}

	
	return(
		<div className="popup-box">

	      <div className="box">
	      		<span className="close-icon" onClick={()=>props.togglepopup()}>x</span>
	        	<div className='popup-content'>
				<h1>MONEY TRANSACTION</h1>
				<label>Enter Amount</label>
  				<input onChange={onamountchange} type="number" />
  				<button onClick={()=>togglesent()}>CONFIRM AND SEND MONEY</button>
				</div>

				{sent && 
					<Moneysent />
				}


	      </div>
	    </div>
		)
}