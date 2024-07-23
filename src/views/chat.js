import  header  from "../components/header.js"

function chat() {
  const contentHome = document.createElement('div');
  
  contentHome.appendChild(header());
  
  const a = document.createElement('h2')
  a.innerHTML="ESTAS EN EL CHAT"
  contentHome.appendChild(a)
   
  
  return contentHome;

}

export default chat;