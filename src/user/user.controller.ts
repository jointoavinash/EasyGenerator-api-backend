import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('signup')
  async signup(
    @Body() body: { email: string; name: string; password: string },
  ) {
    return this.userService.signup(body.email, body.name, body.password);
  }

  @Post('signin')
  async signin(@Body() body: { email: string; password: string }) {
    return this.userService.signin(body.email, body.password);
  }
}
