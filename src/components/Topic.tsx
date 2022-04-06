import getColor from "../utils/getColor";

interface TopicProps {
  topic: string;
  handleClick: Function;
}

function Topic({ topic, handleClick }: TopicProps) {
  const [backgroundColor, color] = getColor();
  return (
    <span style={{
      padding: '10px',
      backgroundColor,
      borderRadius: '10px',
      margin: '5px 5px 0 0',
      color,
      cursor: 'pointer'
    }} onClick={handleClick([topic])}>{topic}</span>
  );
}

export default Topic;
