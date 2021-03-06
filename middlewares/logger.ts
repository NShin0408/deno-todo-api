import { Context, green ,cyan} from "../deps.ts";

export async function logger(ctx: Context, next: any) {
    await next();

    console.log(`${green(ctx.request.method)} ${cyan(ctx.request.url.pathname)}`);
}