import { Injectable } from '@nestjs/common';
import { UserRepository } from './../usuario.repository';
import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailValidator implements ValidatorConstraintInterface {
  constructor(private usuarioRepository: UserRepository) {}

  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const userExists = await this.usuarioRepository.verifyEmail(value);
    return !userExists;
  }
}

export const UnicEmail = (validationOptions: ValidationOptions) => {
  return (object: Object, properties: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: properties,
      options: validationOptions,
      constraints: [],
      validator: EmailValidator,
    });
  };
};
