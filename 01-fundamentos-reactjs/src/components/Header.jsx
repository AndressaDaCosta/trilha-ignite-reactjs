// componentes devem ser iniciados com letras maiuscular pra nao confundir com outros elementos ex: <header></header>  e  <Header />

import styles from './Header.module.css'



export function Header() {
	return (
        <header className={styles.header}>
            <strong>Ignite Feed</strong>
        </header>
    )

}
