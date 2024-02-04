import { useEffect,useRef,useState} from 'react';

import './App.css';
import useFetch from './hooks/useFetch';
import LocationCard from './components/LocationCard';
import ResidentsCard from './components/ResidentsCard';


function App() {
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
         
          <input className='app_text' type='number' ref={textinput} />
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
        location?.residents.map(resident =>(
        <ResidentsCard
        key={resident}
        url={resident}/>
        ))
        } 
        </div>
          
          </>
      
        }
        </>
      } 
      </div>
    
    
  )
}

export default App
