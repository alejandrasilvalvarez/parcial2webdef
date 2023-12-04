import { BadRequestException, Injectable } from "@nestjs/common";
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
    ) { }

    async findAlbumById(id: number): Promise<AlbumEntity> {
        const album: AlbumEntity = await this.albumRepository.findOne({ where: { id: id, }, relations: ["fotos",] });
        if (!album)
            throw new BusinessLogicException("The album with the given id was not found", BusinessError.NOT_FOUND);

        return album;
    }

    async createAlbum(album: AlbumEntity): Promise<AlbumEntity> {
        if (!album.titulo) {
            throw new BadRequestException('El título del álbum no puede estar vacío');
        }
        return await this.albumRepository.save(album);
    }

    async deleteAlbum(id: number) {
        const album: AlbumEntity = await this.albumRepository.findOne({ where: { id } });
        if (!album)
            throw new BusinessLogicException("The album with the given id was not found", BusinessError.NOT_FOUND);
        const fotosCount: number = await this.albumRepository
            .createQueryBuilder("album")
            .leftJoinAndSelect("album.fotos", "foto")
            .where("album.id = :id", { id })
            .getCount();

        if (fotosCount > 0) {
            throw new BusinessLogicException("The album has associated photos and cannot be deleted", BusinessError.PRECONDITION_FAILED);
        }
        await this.albumRepository.remove(album);
    }
}