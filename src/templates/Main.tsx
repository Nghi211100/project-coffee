import type { ReactNode } from 'react';

import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div>
    <div className="w-full antialiased">
      {props.meta}
      <div className="relative min-h-screen">
        <Header />
        <div>{props.children}</div>
        <div className="absolute bottom-0 w-screen">
          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export { Main };
