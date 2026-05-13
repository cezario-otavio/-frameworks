import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

 @Injectable()
 export class Finduserbyemailrepository {
    constructor(private readonly prisma: PrismaService) {}

    async findbyemail(email: string) {
        return await this.prisma.user.findUnique({ where: {email },
        });
    }
 }