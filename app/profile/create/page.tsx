import { createProfileAction } from "@/actions/actions";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


const CreateProfilePage = async() => {
  const user = await currentUser();
    if(user?.privateMetadata.hasProfile) redirect('/')

  return (
    <section>
      <h1 className=" text-2xl font-semibold mb-8 capitalize">new profile</h1>
        <div className=" border p-8 rounded-lg">
          <FormContainer action={createProfileAction}>
            <div className=" grid md:grid-cols-2 gap-4 mt-4">
              <FormInput
                name="firstName"
                label="Fist Name"
                type="text"
                placeholder="First name"
              />
              <FormInput
                name="lastName"
                label="Last Name"
                type="text"
                placeholder="Last name"
              />
              <FormInput
                name="userName"
                label="User Name"
                type="text"
                placeholder="User name"
              />
            </div>
            <SubmitButton text="Create Profile" size="sm" className="" />
          </FormContainer>
        </div>
    </section>
  );
};
export default CreateProfilePage;
