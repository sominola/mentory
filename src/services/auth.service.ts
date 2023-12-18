import { UserDto } from '@/common/types/user/user.dto.ts';
import { SignUpDto } from '@/common/types/user/sign-up.dto.ts';

class AuthService {
  async register(dto: SignUpDto): Promise<UserDto> {
    return {
      firstName: dto.firstName,
      lastName: dto.lastName,
      id: new Date().getDate(),
      email: dto.email,
      fullName: `${dto.firstName} ${dto.lastName}`,
      avatarUrl: null,
    };
  }

  async login(): Promise<UserDto> {
    return {
      id: 0,
      firstName: 'Danil',
      lastName: 'Kravec',
      email: 'danil.kravec@gmail.com',
      fullName: 'Danil Kravec',
    };
  }
}

export const authService = new AuthService();
