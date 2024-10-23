import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class AppController {
  @Get(':name')  
  getHello(@Param('name') name: string): string {
    return `Hello ${name}`;
  }
}
