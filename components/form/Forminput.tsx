import React from 'react'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type ForminputProps = {
    name: string
    type: string
    label?: string
    defaultValue?: string
    placeholder?: string
}
const Forminput = (props: ForminputProps) => {
    const { name, type, label, defaultValue, placeholder } = props;
    console.log(props.name)
    return (
        <div className=" mb-2">
            <Label htmlFor={name}> {label}</Label>
            <Input
                name={name}
                type={type}
                defaultValue={defaultValue}
                placeholder={placeholder} />
        </div>
    )
}

export default Forminput
