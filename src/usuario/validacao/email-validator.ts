import { Injectable } from '@nestjs/common';
import { UserRepository } from './../usuario.repository';
import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailValidator implements ValidatorConstraintInterface {
  constructor(private usuarioRepository: UserRepository) {}

  async validate(value: any): Promise<boolean> {
    const userExists = await this.usuarioRepository.verifyEmail(value);
    return !userExists;
  }
}

export const UnicEmail = (validationOptions: ValidationOptions) => {
  return (object: object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: EmailValidator,
    });
  };
};
