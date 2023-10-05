import Link from "next/link";

const Header = () => (
    <header>
        <nav> 
            <Link href="/Italy"> Italy </Link>
            <Link href="/New York"> New York </Link>
            <Link href="/Puerto Rico"> Puerto Rico </Link>
            <Link href="/Toronto"> Toronto </Link>
        </nav>
    </header>
);

export default Header;