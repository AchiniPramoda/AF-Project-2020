import React from 'react';
import "./Topic.css";
import axios from 'axios';
import Navbar from './../student/nav-bar';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default class TopicViewStd extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      topic:[],
      stdID:"",
      grpID:"",
      title:"",
      email:"",
      status:"",
      itemID:"",
      group:[]
    }
  }

  componentDidMount () {
    axios.get("http://localhost:8088/topic/views/pend")
    .then((res)=> {this.setState({
        topic : res.data
    }); console.log(res.data)}  )
    .catch((err) => console.error(err));    
  }

  rejectTopic = async (id) =>  {
      this.setState({
        status: "Rejected",
        itemID:id
      });

      await axios.get(`http://localhost:8088/topic/view/${id}`)
      .then((res)=> this.setState({
          stdID:res.data.stdID,
          grpID:res.data.grpID,
          title:res.data.title,
          email:res.data.email,
      }))
      .catch((err) => console.error(err))
      .finally(() => this.onSubmit());
   }

  accepttopic = async (id) => {
      console.log(id)
      this.setState({
        status: "Accepted",
        itemID:id
      });
      
      await axios.get(`http://localhost:8088/topic/view/${id}`)
      .then((res)=> this.setState({
        stdID:res.data.stdID,
        grpID:res.data.grpID,
        title:res.data.title,
        email:res.data.email,
      }))
      .catch((err) => console.error(err))
      .finally(() => this.onSubmit());      
   }

   onSubmit = () => {
    let topicdata = {
      stdID: this.state.stdID,
      grpID: this.state.grpID,
      title: this.state.title,
      email: this.state.email,
      status: this.state.status,
    }
    console.log(topicdata);

    axios.post(`http://localhost:8088/topicacc/response/${this.state.itemID}`, topicdata)
        .then((res)=> alert(res.data))
        .catch((err) => alert(err.message))
   }

  render() {
    return (
      <>
        <div className='topic_page'>
        <Navbar/>
  <div>


  <div className='topic_page'>
   

      <Box sx={{  border: '4px dashed blue', marginTop:16 }}>
          <h1 style={{color: 'white'}}>Topic View</h1>
        </Box>
                 <table class="table-topic">


                   <tr>
                      <th>Student ID</th>
                      <th>Group ID</th>
                      <th>Title</th>
                      <th>E-mail</th>
                                                      
                   </tr>

                   {this.state.topic.map((view) => (
                <tr>
                   <td>{view.stdID}</td>
                   <td>{view.grpID}</td>
                   <td>{view.title}</td>
                   <td>{view.email}</td>
                  
                  
            
     
                </tr>
               ))}
                        
            </table>

         </div>  




         {/* <Box sx={{
                
                 marginTop: '100px',
                 marginLeft: 10,
                 width: 1200,
                 bgcolor: 'background.paper',
                 border: '5px solid black',
                 //boxShadow: 24,
                 backgroundColor:"white",
                 p: 0.5,
                 marginBottom:20
             }}>

                 <TableContainer component={Paper}>
                   <Table size="small" sx={{ minWidth: 1000, maxWidth: 1200, border: '2px solid black'}} aria-label="customized table">
                       <TableHead>
                       <TableRow sx={{backgroundColor:"gray", height:"60px",color:"white"}}>
                           <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold",color:"white"}}>Leader ID</TableCell>
                           <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold",color:"white"}}>Group ID</TableCell>
                           <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold",color:"white"}}>Topic</TableCell>
                           <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold",color:"white"}}>Leader Email</TableCell>
                       </TableRow>
                       </TableHead>
                       <TableBody>
                       {this.state.topic.map((view) => (
                           <TableRow hover={true} sx={{height:"10px"}}>
                           <TableCell align="center" sx={{fontSize:"20px"}}> {view.stdID} </TableCell>
                           <TableCell align="center" sx={{fontSize:"20px"}}> {view.grpID} </TableCell>
                           <TableCell align="center" sx={{fontSize:"20px"}}> {view.title} </TableCell>
                           <TableCell align="center" sx={{fontSize:"20px"}}> {view.email} </TableCell>
                           
                           </TableRow>
                       ))}
                       </TableBody>
                   </Table>
               </TableContainer>
             </Box> */}
             </div>
            
        </div>
      </>
    )
  }
}