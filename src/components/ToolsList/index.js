import React from 'react';

import SimpleModal from '../RemoveModal';
import { ToolList } from './styles';

export default function ToolsList({ tools }) {
  return (
    <ToolList>
      {tools.map(tool => (
        <ToolItem key={tool.id} all={tools} tool={tool} />
      ))}
    </ToolList>
  );
}

function ToolItem({ tool, all }) {
  return (
    <li>
      <div>
        <a href={tool.link} target="_blank" rel="noopener noreferrer">
          <span>{tool.title}</span>
        </a>
        <SimpleModal title={tool.title} tools={all} id={tool.id} />
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
