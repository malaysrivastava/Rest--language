import React ,{useEffect,useState} from 'react'
import {Container} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import {Autocomplete} from '@material-ui/lab'
import axios from 'axios'

const Home =()=>{

    const [lang,setLang] = useState('')
    
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

    const handlechange = name =>e=>{
        e.preventDefault()
        setLang({lang,[name]:e.target.value})
        console.log(lang)
    }
     
    useEffect(()=>{
        loadLanguage()
    },[])

    return(
        <Container fixed style={{"margin":"auto"}}>
        <h1 style={{"text-align":"center"}}>Home</h1>
        <Autocomplete
         id="combo-box-demo"
         options={ldata}
         getOptionLabel={(option) => option.name}
         style={{ width: 300 }}
         renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
         onChange={handlechange('boom')}
         />       
        </Container>
        
    )
}

export default Home