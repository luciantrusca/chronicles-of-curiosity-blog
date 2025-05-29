import slugify from "slugify";
import { PrismaClient } from '../../../generated/prisma/client'

const prisma = new PrismaClient();

export async function generateUniqueSlug(title:string){
    //make slug
    let baseSlug = slugify(title, {lower:true});
    const separator = "-"
    let suffix = 1;
    let combSlug = baseSlug //combined slug

    //query db to check for uniqueness
    let existingSlug = await prisma.post.findUnique({
        //only select slug field, and check against the baseslug
        where: {slug: baseSlug},
        select:{slug: true}
        })

    // If the base slug is taken, log this initial state
    console.log("Initial existingSlug:", existingSlug);


    //if not unique, append a number (0..1...)
    while (existingSlug !== null) {
        combSlug = baseSlug + separator + suffix
        console.log(`Trying slug [${combSlug}] with suffix ${suffix}`);
        suffix += 1

        // check whether this new slug is unique
        existingSlug = await prisma.post.findUnique({
            //only select slug field, and check against the baseslug
            where: {slug: combSlug},
            select:{slug: true}
            });
        console.log("existingSlug:", existingSlug);
    }

    //if unique, return the slug
    console.log("Unique slug found:", combSlug);
    return combSlug;
}


// generateUniqueSlug('testpost1')

