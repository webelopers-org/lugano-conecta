export interface Professional {
  _id?: string;
  name?: string;
  lastname?: string;
  phone?: string;
  email?: string;
  fantasyName?: string;
  services?: Service[];
}

export interface Service {
  name?: string;
}
