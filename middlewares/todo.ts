import { RouterContext, Status } from "../deps.ts";
import { todoModel } from "../models/mod.ts";
import { handlerError, handleOK, getParams } from "./utils.ts";

// @ts-ignore
export async function getAll(ctx: RouterContext) {
    const data = await todoModel.getAll();
    handleOK(ctx, data);
}

// @ts-ignore
export async function get(ctx: RouterContext) {
    const params = await getParams(ctx);
    const [todos, error] = await todoModel.get(params);
    if (error) {
        return handlerError(ctx, error);
    }

    handleOK(ctx, todos);
}

// @ts-ignore
export async function create(ctx: RouterContext) {
    const params = await getParams(ctx);
    const value = await params.value;
    console.log(`value.title:` + value.title);
    await todoModel.create(value.title);
    ctx.response.status = Status.OK;
    handleOK(ctx, "success");
}

// @ts-ignore
export async function update(ctx: RouterContext) {
    const params = await getParams(ctx);
    const [_, error] = await todoModel.update(params);

    if (error) {
        return handlerError(ctx, error);
    }

    handleOK(ctx, "success");
}

// @ts-ignore
export async function remove(ctx: RouterContext) {
    const params = await getParams(ctx);
    const [_, error] = await todoModel.remove(params);

    if (error) {
        return handlerError(ctx, error);
    }

    handleOK(ctx, "success");
}