import React , {useState} from 'react';
import axios from 'axios';

const Search = () => {
  
  
  const [result , setres] = useState('')
  
  const bnCLick = async() =>{
    try {
      const res = await axios.get(`https://api.domainsdb.info/v1/domains/search?domain=${result}`)
      console.log(res);
    } 
    catch (error) {
      console.log(error);
    }
  }
  return (
  <>
    <input type="text" value={result} onChange={(e) => setres(e.target.value) } >

    </input>

    <button onClick={bnCLick}>
      Click
    </button>
  </>
  )
};

export default Search;