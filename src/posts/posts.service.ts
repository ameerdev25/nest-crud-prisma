import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(data: { title: string; content: string }): Promise<Post> {
    return this.prisma.post.create({ data });
  }

  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  async findOne(id: number): Promise<Post | null> {
    return this.prisma.post.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<Post>): Promise<Post> {
    return this.prisma.post.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Post> {
    return this.prisma.post.delete({ where: { id } });
  }
}
