export interface CreateStoreData {
  name: string;
  address: string;
  location: string;
  phoneNumber: string;
  website: string;
}

export interface UpdateStoreData {
  name?: string;
  address?: string;
  location?: string;
  phoneNumber: string;
  website: string;
  isActive?: boolean;
}
