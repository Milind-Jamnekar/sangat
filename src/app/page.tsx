import Link from 'next/link';

import { siteConfig } from '@/config/site';
import LeftSide from '@/components/LeftSide';
import PlateEditor from '@/components/plate-editor';

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="grid grid-cols-12 gap-6">
        <div className="hidden md:col-span-2">
          <LeftSide />
        </div>
        <div className="col-span-12 max-h-fit rounded-md border bg-background md:col-span-8">
          <PlateEditor />
        </div>

        <div className="hidden md:col-span-2">
          <LeftSide />
        </div>
      </div>
    </section>
  );
}
