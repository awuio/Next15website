import { SubmitButton } from "@/components/form/Buttons";
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";

const createProfileAction = async (formData: FormData) => {
  "use server";
  const firstName = formData.get('firstName') as string;
  console.log("200 ok", firstName);
};

const CreateProfilePage = () => {
  return (
    <section>
      <h1 className=" text-2xl font-semibold mb-8 capitalize">
        <div className=" border p-8 rounded-lg">
          <form action={createProfileAction}>
            <div className=" grid md:grid-cols-2 gap-4 mt-4">

              <FormInput
                name="firstName"
                label="Fist Name"
                type="text"
                placeholder="First name"
              />
              <FormInput name="lastName"
                label="Last Name"
                type="text"
                placeholder="Last name" />
              <FormInput
                name="userName"
                label="User Name"
                type="text"
                placeholder="User name"
              />
            </div>
            <SubmitButton text="Create Profile" size='sm' className=""/>
          </form>
        </div>
      </h1>
    </section>
  );
};
export default CreateProfilePage;
