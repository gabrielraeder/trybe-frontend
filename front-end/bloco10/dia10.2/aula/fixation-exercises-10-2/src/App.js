import Image from './image';
import staringCat from './staringCat.jpg'

function App() {
  return (
      <main>
      <Image source= {staringCat} alternativeText='Cute cat staring'/>
    </main>
  );
}

export default App;
