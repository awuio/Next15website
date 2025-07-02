"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Share } from "lucide-react";
import { Button } from "../ui/button";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
} from "react-share";

const ShareButton = ({
  landmarkId,
  name,
}: {
  landmarkId: string;
  name: string;
}) => {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL
  const sharelink = `${url}/landmark/${landmarkId}`;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Share />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="top" align="end" className="flex w-full gap-x-2 items-center">
        <FacebookShareButton url={sharelink} name={name}>
          <FacebookIcon size='36px' className="rounded-md"/>
        </FacebookShareButton>
        <TwitterShareButton url={sharelink} name={name}>
          <TwitterIcon size='36px' className="rounded-md"/>
        </TwitterShareButton>
        <LineShareButton url={sharelink} name={name}>
          <LineIcon size='36px' className="rounded-md"/>
        </LineShareButton>
        
      </PopoverContent>
    </Popover>
  );
};
export default ShareButton;
