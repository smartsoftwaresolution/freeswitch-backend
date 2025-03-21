import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ExtensionsModule } from './extensions/extensions.module';
import { DomainModule } from './domain/domain.module';

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
@Module({
  imports: [
    ConfigModule.forRoot({  
      isGlobal: true }), // ✅ Load .env globally

    TypeOrmModule.forRootAsync({
      useFactory() {
        return {
        type: 'mysql',
        host:"mysql-2ebc6c7-riyaz-e7a1.l.aivencloud.com",
        port: 24279,
        username:"avnadmin",
        password: "AVNS_QdRR7PPdUz0HNElCNvD",
        database: "pbx",
        synchronize: true,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        }}
    }),
    ExtensionsModule,
    DomainModule,
  ],
})
export class AppModule { }
