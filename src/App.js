import React from 'react'
import Navigation from './components/Navigation'
import NavigationSend from './components/NavigationSend'
import Home from './components/Home'
import Customers from './components/Customers'
import Sending from './components/Sending'

import Transhis from './components/Transhis'
import Contactus from './components/Contactus'


function App() {
  const[page,setpage] = React.useState('home')
  const[userno, setuserno] = React.useState(0)
  const[database,setdatabase] = React.useState([])
  const[username, setusername] = React.useState("")

  /*React.useEffect(()=>{
        fetch('http://localhost:3000/')
        .then(response=>response.json())
        .then(data=>setdatabase(data))


        console.log(database)
      } , [])*/


  function pageChange(newpage, userid, un){
    setpage(newpage)
    setusername(un)
    if(userid>0){
      setuserno(userid)
    }

  }

  function userChange1(am,id){
      const datab = database.map(info=>{
        if(info.id===id){
          
          console.log(info.id)
          return({...info , balance : parseInt(parseInt(info.balance)-parseInt(am))})
        }
        else{
          return info
        }
      })
      console.log(datab)
      setdatabase(datab)
  }

  function userChange2(am,id){
      const datab = database.map(info=>{
        if(info.id===id){
          
          console.log(info.id)
          return({...info , balance : parseInt(parseInt(info.balance)+parseInt(am))})
        }
        else{
          return info
        }
      })
      console.log(datab)
      setdatabase(datab)
  }

  


  if(page==='home'){
    return (

      <div>
      <Navigation pageChange={pageChange}/>

      <Home />
      </div>
    );
  }
  else if(page=== 'Customers'){
    return (
      <div>
      <NavigationSend pageChange={pageChange}/>

      <Customers  pageChange={pageChange}/>
      </div>
    );
  }
  else if(page === 'transhistory'){
    return (
      <div>
      <NavigationSend pageChange={pageChange}/>

      <Transhis />
      </div>
    );
  }
  else if(page === 'ContactUs'){
    return (
      <div>
      <NavigationSend pageChange={pageChange}/>

      <Contactus/>
      </div>
    );
  }
  else{
    return(
    <div>
    <NavigationSend pageChange={pageChange}/>
    <Sending  userChange1={userChange1} userChange2={userChange2} user={userno} sendername={username}/>
    </div>
    )
  }
}

export default App;
