export interface PointsOfMap {
  lat: number;
  lng: number;
}

export interface Offer {
  id: number;
  cityId: number;
  premium: boolean;
  image: string;
  propertyName: string;
  ratingStars: number;
  propertyType: string;
  cost: number;
  points: PointsOfMap;
}

export type Offers = Offer[];
