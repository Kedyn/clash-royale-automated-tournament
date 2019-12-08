// // As a regular user, I need to be able to register an account to access the project.

// //  email
// //  tag
// //  password

// import React, { Component } from "react";
// import {Form, Row, Col, FormControl} from "react-bootstrap";

// export default class RegisterPage extends Component {
//   constructor(props){
//       super(props);

//         this.state = {
//             validated: false,
//             // checking : false,
//             email : "",
//             playertag : "",
//             password : ""
//         };
//   }

//   componentDidMount() {

//   }
//   handleSubmit = async event => {
//       event.preventDefault();

//       const form =event.target;

//       if (form.checkValidity === false){
//           event.stopPropagation();
//       }
//   };
  
//     render() {
//         const{
//             validated,
//             // checking,
//             email,
//             playertag,
//             password
//         } = this.state;

//         return (
            
//             <Form noValidate validated={validated} onSubmit={this.handleSubmut}>
//                 <Row classname = "mb-4">
//                     <Col>
//                         <Form.Control
//                             type ="text"
//                             placeholder = "Enter Email"
//                             name = "email"
//                             required
//                             autoFocus= {true}

//                         />
//                         <Form.Control.Feedback type = "invalid">
//                             {email}
//                         </Form.Control.Feedback>
//                     </Col>
//                 </Row>
//                 <Row className = "mb-4">
//                     <Col>
//                         <FormControl.Control
//                             type = "text"
//                             placeholder = "Player Tag: #????"
//                             name = "playertag"
//                             required
//                             autoFocus={true}

//                         />
//                         <Form.Control.Feedback type = "invalid">
//                             {playertag}
//                         </Form.Control.Feedback>
//                     </Col>
//                 </Row>
//                 <Row className = "mb-4">
//                     <Col>
//                         <Form.Control
//                             type = "text"
//                             placeholder = "Password"
//                             name = "password"
//                             required
//                             autoFocus={true}
//                         />
//                         <Form.Control.Feedback type = "invalid">
//                             {password}
//                         </Form.Control.Feedback>
//                     </Col>
//                 </Row>

//             </Form>
//         );
//     }
// }
