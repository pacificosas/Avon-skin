import { main as SearchViewHandler } from './searchView_noImgHandler';
import { brochureRedirection } from './brochureRedirection';
import { gup } from './libs/gup';
var ADMIN = {
    key: 'avonrol',
    value: new RegExp('^correcciones$')
};
var gupVal = gup();
window.addEventListener('load', function () {
    console.log("var");
    brochureRedirection(ADMIN, '/brochure*', gupVal);
    SearchViewHandler(ADMIN, '/search/.*');
});
//# sourceMappingURL=index.js.map