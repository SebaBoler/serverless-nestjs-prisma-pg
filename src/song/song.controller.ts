import { Controller, Get } from '@nestjs/common';
import { SongService } from './song.service';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}

  // @Post()
  // async create(@Body() createSongDto: Song) {
  //   return await this.songService.create(createSongDto);
  // }

  @Get()
  findAll() {
    return this.songService.findAll2();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.songService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSongDto: UpdateSongDto) {
  //   return this.songService.update(+id, updateSongDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.songService.remove(+id);
  // }
}
