import { ReactNode } from "react";

export default function PostLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 bg-gradient-to-r from-blue-800 via-cyan-700 to-blue-500 text-white dark:from-gray-900 dark:via-black dark:to-blue-900 dark:text-gray-200 pt-[5rem] pb-[7rem]">
      <div className="max-w-3xl w-full">{children}</div>
    </div>
  );
}
