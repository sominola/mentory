import type { TokensDto } from "./tokens.dto";
import type { UserDto } from "./user";

export type AuthUserDto = {
    user: UserDto;
    tokens: TokensDto;
}