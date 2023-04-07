// Enum for volume low, medium, high
export enum Volume {
  Low = 1,
  Medium = 2,
  High = 3,
}

export class VolumeController {
  value: Volume;
  constructor(initVolume?: Volume) {
    this.value = initVolume || Volume.Low;
  }

  // Method to increase volume
  increaseVolume(): Volume {
    this.value = Volume.High;
    console.log(this.value);
    return this.value;
  }

  // Method to decrease volume
  decreaseVolume(): Volume {
    this.value = Volume.Low;
    console.log(this.value);
    return this.value;
  }
}
