import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entity";
import { IAddressRequest } from "../../interfaces/properties";
import { v4 as uuid} from "uuid"

const createAddressService = async ({district, zipCode, number, city, state }:IAddressRequest) => {

  const addressRepo = AppDataSource.getRepository(Addresses);
  const address = new Addresses();
  address.id = uuid()
  address.city = city;
  address.district = district;
  address.zipCode = zipCode;
  address.number = number || "S/N";
  address.state = state;

  addressRepo.create(address);
  await addressRepo.save(address);

  return address;
}

export default createAddressService;