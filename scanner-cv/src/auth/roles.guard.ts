import {
    Injectable,
    CanActivate,
    ExecutionContext,
  } from '@nestjs/common';
  import { Reflector } from '@nestjs/core';
  import { ROLES_KEY } from './roles.decorateur';
  
  @Injectable()
  export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
  
    canActivate(context: ExecutionContext): boolean {
      const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);

      console.log("requiredRoles", requiredRoles);
      
      if (!requiredRoles) {
        return true;
      }
      const { user } = context.switchToHttp().getRequest();
      console.log("user", user);

      return requiredRoles.includes(user.role);
    }
  }
  