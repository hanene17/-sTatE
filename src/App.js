import React, { Component } from 'react';
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
    }
  };
  
 
  OnSetArray = () => {
    this.setState({ Person: [] }, ()  => setTimeout(() => {
      this.setState({ ...INITIAL_STATE })
    
    }, 4000));
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
     
     
     <Button  variant="outline-dark" size="xxl" onClick={this.OnSetArray }>
          Click me!!
        </Button>
           
      </div>





    );   
  }
  componentDidMount() {
    
  // set Interval
    this.interval = setTimeout(this.OnSetArray, 4000);
}
componentWillUnmount() {
  // Clear the interval right before component unmount
  clearInterval(this.interval);
}

}
 
export default App;