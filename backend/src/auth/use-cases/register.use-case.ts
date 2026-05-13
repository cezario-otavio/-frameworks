import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserRepository, Finduserbyemailrepository } from '../repository';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from '../dto/register.dto';


@Injectable()
export class RegisterUseCase {
    constructor(
        private readonly finduserbyemailrepository: Finduserbyemailrepository,
        private readonly createUserRepository: CreateUserRepository,
        private readonly jwtService: JwtService,
        private readonly logger: Logger, 
    ) {}

async execute(data: RegisterDto) {
    this.logger.log('Registering user...');

    const existingUser = await this.finduserbyemailrepository.findbyemail(
        data.email,
    );
    if (existingUser) {
        throw new BadRequestException('Email exists');
    }
        const passwordHash = await bcrypt.hash(data.password, 10)
    
    const user = await this.createUserRepository.create({
        name: data.name,
        email: data.email,
        passwordHash,
    });

    const payload = { sub: user.id, email: user.email };
    const acessToken = this.jwtService.sign(payload);

    this.logger.log('User registered sucessfully');
   
    return { acessToken, user};
   }
}

