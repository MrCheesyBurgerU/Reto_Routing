import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail() {

    const { mascotaId } = useParams(); 
    const [mascota, setMascota] = useState('defecto'); 

    useEffect(() => {
        const URL = "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
        
        fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            const mascotaEncontrada = data.find((m) => m.id === parseInt(mascotaId));
            setMascota(mascotaEncontrada); 
        });
    }, [mascotaId]); 

    return (
        <div>
            <h1>{mascota.nombre}</h1>
            <img src={mascota.foto} alt={mascota.nombre} style={{ maxWidth: "100%", maxHeight: "75vh", objectFit: "contain" }} />
            <h2>{mascota.raza}</h2>
        </div>
    );
}
