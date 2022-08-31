// Componente é uma função que retorna HTML, arquivos.jsx
// JSX = Javascript + XML (HTML) arquivo javascript que contém html

import { Post } from './Post';

export function App() {
	return (
		<div>
			<Post />
			<Post />
		</div>
	);
}
