var Animate = /** @class */ (function () {
    function Animate(duration) {
        this.duration = duration;
        this.fps = 1000 / 24;
    }
    Animate.prototype.loop = function (timer) {
        console.log('loop animation');
    };
    Animate.prototype.init = function () {
        var _this = this;
        this.timer = setInterval(function () {
            if (_this.loop) {
                _this.loop(_this.timer);
            }
        }, this.fps);
    };
    Animate.prototype.stop = function () {
        clearInterval(this.timer);
    };
    Animate.prototype.calculateSteps = function (to) {
        if (to === void 0) { to = 1; }
        return (to / this.duration) * this.fps;
    };
    Animate.prototype.cbValidation = function (cb) {
        if (cb && typeof cb == 'function') {
            return true;
        }
    };
    return Animate;
}());
export { Animate };
//# sourceMappingURL=Ranimator.animate.js.map