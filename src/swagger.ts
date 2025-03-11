import { ConfigService } from '@nestjs/config';
import { NestApplication } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CommonLogger } from './core/utils/commonLogger.util';

export default async function (app: NestApplication) {
    const configService = app.get(ConfigService);
    const logger = new CommonLogger();

    const docsTitle = configService.get<string>('docs.title');
    const docsDesc = configService.get<string>('docs.description');
    const docsVersion = configService.get<string>('docs.version');
    const docsPrefix = configService.get<string>('docs.prefix');

    logger.log(`==========================================================`);
    logger.log(`Docs will serve on ${docsPrefix}`);
    logger.log(`==========================================================`);

    const config = new DocumentBuilder()
        .setTitle(docsTitle!)
        .setDescription(docsDesc!)
        .setVersion(docsVersion!)
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(docsPrefix!, app, document);
}
