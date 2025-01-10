import { ReactNode } from 'react';

const PageContentContainer = async ({ children, bgColor }: { children: ReactNode, bgColor?: string }) => {
  return (
    <main className={`${bgColor} w-full flex-1 h-full flex flex-col items-center gap-8 py-8 `}>
      {children}
    </main>
  );
}

export default PageContentContainer;
