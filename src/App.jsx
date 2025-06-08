import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
const [user,setUser] = useState('');
const [userData,setUserData] = useState(null);

const handleSearch=()=>{
  axios.get("https://api.github.com/users/"+user)
  .then((response)=>{
    console.log(response)
     setUserData(response.data)
  })
    .catch((error)=>
    {
      console.log(error)
      alert("Something went wrong")
    })
 
}


  return (
    <>
      <div className="formContainer">
        <div className="container">
       <input className="inputField" type="text" placeholder='Enter UserName'onChange = {(e)=>setUser(e.target.value)} />
       <button className="butn"onClick={handleSearch}>Fetch Details</button>
      </div>
      </div>
    
  
      {userData &&(
      <div className='profile'>
        <img src={userData.avatar_url} alt={`${userData.avatar_url}'s profile `}/>
      
      <h1 className="name">{userData.name}</h1>
      <p>{userData.bio}</p>
      <ul>
        <li>Repos : {userData.public_repos}</li>
        <li>Followers : {userData.followers}</li>
        <li>Following: {userData.following}</li>
        
        </ul>
      <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="myButton">
        Visit Profile
      </a>
        </div>
      )}
    </>
  )
}

export default App
