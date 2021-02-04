import { Controller, Get, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  getHello(): string {
    const { networkInterfaces } = require('os');

    const nets = networkInterfaces();
    // const results = Object.create(null); // Or just '{}', an empty object

    for (const name of Object.keys(nets)) {
      if (name === 'en0') {
        for (const net of nets[name]) {
          // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
          if (net.family === 'IPv4' && !net.internal) {
            return `${net.address}-${process.env.TEST_PARAM}`;
          }
        }
      }
      // for (const net of nets[name]) {
      //     // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
      //     if (net.family === 'IPv4' && !net.internal) {
      //         if (!results[name]) {
      //             results[name] = [];
      //         }
      //         results[name].push(net.address);
      //     }
      // }
    }
    return this.appService.getHello();
  }
}
