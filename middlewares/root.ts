import { Status, RouterContext } from "../deps.ts"

// @ts-ignore
export function getHome(ctx: RouterContext){
    ctx.response.status = Status.OK;
    ctx.response.body = "Hello Deno 🦕";
};