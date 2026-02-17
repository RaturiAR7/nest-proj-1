export class CreateUserDto {
  id: number;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user' | 'manager';
  isActive: boolean;
  createdAt: Date;
}
