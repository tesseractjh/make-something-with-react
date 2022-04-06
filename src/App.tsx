import { useEffect, useState } from "react";
import Card from "./components/Card";

export interface Data {
  id: number;
  description: string;
  url: string;
  types: string[];
  topics: string[];
  levels: string[];
}

function App() {
  const [datas, setDatas] = useState<Data[]>([]);
  const [filters, setFilters] = useState<string[]>(['js', 'javascript']);

  const handleClick = (filters: string[]) => () => {
    setDatas([]);
    setFilters(filters);
  };

  useEffect(() => {
    (async () => {
      const res = await fetch('https://api.sampleapis.com/codingresources/codingResources');
      const json = await res.json();
      const data = json.filter(({ topics }: Data) => topics.some(topic => filters.includes(topic)));
      setDatas(data);
    })();
  }, [filters]);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(200px, 1fr))',
      gap: '10px'
    }}>
      {datas.length ? datas.map((data) => <Card data={data} handleClick={handleClick} />) : 'Loading...'}
    </div>
  );
}

export default App;
