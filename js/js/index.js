import { main as SearchViewHandler } from './searchView_noImgHandler';
import { brochureRedirection } from './brochureRedirection';
brochureRedirection({
    key: 'avonrol',
    value: new RegExp('correcciones.')
}, '/brochure*', '/catalogos-avon');
window.onload = function () {
    SearchViewHandler('/search/.*');
};
//# sourceMappingURL=index.js.map