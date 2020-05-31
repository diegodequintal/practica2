interface Camera {
  takePhoto()
}

class CameraOption implements Camera {
  decoratedCamera: Camera
  constructor(decoratedCamera: Camera) {
    this.decoratedCamera = decoratedCamera
  }
  takePhoto() {
    this.decoratedCamera.takePhoto()
  }
}

class ConcreteCamera implements Camera {
  takePhoto() {
    return 'Taking photo'
  }
}

class WithSaturation extends CameraOption {
  constructor(camera: Camera) {
    super(camera)
  }

  public takePhoto() {
    return this.decoratedCamera.takePhoto() + ', with saturation'
  }
}

class WithGloss extends CameraOption {
  constructor(camera: Camera) {
    super(camera)
  }

  public takePhoto() {
    return this.decoratedCamera.takePhoto() + ', with Gloss'
  }
}

class WithContrast extends CameraOption {
  constructor(camera: Camera) {
    super(camera)
  }

  public takePhoto() {
    return this.decoratedCamera.takePhoto() + ', with constrast'
  }
}

let oldCamera = new ConcreteCamera()

let newGenerationCamera = new WithContrast(
  new WithGloss(new WithSaturation(new ConcreteCamera()))
)

console.log('1) Old camera: ' + oldCamera.takePhoto())
console.log('2) New camera: ' + newGenerationCamera.takePhoto())
