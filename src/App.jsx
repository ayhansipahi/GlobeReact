import { useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
const N = 300;
function generateSet() {
  return [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: Math.random() / 3,
    color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
  }))
};



function App() {
  const [dataSet, setDataSet] = useState([])

  useEffect(() => {
    const interval = setInterval(()=>{
      setDataSet(generateSet)
    },1000);
    return ()=>{
      clearInterval(interval)
    }
  }, [setDataSet])




  return (
    <>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        pointAltitude="size"
        pointsData={dataSet}
        pointColor="color" />
    </>
  )
}

export default App
