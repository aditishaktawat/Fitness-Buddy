import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext()

// usefeect hook will fire a function when the component is rendered
   useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('https://vercel.com/aditis-projects-0bcee96b/fitness-buddy-backend/EBfvE9LRaZt8TVF1JPMHdgPyxPrG/api/workouts')
      const json = await response.json()

      if (response.ok){
       dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts()
    }, [dispatch])   //it will only fire once


    return (
        <div className = "home">
        <div className='workouts'>
            {workouts && workouts.map((workout) => (
              <WorkoutDetails key={workout.id} workout={workout} />
            ))}
        </div>
        <WorkoutForm  />
        </div>
    )
}


export default Home


// now we want to fetch the dta from backend into out our app so we will this with the help of use effect hook
