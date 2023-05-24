import { Profile } from "@/components/TourOfTailwind";
import {
  FirstLetter,
  Form,
  ItemPost,
  SelectItem,
} from "@/components/TourOfTailwind";

export default function Home() {
  return (
    <div className="bg-slate-400 p-20 min-h-screen grid gap-10 lg:grid-cols-2 xl:grid-cols-3 xl:place-content-center">
      <SelectItem />
      <Profile />
      {/* <ItemPost />
      <Form /> */}
      <FirstLetter />
    </div>
  );
}
