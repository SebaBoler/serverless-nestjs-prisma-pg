import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SongService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const profil = await this.prisma.profil.findMany();
    Logger.log(JSON.stringify(profil));
    return profil;
  }

  async findAll2() {
    return await this.prisma.profil.findMany();
  }
}
