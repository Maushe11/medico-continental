//Función que trae todos los datos para Home
const getDataHome=()=>{
    $.ajax({
        method: "GET",//se usa el método GET
        url: "/get-categorias-all",//este es la url
        dataType:"json",//el tipo de datos que recibira es json
        data:null,//no se esta enviando ninguna variable
        success: function(data){
            for(i=0;i<data.length;i++){//se hace un bucle para listar los datos encontrados
                if(i===0){//esto es una condición si la variable i = 0, se ejecutara la linea de código.
                    $('#categoria1List').append( '<div style="padding:10px 10px;cursor:pointer;"><div style="width:100%"><a href= "'+url_base+'productos/'+data[i].id+'" style="font-size:16px;font-weight:400;color:#312930;margin:0; margin-top: 10px;">'+data[i].name+'</a></div></div>');   //se insertara ese div al campo que tiene por id #categoria1List
                }else{//si i != 0, entonces se ejecutara esta linea de código.
                    $('#categoria1List').append( '<div style="padding:10px 10px;cursor:pointer;"><div style="width:100%"><a href= "'+url_base+'productos/'+data[i].id+'"  style="font-size:16px;font-weight:400;color:#312930;margin:0;">'+data[i].name+'</a></div></div>');//se insertara ese div al campo que tiene por id #categoria1List
                } 
            }                                                
        },error: function(e){
            console.log(e);//con este código se mostraran los errores en la consola.
        },
    });

    $.ajax({
        method: "GET",//se usa el método GET
        url: "/get-banners-all",//este es la url
        dataType:"json",//el tipo de datos que recibira es json
        data:null,//no se esta enviando ninguna variable
        success: function(data){
            if(data.banners!=="Error"){//condición si es que data.banners no es igual a "error" se ejecutara el siguiente código.
                if(data.banners!=="No hay registros"){//condición si es que data.banners no es igual a "No hay registros" se ejecutara el siguiente código. 
                    $('#bannerOfertaImagen').append('<a href="'+data.banners[0].url+'" target="_blank"><img src="'+data.banners[0].imagen+'" style="width:100%;height:339px;" /></a>');//se insertara el link al campo que tiene por id #bannerOfertaImagen.
                    $('#bannerOfertaImagen2').append('<a href="'+data.banners[0].url+'" target="_blank"><img src="'+data.banners[0].imagen+'" style="width:100%;height:339px;" /></a>');//se insertara el link al campo que tiene por id #bannerOfertaImagen2.
                }

            }
        },error: function(e){
            console.log("error",e);//con este código se mostraran los errores en la consola.
        },
    });

    $.ajax({
        method: "GET",//se usa el método GET
        url: "/get-categorias-destacadas-all-home",//este es la url
        dataType:"json",//el tipo de datos que recibira es json
        data:null,//no se esta enviando ninguna variable
        success: function(data){
            if(data.categorias!=="Error"){//condición si es que data.categorias no es igual a "error" se ejecutara el siguiente código.
                if(data.categorias!=="No hay registros"){//condición si es que data.categorias no es igual a "error" se ejecutara el siguiente código.
                    console.log("CATEGORIAS: "+data.categorias)//se crea una variable en la consola llamada CATEGORIAS que muestra los datos de data.categorias.
                    for(i=0;i<4;i++){//Se hace un bucle que comienza en 0 y termina cuando no se cumpla que i sea menor que 4.
                        let element= data.categorias[i]//se crea la variable element que lleva por dato "data.categorias[i]".
                        console.log(element)//se muestra en la consola el contenido de la variable element.
                        $('#categoriaDestacada'+i).append('<a href="productos/'+element.id+'"><img src="'+element.imagen+'" style="width:100%;height:200px;object-fit:cover;border-radius:10px;"/><center><h5 style="padding: 20px; margin-bottom: 20px;">'+element.name+'</h5></center></a>')//se inserta el link al campo que tiene por id "#categoriaDestacada+i".
                    }
                }
            }
             
        } ,error: function(e){
            console.log(e);//se muestra el error en la consola.
        },
    });
    $.ajax({
        method: "GET",//se usa el método GET
        url: "/listarNuevasMarcas",//este es la url
        dataType:"json",//el tipo de datos que recibira es json
        data:null,//no se esta enviando ninguna variable
        success: function(data){

            if(data.marcas!=="No hay registros"){//condición, si data.marcas no es igual a "no hay registros" se ejecutara el siguiente código.
                console.log("MARCAS: "+data.marcas)//se mostrara en la consola los datos de marcas.

                for(ls=0;ls<3;ls++){//se hace un bucle con la variable ls que comienza en 0 y termina cuando ya no cumple la condición de que ls sea menor que 3.
                    $('#marcasDataHome'+ls).append('<a href="#"><img src="'+data.marcas[ls].imagen+'" style="width:100%;height:75px;box-shadow: 6px 6px 8px #ccc;object-fit:cover;border-radius:20px;"/></a>')//se inserta el link al campo que tiene por id "#marcasDataHome+ls".
                }
            }
        }
    })
    $.ajax({
        method: "GET",//se usa el método GET
        url: "/listarProductosMasComprados",//este es la url
        dataType:"json",//el tipo de datos que recibira es json
        data:null,//no se esta enviando ninguna variable
        success: function(data){
            if(data.productosmas!=="No hay registros"){//condición, si data.productosmas no sea igual a "No hay registros" se ejecutara el siguiente código.
                for(ls=0;ls<3;ls++){//bucle que comienza en 0 y termina cuando la regla de que la variable ls sea menor que 3 ya no se cumpla.
                    $('#productosHomePop'+ls).append('<a href="producto/'+data.productosmas[ls].Id+'"><img src="'+data.productosmas[ls].imagen+'" style="width:100%;height:75px;box-shadow: 6px 6px 8px #ccc;object-fit:cover;border-radius:20px;"/></a>')//se inserta el link al campo que tiene por id "#productosHomePop+ls".
                }
            }
        }
    })
    $.ajax({
        method: "GET",//se usa el método GET
        url: "/listar3ProductosNuevos",//este es la url
        dataType:"json",//el tipo de datos que recibira es json
        data:null,//no se esta enviando ninguna variable
        success: function(data){
            if(data!=="Error"){//condición, si es que data no es igual a "error" se ejecutara el siguiente código.
                if(data!=="No hay registros"){//condición, si data no es igual a "No hay registros" se ejecutara el siguiente código
                    let dataProductos=JSON.parse(data);//se crea la variable dataProductos
                    for(ls=0;ls<3;ls++){//se crea un bucle que comienza en 0 y termina cuando la regla de que ls sea menor que 3 ya no se cumpla.
                        $('#productosRecientesHome'+ls).append('<a href="producto/'+dataProductos[ls].Id+'"><img src="'+dataProductos[ls].imagen+'" style="width:100%;height:75px;box-shadow: 6px 6px 8px #ccc;object-fit:cover;border-radius:20px;"/></a>')//se inserta el link al campo que tiene por id "#productosRecientesHome+ls".
                    }
                }
            } 
        },error: function(e){
            console.log(e);//se muestra el error en la consola.
        },
    });
}