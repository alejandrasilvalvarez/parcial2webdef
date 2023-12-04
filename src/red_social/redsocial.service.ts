import { BadRequestException, Injectable } from "@nestjs/common";
import { RedsocialEntity } from "./redsocial.entity/redsocial.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { validate } from "class-validator";

@Injectable()
export class RedsocialService {
    constructor(
        @InjectRepository(RedsocialEntity)
        private readonly redsocialRepository: Repository<RedsocialEntity>
    ){}

    async createRedsocial(redsocial: RedsocialEntity): Promise<RedsocialEntity> {
        const errors = await validate(redsocial);
        if (errors.length > 0) {
            throw new BadRequestException('La validación falló, el slogan debe tener al menos 20 caracteres',);
        }
        return await this.redsocialRepository.save(redsocial);
    }
}