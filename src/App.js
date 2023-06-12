// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// const App=()=>
// {
//   console.log('Hello from Component');
//   return(
//     <div>
//       <p>
//         Hello World
//       </p>
//     </div>
//   )
// }


// export default App;
import "./App.css";

function App() {
  return (
    <div className="App">
      <Details
        pack="FREE"
        price="&#36;0"
        periods="/month"
       
        user="✔ Single User"
        storage="✔ 5GB Storage"
        publicProjects="✔ Unlimited Public Projests"
        comAcc="✔ Community Access"
        prvPro="❌ Unlimited Private Projects"
        phSup="❌ Dedicated Phone Support"
        subdom="❌ Free Subdomine"
        msp="❌ Monthly Status Report"
      />

      <Details
        pack="PLUS"
        price="&#36;9"
        periods="/month"
       
        user="✔ 5 User"
        storage="✔ 50GB Storage"
        publicProjects="✔ Unlimited Public Projests"
        comAcc="✔ Community Access"
        prvPro="✔ Unlimited Private Projects"
        phSup="✔ Dedicated Phone Support"
        subdom="✔ Free Subdomine"
        msp="❌ Monthly Status Report"
      />

      <Details
        pack="PRO"
        price="&#36;49"
        periods="/month"
       
        user="✔ Unlimited Users"
        storage="✔ 150GB Storage"
        publicProjects="✔ Unlimited Public Projests"
        comAcc="✔ Community Access"
        prvPro="✔ Unlimited Private Projects"
        phSup="✔ Dedicated Phone Support"
        subdom="✔ Unlimited Free Subdomine"
        msp="✔ Monthly Status Report"
      />
    </div>
  );
}

export default App;

function Details(props) {
  return (
    <div className="card">
      <p class="pack">{props.pack}</p>
      <h1>
        {props.price}
        <span class="periods">{props.periods}</span>
      </h1>
      <hr></hr>
      <p class="para">
         {props.user}
      </p>
      <p class="para">
         {props.storage}
      </p>
      <p class="para">
         {props.publicProjects}
      </p>
      <p class="para">
         {props.comAcc}
      </p>
      <p class="para">
         {props.prvPro}
      </p>
      <p class="para">
         {props.phSup}
      </p>
      <p class="para">
         {props.subdom}
      </p>
      <p class="para">
         {props.msp}
      </p>
      <button>BUTTON</button>
    </div>
  );
}
