import React from 'react'
import { useHistory } from "react-router-dom";


const PackageSmallView = (props) => {

    const user = props.user;
    const count = props.count;

    const history = useHistory();
    const handleClick = (path) => {
        history.push(path);
    }

    return (
       
 <div class="container">
  <div class="card">
    <div class="box">
      <div class="content">  
     <h1>Research Group</h1>
     <br/> <button type="button" class="btn btn-default btn-circle btn-lg">
     <h1>{user.groupid}</h1>
                            </button>
   
    <br/>
      <h3>Department: {user.department}</h3>
       <h3>Leader : {user.memberLeader}</h3> 
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
  </div>
    );
}

export default PackageSmallView;


