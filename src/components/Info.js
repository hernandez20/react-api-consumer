import React from "react";
import {useParams,} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
import '../scss/info.scss'
const Info = () => {
    

    const {id} = useParams();
    
    const [usuario, setUsuario] = useState({});

React.useEffect(() => {
    peticionGet()
},[])
 

const peticionGet = (login) => {
        
    axios.get(`https://api.github.com/users/${id}`)
      .then((response) => {
        
        
        
        setUsuario(response.data)
        console.log('usuario')
        console.log(usuario)
        
        


      }).catch(error => {
        console.log(error);
      })
  }

  return(<><div class="profile-wrapper">
  <div class="profile-image">
  {!usuario.avatar_url ? (
              " "
            ) : (
              <img
                className="ui small circular image"
                src={usuario.avatar_url}
                alt={usuario.avatar_url}
              />
            )}


  </div>
  <div class="close"></div>
  <h2 class="profile-title">{usuario.login}</h2>
  <div class="profile-info">
      <div class="content">
          <h3>{usuario.name}</h3>
          <p>{usuario.bio}</p>
      </div>
      <div class="stats">
          <div class="stat">
              <span class="number">{usuario.followers}</span> Followers
          </div>
          <div class="stat">
              <span class="number">{usuario.following}</span> Following
          </div>
          <div class="stat">
              <span class="number">{usuario.repo}</span> Repo
          </div>
      </div>
      <div class="arrow one"></div>
      <div class="arrow two"></div>
  </div>
</div></>)


}
export default Info;