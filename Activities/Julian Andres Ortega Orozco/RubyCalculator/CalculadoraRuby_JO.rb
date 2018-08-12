option = 1
operator = '+'

def menu
    puts " -------------------------------------------------------- "
    puts " *** .: Calculadora Ruby :. ***                                 "
    puts " *** .: Julián Andrés Ortega Orozco :. *** "
    puts " -------------------------------------------------------- "
    puts "     1. Sumar"
    puts "     2. Restar"
    puts "     3. Multiplicar"
    puts "     4. Dividir"
    puts "     0. Salir"
    puts " -------------------------------------------------------- "
    puts "     => Digite su opción: "
    puts " -------------------------------------------------------- "
    option = gets.chomp    
    case option        
        when '1'
            operator = '+'
        when '2'
            operator = '-'
        when '3'
            operator = '*'
        when '4'
            operator = '/'
        else '0'
            exit  
    end
    operacion(operator)
end

def operacion(operator)

    puts "Digite Numero a operar:"
    numA = gets.chomp
    puts "Digite segundo Numero a operar:"
    numB = gets.chomp
    res = 0
    case operator
    when '+'     
        res = numA.to_f + numB.to_f     
    when '-'
        res = numA.to_f - numB.to_f
    when '*'
        res = numA.to_f * numB.to_f
    when '/'
        res = numA.to_f / numB.to_f
    else
        res=-1
    end
    puts "El resultado es: "+res.to_s

end

until option == "0"
    menu
end

#menu
#operation
#puts "Opcion Seleccionada: #{option}"  
