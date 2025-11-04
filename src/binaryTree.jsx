import React from 'react'
import TreeNode from './treeNode'
import './App.css'

const BinaryTree = ({ root }) => {
  if (!root) return <p className="empty-tree">El árbol aparecerá aquí</p>
  return (
    <div className="tree">
      <TreeNode node={root} />
    </div>
  )
}

export default BinaryTree
