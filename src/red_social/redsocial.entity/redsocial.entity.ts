import { FotoEntity } from 'src/foto/foto.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity/usuario.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RedsocialEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    nombre: string;

    @Column()
    slogan: string;

    @OneToMany(() => UsuarioEntity, usuario => usuario.redsocial)
    usuario: UsuarioEntity[];
}