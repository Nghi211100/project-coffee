import type { ReactNode } from 'react';

import { Footer } from '@/components/Footer';
import Header from '@/components/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div>
    <div className="w-full antialiased">
      {props.meta}

      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  </div>
);

export { Main };
