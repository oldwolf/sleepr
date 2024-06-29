import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { UserDocument } from './users/models/user.schema';

const getCurrentuserByContext = (context: ExecutionContext): UserDocument => {
  const request = context.switchToHttp().getRequest();

  return request.user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentuserByContext(context),
);
