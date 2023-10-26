import { cls } from "@/libs/utils";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
};

export default function Layout({
  children,
  title,
  canGoBack,
  hasTabBar,
}: LayoutProps) {
  return (
    <div>
      <div className="bg-white w-full text-lg font-medium py-3 fixed text-orange-500 border-b top-0 flex items-center justify-center">
        {canGoBack ? <button></button> : null}
        {title ? <h1>{title}</h1> : null}
      </div>

      <div className={cls("pt-20", hasTabBar ? "pb-16" : "")}>{children}</div>

      {hasTabBar ? (
        <nav className="bg-white text-gray-800 border-t fixed bottom-0 pb-10 flex justify-between items-center">
          <span>Link</span>
        </nav>
      ) : null}
    </div>
  );
}
