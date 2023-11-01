export type ActiveSessionDto = {
    lastActiveAt: string;
    userAgent?: string;
    ip?: string;
    refreshToken: string;
}