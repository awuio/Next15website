"use client";
import { actionFunction } from "@/utils/types";
import { useActionState } from "react";
import { useEffect } from "react";
import { toast } from "sonner";
const initalState = {
  message: "",
};

const FormContainer = ({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) => {
  const [state, formAction] = useActionState(action, initalState);
  // console.log("state ja", state);

  useEffect(() => {
    //code
    if (state.message) {
      toast(state.message);
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
};
export default FormContainer;
