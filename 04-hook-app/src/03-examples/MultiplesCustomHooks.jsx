

import { useFetch } from "../hooks/useFetch"
import {useCounter } from "../hooks/useCounter"

export const MultiplesCustomHooks = () => {
  const { counter , increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch( `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
  //console.log({data, isLoading, hasError});
                            //si tiene valor entonces (doble negación)
  const { author, quote } = !!data && data[0];
  /* if( isLoading ){
    return (<h1>Loading</h1>)
  } */

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {isLoading
        ?
        (<div className="alert alert-info text-center">
          Loading...
        </div>)
        : (<blockquote className="blockquote text-end">
          <p className="mb-1">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>)
      }
      <button className="btn btn-primary" disabled={isLoading} onClick={()=>increment()}>
        Next Quote
      </button>
    </>
  )
}
