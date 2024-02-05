import { useEffect,useRef,useState} from 'react';

import './App.css';
import useFetch from './hooks/useFetch';
import LocationCard from './components/LocationCard';
import ResidentsCard from './components/ResidentsCard';
import Pagination from './components/Pagination';


function App() {
  const [currentPagi, setcurrentPagi] = useState(1)
  const [finder,setFinder] =useState(Math.floor(Math.random()*126+1))
  const [location,getLocation,isLoading,hasError] =useFetch()
 // const randomLocation=Math.floor(Math.random()*126+1)
  useEffect(() => {
   const url=`https://rickandmortyapi.com/api/location/${finder}`;
   getLocation(url)
  }, [finder])
  const textinput=useRef()
  const handleSubmit=event =>{
    //event se usa para que no recarge la pagina
    event.preventDefault();

    setFinder(textinput.current.value.trim())
    
  }
  //paginacion
  //se realiza un corto cicuito
  //esta primera variable esl la cantidad de elelmento por pagina
  const quantity=5;
  //este es la pagina en la que estoy por lo que hay
  const second=currentPagi*quantity;
  //este ultimo es elcontenido que se va a mostrar
  const first=second-quantity;
  ////se realiza un corto cicuito
  const residentPart=location && location.residents.slice(first,second)
  //total de pagina y se realiza otro corto circuito
  const total= location && Math.floor(location.residents.length/quantity)+1;

  return (
    
      <div className='app'>
        {
          isLoading?
          <h1>Loading......</h1>
          :
          <>
        <img className='image' src='https://www.abystyle.com/c/300-category_default/rick-and-morty.jpg'/>
        <h1>Rick and Morty</h1>
        <form className='app_form' onSubmit={handleSubmit}>
         
          <input className='app_text' required type='number' ref={textinput} />
          <button className='btn'>Search</button>
        </form>
        {hasError || finder==='0'?
        <h1>This location do exist </h1>
        :
        <>
        <LocationCard
        location={location}
        />
        <div className='app_container'>
       {
        residentPart.map(resident =>(
        <ResidentsCard
        key={resident}
        url={resident}/>
        ))
        } 
        </div>
        < Pagination
            currentPagi={currentPagi}
            setcurrentPagi={setcurrentPagi}
            total={total}
        
        />  
        </>
      
        }
        </>
      } 
      </div>
    
    
  )
}

export default App
