import React from 'react'

const useFetch = (url, options) => {
 
   const [loading, setloading] = React.useState(true)  
   const [result, setresult] = React.useState(null)
   const [error, seterror] = React.useState(null)

   React.useEffect(() => {
      const consultarApi = async() => {
           try {
               const rest = await fetch(url, options)
               const json = await rest.json()

               setresult(json)
               setloading(false)

           } catch (error) {
               seterror(error)
               setloading(false)
           }
      }
    
      consultarApi()
    
    }, [options, url])


    return {loading, result, error}
}

export default useFetch
