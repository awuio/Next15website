import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const createProfileAction = async (formData:FormData) => {
  "use server";
  const firstName = formData.get('firstName') as string;
  console.log("200 ok", firstName);
};

const CreateProfilePage = () => {
  return (
    <section>
      <h1 className=" text-2xl font-semibold mb-8 capitalize">
        <div className=" border p-8 rounded-lg max-w-lg">
          <form action={createProfileAction}>
            <div className=" mb-2">
              <Label htmlFor=" firstName">First Name</Label>
              <Input name="firstName" type=" text" />
            </div>
            <Button type="submit" size="lg">
              Create Profile
            </Button>
          </form>
        </div>
      </h1>
    </section>
  );
};
export default CreateProfilePage;
