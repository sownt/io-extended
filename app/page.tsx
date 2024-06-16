import Image from 'next/image';
import logo from '../public/logo.png';
import logo_white from '../public/logo_white.png';
import hero from '../public/home_hero.svg';
import Link from 'next/link';
import { TicketIcon } from '@heroicons/react/24/solid';
import Button from '@/components/button/Button';

export default function Home() {
  return (
    <div className="relative isolate flex flex-col min-h-svh w-full bg-white lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">
      {/* Nav */}
      <div className="inset-x-0 top-0 max-lg:hidden dark:text-white">
        <nav className="mx-auto max-w-6xl px-4 flex flex-1 items-center gap-8 py-2.5">
          <span className="relative">
            <Image className="dark:hidden w-64" src={logo} alt="Google I/O" />
            <Image
              className="hidden dark:inline w-64"
              src={logo_white}
              alt="Google I/O"
            />
          </span>
          <div className="max-lg:hidden h-6 w-px bg-zinc-950/10 dark:bg-white/10"></div>
          <div className="max-lg:hidden flex items-center gap-8">
            <span className="relative">
              <Link href="#">Explore</Link>
            </span>
            <span className="relative">Community</span>
            <span className="relative">About</span>
          </div>
          <div className="-ml-4 flex-1"></div>
          <div className="flex items-center">
            <Button>
              <TicketIcon />
              Register
            </Button>
          </div>
        </nav>
      </div>
      {/* Mobile Nav */}
      <header className="flex items-center px-4 lg:hidden"></header>
      {/* Body */}
      <main className="mx-auto max-w-6xl">
        <div className="w-full flex flex-col md:flex-row overflow-hidden bg-grey-bg dark:bg-grey border-b-[1px] md:border-b-2 border-grey dark:border-grey-bg">
          <div className="flex flex-col md:justify-center px-4 py-5 w-full md:w-2/5 md:p-10 md:pr-0 dark:text-white z-10 text-center md:text-left items-center md:items-start">
            <h1 className="text-6xl font-black mb-4 sm:s-h3 md:l-h1-2">
              Lorem Ipsum
            </h1>
            <p className="font-normal text-justify sm:s-h6 md:l-h6 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              placerat dolor eget metus dictum congue. Suspendisse ac ultricies
              lacus. Vestibulum posuere mattis est eget sodales. Etiam in
              imperdiet nulla. Mauris vel maximus lectus. Aliquam in nibh sed
              lorem ornare elementum eu sed purus. Maecenas quis dolor ac nisl
              aliquet ultricies.
            </p>
            <Button>
              <TicketIcon />
              Register
            </Button>
          </div>
          <div className="flex justify-end items-end w-full md:w-3/5 mt-[-55px] md:mt-[60px]">
            <Image
              src={hero}
              alt="Hero image"
              className="hidden md:inline-block h-full object-cover object-left dark:hidden ml:pr-4"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
