// src/auth/auth.guard.ts
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { supabase } from '@/lib/supabaseClient';

const session = await supabase.auth.getSession();

await fetch("http://localhost:3000/api/protected", {
  headers: {
    Authorization: `Bearer ${session.data.session?.access_token}`,
  },
});

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers['authorization'];

    if (!authHeader) throw new UnauthorizedException('No token provided');

    const token = authHeader.replace('Bearer ', '');
    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data.user) throw new UnauthorizedException('Invalid token');

    req.user = data.user; // attach user to request
    return true;
  }
}
