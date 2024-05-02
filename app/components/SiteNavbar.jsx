import Image from "next/image";
import Logo from "@/public/assets/logo.svg";
import Link from "next/link";
import SignInOut from "@/app/components/auth/SignInOut";

function SiteNavbar() {
  return (
    <nav>
      <div className="container flex justify-between items-center py-4">
        <div className="nav-brand">
          <Link href="/">
            <Image src={Logo} alt="Eventry" className="h-[45px]" />
          </Link>
        </div>

        <ul className="flex gap-4 text-[#9C9C9C]">
          <li>
            <SignInOut />
          </li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}

export default SiteNavbar;
