import * as OpenAI from 'https://esm.run/openai';
import { getApiKey } from '/lib/apiKey.js';


function getContext(names, allCharacters) {
  if (!allCharacters) {
    return "Eres " + names + " y sin mencionar tu nombre responde solo en español";
  } else {
    return "Eres una conferencia de mujeres historicamente importante donde estarian " + names + " responde personificando a las mujeres como una voz en conjuto y solo en español";
  }
}

async function callOpenAIApi(context, text) {
  const openai = new OpenAI.OpenAI({
    apiKey: getApiKey(),
    dangerouslyAllowBrowser: true
  }
  );
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: context },
      { role: 'user', content: text }],
    model: 'gpt-4o',
  });
  const getChatBox = document.getElementsByClassName('messages')[0];
  const respond = document.createElement('li');
  respond.classList.add('her');
  respond.appendChild(document.createTextNode(chatCompletion.choices[0].message.content));
  getChatBox.appendChild(respond);
}


export const renderChat = (data, allCharacters = false) => {
  getApiKey();
  const view = document.createElement('div');
  view.classList.add('chat-container');  // Add container class

  const right = document.createElement('div');
  right.classList.add('chat-box');  // Changed class name to chat-box

  const title = document.createElement('h2');
  title.textContent = allCharacters ? "Chatea con nosotras:" : "Chatea Conmigo:";
  right.appendChild(title);

  const chatBox = document.createElement('ul');
  chatBox.classList.add('messages');
  right.appendChild(chatBox);

  const writeDiv = document.createElement('div');
  writeDiv.classList.add('write');

  const textarea = document.createElement('textarea');
  textarea.setAttribute('name', 'message');
  textarea.setAttribute('rows', 4);
  textarea.classList.add('message-input');  // Added class for styling
  writeDiv.appendChild(textarea);

  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.setAttribute('id', 'send');
  button.textContent = 'ENVIAR';
  button.classList.add('send-button');  // Added class for styling
  writeDiv.appendChild(button);

  button.addEventListener('click', function () {
    const messageBox = document.querySelector('textarea[name="message"]');
    const names = allCharacters ? data.map(data => data.name).join(', ') : data['name'];

    const me_ask = document.createElement('li');
    me_ask.classList.add('me');
    me_ask.appendChild(document.createTextNode(messageBox.value));
    chatBox.appendChild(me_ask);

    const assistant_context = getContext(names, allCharacters);
    callOpenAIApi(assistant_context, messageBox.value);
    messageBox.value = "";
    messageBox.focus();
  });

  right.appendChild(writeDiv);
  view.appendChild(right);

  return view;
}
