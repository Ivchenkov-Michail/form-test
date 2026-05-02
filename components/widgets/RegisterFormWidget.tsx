import RegisterForm from "@/components/features/RegisterForm";
import {
  CityOption,
  getCitiesOptions,
} from "@/components/shared/api/cities.query";

export async function RegisterFormWidget() {
  const cities: CityOption[] = await getCitiesOptions();

  return <RegisterForm cities={cities} />;
}
