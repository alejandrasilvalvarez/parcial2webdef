import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class FotoDto {

    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNumber()
    @IsNotEmpty()
    ISO: number;

    @IsNumber()
    @IsNotEmpty()
    velObturacion: number;

    @IsNumber()
    @IsNotEmpty()
    apertura: number;

    @IsDate()
    @IsNotEmpty()
    fecha: Date;
}
