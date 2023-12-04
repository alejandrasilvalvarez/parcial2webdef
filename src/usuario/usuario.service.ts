import { InjectRepository, TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioEntity } from "./usuario.entity/usuario.entity";
import { BadRequestException, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { BusinessError, BusinessLogicException } from "src/shared/errors/business-errors";
import { AlbumEntity } from "src/album/album.entity/album.entity";
import { validate } from "class-validator";

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
          throw new BusinessLogicException("The user with the given id was not found", BusinessError.NOT_FOUND);

        return museum;
    }

    async createUsuario(usuario: UsuarioEntity): Promise<UsuarioEntity> {
        const errors = await validate(usuario);
        if (errors.length > 0) {
            throw new BadRequestException('La validación falló, el número de teléfono debe tener 10 caracteres',);
        }
        return await this.usuarioRepository.save(usuario);
    }

}