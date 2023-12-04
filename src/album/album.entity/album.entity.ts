import { FotoEntity } from 'src/foto/foto.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class AlbumEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    fechaInicio: Date;

    @Column()
    fechaFin: Date;

    @Column()
    @IsNotEmpty()
    titulo: string;

    @OneToMany(() => FotoEntity, foto => foto.album)
    fotos: FotoEntity[];
}