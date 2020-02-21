import React from 'react';
import Saif from './components/navmenu'

const liste = [
    {
        title: "home"
    },
    { title: "services", drop: ["for entrepreneurs", "for students", "for hobbyists"] },
    { title: "contact" } ,
  
]
function App() {
    return (
        <Saif liste={liste} />
    )
}
export default App;
