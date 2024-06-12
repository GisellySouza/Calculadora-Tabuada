function Calcular(){
    var num = window.document.getElementById('num')
    var final = document.getElementById('final')
    if (num.value.length == 0 || final.value.length == 0){
        window.alert('[ERRO]: Preencha os dados.')
    } else {
        var n = Number(num.value)
        var f = Number(final.value)
        var x= 0
        var r= ''
        var resp = window.document.getElementById('resposta')
        r= n*f
        resp.innerHTML=`A tabuada da ${n} é:<br>`
        

        do{ 
            r = x*n; 
            resp.innerHTML +=`${x} X ${n} = ${r}<br>`
            x++
            
        }while ( x <= f )
   }
}