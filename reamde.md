# Game Player Register

## Caso de Uso

### Actores
Administrador de Juego (admin)

### Descripcion Corta
Un SAP (Single Page Aplication) para gestionar los jugadores de un Juego masivo en linea.

### Secuencia de Caso

1. admin ingresa en el browser la url del panel de juego
2. el sistema le devuelve un spa que al cargarse su estructura html y archivos dependientes solicite al API el listado de todos los jugadores registrados.
3. el script del SPA al recibir el listado del API renderiza una tabla con el alias del jugador, el nivel, las armas y habilidades y un contador de los items guardados en su bolso.
4. admin podra ingresar nuevo jugador, actualizar ciertos datos de los existentes o banear el jugador segun la accion seleccionada.

### Excepciones

* En todo momento admin puede cancelar una accion.
* Cuando el API reciba un error se debe notificar al admin.

## Player JSON Schema

```{json}
{
  "alias": "",
  "nivel": "",
  "rol":"",
  "nivelHistory":[
    {"levelDate":Date(),
     "levelGained" ""
    }
  ],
  "weapons":[
      {"weapon":"basic sword",
       "type":"sword",
       "atackPower": 10,
       "defensePower": 4,
       "magicPower":0
      },
      {"weapon":"basic shield",
       "type":"shield",
       "atackPower": 3,
       "defensePower": 10,
       "magicPower":0
      }
    ],
    "skills":[
      {
        "skill":"Auto Healing Rookie",
        "affects":"health",
        "magicNeeded":5,
        "autoTrigger":false
      }
    ],
    "bag":[
      {
        "item":"Healing Potion",
        "value":10,
        "affects":"health",
        "factor": 5
      }
    ],
    "bagItems":1
}
```
