import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as fs from 'fs'
import { dump } from 'js-yaml'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('sample example')
    .setDescription('The sample API description')
    .setVersion('1.0')
    .addTag('sample')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  fs.writeFileSync("./swagger-spec.yaml", dump(document, {}));
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
