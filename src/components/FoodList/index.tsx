import FoodModel from '../../models/Food'
import { List, Container } from './styles'
import Food from '../../components/Food'

export type Props = {
  foods: FoodModel[]
}

const FoodList = ({ foods }: Props) => (
  <Container>
    <List>
      {foods.map((food) => (
        <li key={food.id}>
          <Food
            key={food.id}
            FoodPhoto={food.foodPhoto}
            FoodTitle={food.foodTitle}
            FoodDescription={food.foodDescription}
            FoodPhotoAlt={food.foodPhotoAlt}
          />
        </li>
      ))}
    </List>
  </Container>
)

export default FoodList
