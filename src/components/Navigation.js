import React from 'react'
export default function Navigation(props){
	return(
		<nav>
		<div className='left'><img className='icon' src="https://cdn-icons-png.flaticon.com/512/1792/1792483.png" /><h1>WORLD-STAR BANK</h1></div>
		<div className='right'><h3 className='hand' onClick={()=>props.pageChange('Customers',0)}>VIEW CUSTOMERS</h3><h3 className='hand' onClick={()=>props.pageChange('transhistory',0)}>TRANSACTION HISTORY</h3><h3 className='hand' onClick={()=>props.pageChange('ContactUs',0)}>CONTACT US</h3></div>
		</nav>
		)
}