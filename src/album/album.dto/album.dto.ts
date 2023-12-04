import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class AlbumDto {


    @IsNotEmpty()
    id: number;

    @IsDate()
    @IsNotEmpty()
    fechaInicio: Date;

    @IsDate()
    @IsNotEmpty()
    fechaFin: Date;

    @IsString()
    @IsNotEmpty()
    titulo: string;

}
