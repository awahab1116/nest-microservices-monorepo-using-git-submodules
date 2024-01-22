import { DataSourceOptions, DataSource } from 'typeorm';
import { User } from './entity/user.entity';
import * as dotenv from 'dotenv';
dotenv.config();

export const Config: DataSourceOptions = {
  type: process.env.NODE_DB_TYPE as any,
  host: process.env.NODE_DB_HOST,
  port: parseInt(process.env.NODE_DB_PORT),
  username: process.env.NODE_DB_USERNAME,
  password: process.env.NODE_DB_PASSWORD,
  database: process.env.NODE_DB_NAME,
  entities: [User],
  synchronize: true,
};
const dataSource = new DataSource(Config);
export default dataSource;
