import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class RedsocialDto {

    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    slogan: string;
}
