interface Place {
  id: string;
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string[];
  rating: number;
  price_per_night: number;
  availability: boolean;
  image_url: string;
}

interface PlacesResponce {
  message: string;
  results: number;
  places: Place[];
}

interface PlaceResponse {
  message: string;
  place: Place;
}

interface FilterParams {
  location?: string;
  title?: string;
  order?: string;
}

interface PlaceFormValues {
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string;
  rating?: number;
  price_per_night?: number;
  availability: boolean;
}

export type {
  Place,
  PlacesResponce,
  FilterParams,
  PlaceFormValues,
  PlaceResponse,
};
