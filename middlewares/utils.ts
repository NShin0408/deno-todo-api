import { RouterContext, Status } from "../deps.ts";

type ErrorArg = Error | string;

export function createErrorBody(
    error: ErrorArg,
): { error: { message: string; stack?: string } } {
    const e = formatError(error);
    return {
        error: {
            message: e.message,
            stack: e.stack,
        },
    };
}

function formatError(error: ErrorArg): Error {
    if (error instanceof Error) {
        return error;
    }
    return new Error(error);
}

// @ts-ignore
export function handlerError(ctx: RouterContext, error: Error): void {
    ctx.response.status = Status.BadRequest;
    ctx.response.body = createErrorBody(error);
}

// @ts-ignore
export function handleOK(ctx: RouterContext, data: any): void {
    ctx.response.status = Status.OK;
    ctx.response.body = { data };
}

// @ts-ignore
export async function getParams(ctx: RouterContext) {
    const value = await ctx.request.body();
    return {
        ...ctx.params,
        ...value,
    };
}