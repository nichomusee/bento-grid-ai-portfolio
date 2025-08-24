import { mutation } from "../_generated/server";
import {v} from "convex/values"
import { nichobot,validateUserExists } from "./lib";

export const createThreadForUser = mutation({
    args: {
        userId: v.id('users')
    },
    handler: async(ctx, args) => {

        await validateUserExists(ctx.db,{userId:args.userId} )
        const thread =await nichobot.createThread(ctx,{
            
            userId:args.userId
        })
        return thread.threadId
    }
})