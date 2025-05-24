import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <nav className="flex justify-between items-center container mx-auto">
        <Link href="/">
          <span className="text-xl font-semibold">Le Petit Hong Kong</span>
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/menu">Menu</Link></li>
          <li><Link href="/galerie">Galerie</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/about">À propos</Link></li>
        </ul>
      </nav>
    </header>
  );
}