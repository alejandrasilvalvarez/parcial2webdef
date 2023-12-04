import { Controller, UseInterceptors } from '@nestjs/common';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors/business-errors.interceptor';

@Controller('album')
@UseInterceptors(BusinessErrorsInterceptor)
export class AlbumController {}
