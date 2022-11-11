export interface PointsOfMap {
  lat: number;
  lng: number;
}

export interface PlaceImage {
  src: string;
}

export interface Offer {
  id: number;
  premium: boolean;
  image: PlaceImage;
  propertyName: string;
  ratingStars: number;
  propertyType: string;
  cost: number;
  points: PointsOfMap;
}

export type Offers = Offer[];
