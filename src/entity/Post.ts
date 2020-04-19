import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  AfterUpdate,
  Unique,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("posts")
@Unique(["title"])
export class Post {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column("datetime")
  created_on: Date;

  @Column("datetime", { nullable: true })
  modified_on: Date;

  @BeforeInsert()
  addId() {
    this.id = uuid();
    this.created_on = new Date();
  }

  @AfterUpdate()
  updateDate() {
    this.modified_on = new Date();
  }
}
