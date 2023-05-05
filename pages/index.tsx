import { Profile } from "@/components/TourOfTailwind";
import {
  FirstLetter,
  Form,
  ItemPost,
  SelectItem,
} from "@/components/TourOfTailwind";

export default function Home() {
  return (
    <div className="bg-slate-400 p-20 grid gap-10 min-h-screen">
      <SelectItem />
      <Profile />
      <ItemPost />
      <Form />
      <FirstLetter />
    </div>
  );
}
