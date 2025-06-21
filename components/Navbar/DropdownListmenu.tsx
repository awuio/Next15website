import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import UserProfile from "./UserProfile";
import Link from "next/link";
import { links } from "@/utils/links";

import SingOutLinks from "./SingOutLinks";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

const DropdownListmenu = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Menu />
            <UserProfile />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* Logoutแล้ว */}
          <SignedOut>
            <DropdownMenuItem asChild className=" w-full">
              <SignInButton mode="modal">
                Login
              </SignInButton>
            </DropdownMenuItem>

            <DropdownMenuItem asChild className=" w-full">
              <SignUpButton mode='modal'>
                Sign up
              </SignUpButton>
            </DropdownMenuItem>
          </SignedOut>

          {/* Loginแล้ว */}
          <SignedIn>
            {links.map((item, index) => {
              return (
                <DropdownMenuItem key={index}>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              );
            })}
            <DropdownMenuSeparator />
            
            <DropdownMenuItem>
              <SingOutLinks />
            </DropdownMenuItem>
          
          </SignedIn>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default DropdownListmenu;
