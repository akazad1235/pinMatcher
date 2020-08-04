
        const pinGenarete = document.getElementById('pin-generate-btn')
        pinGenarete.addEventListener('click', function(event){
           var newNumber = Math.floor(1000+Math.random()*9000)


           document.getElementById('pin-display').value = newNumber
        }) 

        const numberBtn = document.getElementsByClassName('button')
            for (let i = 0; i < numberBtn.length; i++) {
                numberBtn[i].addEventListener('click', function(e){
                    var num = this.id
                    number(num)
                   
                })


               
                
            }
        function number(num){
                     var  oldValue = document.getElementById('number-display').value
                   var output = oldValue+num
                   var ConvertNumber = parseInt(output)
                   document.getElementById('number-display').value = ConvertNumber
 
                 
        }

            var testSubmit = document.getElementById('submit')
            testSubmit.addEventListener('click', function(e){

              var getData =   document.getElementById('number-display').value 
              var getDataNumber = parseInt(getData)
              
              var pinData =   document.getElementById('pin-display').value 
              var pinDataNumber = parseInt(pinData)

               if(getDataNumber == pinDataNumber){   
                var number = document.getElementsByClassName('notify')
                for (let i = 0; i < number.length; i++) {
                    const element = number[i];
                    if (number[i] == number[1]) {
                        pinMatch('block')   
                    }
                    if (number[i]== number[0]) {
                        pinNotMatch('none')  
                    }
                }

                }else if(isNaN(getDataNumber) || isNaN(pinDataNumber)){
                    alert('Please Enter Your Pin')
                }else{
                var number = document.getElementsByClassName('notify')
                for (let i = 0; i < number.length; i++) {
                    const element = number[i];
                    if (number[i] == number[0]) {
                        pinNotMatch('block')
                    }
                    if (number[i]== number[1]) {
                        
                        pinMatch('none')  
                    }
                }   
                }
                
            })
            //operator button action 
            var operator = document.getElementsByClassName('operator')
            for (let i = 0; i < operator.length; i++) {
                const element = operator[i];
                operator[i].addEventListener('click', function(event){
                    var output = document.getElementById('number-display').value
                    var outputs = output.toString()
                    if (this.id == 'backSpace') {
                        var result = outputs.substr(0, outputs.length-1)
                        document.getElementById('number-display').value=result
                    }
                    if (this.id == 'clear') {
                        document.getElementById('number-display').value=""
                    }
                })
            }