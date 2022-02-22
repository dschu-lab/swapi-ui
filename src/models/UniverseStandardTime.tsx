export enum UniverseEpoch {
  "ABY" = "ABY",
  "BBY" = "BBY",
}

export class UniverseStandardTime {
  value: number;

  epoch: UniverseEpoch;

  /**
   * Formats a number into a formatted string
   *
   * @param value Number is treated as BBY when negative and ABY when positive
   * @returns Formatted string, like 99BBY
   */
  public static toFormattedString(value: number) {
    return `${Math.abs(value)}${
      value > 0 ? UniverseEpoch.ABY : UniverseEpoch.BBY
    }`;
  }

  constructor(raw: string) {
    if (raw.match(/BBY/)) {
      this.value = -parseFloat(raw.replace("BBY", ""));
      this.epoch = UniverseEpoch.BBY;
    } else if (raw.match(/ABY/)) {
      this.value = parseFloat(raw.replace("ABY", ""));
      this.epoch = UniverseEpoch.ABY;
    }
  }

  public toString() {
    return `${Math.abs(this.value)}${this.epoch}`;
  }
}
