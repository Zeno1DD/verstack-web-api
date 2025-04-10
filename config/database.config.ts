import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  ip: process.env.DATABASE_IP,
  port: parseInt(process.env.DATABASE_PORT || "3300", 10),
  name: process.env.DATABASE_NAME || 'default_db',
}));
