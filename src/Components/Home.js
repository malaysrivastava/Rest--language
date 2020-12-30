import React ,{useEffect,useState} from 'react'
import {Container} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import {Autocomplete} from '@material-ui/lab'
import axios from 'axios'
import './Home.css'

const Home =()=>{

    
    const [ldata,setData] = useState([])

    const loadLanguage =()=>{
       axios.get(`https://restcountries.eu/rest/v2/lang/es`)
        .then(async response=>{
            await setData(response.data)
            console.log(ldata)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        loadLanguage()
    },[])

    return(
        <Container fixed className="container">
        <h2 className="ri">React Internship Assignment</h2>
        <Autocomplete className="ac"
         multiple
         limitTags={2}
         id="multiple-limit-tags"
         options={ldata}
         getOptionLabel={(option) => option.name}
         style={{ width: "15rem" }}
         renderInput={(params) => <TextField {...params} label="Languages" variant="outlined" />}
         />       
        </Container>
        
    )
}

export default Home