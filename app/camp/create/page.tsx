import { createLandmarkAction } from "@/actions/actions";
import { SubmitButton } from "@/components/form/Buttons";
import CategoryInput from "@/components/form/CategoryInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ProvinceInput from "@/components/form/ProvinceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CreateProfilePage = async () => {
  return (
    <section>
      <h1 className=" text-2xl font-semibold mb-8 capitalize">
        Create Landmark
      </h1>
      <div className=" border p-8 rounded-lg">
        <FormContainer action={createLandmarkAction}>
          <div className=" grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="name"
              label="Landmark Name"
              type="text"
              placeholder="Landmark name"
            />
          </div>

          {/* Category */}
          <CategoryInput />
          <TextAreaInput name="description" />
          <div className=" grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="price"
              label="Price"
              type="number"
              placeholder="Price"
            />

            <ProvinceInput />
          </div>

          <SubmitButton text="Create Landmark" size="sm" className="" />
        </FormContainer>
      </div>
    </section>
  );
};
export default CreateProfilePage;
