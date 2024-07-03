import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {

  }
  async create(createProductDto: CreateProductDto): Promise<any> {
    createProductDto.active = true;
    const produto = await this.prisma.product.create({
      data: createProductDto
    })
    return {
      message: 'Produto criado com sucesso',
      produto: produto
    };
  }

  async findAll(): Promise<Product[]> {
    return await this.prisma.product.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
