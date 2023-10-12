import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
    faGlobe,
} from "@fortawesome/free-solid-svg-icons"


const Header = () => (
    <header>
        <h1><Link href="#">Weather App</Link></h1>
        <div class="dropdown">
            <button class="dropbtn"><FontAwesomeIcon icon={faGlobe}/></button>
        <div class="dropdown-content">
            <a><Link href="/Italy"> Italy</Link></a>
            <a><Link href="/New York"> New York </Link></a>
            <a><Link href="/Puerto Rico"> Puerto Rico </Link></a>
            <a><Link href="/Toronto"> Toronto </Link></a>
        </div>
        </div>
    </header>
);

export default Header;