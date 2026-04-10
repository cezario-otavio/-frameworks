import { Injectable } from "@nestjs/common";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { PrismaService } from "src/shared/databases/prisma.database";

 @Injectable()
 export class findalltodosrepository {
    constructor(private readonly prisma: PrismaService) {}

    async findall() {
        return await this.prisma.todo.findMany();
    }
 }
 