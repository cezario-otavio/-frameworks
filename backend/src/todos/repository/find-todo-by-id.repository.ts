import { Injectable } from "@nestjs/common";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { PrismaService } from "src/shared/databases/prisma.database";

 @Injectable()
 export class findtodobyidrepository {
    constructor(private readonly prisma: PrismaService) {}

    async findbyid(id: string) {
        return await this.prisma.todo.findUnique({ where: { id },
        });
    }
 }