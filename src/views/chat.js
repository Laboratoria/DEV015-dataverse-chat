import  header  from "../components/header.js"
import data from "../data/dataset.js"

function chat(props) {
  const contentHome = document.createElement('div');
  
  const character = data.props
  console.log(props)

  contentHome.appendChild(header());
  
  const a = document.createElement('h2')
  a.innerHTML= 'CHAT'
  contentHome.appendChild(a)
   
  
  return contentHome;

}

export default chat;