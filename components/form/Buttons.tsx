"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { RefreshCw } from 'lucide-react';

type btnSize = 'default' | 'lg' | 'sm'

type SubmitButtonProps = {
    className?: string;
    size?: btnSize;
    text?: string;
}

export const SubmitButton = ({
    className,
    size,
    text,
}: SubmitButtonProps) => {
    //code
    const { pending } = useFormStatus();

    return <Button
        disabled={pending}
        type="submit"
        size={size}
        className="{`${className} capitalize`}"
    >
        {
            pending
                ? <RefreshCw className=" animate-spin" />
                : <p>{text}</p>
        }

        {text}
    </Button>
}