import React from "react";

const CurTime=new Date();
const Year = CurTime.getFullYear();

function Footer(){
     return (
          <footer>
               <p>Made with ❤️ by Anurag</p>
               <p>Copyright ⓒ {Year}</p>
          </footer>
     );
}

export default Footer;