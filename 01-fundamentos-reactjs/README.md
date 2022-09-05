https://www.figma.com/file/K5UYvgTnUtKgFtQfmOLjWZ/Ignite-Feed-Community?is-community-duplicate=1&fuid=

https://www.notion.so/Ambiente-de-desenvolvimento-Trilha-ReactJS-3c3ef3b12ebb49feba57f061130cea62

# Key no React

## Porque única?

3 momentos em que um componente é renderizado novamente no react.

1. Quando o estado altera;
2. Quando a Propriedade altera;
3. Quando um componente pai renderiza novamente;

---

a Key ajuda o react a entender o que ja estava em tela e o que ñ estava em tela

1,2,3,4
1,2,3,4,5,6

## Porque nao posso usar o índice do array?

```js
const posts = [1, 2, 3, 4, 5];
// 0,1,2,3,4
```

# Closures no React

```js
function Comment(props) {
	const [likes, setlikes] = useState(0);

	function addLike() {
		setlikes(likes + 1);
		setlikes(likes + 1);
	}
}

Comment(props, 0);
Comment(props, 1);
```

```js
function handleLikeComment() {
	setLikeCount((state) => {
		return state + 1;
	});
}
```
