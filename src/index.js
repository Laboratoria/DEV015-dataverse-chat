import { setRootEl, setRoutes, onURLChange } from './router.js';
import { Home } from './views/Home.js';
import { ChatIndividual } from './views/ChatIndividual.js';
// import { chatGrupal } from './views/chatGrupal.js';
import { ErrorView } from './views/Error.js';
import { api } from './views/Api.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  setRootEl(root);

  setRoutes({
    '/': (props) => Home(props),
    '/chat-individual':  (props) => ChatIndividual(props),
    // '/chat-grupal': chatGrupal,
    '/error': ErrorView,
    '/api' : api,
  });

  onURLChange();
  
});

window.addEventListener('popstate', onURLChange);



