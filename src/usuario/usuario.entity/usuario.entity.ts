import { FotoEntity } from 'src/foto/foto.entity';
import { RedsocialEntity } from 'src/red_social/redsocial.entity/redsocial.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsuarioEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    nombre: String;

    @Column()
    telefono: String;

    @OneToMany(() => FotoEntity, foto => foto.album)
    fotos: FotoEntity[];

    @ManyToOne(() => RedsocialEntity, redsocial => redsocial.usuario)
    redsocial: RedsocialEntity;
}