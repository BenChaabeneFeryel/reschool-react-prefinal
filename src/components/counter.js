import React, { useState, useEffect } from 'react'
import './counter.css'
import axios from 'axios'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography'

const dashboardURL = 'https://ami.monconstat.tech/api/dashboard'
const DechetsURL = 'https://ami.monconstat.tech/api/somme-total-dechet-zone-depot'

export default function Counter() {

    const [dechets, setDechets] = useState([])
    const getDechets = async () => {
      await axios.get(DechetsURL).then((response) => {
        setDechets(response.data)
      })
    }
    useEffect(() => getDechets(), [])
  return (
    <>
        <Container>
            <Card background='primary' className='text-white mb-3' style={{ maxWidth: '18rem' }}>
                <CardHeader>Quantité Totale Plastique</CardHeader>
                <Typography>
                    {dechets.somme_depot_actuelle_plastique} Kg
                </Typography>
            </Card>
            <Card background='warning' className='text-white mb-3' style={{ maxWidth: '18rem' }}>
                <CardHeader>Quantité Totale Papier</CardHeader>
                <Typography>
                    {dechets.somme_depot_actuelle_papier} Kg
                </Typography>
            </Card>
            <Card background='success' className='text-white mb-3' style={{ maxWidth: '18rem' }}>
                <CardHeader>Quantité Totale Composte</CardHeader>
                <Typography>
                    {dechets.somme_depot_actuelle_composte} Kg
                </Typography>
            </Card>
            <Card background='danger' className='text-white mb-3' style={{ maxWidth: '18rem' }}>
                <CardHeader>Quantité Totale Canette</CardHeader>
                <Typography>
                    {dechets.somme_depot_actuelle_canette} Kg
                </Typography>
            </Card>
        </Container>
    </>
  )
}
