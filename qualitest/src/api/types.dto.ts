export interface DimensionsDto {
  width: number;
  height: number;
  depth: number;
}

export interface ReviewDto {
  comment: string;

  rating: number;

  reviewerName: string;
  reviewerEmail: string;

  date: string;
}

export interface ProductDto {
  id: number;

  title: string;
  description: string;

  price: number;
  discountPercentage: number;

  rating: number;

  thumbnail: string;

  weight: number;
  dimensions: DimensionsDto;

  reviews: ReviewDto[];
}
