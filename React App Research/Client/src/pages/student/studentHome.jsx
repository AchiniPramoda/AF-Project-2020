import React from "react";
import Navbar from './nav-bar';
import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Grid } from "@material-ui/core";
import './student.css';
import { Button, CardContent } from "@mui/material";
import Image1 from "./hs1.jpg";

function StudentMain() {

   

     return(


<div className="page">   

  <Navbar/>

       <Card  elevation={5} >
           <CardHeader
                  title="SPM Reasearch"
                  subheader="SLIIT Reaserch Project"
                />
                 <CardContent sx={{margin:2, minHeight:400,minWidth:600}}  style={{ backgroundImage: `url(${Image1})`,   
                      backgroundSize:"cover"
                    }}>
                  
                  {/* <Button sx={{marginLeft:50,marginTop:15}} variant="outlined" color="error" size="large">
                      Error
                   </Button> */}
                 </CardContent>
        </Card>

<br></br>
  
  <Grid container marginTop={9} spacing={4}>
    
    <Grid item xs={12} md={3}>
                 <Card elevation={5}>
                <CardHeader 
                   title="Research Submission"
                 
                />
              <CardContent sx={{margin:0,maxWidth:300, backgroundColor: '#68B2CB'}}>                
                  <img className="image1" src={Image1} />
                  <Button  variant="outlined" color="error" size="large" sx={{marginLeft:5,marginTop:2}} href="Student/ViewAssignment">
                       Submissions
                  </Button>
                 </CardContent>
            </Card>
      </Grid>     
   
   
      
       <Grid item xs={12} md={3}>
            <Card elevation={5}>
                <CardHeader 
                     title="Marking Schema"
                      />
                       <CardContent sx={{margin:0, maxWidth:300,backgroundColor: '#68B2CB'}}>
                  <img className="image1" src={Image1} />
                  <Button  variant="outlined" color="primary" size="large" sx={{marginLeft:5, marginTop:2}}>
                       Marking 
                  </Button>
                 </CardContent>
            </Card>
       </Grid> 
     

      <Grid item xs={12} md={3} >
            <Card elevation={5}>
            <CardHeader 
                     title=" Project Groups"
                      />
                       <CardContent sx={{margin:0, maxWidth:300,backgroundColor: '#68B2CB'}}>
                  <img className="image1" src={Image1} />
                  <Button  variant="outlined" color="primary" size="large" sx={{marginLeft:5, marginTop:2}}  href="/Student/GroupView" >
                      Groups 
                  </Button>
                 </CardContent>
            </Card>
      </Grid> 


      <Grid item xs={12} md={3}>
            <Card elevation={5}>
            <CardHeader 
                     title="Templete"
                      />
                       <CardContent sx={{margin:0, maxWidth:00,backgroundColor: '#68B2CB'}}>
                  <img className="image1" src={Image1} />
                  <Button  variant="outlined" color="primary" size="large" sx={{marginLeft:5, marginTop:2}} href="Admin/ViewAssignment">
                      Assigment 
                  </Button>
                 </CardContent>
            </Card>
      </Grid> 
</Grid>


 
   


   
</div>
  );
}

export default StudentMain;

