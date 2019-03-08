export * from './dlt645.service';
import { Dlt645Service } from './dlt645.service';
export * from './modbusTCP.service';
import { ModbusTCPService } from './modbusTCP.service';
export const APIS = [Dlt645Service, ModbusTCPService];
