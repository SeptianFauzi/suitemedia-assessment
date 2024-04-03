export enum EGender {
  MALE = "Male",
  FEMALE = "Female",
}
export interface IPetsDetails {
  id: number;
  name: string;
  gender: EGender;
  age: string;
  price: number;
  imageSource: string;
}

export interface IToysList {
  id: number;
  name: string;
  price: number;
  imageSource: string;
  product: string;
  size: string;
  bonus: string;
}

export interface IPetKnowledge {
  id: number;
  title: string;
  imageSource: string;
  description: string;
}
