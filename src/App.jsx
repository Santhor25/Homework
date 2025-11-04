import React, { useState, useEffect } from 'react';
import TreeDisplay from './treeDisplay';
import './App.css';

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [tree, setTree] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [inorderResult, setInorderResult] = useState('');
  const [preorderResult, setPreorderResult] = useState('');
  const [postorderResult, setPostorderResult] = useState('');

  const insertBST = (root, value) => {
    if (!root) return { valor: value, izquierda: null, derecha: null };
    if (value === root.valor) return root;
    if (value < root.valor) root.izquierda = insertBST(root.izquierda, value);
    else root.derecha = insertBST(root.derecha, value);
    return root;
  };

  const inorder = (node) => node ? [...inorder(node.izquierda), node.valor, ...inorder(node.derecha)] : [];
  const preorder = (node) => node ? [node.valor, ...preorder(node.izquierda), ...preorder(node.derecha)] : [];
  const postorder = (node) => node ? [...postorder(node.izquierda), ...postorder(node.derecha), node.valor] : [];

  useEffect(() => {
    if (!inputValue.trim()) {
      setTree(null);
      setInorderResult('');
      setPreorderResult('');
      setPostorderResult('');
      return;
    }

    const values = inputValue
      .split(',')
      .map(v => v.trim())
      .filter(v => v !== '' && !isNaN(v))
      .map(Number);

    let newTree = null;
    values.forEach(num => {
      newTree = insertBST(newTree, num);
    });

    setTree(newTree);

    setInorderResult(inorder(newTree).join(', '));
    setPreorderResult(preorder(newTree).join(', '));
    setPostorderResult(postorder(newTree).join(', '));
  }, [inputValue]);

  const searchBST = (root, value) => {
    if (!root) return false;
    if (root.valor === value) return true;
    if (value < root.valor) return searchBST(root.izquierda, value);
    return searchBST(root.derecha, value);
  };

  const handleSearch = (e) => {
    const val = e.target.value;
    setSearchValue(val);
    if (!tree || val === '' || isNaN(Number(val))) {
      setSearchResult('');
      return;
    }
    const found = searchBST(tree, Number(val));
    setSearchResult(found ? ' Número encontrado' : ' No existe en el árbol');
  };

  return (
    <div className="app-container">
      <h1>Árbol Binario con React y D3
      </h1>

      <input
        type="text"
        className="tree-input"
        placeholder="Ejemplo: 10,5,15,2,7"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <div className="search-container">
        <input
          type="text"
          className="tree-input"
          placeholder="Buscar número en el árbol"
          value={searchValue}
          onChange={handleSearch}
        />
        <p>{searchResult}</p>
      </div>

      {tree && (
        <div className="results-container">
          <h2>Recorridos del Árbol</h2>
          <p><strong>Inorder:</strong> {inorderResult}</p>
          <p><strong>Preorder:</strong> {preorderResult}</p>
          <p><strong>Postorder:</strong> {postorderResult}</p>
        </div>
      )}

      <TreeDisplay root={tree} />
      <footer>Hecho por Santiago Torralba</footer>
    </div>
  );
};
