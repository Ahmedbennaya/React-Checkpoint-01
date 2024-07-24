
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import Name from './Components/Name';
import Image from './Components/Image';
import Description from './Components/Description';
import Price from './Components/Price'; 
import Navbar from './Components/navbar';


const App = () => {

  return (
    
   
  
    <div className="App">
      
        <Navbar/>
      <Card style={{ width: '18rem', margin: '20px auto' }}>
        <Image />
        <CardBody>
          <CardText><Price /></CardText> 
          <CardText><Description /></CardText>
        </CardBody>
      </Card>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Card style={{ width: '18rem', margin: '20px auto' }}>
        <Image />
        <CardBody>
          <CardTitle><Name /></CardTitle>
          <CardText><Price /></CardText> 
          <CardText><Description /></CardText>
        </CardBody>
      </Card>
      </div>
    </div>
    
  );
};

export default App;
