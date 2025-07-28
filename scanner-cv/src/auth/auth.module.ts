import { forwardRef, Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';
import { UsersService } from 'src/users/users.service';
import { jwtConstants } from './auth.contants';
import { RolesGuard } from './roles.guard';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    })  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy,UsersService,RolesGuard],
  exports: [AuthService,JwtModule],
})
export class AuthModule {}
