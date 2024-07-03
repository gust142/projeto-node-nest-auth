import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUsuarioDto: CreateUserDto): Promise<User>;
    findByEmail(email: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        email: string;
        password: string;
        name: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
