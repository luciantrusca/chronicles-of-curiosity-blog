import Sidebar from '@/components/sidebar/Sidebar';
import Header from '../components/header/Header';
import PostsSection from '@/components/main_section/PostsSection';

export default function App(){
    return (
        <main className="p-4 bg-[#EFD9A1] min-h-screen max-h-screen flex flex-col">
            <Header />
            <div className="flex h-lvh">
                <Sidebar />
                <PostsSection />
            </div>
        </main>
    );
}
