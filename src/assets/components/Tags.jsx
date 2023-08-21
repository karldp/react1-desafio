import Badge from 'react-bootstrap/Badge';

const Tags = ({TagName, TagBackground}) => {
  return (
    <>
    <Badge className='badge' bg={TagBackground}>{TagName}</Badge>
    </>
  );
}

export default Tags