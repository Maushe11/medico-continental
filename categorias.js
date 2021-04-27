//Obtener todos las categorías
app.get("/get-categorias-all",(req, res) => {
    let urlAPI = `${urlBase}/listar?nombretabla=categorias`;//este es la url de la api
    https.get(urlAPI, (resp) => {
        let data = '';
        resp.on('data', (chunk) => {//datos recibidos
            data += chunk;
        });
        resp.on('end', () => {//imprimir resultados
            datosJSON = JSON.parse(data);
            res.json(datosJSON);
        });
    }).on("error", (err) => {//cuando se presenta algún error
        error = 1;
        message = "Error to connect";
        json_response = {
            "error": error,
            "message": message
        };
        res.json(json_response);
    });
  });
  
  app.get("/listar3ProductosNuevos",(req, res) => {
    let tabla = "productos"
    let urlAPI = `${urlGeneric}/listarNuevos2?nombretabla=${tabla}&nombreid=destacado&id=1&nombreproyecto=inkalandia&limit=3`//url de la api
  
    https.get(urlAPI, (resp) => {
        let data = '';
        resp.on('data', (chunk) => {//datos recibidos
            data += chunk;
  
        });
        resp.on('end', () => {//imprimir resultado
          mydata = JSON.parse(data);
          res.json(data);
        });
    }).on("error", (err) => {//cuando se presenta algún error
        res.json(err);
    });
  });
  
  //Obtener todos los banners
  app.get("/get-banners-all",(req, res) => {
      let urlAPI = `${urlGeneric}/listar?nombretabla=banners&nombreproyecto=inkalandia`;//url de la api
      let banners;
      https.get(urlAPI, (resp) => {
                let data = '';
                resp.on('data', (chunk) => {//datos recibidos
                    data += chunk;
                });
                resp.on('end', () => {//imprimir resultados
                    banners = JSON.parse(data);
                  
                      res.json({banners:banners});
                });
      }).on("error", (err) => {//cuando se presenta algún error
            res.json(err);
                      
        });
  });