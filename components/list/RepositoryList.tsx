import React from 'react';
import { FaGithub, FaGitlab, FaBitbucket } from 'react-icons/fa';

interface RepositoryListProps {
  repositories: { [key: string]: string };
}

const Colors: { [key: string]: string } = {
  github: '#181717',
  gitlab: '#FC6D26',
  bitbucket: '#0052CC',
};

const Icons: { [key: string]: React.ReactNode } = {
  github: <FaGithub className='mr-1' size={15} />,
  gitlab: <FaGitlab className='mr-1' size={15} />,
  bitbucket: <FaBitbucket className='mr-1' size={15} />,
};

function RepositoryList(props: RepositoryListProps): React.ReactElement {
  const { repositories } = props;

  function renderList(type: string): React.ReactNode {
    const background = Colors[type];
    const link = repositories[type];
    const Icon = Icons[type];

    return (
      <a
        className='mr-2 flex items-center rounded-sm px-2 py-1 text-xs font-medium text-white'
        href={link}
        style={{ background }}
        target='_blank'
        rel='noopener noreferrer'
      >
        {Icon}
        {type}
      </a>
    );
  }

  return (
    <div className='flex'>
      {React.Children.toArray(Object.keys(repositories).map(renderList))}
    </div>
  );
}

export default RepositoryList;