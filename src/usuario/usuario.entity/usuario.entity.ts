import { IsNotEmpty, IsPhoneNumber, Length } from 'class-validator';
import { FotoEntity } from 'src/foto/foto.entity';
import { RedsocialEntity } from 'src/red_social/redsocial.entity/redsocial.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsuarioEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    nombre: String;

    
    @IsNotEmpty()
    @Length(10, 10, { message: 'El número de teléfono debe tener exactamente 10 caracteres' })
    telefono: string;

    @OneToMany(() => FotoEntity, foto => foto.album)
    fotos: FotoEntity[];

    @ManyToOne(() => RedsocialEntity, redsocial => redsocial.usuario)
    redsocial: RedsocialEntity;
}