import { Controller, UseInterceptors } from '@nestjs/common';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors/business-errors.interceptor';

@Controller('foto')
@UseInterceptors(BusinessErrorsInterceptor)
export class FotoController {}
