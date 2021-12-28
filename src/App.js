import React from 'react';
import { Switch,Route,Link} from 'react-router-dom';
import { HomePage } from './components/pages/homepage/homepage.component';
import './App.css'

const HatsPage = ()=>{
  return (
    <div>
      <h1>Hatspage</h1>
    </div>
  )}
// const TopicList = props=>{
//   console.log(props)
//   return (
//     <div>
//       <Link to={`${props.match.url}/13`}>topic list 13</Link>
//       <Link to={`${props.match.url}/15`}>topic list 15</Link>
//       <Link to={`${props.match.url}/17`}>topic list 17</Link>
//     <h1>Topic List Page</h1>
//     </div>
//   )}
// const TopicDetail = props=>{
//   console.log(props)
//   return (
//     <div>
//     <h1>Topic Details Page : {props.match.params.topicId}</h1>
//     </div>
//   )}


function App(){
  return (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop/hats" component={HatsPage} />
    </Switch>
  </div>
  );
}

export default App;

  
  


