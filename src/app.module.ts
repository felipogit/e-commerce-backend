import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateModule } from './modules/state/state.module';
import { CityModule } from './modules/city/city.module';
import { AddressModule } from './modules/address/address.module';




@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
      migrations:[`${__dirname}/migration/{.ts,*.js}`],
      migrationsRun:true,
      synchronize: true,
      

    }), 
    UsersModule, StateModule, CityModule, AddressModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
