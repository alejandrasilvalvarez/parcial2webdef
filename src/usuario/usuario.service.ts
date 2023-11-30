import { InjectRepository, TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioEntity } from "./usuario.entity/usuario.entity";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

imports: [TypeOrmModule.forFeature([UsuarioEntity])]

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>
    ){}

    async findAllUsuarios(): Promise<UsuarioEntity[]> {
        return await this.usuarioRepository.find({ relations: ["fotos",] });
    }
}