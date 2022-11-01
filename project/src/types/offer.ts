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
}

export type Offers = Offer[];
