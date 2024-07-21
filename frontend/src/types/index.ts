export interface Professional {
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
