import { NestFactory } from '@nestjs/core';
import { VideosModule } from './videos.module';
import { AppDataSource } from "./dataSource"
import "reflect-metadata"
import { Video } from './entities/video.entity';

async function bootstrap() {

  const seedVideo = new Video();
  seedVideo.name = "Interview with Senior JS Developer";
  seedVideo.url = "https://www.youtube.com/watch?v=Uo3cL4nrGOk&t=54s&ab_channel=Programmersarealsohuman";
  await AppDataSource.initialize()
  AppDataSource.manager.save(seedVideo)
  const app = await NestFactory.create(VideosModule);
  app.enableCors()
  await app.listen(3000);
}

bootstrap();
