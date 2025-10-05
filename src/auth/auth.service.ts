// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { supabase } from "@/lib/supabaseClient";
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class AuthService {
  async signup(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw new UnauthorizedException(error.message);

    return data;
  }

  async login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw new UnauthorizedException(error.message);

    return data;
  }

  async getUser(accessToken: string) {
    const { data, error } = await supabase.auth.getUser(accessToken);

    if (error) throw new UnauthorizedException(error.message);

    return data.user;
  }
}
