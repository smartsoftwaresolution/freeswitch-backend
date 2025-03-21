import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExtensionsModule } from './extensions/extensions.module';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-2ebc6c7-riyaz-e7a1.l.aivencloud.com',
      port: 24279,
      username: 'avnadmin',
      password: 'AVNS_QdRR7PPdUz0HNElCNvD',
      database: 'pbx',
      extra: {
        authPlugin: 'mysql_native_password',
      },
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Disable in production
    }),
    ExtensionsModule,
    DomainModule,
  ],
})
export class AppModule {}
