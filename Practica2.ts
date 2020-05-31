interface Camera {
  add()
}

class CameraOption implements Camera {
  decoratedCamera: Camera
  constructor(decoratedCamera: Camera) {
    this.decoratedCamera = decoratedCamera
  }
  add() {
    this.decoratedCamera.add()
  }
}

class ConcreteCamera implements Camera {
  add() {
    return 'Making camera'
  }
}

class WithSaturation extends CameraOption {
  constructor(camera: Camera) {
    super(camera)
  }

  public add() {
    return this.decoratedCamera.add() + ' with saturation option'
  }
}

class WithGloss extends CameraOption {
  constructor(camera: Camera) {
    super(camera)
  }

  public add() {
    return this.decoratedCamera.add() + ', with gloss option'
  }
}

class WithContrast extends CameraOption {
  constructor(camera: Camera) {
    super(camera)
  }

  public add() {
    return this.decoratedCamera.add() + ', with contrast option'
  }
}

let oldCamera = new ConcreteCamera()

let newGenerationCamera = new WithContrast(
  new WithGloss(new WithSaturation(new ConcreteCamera()))
)

console.log('1) Old camera: ' + oldCamera.add())
console.log('2) New camera: ' + newGenerationCamera.add())
