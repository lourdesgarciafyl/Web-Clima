import { Card } from "react-bootstrap"

const CardClima = ({ clima }) => {
    const{name, main:{temp, temp_max, temp_min}} = clima
    const kevinACentigrados = (temperatura) => parseInt(temperatura - 273.15);

    return(
        <div className="d-flex justify-content-center my-4">
        <Card className="w-50">
        <Card.Body className="text-center">
            <Card.Title>Clima en {name}</Card.Title>
            <Card.Subtitle>Temperatura actual: {kevinACentigrados(temp)} °C</Card.Subtitle>
            <Card.Text>Máxima: {kevinACentigrados(temp_max)}°C - Mínima: {kevinACentigrados(temp_min)}°C</Card.Text>
        </Card.Body>
        </Card>
        </div>
    )
}

export default CardClima