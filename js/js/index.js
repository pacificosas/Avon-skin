import { main as SearchViewHandler } from './searchView_noImgHandler';
import { brochureRedirection } from './brochureRedirection';
var ADMIN = {
    key: 'avonrol',
    value: new RegExp('correcciones')
};
brochureRedirection(ADMIN, '/brochure*');
window.addEventListener('load', function () {
    SearchViewHandler(ADMIN, '/search/.*');
});
//# sourceMappingURL=index.js.map