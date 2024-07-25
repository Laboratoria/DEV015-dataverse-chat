import  header  from "../components/header.js"

function panel() {
  document.title=`Dataverse Chat - Panel`;
  const contentHome = document.createElement('div');
  
  contentHome.appendChild(header());

  const a = document.createElement('h2');
  a.innerHTML="ESTAS EN EL PANEL";
  contentHome.appendChild(a);
   
  return contentHome;

}

export default panel;