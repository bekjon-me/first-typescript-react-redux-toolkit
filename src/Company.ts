import getRandomInt from "./utils";

export class Company {
  companyName: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = "Dragons";
    this.location = {
      lat: getRandomInt(90),
      lng: getRandomInt(90),
    };
  }
  markerContent(): string {
    return `
    <h1>
      Name ${this.companyName}
    </h1>
    `;
  }
}
