import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import React from "react";
//import success from "../../images/success.png";
//import styles from "./styles.module.css";
import  "./style.css";
import success from './suc.png';
import RobotAnimated from "./robot-animated"
import { Fragment } from "react/cjs/react.production.min";
import { Container } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";

const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState(true);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `http://localhost:8088/register/${param.id}/verify/${param.token}`;
				// http://localhost:8088/register/62834443f9f429c35b384672/verify/0e3ba84
				const { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [param]);

	return (
		<Fragment>
		{/* {validUrl ? ( */}
			<div className="containers">

         <Grid container sx={{marginLeft:30}}>
			 <Grid item>
			   <Container sx={{marginLeft:30,marginTop:4,border:4,borderColor:"white", boxShadow:"3px 4px 3px 6px #1b1b1b"}}>	
			    	<h1>Email verified successfully</h1>
				</Container>
			  </Grid>
			  <Grid item>
			   <Container sx={{marginLeft:30,marginTop:4,border:4,borderColor:"white", boxShadow:"3px 4px 3px 6px #1b1b1b"}}>
				<img src={success} alt="success_img" className="styles.success_img" />
				</Container>
			  </Grid>

			  <Grid item>
			  <Link to="/"> 
			  <Container sx={{marginLeft:30,marginTop:4,border:4,borderColor:"blue",minWidth:430,minHeight:80 ,boxShadow:"3px 4px 3px 6px #1b1b1b"}}>
			     
				    	<Typography sx={{marginLeft:30,marginTop:2,fontSize:33,color:"Blue",fontWeight:"bold"}}>Login</Typography>
			    	
				</Container>
				</Link>
			  </Grid>
		 </Grid>			

			
			</div>
		{/* // ) : (
			
		// 	<h1>404 Not Found<br/>
			
			
		// 	<div>
		//   <RobotAnimated />
		// 	</div>
		// 	something went wrong ,Try again !!!!!!!
		// 	</h1>

		// )} */}
		
	</Fragment>
	);
};


export default EmailVerify;