import { ObjectType, Field } from 'fix-tgql'

@ObjectType()
export default class {
  @Field()
  name: string

  greet() {
    return `Hello ${this.name}!`
  }

  constructor(name: string) {
    this.name = name
  }
}
