"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
// src/auth/auth.guard.ts
const common_1 = require("@nestjs/common");
const supabaseClient_1 = require("@/lib/supabaseClient");
let AuthGuard = class AuthGuard {
    async canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const authHeader = req.headers['authorization'];
        if (!authHeader)
            throw new common_1.UnauthorizedException('No token provided');
        const token = authHeader.replace('Bearer ', '');
        const { data, error } = await supabaseClient_1.supabase.auth.getUser(token);
        if (error || !data.user)
            throw new common_1.UnauthorizedException('Invalid token');
        req.user = data.user; // attach user to request
        return true;
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)()
], AuthGuard);
