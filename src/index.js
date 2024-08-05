import { setRootEl, setRoutes, onURLChange, navigateTo } from './router.js';
import { Home } from './views/Home.js';
import { ChatIndividual } from './views/ChatIndividual.js';
// import { chatGrupal } from './views/chatGrupal.js';
import { ErrorView } from './views/Error.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  setRootEl(root);

  setRoutes({
    '/': Home,
    '/chat-individual': ChatIndividual,
    // '/chat-grupal': chatGrupal,
    '/error': ErrorView,
  });

  onURLChange();

  const chatIcon = document.getElementById('chatIcon'); //para ir a vista de chatIndividual 
  if(chatIcon.addEventListener('click', () => {
    navigateTo('/chat-individual');
  }));
});

window.addEventListener('popstate', onURLChange);
