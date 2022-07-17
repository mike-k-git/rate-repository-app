import Text from './Text';

const RepositoryItem = ({ item }) => {
  return (
    <>
      <Text>Full name: {item.id}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
    </>
  );
};

export default RepositoryItem;
