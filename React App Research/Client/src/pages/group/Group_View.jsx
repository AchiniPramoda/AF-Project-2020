import React, { useEffect, useState } from 'react';
import "./Group_view.css";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { Grid} from '@material-ui/core';
import axios from 'axios';
import Navbar from '../admin/nav-bar';


import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ButtonGroup from '@mui/material/ButtonGroup';
import AlertMsg from '../alert/message';

function GroupView() {

  

  const [group, setgroup] = useState([])

   const getgroups=()=>{
             axios.get("http://localhost:8088/group/viewgroup/")
              .then((res)=>{
                console.log(res.data);
                setgroup(res.data);
              })
              .catch((error)=>{
                console.log(error);
              })
   }
    
    useEffect(()=>{
      getgroups();
    })

    const onDeleteHandlle = (id) => {    
      axios
        .delete("http://localhost:8088/group/delete/"+ id)
        .then((res)=> AlertMsg("success", "success", res.data))
        .catch((err) => AlertMsg("error", "error", err.message))
    };

   

  const updategroupNavigate = (id) => {
   window.location = `/Student/Group_Edit/${id}`;
   
}


// const updategroupNavigate= ()=>{
//   let path = "/Group_Edit";
//   history.push(path);
// }

    return(
       


             //<Box sx={{
        //         position: 'absolute',
        //         marginTop:"100px",
        //         marginLeft:"250px",
        //         width: 1250,
        //         bgcolor: 'background.paper',
        //         border: '5px solid black',
        //         //boxShadow: 24,
        //         backgroundColor:"white",
        //         p: 0.5
        //     }}>

        //         <TableContainer component={Paper}>
        //           <Table size="small" sx={{ Width: 630, border: '2px solid black', marginLeft:6,marginRight:6,marginTop:6,marginBottom:6}} aria-label="customized table">
        //               <TableHead>
        //               <TableRow sx={{backgroundColor:"gray", height:"10px"}}>
        //                   <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold", color:"white"}}>Group ID</TableCell>
        //                   <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold",color:"white"}}>Department</TableCell>
        //                   <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold",color:"white"}}>Leader</TableCell>
        //                   <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold",color:"white"}}>Member No 01</TableCell>
        //                   <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold",color:"white"}}>Member No 02</TableCell>
        //                   <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold",color:"white"}}>Member No 03</TableCell>
        //                   <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold",color:"white"}}>Action</TableCell>
        //               </TableRow>
        //               </TableHead>
        //               <TableBody>
        //               {group.map((view) => (
        //                   <TableRow hover={true} sx={{height:"10px"}}>
        //                   <TableCell align="center" sx={{fontSize:"20px"}}> {view.groupid} </TableCell>
        //                   <TableCell align="center" sx={{fontSize:"20px"}}> {view.department} </TableCell>
        //                   <TableCell align="center" sx={{fontSize:"20px"}}> {view.memberLeader} </TableCell>
        //                   <TableCell align="center" sx={{fontSize:"20px"}}> {view.memberone} </TableCell>
        //                   <TableCell align="center" sx={{fontSize:"20px"}}> {view.membertwo} </TableCell>
        //                   <TableCell align="center" sx={{fontSize:"20px"}}> {view.mamberthree} </TableCell>
        //                   <TableCell align="left" >
        //                     <ButtonGroup>
        //                       <ListItemButton
        //                           onClick={()=>onDeleteHandlle(view._id)}
        //                           component="a" 
        //                           //href={item.results}
        //                           sx={{ 
        //                               marginTop:"10px",
        //                               width:"60px"
        //                           }} >
        //                           <ListItemIcon>
        //                             <DeleteIcon color={'secondary'} align="left"/>
        //                           </ListItemIcon>
        //                           <ListItemText primary="" />
        //                       </ListItemButton> 
        //                       <Divider />
        //                       <ListItemButton
        //                           onClick={() =>updategroupNavigate(view._id)}
        //                           component="a" 
        //                           //href={item.results}
        //                           sx={{ 
        //                               marginLeft:"10px",
        //                               marginTop:"10px",
        //                               width:"50px"
        //                           }} >
        //                           <ListItemIcon>
        //                           <CreateIcon color={'primary'}/>
        //                           </ListItemIcon>
        //                           <ListItemText primary="" />
        //                       </ListItemButton> 
        //                       </ButtonGroup> 
        //                   </TableCell>
        //                   </TableRow>
        //               ))}
        //               </TableBody>
        //           </Table>
        //       </TableContainer>
        //     </Box>
    //         {/* <div class="tablealign-inv">
    //               <table class="table-Inv">

    <div>
    <Navbar/>
                  <table class="table-ab">


                    <tr>
                       <th>Group ID</th>
                       <th>Department</th>
                       <th>Leader</th>
                       <th>Member No 01</th>
                       <th>Member No 02</th>
                       <th>Member No 03</th>
                       <th>Action</th>                                 
                    </tr>

                    {group.map((view)=>(
                 <tr>
                    <td>{view.groupid}</td>
                    <td>{view.department}</td>
                    <td>{view.memberLeader}</td>
                    <td>{view.memberone}</td>
                    <td>{view.membertwo}</td>
                    <td>{view.mamberthree}</td>
                   
                    <td>                      
                       <Grid container> 
                             <Grid item> 
                               <IconButton aria-label="delete" onClick={()=>onDeleteHandlle(view._id)}>  
                                   <DeleteIcon color={'secondary'} /> 
                               </IconButton> 
                             </Grid>
                                <Grid item>                      
                                   <IconButton aria-label="delete" onClick={() =>updategroupNavigate(view._id)} >        
                                     <CreateIcon color={'primary'}/> 
                                   </IconButton> 
                               </Grid>  
                           </Grid>    
                     </td>
      
                 </tr>
                ))}
                         
             </table>

          </div>  

     

   
    )
}

export default GroupView;