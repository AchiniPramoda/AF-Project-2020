import React, { Component } from 'react'
import axios from "axios";

import SmallView from "./Groupsmaller"
// import './Allgroup.scss'

import Navbar from '../student/nav-bar';



class AllForUser extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
           userm: []
        }
    };
    
    // Get all packages from datasbase
    componentDidMount() {
        axios.get("http://localhost:8088/group/viewgroup").then(res => {
            this.setState({userm: res.data });
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
    
        return (
        
            <div>
             <Navbar/>

            <br/>
            <br/>
            <br/>
            <br/>
            <h1>....RESEARCH GROUP DETAILS.....</h1>

            <br/>
            <br/>
            <br/>
            <hr/>
        
            <br/>
            <div>
     
      
      <br/>
      <hr />
      <br/>
      <br/>

                    
                    <React.Fragment>
                   
                        {
                            this.state.userm.map(userm => {
                                return <SmallView user={userm} count={3} />
                            })
                        }
                    </React.Fragment><br/>
               
                </div>
            </div>


        );
    }
}

export default AllForUser;