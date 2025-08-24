import { mutation } from "./_generated/server"

export const createAnonymousUser = mutation({
    args: {},
    handler: async (ctx) => {
        return  ctx.db.insert("users",{
            kind:"anonymous"
        }) 
    }
})