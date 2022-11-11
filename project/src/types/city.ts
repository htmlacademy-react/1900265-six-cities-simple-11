export interface PointsOfMap {
  lat: number;
  lng: number;
}

export interface City {
  id: number;
  title: string;
  points: PointsOfMap;
  zoom: number;
}

export type Cities = City[];
