export interface IClient {
  limit: number;
  name: string;
  email: string;
  phone: string;
  birth_date: string;
  address: string;
  id: number;
  status: {
    id: number;
    value: string;
  };
  type: {
    id: number;
    value: string;
  };
  balance: number;
}
