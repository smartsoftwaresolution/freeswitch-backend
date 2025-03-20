import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExtensionsModule } from './extensions/extensions.module';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Smart@123',
      database: 'pbx',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Disable in production
    }),
    ExtensionsModule,
    DomainModule,
  ],
})
export class AppModule {}
