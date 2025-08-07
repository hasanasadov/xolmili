export type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
};

export type ProjectDetailPageProps = {
  params: {
    id: string;
  };
};