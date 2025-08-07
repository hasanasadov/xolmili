export type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
};

export type ProjectDetailPageProps = {
  params: Promise<{ id: string }>;
};

export type AuthValueTypesLogin = { username: string; password: string };
export type AuthValueTypesRegister = {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
  rePassword: string;
  is_organizer: boolean;
};
export type AuthValueTypesForgot = {
  new_password: string;
  confirm_new_password: string;
};
