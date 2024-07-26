import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { Video } from './entities/video.entity';
import { AppDataSource } from "./dataSource";
import { DomainVideo } from "./dto/domainVideo"

@Injectable()
export class VideosService {
  async create(createVideoDto: CreateVideoDto) {
    const video = new Video()
    video.name = createVideoDto.name
    video.url = createVideoDto.url
    await AppDataSource.manager.save(video)
  }

  async findAll(): Promise<DomainVideo[]> {
    const allVideos = await AppDataSource.manager.find(Video)
    return allVideos.map((v) => this.#entityToDto(v))
  }

  #entityToDto(video: Video): DomainVideo {
    return {
      id: video.id,
      name: video.name,
      url: video.url,
      updatedAt: video.updatedAt.getTime(),
      createdAt: video.createdAt.getTime()
    }
  }
}
