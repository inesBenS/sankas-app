import Link from 'next/link';

export function Navbar() {

    return (<header id="header-nav" >
        <Link href="/"><a className="lien-navbar"><h1 id="title"> SANKA </h1></a></Link>
        <ul id="ul-navbar">
            <Link href="/expos/accueil"><a className="lien-navbar"><li>Expo</li></a></Link>
            <Link href="/creations/accueil"><a className="lien-navbar"><li>Créations</li></a></Link>
            <Link href="/poemes/accueil"><a className="lien-navbar"><li>Poèmes</li></a></Link>
            <Link href="/playlists/accueil"><a className="lien-navbar"><li>Playlists</li></a></Link>
        </ul>
    </header>)
}