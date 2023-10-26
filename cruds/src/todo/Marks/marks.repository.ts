import { EntityRepository, Repository } from 'typeorm';
import { Marks } from './marks.entity'; // Correct path to the entity

@EntityRepository(Marks)
export class MarksRepository extends Repository<Marks> {}
