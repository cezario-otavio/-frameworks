import { Injectable } from "@nestjs/common";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { PrismaService } from "src/shared/databases/prisma.database";

 @Injectable()
 export class finduserbyemailrepository {
    constructor(private readonly prisma: PrismaService) {}

    async findbyemail(email: string) {
        return await this.prisma.user.findUnique({ where: {email },
        });
    }
 }