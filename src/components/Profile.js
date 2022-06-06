import React, { useState } from "react";
import DisplayTable from "./DisplayTable";
import '../scss/profile.scss'
import axios from "axios";
const Profile = () => {

  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = e => {
    setUsername(e.target.value);
  };

  const submitHandler = async e => {
    e.preventDefault();
    axios.get(`https://api.github.com/search/users?q=${username}`,
{
  params: {
    per_page: 10
  }
}

)
.then((response) => {
  console.log('myresponse',response.data.items)
  const profileJson = response.data.items
  if (profileJson) {
    setData(profileJson);
    
  }

  //setUsuarios(response.data.items)
  //console.log('usuarios', usuarios)
  //console.log(response.data);


}).catch(error => {
  console.log(error);
})



    //const profile = await fetch(`https://api.github.com/users/${username}`);
    //const profileJson = await profile.json();
    //console.log(profileJson);

    //const repositories = await fetch(profileJson.repos_url);
    //const repoJson = await repositories.json();
    //console.log(repoJson);


//prueba 2
//const profile1 = await fetch(`https://api.github.com/search/users?q=${username}`);

//console.log(profile1);






 
  };




  return (<>

    <div className="container">
      <div className="finder">
        <div className="finder__outer">
          <div className="finder__inner">
           <div className="finder__icon" onClick={submitHandler}>
      
           </div>
          

            <input
              className="finder__input"
              placeholder="search username here..."
              type="text"
              value={username}
              onChange={onChangeHandler}
            />
          </div>
        </div>
      
        

      </div>
    </div>
    <DisplayTable data={data} repositories={repositories} />
  </>)

}
export default Profile;
