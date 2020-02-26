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
import { Animate } from './Ranimator.animate';
var Scale = /** @class */ (function (_super) {
    __extends(Scale, _super);
    function Scale(element, duration, params) {
        var _this = _super.call(this, duration) || this;
        _this.element = element;
        _this.duration = duration;
        _this.params = params;
        _this.fps = 1000 / 24;
        if (!_this.isScaleDown) {
            _this.steps = _super.prototype.calculateSteps.call(_this, params.start - params.end);
        }
        else {
            _this.steps = _super.prototype.calculateSteps.call(_this, params.end - params.start);
        }
        _this.style = element.style;
        _this.currentScale = params.start;
        return _this;
    }
    Scale.prototype.loop = function (timer) {
        _super.prototype.cbValidation.call(this, this.onLoop) ? this.onLoop(this.element, timer) : null;
        if (this.evaluateEnd()) {
            clearInterval(timer);
            _super.prototype.cbValidation.call(this, this.onDone) ? this.onDone(this.element) : null;
            return true;
        }
        else {
            this.addStep();
            this.style.transform = "scale(" + this.currentScale + ")";
        }
    };
    Scale.prototype.isScaleDown = function () {
        if (this.params.start > this.params.end) {
            return true;
        }
    };
    Scale.prototype.evaluateEnd = function () {
        if (this.isScaleDown()) {
            return this.currentScale <= this.params.end;
        }
        else {
            return this.currentScale >= this.params.end;
        }
    };
    Scale.prototype.addStep = function () {
        if (this.isScaleDown()) {
            this.currentScale -= this.steps;
        }
        else {
            this.currentScale += this.steps;
        }
    };
    return Scale;
}(Animate));
export { Scale };
//# sourceMappingURL=Ranimator.scale.js.map