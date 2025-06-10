import type {Tag} from "../../../generated/prisma/client";

export default function Sidebar({tags}: {tags: Tag[]}) {
    return (
       <aside> {/* Sidebar */}
            <nav>
                {/* Quest log section */}
                <section>
                    <h1>Quest log</h1>
                    <ul> {/* Vertical list of elements */}
                        <li>
                            <img src={"null"}></img>
                            <span>About</span>
                        </li>
                        <li>
                            <img src={"null"}></img>
                            <span>Contact</span>
                        </li>
                    </ul>
                </section>
                {/* Tags section */}
                <section>
                <h1>Tags</h1>
                <ul>
                    {tags.map (tag => (
                        <li key={tag.id}>{tag.name}</li>
                    ))}
                </ul>
                </section>
            </nav>
        </aside>
    )
}