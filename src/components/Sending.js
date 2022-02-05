import React from 'react'
import data from './data'
import Popup from './Popup'
export default function Sending(props){
	const[ispopup, setispopup] = React.useState(false)
	const[recieverid, setrecieverid] = React.useState(0)

	const[database,setdatabase] = React.useState([])
	const[rname, setrname] = React.useState("")
	React.useEffect(()=>{
        fetch('https://stormy-inlet-66278.herokuapp.com/gettingusers')
        .then(response=>response.json())
        .then(data=>setdatabase(data))


        console.log(database)
      } , [])


	function togglepopup(rcid,rn){
		setispopup(!ispopup)
		setrecieverid(rcid)

		setrname(rn)
	}

	const dbase = database.map(info => {
		if(props.user !== info.id){
			return(
				
				<div className="card">
				  <img className="user-icon" src='https://clipground.com/images/img_avatar-png-2.png' />
				  <div className="container">
				    <h4><b>{info.name}</b></h4> 
				    <p>{info.email}</p> 
				    <button onClick={()=>togglepopup(info.id,info.name)} className='send-button'><img className='send-icon' src='https://static.thenounproject.com/png/1647118-200.png' /><h2>SEND</h2></button>
				  </div>
				</div>
			)
		}
	})


	return(
		<div className='mainsending'>
		<div className='sending'>
		<h1>SELECT THE USER YOU WANT TO TRANSFER MONEY TO</h1>

		<div className='user-collect'>
		{dbase}
		</div>

		
		{ispopup && <Popup userChange1={props.userChange1} userChange2={props.userChange2} senderid={props.user} recieverid={recieverid} togglepopup={togglepopup} sname={props.sendername} rname={rname}/>}
		</div>
		</div>
	)
}