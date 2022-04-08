import getRandomInt from "./utils";

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = "Bekjon";
    this.location = {
      lat: getRandomInt(90),
      lng: getRandomInt(90),
    };
  }
  markerContent(): string {
    return `
    <h6>
      Name ${this.name}
    </h6>
    `;
  }
}
