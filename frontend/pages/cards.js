import { Typography, Button, Grid, Box} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { Container } from "@mui/material";
import { Divider } from "@mui/material";
import { color, margin } from "@mui/system";
import { cardsList } from "./cardList";
import AnimalCrossingCard from "../components/animal_crossing_card";
import { useParams } from "react-router-dom";
import CreateEditCardDialog from "../create_edit_card";
import axios from "axios";

export default function Cards(pros) {
 //nueo//nueo//nueo//nueo//nueo//nueo//nueo//nueo//nueo//nueo
  axios.get(GetEndpoint('usuario/cards'))
   //nueo//nueo//nueo//nueo//nueo//nueo//nueo//nueo//nueo//nueo
  //Parametros de la url
  const{ user } = useParams();
  //Variables de estado
  const [cardsList,setCardsList]=useState([]);
  //manejadores
  function deleteCard(id){
    setCardsList(cardsList.filter((card)=>card.id!==id));
  }
  //Ciclo de vida del componente//////////////////
  useEffect(() => {
    axios.get(GetEndpoint(`${user}/cards`))
  
    .then ((response) => {
      setCardsList(response.data);
      alert(JSON.stringify(response.data));
    })
  }, [])
  //MAnejador de eventos
  axios.post(GetEndpoint(`${user}/cards`,card))
  .then ((response) => {
    setCards(response.data);
  })





  //Renderizado del componente
  return (
    <CreateEditCardDialog>
    <Container maxWidth="sm">
      <Box>
      {/*Encabezado*/}
        <Typography variant="h2"> Cromos de anonimo</Typography>
        <Divider />
      </Box>
      {/*Boton*/}
      <Box sx={margin=5}>
        <Button variant="contained">Añadir Cromo</Button>
      </Box>
      {/*Cromos*/}
 
      <Grid container spacing={2}>
        {/*Cromos*/}
        {cardsList.map((card,index)=>(
        <AnimalCrossingCard card={card} index={index}>
        <Button onClick={()=> deleteCard(card.id)}>Eliminar</Button>
        <Button onClick={()=> alert('voy a editar a ${card.name}')}>Editar</Button>
        </AnimalCrossingCard>
      ))}
      {cardsList.length ===0 && <p>no hay cromos</p>}
      </Grid>   
    </Container>
    </CreateEditCardDialog>
  );
}
