function calcular(){
    let strkmm = document.getElementById("Km_M").value;
    let strmcm = document.getElementById("M_Cm").value;
    let strftp = document.getElementById("Ft_P").value;
    let stryapul = document.getElementById("Yar_pulg").value;


    //validaciones, los datos deben contener un valor y ser positivos

    if (strkmm===""){
        warning('El campo km debe contener un valor');
    }else if (strkmm < 0){
        warning('El valor ingresado en km debe ser mayor que cero');
    }else if (strmcm===""){
        warning('El campo metros debe contener un valor');
    }else if (strmcm < 0){
        warning('El valor ingresado en metros debe ser mayor que cero');
    }else if (strftp===""){
        warning('El campo pies debe contener un valor');
    }else if (strftp < 0){
        warning('El valor ingresado en pies debe ser mayor que cero');
    }else if (stryapul===""){
        warning('El campo yardas debe contener un valor');
    }else if (stryapul < 0){
        warning('El valor ingresado en yardas debe ser mayor que cero');       
    }else{
       

        let km = parseFloat(strkmm);
        let me = parseFloat(strmcm);
        let ft = parseFloat(strftp);
        let ya = parseFloat(stryapul);

        let kmm = (km * 1000);
        let mcm = (me*100);
        let ftpulg = (ft*12);
        let yapulg = (ya * 36);

        document.getElementById("metros").value = kmm;
        document.getElementById("centimetros").value = mcm;
        document.getElementById("pulgadas").value = ftpulg;
        document.getElementById("pulgadas2").value = yapulg;

    }


}

function limpiar (){
    document.getElementById("Km_M").value="";
    document.getElementById("M_Cm").value="";
    document.getElementById("Ft_P").value="";
    document.getElementById("Yar_pulg").value="";
    document.getElementById("metros").value="";
    document.getElementById("centimetros").value="";
    document.getElementById("pulgadas").value="";
    document.getElementById("pulgadas2").value="";

}

function warning (mensaje){
    Swal.fire(mensaje);
}
