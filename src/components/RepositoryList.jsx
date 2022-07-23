import useRepositories from '../hooks/useRepositories';
import RepositoryListConteiner from './RepositoryListContainer';

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListConteiner repositories={repositories} />;
};

export default RepositoryList;
