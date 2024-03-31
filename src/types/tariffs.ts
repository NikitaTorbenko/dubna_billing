export interface ITariffs {
  id: number;
  period: number;
  price: number;
  type: {
    id: number;
    value: string;
  };
}
