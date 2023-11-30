import { InjectRepository, TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioEntity } from "./usuario.entity/usuario.entity";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { BusinessError, BusinessLogicException } from "src/shared/errors/business-errors";
import { AlbumEntity } from "src/album/album.entity/album.entity";

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

    async findUsuarioById(id: number): Promise<UsuarioEntity> {
        const museum: UsuarioEntity = await this.usuarioRepository.findOne({where: {id: id,}, relations: ["redsocial",] } );
        if (!museum)
          throw new BusinessLogicException("The album with the given id was not found", BusinessError.NOT_FOUND);
   
        return museum;
    }

    async createUsuario(album: UsuarioEntity): Promise<UsuarioEntity> {
        return await this.usuarioRepository.save(album);
    }

}