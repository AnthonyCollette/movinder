import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <header className='container'>
            <Link href="/">
                <Image src="/images/logo_min.svg" width={300} height={71} alt="Logo of Movinder" />
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Accueil</Link>
                    </li>
                    <li>
                        <Link href="/">Catalogue</Link>
                    </li>
                    <li>
                        <Link href="/login">Mon compte</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;