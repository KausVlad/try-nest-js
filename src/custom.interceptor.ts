import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { map } from 'rxjs';

export class CustomInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler) {
    console.log('interceptor request');
    console.log({ context });

    return handler.handle().pipe(
      map((data) => {
        console.log('interceptor response');
        console.log({ data });
        const modifiedData = {
          ...data,
          createdAt: data.created_at,
        };
        delete modifiedData.updated_at;
        delete modifiedData.created_at;
        return modifiedData;
      }),
    );
  }
}
