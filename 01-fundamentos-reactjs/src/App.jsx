// Componente é uma função que retorna HTML, arquivos.jsx
// JSX = Javascript + XML (HTML) arquivo javascript que contém html

import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
	return (
		<div>
    		<Header />

			<div className={styles.wrapper}>
				<aside>
					<Sidebar />
				</aside>
				<main>
					<Post
					author="Andressa Da Costa"
					content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ab reiciendis! Amet quae laudantium alias neque perferendis animi omnis soluta tempore nostrum! Dignissimos porro sapiente ex quam modi, a quaerat?"
					/>
					<Post 
					author="Diego Fernandes"
					content="Um novo post de exemplo"
					/>
				</main>
			</div>
		</div>
	);
}
