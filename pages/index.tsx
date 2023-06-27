import { Profile } from "@/components/TourOfTailwind";
import {
  FirstLetter,
  Form,
  ItemPost,
  SelectItem,
} from "@/components/TourOfTailwind";

export default function Home() {
  return (
    // 메뉴얼로 다크모드 설정할 땐 이렇게 감싸져 있는 엘리먼트에 dark 클래스를 추가해줘야 한다.
    <div className="dark bg-slate-400 p-20 min-h-screen grid gap-10 lg:grid-cols-2 xl:grid-cols-3 xl:place-content-center">
      <SelectItem />
      <Profile />
      {/* <ItemPost />
      <Form /> */}
      <FirstLetter />
    </div>
  );
}
