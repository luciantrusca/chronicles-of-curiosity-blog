import ParchmentSpacer from "../misc/ParchmentSpacer";
import SidebarSection from "./SidebarSection";

const questlogItems = [
    { icon: "icons/medieval_compass Background Removed.png", label: "About", href: "/quest/1" },
    { icon: "/icons/medieval_feather.png", label: "Contact", href: "/quest/2" },
];

const tagItems = [
    { label: "Tech", icon: "icons/default_tag_icon.png" },
    { label: "Misc", icon: "icons/default_tag_icon.png" },
];

export default function Sidebar() {
    return (
       <aside className="">
            <nav className="w-64 max-w-45 min-w-35 flex flex-col h-full ">
                <SidebarSection className={[""]} title="Quest Log" items={questlogItems}/>
                <SidebarSection className={[""]} title="Tags" items={tagItems}/>
                <ParchmentSpacer className="h-full bg-amber-200 border-[#006629] border-2"/>
            </nav>
        </aside>
    )
}
