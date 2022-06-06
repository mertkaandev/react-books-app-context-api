import React from "react";
import BookList from "./components/BookList.js"
import BookContextProvider from "./contexts/BookContext.js";

class App extends React.Component {

 render(){
   return (
     <div>
       {/* The BookList component is wrapped by the BookContextProvider. */}
       <BookContextProvider>
           <BookList/>
       </BookContextProvider>

     </div>
   )
 }
}

export default App;

