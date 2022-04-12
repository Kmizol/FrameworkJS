import React from 'react';
import ReactDOM from 'react-dom';


// const Resultat = (props) => {
//     return (
//       <div className="Resultat">
//         <input type="text" readOnly value={props.value} />
//       </div>
//     )
//   }

//   const Ecran = (props) => {
//     return (
//       <div className="ecran">
//         <Resultat value =  {props.question}/>
//         <Resultat value =  {props.reponse}/>
//       </div>
//     )
//   }

  class Boutons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bName : props.bName,
      event : props.event
    };
  }

  render() {
    return (
      <button onClick={this.state.event}>{this.state.bName}</button>
    );
  }
}



export default Boutons;

// class Boutons extends React.Component {

 
//   render() {
//       return <div>
//           <Ecran />
//           <Bouton value="1"/>
//           <Bouton value="2"/>
//           <Bouton value="3"/>
//           <Bouton value="4"/>
//           <Bouton value="5"/>
//           <Bouton value="6"/>
//           <Bouton value="7"/>
//           <Bouton value="8"/>
//           <Bouton value="9"/>
//           <Bouton value="0"/>
          
        

//       </div>

      
//   }
// }
