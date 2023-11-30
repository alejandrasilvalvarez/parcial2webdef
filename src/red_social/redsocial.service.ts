import { Injectable } from "@nestjs/common";
import { RedsocialEntity } from "./redsocial.entity/redsocial.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class RedsocialService {
    constructor(
        @InjectRepository(RedsocialEntity)
        private readonly redsocialRepository: Repository<RedsocialEntity>
    ){}
}