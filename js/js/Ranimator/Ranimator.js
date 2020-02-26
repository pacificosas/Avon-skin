import { FadeIn } from './Ranimator.fadeIn';
import { FadeOut } from './Ranimator.fadeOut';
import { Scale } from './Ranimator.scale';
var Ranimator = /** @class */ (function () {
    function Ranimator() {
    }
    Ranimator.fadeIn = function (element, duration, cbs) {
        if (duration === void 0) { duration = 800; }
        var f = new FadeIn(element, duration);
        if (cbs) {
            f.onLoop = cbs.onLoop;
            f.onDone = cbs.onDone;
        }
        f.init();
        return f;
    };
    Ranimator.fadeOut = function (element, duration, cbs) {
        if (duration === void 0) { duration = 800; }
        var f = new FadeOut(element, duration);
        if (cbs) {
            f.onLoop = cbs.onLoop;
            f.onDone = cbs.onDone;
        }
        f.init();
        return f;
    };
    Ranimator.scale = function (element, duration, args, cbs) {
        if (duration === void 0) { duration = 800; }
        var f = new Scale(element, duration, args);
        if (cbs) {
            f.onLoop = cbs.onLoop;
            f.onDone = cbs.onDone;
        }
        f.init();
        return f;
    };
    return Ranimator;
}());
export { Ranimator };
//# sourceMappingURL=Ranimator.js.map