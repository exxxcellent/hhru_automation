import {
    BadRequestException,
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { ErrorsEnum } from 'libs';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers['authorization'] as string;

        if (!authHeader)
            throw new UnauthorizedException(
                ErrorsEnum.AUTHORIZATION_IS_REQUIRED,
            );

        const parts = authHeader.split(' ');

        if (parts.length !== 2 || parts[0] !== 'Bearer')
            throw new BadRequestException();

        const accessToken = parts[1];

        request.accessToken = accessToken;

        return true;
    }
}
