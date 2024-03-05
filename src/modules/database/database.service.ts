import { FindOneOptions, FindOptionsWhere, Repository } from 'typeorm';

export abstract class DatabaseService<T> {
  constructor(protected repo: Repository<T>) {}
  async findAll(): Promise<T[]> {
    return this.repo.find();
  }
  
  async findOne(id: number): Promise<T> {
    const findOptions: FindOneOptions<T> = {
      where: {
        id: id as any,
      } as FindOptionsWhere<T>,
    };
    return this.repo.findOne(findOptions);
  }

  async create(entity: Partial<T>): Promise<T> {
    const newuser = this.repo.create(entity as T);
    return this.repo.save(newuser);
  }

  async update(id: number, entity: Partial<T>): Promise<T> {
    const findOptions: FindOneOptions<T> = {
      where: {
        id: id as any,
      } as FindOptionsWhere<T>,
    };
    await this.repo.update(id, entity as any);
    return this.repo.findOne(findOptions);
  }

  async delete(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
