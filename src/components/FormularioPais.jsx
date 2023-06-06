import { Button, Form, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";

const FormularioPais = () =>{
    const [clima, setClima] = useState()

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const apretarBuscar = async ({ciudad, pais}) => {
        try{
            const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=29c60d6351839ff803cf2a378296a9e9`)
            const data = await respuesta.json()
            
            if(data.cod === "404"){
                console.log("Nombre de ciudad incorrecto")
                return;
            }else{
                console.log(data)
                setClima(data)
            }
        } catch(error){
            console.log(error)
        }
        console.log("probando")
    }
    return(
        <section className="my-4">
            <h1 className="display-5 text-center">Consulta el clima</h1>
            <Card className="container-wrapper">
                <Card.Body>
                    <Form onSubmit={handleSubmit(apretarBuscar)}>
                        <Form.Group className="mb-4" controlId="controlCiudad">
                            <Form.Label className="lead">Ingrese una ciudad</Form.Label>
                            <Form.Control 
                            aria-label="Ejemplo: San Miguel de Tucumán"
                            type="text"
                            placeholder="Ejemplo: San Miguel de Tucumán"
                            {...register("ciudad", {required: "Campo obligatorio"})}
                            >
                            </Form.Control>
                            <Form.Text className="text-danger">{errors.ciudad?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="controlPais">
                            <Form.Label className="lead">Seleccione un país</Form.Label>
                            <Form.Select 
                            aria-label="Ejemplo: San Miguel de Tucumán"
                            type="text"
                            placeholder="Ejemplo: San Miguel de Tucumán"
                            {...register("pais", {required: "Campo obligatorio"})}
                            >
                                                <option value="">--Seleccione un pais--</option>
                                                <option value="AR">Argentina</option>
                                                <option value="CL">Chile</option>
                                                <option value="CO">Colombia</option>
                                                <option value="CR">Costa Rica</option>
                                                <option value="ES">España</option>
                                                <option value="US">Estados Unidos</option>
                                                <option value="MX">México</option>
                                                <option value="PE">Perú</option>
                            </Form.Select>
                            <Form.Text className="text-danger">{errors.pais?.message}</Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                          Buscar temperatura
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </section>
    )
}

export default FormularioPais;