import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRouter from '../utils/resolveRouter';
const routers = {
    '/': Home,
    '/:id': Character,
    '/concact': 'Concat',
};
const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRouter(hash);
    let render = routers[route] ? routers[route] : Error404;
    content.innerHTML = await render();
}
export default router;