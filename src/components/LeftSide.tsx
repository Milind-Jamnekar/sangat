'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icons } from './icons';
import { Avatar, AvatarFallback, AvatarImage } from './plate-ui/avatar';
import { buttonVariants } from './plate-ui/button';

export default function LeftSide() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2">
      <SLink pathname={pathname} href="/">
        <Icons.home />
        <span className="grow">My Feed</span>
      </SLink>
      <SLink pathname={pathname} href="/groups">
        <Icons.group />
        <span className="grow">Groups</span>
      </SLink>
      <SLink pathname={pathname} href="/messages">
        <Icons.message />
        <span className="grow">Messages</span>
      </SLink>
      <SLink pathname={pathname} href="/bookmarks">
        <Icons.bookmark />

        <span className="grow">Bookmark</span>
      </SLink>

      <Divider />

      <SLink pathname={pathname} href="/notifications">
        <Icons.bell />

        <span className="grow">Notifications</span>
      </SLink>
      <SLink pathname={pathname} href="/settings">
        <Icons.settings />
        <span className="grow">Settings</span>
      </SLink>

      <Divider />

      <SLink pathname={pathname} href="/profile">
        <Avatar className="size-7">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <span className="grow">ShadCn</span>
      </SLink>
    </div>
  );
}

function Divider() {
  return <div className="h-[1px] w-full bg-border"></div>;
}

interface SLinkProps {
  children: ReactNode;
  pathname: string;
  href: string;
}

export function SLink({ children, pathname, href }: SLinkProps) {
  return (
    <Link
      className={buttonVariants({
        variant: 'ghost',
        className: `gap-2 ${pathname === href ? 'text-primary' : ''}`,
      })}
      href={href}
    >
      {children}
    </Link>
  );
}
