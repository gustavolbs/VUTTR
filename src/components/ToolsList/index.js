/**
 * ToolsList
 * Componente que contém todas as ferramentas e gera, dinamicamente, a listagem
 * delas.
 *
 * ToolItem
 * Componente que representa uma ferramenta e contém uma lista de tags, um botão
 * de deleção do item e as demais informações referentes ao item.
 *
 * TagList
 * Componente que contém todas as tags e gera, dinamicamentem, a listagem delas.
 */
import React from 'react';

import SimpleModal from '../RemoveModal';
import { ToolList } from './styles';

export default function ToolsList({ tools, reloadData }) {
  return (
    <ToolList>
      {tools.map(tool => (
        <ToolItem
          key={tool.id}
          all={tools}
          tool={tool}
          reloadData={reloadData}
        />
      ))}
    </ToolList>
  );
}

function ToolItem({ tool, all, reloadData }) {
  return (
    <li>
      <div>
        <a href={tool.link} target="_blank" rel="noopener noreferrer">
          <span>{tool.title}</span>
        </a>
        <SimpleModal
          title={tool.title}
          tools={all}
          id={tool.id}
          reloadData={reloadData}
        />
      </div>
      <p>{tool.description}</p>
      <TagList tool={tool} />
    </li>
  );
}

function TagList({ tool }) {
  return (
    <ul>
      {tool.tags.map(tag => (
        <li key={tag}>#{tag}</li>
      ))}
    </ul>
  );
}
