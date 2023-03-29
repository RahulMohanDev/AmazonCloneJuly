import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import CartContext from '../../../../context/cart.context'

export default function ProductCard({ image, title, description, price, id }) {
  const navigate = useNavigate()
  const { setCart } = React.useContext(CartContext)
  return (
    <Card sx={{ maxWidth: 345 }} key={id}>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            navigate(`/home/products/${id}`)
          }}
        >
          view
        </Button>
        <Button
          size="small"
          onClick={() => {
            setCart((prev) => {
              return [...prev, { id, title, image, price, quantity: 1 }]
            })
          }}
        >
          Add to cart
        </Button>
        <Button size="small">buy now</Button>
      </CardActions>
    </Card>
  )
}
