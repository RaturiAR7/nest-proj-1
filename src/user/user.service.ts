import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private users = [
    {
      id: 1,
      name: 'Anshul Raturi',
      email: 'anshul.raturi@example.com',
      password: 'hashed_password_123',
      role: 'admin',
      isActive: true,
    },
    {
      id: 2,
      name: 'Rahul Sharma',
      email: 'rahul.sharma@example.com',
      password: 'hashed_password_456',
      role: 'user',
      isActive: true,
    },
    {
      id: 3,
      name: 'Priya Verma',
      email: 'priya.verma@example.com',
      password: 'hashed_password_789',
      role: 'manager',
      isActive: false,
    },
  ];

  create(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
    return createUserDto;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.filter((user) => user.id === id);
    return user[0];
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
