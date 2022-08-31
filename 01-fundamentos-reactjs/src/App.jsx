// Componente é uma função que retorna HTML, arquivos.jsx
// JSX = Javascript + XML (HTML) arquivo javascript que contém html

import { Post } from './Post';

export function App() {
	return (
		<div>
			<Post
				author="Andressa Da Costa"
				content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ab reiciendis! Amet quae laudantium alias neque perferendis animi omnis soluta tempore nostrum! Dignissimos porro sapiente ex quam modi, a quaerat?"
			/>
			<Post 
      author="Diego Fernandes"
        content="Um novo post de exemplo"
      />
    
			<Post />
		</div>
	);
}
