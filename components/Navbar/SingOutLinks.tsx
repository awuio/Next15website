"use client";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { toast } from "sonner";

const SingOutLinks = () => {
  return (
    <SignOutButton redirectUrl="/">
      <Button
      className=" w-full text-left"
        variant="outline"
        onClick={() => toast.success("You have successfully logged out!")}
      >
        Logout
      </Button>
    </SignOutButton>
  );
};
export default SingOutLinks;
