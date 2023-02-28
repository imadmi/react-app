import Block from './Block';
import '../../App.css'

function Home() {
  const BLOCK_CSS="gradient p-1 m-1 rounded  outline outline-green-50 hover:outline-green-200";
    
  const BLOCK_COUNT = 8;
  const blocks = [];

  for (let i = 0; i < BLOCK_COUNT; i++) {
    blocks.push(<Block css={BLOCK_CSS} />);
  }

  return (
      <div>
        <div className='body grid grid-rows-5'>
        {[1, 2, 3, 4, 5].map((i) => (
        <div className='m-2 bg-transparent grid grid-cols-8 ' key={i}>
        {blocks}
        </div>
        ))}
      </div>
      </div>
    );
  }
  
  export default Home;