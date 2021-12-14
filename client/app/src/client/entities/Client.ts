interface Client {
  id: number,
  name: string,
  lastName: string,
  identificationTypeId: number,
  identification: string,
  date: Date,
  city: string,
  image?: string,
}

export default Client;

export type AddClientParams = Omit<Client, 'id' | 'identificationType'>
