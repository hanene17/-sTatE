import React, { Component, useState } from 'react';
import imgSrc from './imgSrc.jpg';
import './App.css';
import bgStyle from './bgStyle.jpg';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';






const INITIAL_STATE = {
  Person : [{
    
    fullName: 'hanen ghribi',
    bio: 'software engineering in Software Development\n ' +
 'Gafsa Private Higher School of Engineers\n '+
  'Graduation : 2017\n '+
  'Relevant Coursework: Operating Systems Architecture,Symfony frameWork, Linux/Unix Programming\n'+
  'Usability in Website and Software Design, C++ Programming I & II, Web Page Development\n'+
  'Relational Database Design & SQL, Data Engineering, Advanced Software Programming.', 
    profession:'JavaScript\n'+ 
     'HTML/ CSS\n'+ 
     'Symfony\n'+ 
     'AWS (Redshift, S3)\n'+ 
     'Python (Django)\n'+ 
     'SQL (PostgreSQL, Oracle)\n'+ 
     'REST APIs (GraphQL)\n'+ 
     'Git\n'+ 
     'EDUCATION\n'+ 
     'B.S.',
    
    }],
};
const spanStyles = {
  color: "red",
  borderColor: "#00f",
 
};
const imgStyle={
  
  width: 215,
    height: 200,
    borderRadius: 200 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "red" ,
   marginRight: "95%",
   
  };

  
class App extends Component {
  
  constructor(props) {
    super(props);
    
 
    this.state =  {INITIAL_STATE: false,
    Person:[],
    count: 1,
    message: '',
    
    }
    
    
  };
  
 
  OnSetArray = () => {
   
    this.setState({ Person: [] }, ()  => setTimeout(() => {
      this.setState({ ...INITIAL_STATE }) 
    
    }, 4000) );
    }
  

    countDown() {
      setInterval(() => {
        if (this.state.count <= 0) {
          clearInterval(this);
          this.setState(() => {
            return {message: "Click here"}
          }) 
        } else {
          this.setState((prevState) => {
            return {count: prevState.count + 1}
          }) 
        }
      }, 1000)
    }  
 
    
 
  render() {
  
    return (

      
       
     
      <div className="app" style={{
        backgroundImage: "url(" + bgStyle + ")",
        width: "50%",
        height: "800px",
       
      }}>
       
       
       
       {this.state.Person.map((listItems) => (
      
      <ul key={listItems}> 
   <img style={imgStyle} src={imgSrc}  alt= 'imgSrc'/> <br/>
    <li style={spanStyles}>
        fullName: </li> {listItems.fullName}   <br/> 
    <li style={spanStyles}>
        bio: </li> {listItems.bio} <br/> 
         
 
    <li style={spanStyles}>
        profession: </li>  {listItems.profession} <br/> 
     </ul> 
    
     
     ))}
     <div>
    
     <Button  variant="outline-dark" size="xxl" onClick={this.OnSetArray }>
          Click me!!
        </Button> <h1>
          {this.state.message ? this.state.message : this.state.count}
        </h1>
        </div>
           
      </div>





    );   
  }
  
  componentDidMount() {
    this.inter = setInterval(() => {
      if (this.state.count <= 0) {
        clearInterval(this.inter);
        this.setState({
          message: 'Click here'
        }); 
      } else {
        this.setState((prevState) => ({count: prevState.count + 1})); 
      }
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.inter);
  }
  

}
 
export default App;