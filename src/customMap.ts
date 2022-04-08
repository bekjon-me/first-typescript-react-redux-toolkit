import { User } from "./User";
import { Company } from "./Company";

export class customMap {
  googleMap: google.maps.Map;

  constructor(map: string) {
    this.googleMap = new google.maps.Map(document.getElementById(map), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  userMarker(mapable: User | Company): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapable.location.lat,
        lng: mapable.location.lng,
      },
    });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mapable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
