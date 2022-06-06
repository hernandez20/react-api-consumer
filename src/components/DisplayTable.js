import React from "react";
import { Link, Router } from "react-router-dom";

import App from "../App";
import '../scss/table.scss'
const DisplayTable = ({ data, repositories }) => {
  console.log('data',data)
  return (

    <>


<section>

  <h1>Fixed Table header</h1>
  <div class="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
          <th>Img</th>
          <th>name</th>
          <th>Username</th>
          <th>Location</th>
          <th>Bio</th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
      {data &&
    data.map((data) => ( 
      
      <tr>
      <td>{!data.avatar_url ? (
          " "
        ) : (
          <img
            className=""
            src={data.avatar_url}
            alt={data.avatar_url}
          />
        )}</td>
      <td>{data.name}  </td>

      <Link to={`/user/${data.login}`}>
        <td>{data.login} </td>
      </Link>
     
      <td>{data.location}</td>

      </tr>

    ))
    
    }
       
        
        
      </tbody>
    </table>
  </div>
</section>



<div class="made-with-love">
  Made with
  <i>♥</i> by
  <a target="_blank" href="https://codepen.io/nikhil8krishnan"> Raul</a>
</div>



    </>
  );
};

export default DisplayTable;
