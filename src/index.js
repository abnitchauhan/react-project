import React from 'react'; 
import ReactDom from 'react-dom';
import  Random   from "./Blog.js";
import Data from "./data.json";
import Clock from './clock.js';
import Toggle from './toggle.js';
import Greeting from './greetings.js';


 ReactDom.render(<Random date={Data.date} text={Data.text} author = {Data.author} /> ,document.getElementById('root'));

 ReactDom.render(<Greeting /> ,document.getElementById('sub-specs'));