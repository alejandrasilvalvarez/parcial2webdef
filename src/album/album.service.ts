import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AlbumEntity } from "./album.entity/album.entity";
import {
    BusinessError,
    BusinessLogicException,
  } from '../shared/errors/business-errors';

@Injectable()
export class AlbumService {
    constructor(
        @InjectRepository(AlbumEntity)
        private readonly albumRepository: Repository<AlbumEntity>
    ){}

    async findOne(id: number): Promise<AlbumEntity> {
        const museum: AlbumEntity = await this.albumRepository.findOne({where: {id: id,}, relations: ["fotos",] } );
        if (!museum)
          throw new BusinessLogicException("The album with the given id was not found", BusinessError.NOT_FOUND);
   
        return museum;
    }
}