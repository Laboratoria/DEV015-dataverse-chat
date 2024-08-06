import { setRootEl, setRoutes, onURLChange } from './router.js';
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
  
});

window.addEventListener('popstate', onURLChange);
