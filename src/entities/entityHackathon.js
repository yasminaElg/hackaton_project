import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity()
export class Hackathon{

  @PrimaryGeneratedColumn()
  id = undefined

  @Column("varchar")
  title = undefined

  @Column("varchar")
  description = undefined

  @Column("timestamp")
  date = undefined

  @Column("varchar")
  address = undefined

}