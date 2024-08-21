import CONFIG from '/config.js';
import * as OpenAI from 'https://esm.run/openai';

function getContext(names, allCharacters){
  if (!allCharacters){
    return "Eres " + names + " y sin mencionar tu nombre responde solo en español";
  } else {
    return "Eres una conferencia de mujeres historicamente importante donde estarian " + names + " responde personificando a las mujeres como una voz en conjuto y solo en español";
  }
}

async function callOpenAIApi(context, text) {
  const openai = new OpenAI.OpenAI({
    apiKey: CONFIG.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true}
  );
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: context},
      { role: 'user', content: text }],
    model: 'gpt-4o',
  });
  // console.log(chatCompletion);
  alert(chatCompletion.choices[0].message.content)
};


export const renderChat = (data, allCharacters=false) => {
  const view = document.createElement('div');
  const right = document.createElement('div');
  right.classList.add('chat');
  if (allCharacters){
    right.innerHTML=`<h2>Chatea con nosotras:</h2><br><br>`;
  } else {
    right.innerHTML=`<h2>Chatea Conmigo:</h2><br><br>`;
  }
  const messagesDiv = document.createElement('div');
  messagesDiv.classList.add('messages');

  for(let i=0; i<10; i++){
    const p = document.createElement('p');
    p.innerHTML="";
    messagesDiv.appendChild(p);
  }

  const writeDiv = document.createElement('div');
  writeDiv.classList.add('write');

  const div1 = document.createElement('div');
  const textarea = document.createElement('textarea');
  textarea.setAttribute('name','message');
  textarea.setAttribute('rows',6);
  div1.appendChild(textarea);

  const div2 = document.createElement('div');
  const button = document.createElement('button');
  button.setAttribute('type','button');
  button.setAttribute('id','send');
  button.textContent='ENVIAR';

  button.addEventListener('click',function(){
    const messageBox = document.querySelector('textarea[name="message"]');
    let names = "";
    if (allCharacters){
      names = data.map(data => data.name).join(', ');
    } else {
      names = data['name'];
    }
    const assistant_context = getContext(names, allCharacters)
    callOpenAIApi(assistant_context, messageBox.value);
    messageBox.value = "";
    messageBox.focus();
  
  });
  writeDiv.appendChild(div1);
  writeDiv.appendChild(div2);

  right.appendChild(messagesDiv);
  right.appendChild(writeDiv);

  view.append(right);
  
  div2.appendChild(button);
  return view
  }

  