import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ExtensionsModule } from './extensions/extensions.module';
import { DomainModule } from './domain/domain.module';

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
@Module({
  imports: [
    ConfigModule.forRoot({   envFilePath: '.env', // Specify the file path
      isGlobal: true }), // ✅ Load .env globally

    TypeOrmModule.forRootAsync({
      useFactory() {
        return {
        type: 'mysql',
        host:process.env.DB_HOST,
        port: 24279,
        username:process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        synchronize: true,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        }}
    }),
    ExtensionsModule,
    DomainModule,
  ],
})
export class AppModule { }
