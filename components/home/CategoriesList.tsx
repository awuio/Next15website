import { categories } from "@/utils/categories";
import Link from "next/link";

const CategoriesList = ({
  search,
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <div>
      <div className="flex justify-center font-medium my-3  gap-x-4">
        {categories.map((item) => {
            const isAcrive = item.label === category
          return (
            <Link
              href={`/?category=${item.label}${searchTerm}`}
              key={item.label}
            >
              <article className={` flex flex-col items-center justify-center p-3 hover:text-primary hover:scale-110 transition duration-200 ${isAcrive ? 'text-primary scale-110' : ''}`}>
                <item.icon />
                <p>{item.label}</p>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default CategoriesList;
