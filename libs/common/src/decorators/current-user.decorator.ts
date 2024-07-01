import { ExecutionContext, createParamDecorator } from '@nestjs/common';

const getCurrentuserByContext = (context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();

  return request.user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentuserByContext(context),
);
