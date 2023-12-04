import { IsNotEmpty, Length } from 'class-validator';
import { FotoEntity } from 'src/foto/foto.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity/usuario.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RedsocialEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    nombre: string;

    @IsNotEmpty()
    @Length(20, 100, { message: 'El número de teléfono debe tener exactamente 10 caracteres' })
    slogan: string;

    @OneToMany(() => UsuarioEntity, usuario => usuario.redsocial)
    usuario: UsuarioEntity[];
}