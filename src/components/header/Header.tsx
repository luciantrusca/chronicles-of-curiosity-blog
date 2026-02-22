import "/src/app/globals.css"
import Link from "next/link";



function Header(){
    return (
    <header className="">
            <div className="flex align-middle justify-center items-center gap-5 p-2 bg-[#F7E6B8] border-2">   {/* Header logo text + svg + nav */}
                <div className="flex items-center">
                    <span className="">Chronicles of Curiosity</span>  {/* Header logo text*/}
                    <img className="h-8 w-auto" src='/star.png' alt="star" />           {/* Header svg */}
                </div>
                <nav className="">                      {/* Header navigation bar */}
                    <ul className="flex space-x-2.5">
                        <li><a href="/">Latest post</a></li>
                        <li><a href="/">Recent posts</a></li>
                        <li><Link href="/upload_page">Upload</Link></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;