import React from 'react';
import ReactDOM  from 'react-dom/client';

const heading1=React.createElement("h1", {
    id:"heading1"  
}, "hello world!");
const heading2 =React.createElement("h2", {
    id:"heading2"
    
}, "hello React!")

const container=React.createElement("div",{
    id:"div",
}, [heading1, heading2])

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(container)