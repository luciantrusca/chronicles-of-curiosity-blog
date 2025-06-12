import type {Tag} from "../../../generated/prisma/client";
import SidebarSection from "./SidebarSection";
import {PrismaClient} from "~/generated/prisma/client";

const questlogItems = [
    { icon: "quest-icon", label: "About", href: "/quest/1" },
    { icon: "quest-icon", label: "Contact", href: "/quest/2" },
];

const prisma = new PrismaClient();

export default async function Sidebar() {
    const tags = await prisma.tag.findMany();
    // Map tags to SidebarItem[]
    const tagItems = tags.map(tag => ({
        label: tag.name,
        // href: `/tags/${tag.id}`,
        // icon: "tag-icon"
    }));

    return (
       <aside className="h-screen w-64"> {/* Sidebar */}
            <nav className="flex flex-col h-full">
                <SidebarSection title="Quest Log" items={questlogItems}/>
                <SidebarSection title="Tags" items={tagItems}/>
            </nav>
        </aside>
    )
}



// Quest log section
// <section>
//     <h1>Quest log</h1>
//     <ul> 
//         {/* Vertical list of elements */}
//         <li>
//             <img src={"null"}></img>
//             <span>About</span>
//         </li>
//         <li>
//             <img src={"null"}></img>
//             <span>Contact</span>
//         </li>
//     </ul>
// </section>
// {/* Tags section */}
// <section>
//     <h1>Tags</h1>
//     <ul>
//         {tags.map(tag => (
//             <li key={tag.id}>{tag.name}</li>
//         ))}
//     </ul>
// </section>