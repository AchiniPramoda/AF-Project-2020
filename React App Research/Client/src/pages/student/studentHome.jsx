import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Navbar from './nav-bar';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Grid } from "@material-ui/core";
import './student.css';
import { Button, CardContent } from "@mui/material";
import Image1 from "./hs1.jpg";
import Image2 from "./c1.jpg";
import Image3 from "./c2.jpg";
import Image4 from "./c3.jpg";
import Image5 from "./c4.jpg";
import { width } from "@mui/system";
 import Footer from './Footer.jsx';
 import SmallView from "../Notice/Notices_view"
 
 class StudentMain extends Component {
    
     constructor(props) {
         super(props);
         this.state = {
             notices: []
         }
     };
     
     // Get all packages from datasbase
     componentDidMount() {
         axios.get("http://localhost:8088/notice/viewNotice").then(res => {
             this.setState({ notices: res.data });
         }).catch(err => {
             console.log(err);
         });
     }
render () {
     return(


<div className="page">   

  <Navbar/>

       <Card  elevation={5} >
           <CardHeader
                  title="SPM Reasearch"
                  subheader="SLIIT Reaserch Project"
                />
                 <CardContent sx={{margin:2, minHeight:400,minWidth:600}} style={{ backgroundImage: `url(${Image1})`,   
                      backgroundSize:"cover",borderRadius:9,  boxShadow:"0 0 8px 0 black, 2px 2px 2px 0 #1b1b1b"
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
              <CardContent sx={{margin:0,Width:"auto", backgroundColor: '#38B9EC'}}>                
                  <img className="image1" src={Image2} />
                     <Button  variant="outlined" color="inherit" size="large" sx={{marginLeft:9,marginTop:2}} href="Student/ViewAssignment">
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
                       <CardContent sx={{margin:0, Width:"auto",backgroundColor:'#F1592A'}}>
                  <img className="image1" src={Image3} />
                  <Button  variant="outlined" color="inherit" size="large" sx={{marginLeft:13, marginTop:2}}>
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
                       <CardContent sx={{margin:0, Width:"auto",backgroundColor: '#8EC63F'}}>
                  <img className="image1" src={Image4} />
                  <Button  variant="outlined" color="inherit" size="large" sx={{marginLeft:13, marginTop:2}}  href="/Student/GroupView" >
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
                       <CardContent sx={{margin:0, Width:"auto", backgroundColor: '#92499E'}}>
                  <img className="image1" src={Image5} />
                  <Button  variant="outlined" color="inherit" size="large" sx={{marginLeft:12, marginTop:2}} href="Admin/ViewAssignment">
                      Assigment 
                  </Button>
                 </CardContent>
            </Card>
      </Grid> 
</Grid>
<br/>
<br/>
<Box sx={{  border: '4px dashed white', marginTop:"34px" }}>
<h1 style={{color: 'white'}}>NOTICES FOR ALL</h1>
</Box>


<React.Fragment>
                   
                   {
                       this.state.notices.map(notice=> {
                           return <SmallView notice={notice} count={3} />
                       })
                   }
               </React.Fragment><br/>
               <br/>


<Footer/>
   
</div>


     );
     }
     }

export default StudentMain;
