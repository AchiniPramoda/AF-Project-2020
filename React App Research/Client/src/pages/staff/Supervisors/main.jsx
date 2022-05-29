import Navbar from './nav-bar';
import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import "./supervisor.css";
import Image1 from "./hs1.jpg";
import Image2 from "./m3.png";
import Image3 from "./m1.png";
import Image4 from "./m5.png";
import Image5 from "./m4.png";

import {/* Button,*/ Grid } from "@material-ui/core";

import { Button, CardContent, CardMedia } from "@mui/material";
import { Box } from '@mui/system';


function SuperMain() {
  return(

<div className='sup-page'>   

<Navbar/>

       <Box  elevation={5} sx={{backgroundColor:"white",
                                      border:5,
                                      borderColor:"Black",
                                      borderRadius:3,
                                      boxShadow:"8px 8px 8px 8px black, 2px 2px 2px 0 #1b1b1b"}}>
      
     
           <h1>SPM Reasearch</h1>
             
         
            <CardContent sx={{margin:2, minHeight:400,minWidth:600}}  style={{ backgroundImage: `url(${Image1})`,   
                 backgroundSize:"cover"
               }}>
             
       
            </CardContent>
   </Box>


   <br/>
  <Grid container marginTop={9} spacing={4}>


  <Grid item xs={12} md={3} >
            <Box elevation={12} sx={{backgroundColor:"white",
                                      border:5,
                                      borderColor:"purple",
                                      borderRadius:5,
                                      boxShadow:"8px 8px 8px 8px black, 2px 2px 2px 0 #1b1b1b"}}>
                <h1>Panels</h1>
                        <CardContent sx={{margin:0,Width:"auto"}}>
                       <img className="image1" src={Image3} />
                       <Button  variant="outlined" color="secondary" size="large" sx={{marginLeft:5,
                                                                                    marginTop:3,
                                                                                    border:2,
                                                                                    borderColor:"purple"}} 
                                                                              href="Supervisor/researchView">
                         Panels
                     </Button >
                 </CardContent>
            </Box>
      </Grid>      
   
   
      
      <Grid item xs={12} md={3} >
            <Box elevation={12} sx={{backgroundColor:"white",
                                      border:5,
                                      borderColor:"green",
                                      borderRadius:5,
                                      boxShadow:"8px 8px 8px 8px black, 2px 2px 2px 0 #1b1b1b"}}>
                <h1>Topic</h1>
                        <CardContent sx={{margin:0,Width:"auto"}}>
                       <img className="image1" src={Image3} />
                       <Button  variant="outlined" color="success" size="large" sx={{marginLeft:7,
                                                                                    marginTop:3,
                                                                                    border:2,
                                                                                    borderColor:"green"}} 
                                                                              href="Supervisor/researchView">
                         Topic
                     </Button >
                 </CardContent>
            </Box>
      </Grid> 
     
      <Grid item xs={12} md={3} >
            <Box elevation={12} sx={{backgroundColor:"white",
                                      border:5,
                                      borderColor:"red",
                                      borderRadius:5,
                                      boxShadow:"8px 8px 8px 8px black, 2px 2px 2px 0 #1b1b1b"}}>
                <h1>Submissions</h1>
                        <CardContent sx={{margin:0,Width:"auto"}}>
                       <img className="image1" src={Image4} />
                       <Button  variant="outlined" color="error" size="large" sx={{marginLeft:5,
                                                                                    marginTop:3,
                                                                                    border:2,
                                                                                    borderColor:"red"}} 
                                                                              href="Supervisor/researchView">
                         Submissions
                     </Button >
                 </CardContent>
            </Box>
      </Grid> 

      <Grid item xs={12} md={3} >
            <Box elevation={12} sx={{backgroundColor:"white",
                                      border:5,
                                      borderColor:"blue",
                                      borderRadius:5,
                                      boxShadow:"8px 8px 8px 8px black, 2px 2px 2px 0 #1b1b1b"}}>
                <h1>Evelutions</h1>
                        <CardContent sx={{margin:0,Width:"auto"}}>
                       <img className="image1" src={Image5} />
                       <Button  variant="outlined" color="primary" size="large" sx={{marginLeft:5,
                                                                                    marginTop:3,
                                                                                    border:2,
                                                                                    borderColor:"blue"}} 
                                                                              href="/Supervisor/researchView">
                         Evelutions
                     </Button >
                 </CardContent>
            </Box>
      </Grid> 
</Grid>


 
   



</div>
  );
}

export default SuperMain;


