var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Animate } from './Ranimator.animate';
var Fade = /** @class */ (function (_super) {
    __extends(Fade, _super);
    function Fade(element, duration) {
        var _this = _super.call(this, duration) || this;
        _this.element = element;
        _this.duration = duration;
        _this.fps = 1000 / 24;
        _this.steps = _super.prototype.calculateSteps.call(_this);
        _this.style = element.style;
        return _this;
    }
    Fade.prototype.loop = function (timer) {
        _super.prototype.cbValidation.call(this, this.onLoop) ? this.onLoop(this.element, timer) : null;
        if (this.evaluateEnd()) {
            clearInterval(timer);
            _super.prototype.cbValidation.call(this, this.onDone) ? this.onDone(this.element) : null;
            return true;
        }
        else {
            this.addStep();
            this.style.opacity = this.currentOpacity;
        }
    };
    Fade.prototype.evaluateEnd = function () {
        return true;
    };
    Fade.prototype.addStep = function () {
        this.currentOpacity += this.steps;
    };
    return Fade;
}(Animate));
export { Fade };
//# sourceMappingURL=Ranimator.fade.js.map