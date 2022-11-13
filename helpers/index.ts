import { IFormData } from "./../interfaces/data.interface";

export const validateFormData = (formData: IFormData): boolean => {
  const { startDate, fromCity, toCity } = formData;
  if (fromCity.length < 3 || toCity.length < 3 || startDate.length < 10) {
    return true;
  }
  return false;
};

export const validateDate = (firstDate: string, secondDate: string): boolean => {
  return new Date(firstDate).getTime() >= new Date(secondDate).getTime();
};
