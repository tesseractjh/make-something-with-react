import { Data } from "../App";
import Topic from "./Topic";

interface CardProps {
  data: Data;
  handleClick: Function;
}

function Card({ data: { description, url, topics }, handleClick }: CardProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      border: '3px solid black',
      borderRadius: '20px'
    }}>
      <h2 style={{ textAlign: 'center' }}>{description}</h2>
      <a href={url}>{url}</a>
      <p style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%'
      }}>
        {topics.map(topic => <Topic topic={topic} handleClick={handleClick} />)}
      </p>
      <iframe 
        style={{ border: '3px solid black' }}
        title={description}
        src={url}
        width="400"
        height="300"
      />
    </div>
  );
}

export default Card;
