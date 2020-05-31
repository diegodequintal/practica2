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
var CameraOption = /** @class */ (function () {
    function CameraOption(decoratedCamera) {
        this.decoratedCamera = decoratedCamera;
    }
    CameraOption.prototype.takePhoto = function () {
        this.decoratedCamera.takePhoto();
    };
    return CameraOption;
}());
var ConcreteCamera = /** @class */ (function () {
    function ConcreteCamera() {
    }
    ConcreteCamera.prototype.takePhoto = function () {
        return 'Taking photo';
    };
    return ConcreteCamera;
}());
var WithSaturation = /** @class */ (function (_super) {
    __extends(WithSaturation, _super);
    function WithSaturation(camera) {
        return _super.call(this, camera) || this;
    }
    WithSaturation.prototype.takePhoto = function () {
        return this.decoratedCamera.takePhoto() + ', with saturation';
    };
    return WithSaturation;
}(CameraOption));
var WithGloss = /** @class */ (function (_super) {
    __extends(WithGloss, _super);
    function WithGloss(camera) {
        return _super.call(this, camera) || this;
    }
    WithGloss.prototype.takePhoto = function () {
        return this.decoratedCamera.takePhoto() + ', with Gloss';
    };
    return WithGloss;
}(CameraOption));
var WithContrast = /** @class */ (function (_super) {
    __extends(WithContrast, _super);
    function WithContrast(camera) {
        return _super.call(this, camera) || this;
    }
    WithContrast.prototype.takePhoto = function () {
        return this.decoratedCamera.takePhoto() + ', with constrast';
    };
    return WithContrast;
}(CameraOption));
var oldCamera = new ConcreteCamera();
var newGenerationCamera = new WithContrast(new WithGloss(new WithSaturation(new ConcreteCamera())));
console.log('1) Old camera: ' + oldCamera.takePhoto());
console.log('2) New camera: ' + newGenerationCamera.takePhoto());
