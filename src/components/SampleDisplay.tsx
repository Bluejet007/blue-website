import samples from '../data/sampleData';

function SampleDisplay({ jobInd }: { jobInd: number }) {
  const sample = samples[jobInd];

  return <div className='sample-display' style={{backgroundColor: sample.colour}}>
    <img src={sample.fileName} alt={sample.description}>
    </img>
    <caption>{sample.description}</caption>
  </div>;
}

export default SampleDisplay;