import React from 'react';
import axios from 'axios';

import Navbar from './nav-bar';
import './../../component/css/Page.css';

import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import ListItemIcon from '@mui/material/ListItemIcon';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import ListItem from '@mui/material/ListItem';

export default class AddSchema extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            schemaName:"",
            department:"",
            schema:null,
            fileName:"Insert File",
            message: "",
            type:"",
            open: false
        }
    }

    onChange = (e) => {        
        this.setState({[e.target.id]: e.target.value});
        console.log(e.target.value);
    }

    onFileChange = (e) => {
        this.setState({
            schema:e.target.files[0],
            fileName:e.target.files[0].name
        })
    }

    onChageSelected = (e) => {
        this.setState({department: e.target.value});
    }

    onSubmit = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append("schemaName", this.state.schemaName);
        formData.append("department", this.state.department);
        formData.append("schema", this.state.schema);
        formData.append("fileName", this.state.fileName);

        await axios.post("http://localhost:8088/marking/add", formData)
        .then((res)=> this.setState({
            message: res.data,
            type:"success",
            open: true
        }))
        .catch((err) => this.setState({
            message: err.message,
            type:"error",
            open: true
        }))

        //window.location = `/Admin/viewSchema`;
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    render() {
        return (
            <>     
                <div className="AllView">
                    <Navbar/>
                    
                    <h1 style={{color: 'white'}}> Add Schema </h1>

                    <Container sx={{ 
                            backgroundColor: "black", 
                            color: "white",
                            border: '2px solid white',
                            width:"600px",
                            height:"auto"                    
                        }}>

                    <FormGroup sx={{marginTop: "20px"}}>
                        <ListItem sx={{backgroundColor:"whitesmoke"}} >
                        <ListItemIcon>
                            <PermIdentityRoundedIcon fontSize="medium" />
                        </ListItemIcon>
                        <TextField 
                            fullWidth
                            id="schemaName" 
                            label="Assignment Name" 
                            variant="standard"
                            onChange={(e) => this.onChange(e)}
                            size="small" required/>
                        </ListItem>
                    </FormGroup>

                    <FormGroup sx={{marginTop: "20px"}}>
                        <ListItem sx={{backgroundColor:"whitesmoke"}} >
                        <ListItemIcon>
                            <ApartmentRoundedIcon fontSize="medium" />
                        </ListItemIcon>
                        <InputLabel id="demo-simple-select-standard-label"></InputLabel>
                        <Select 
                            fullWidth                           
                            variant="standard"
                            labelId="demo-simple-select-standard-label"
                            id="department"
                            value={this.state.asgDep}
                            onChange={(e) => this.onChageSelected(e)}
                            lable="Department"
                            >
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value="IT">IT</MenuItem>
                            <MenuItem value="SE">SE</MenuItem>
                            <MenuItem value="CS">CS</MenuItem>
                        </Select>
                        </ListItem>
                    </FormGroup>
                    
                    <FormGroup sx={{marginTop: "20px"}}>
                    <ListItem sx={{backgroundColor:"whitesmoke", color:"black"}} >
                            <label htmlFor="icon-button-file">
                                <IconButton 
                                    color="primary"
                                    id="schema" 
                                    aria-label="upload picture"
                                    component="span">
                                    <UploadFileRoundedIcon />                                                                  
                                </IconButton>
                                {this.state.fileName} 
                                <Input 
                                    fullWidth
                                    sx={{
                                        display: 'none',
                                    }}
                                    id="icon-button-file"                                    
                                    onChange={(e) => this.onFileChange(e)}                                    
                                    type="file" />                                
                            </label>
                            </ListItem>
                    </FormGroup>

                    <Button 
                        fullWidth
                        sx={{marginTop: "20px", border:"2px solid white", marginBottom:"20px"}}
                        variant="contained" 
                        size="small"
                        onClick={(e) => this.onSubmit(e)}
                        color="success" >
                        Submit
                    </Button>

                    </Container>
                    
                    <Snackbar open={this.state.open} autoHideDuration={3000} onClose={this.handleClose}>
                        <Alert onClose={this.handleClose} severity={this.state.type} sx={{ width: '100%' }}>
                            {this.state.message}
                        </Alert>
                    </Snackbar>
                </div>
            </>
        )
    }
}