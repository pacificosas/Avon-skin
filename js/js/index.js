import { main as SearchViewHandler } from './searchView_noImgHandler';
import { brochureRedirection } from './brochureRedirection';
import { gup } from './libs/gup';
var ADMIN = {
    key: 'avonRol',
    value: new RegExp('^correcciones$')
};
window.avonRol = function (password) {
    sessionStorage.setItem(ADMIN.key, password);
};
var gupVal = gup();
console.log('path', window.location.pathname);
window.addEventListener('load', function () {
    brochureRedirection(ADMIN, '/brochure*');
    SearchViewHandler(ADMIN, '/search/.*', gupVal);
});
//# sourceMappingURL=index.js.map