var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Fade } from './Ranimator.fade';
var FadeOut = /** @class */ (function (_super) {
    __extends(FadeOut, _super);
    function FadeOut(element, duration) {
        var _this = _super.call(this, element, duration) || this;
        _this.currentOpacity = 1;
        return _this;
    }
    FadeOut.prototype.evaluateEnd = function () {
        return this.currentOpacity <= 0;
    };
    FadeOut.prototype.addStep = function () {
        this.currentOpacity -= this.steps;
    };
    return FadeOut;
}(Fade));
export { FadeOut };
//# sourceMappingURL=Ranimator.fadeOut.js.map