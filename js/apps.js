
        const pinGenarete = document.getElementById('pin-generate-btn')
        pinGenarete.addEventListener('click', function(event){
           var newNumber = Math.floor(1000+Math.random()*9999)


           document.getElementById('pin-display').value = newNumber
        }) 

        //keypad
        const numberBtn = document.getElementsByClassName('button')
            for (let i = 0; i < numberBtn.length; i++) {
                numberBtn[i].addEventListener('click', function(e){
                    var num = this.id
                    number(num)
                   
                })   
            }

            //for submit button
            var submitBtn = document.getElementById('submit')
            submitBtn.addEventListener('click', function(e){

              var keypadDisplay =   document.getElementById('number-display').value 
              var keypadDisplayNumber = parseInt(keypadDisplay)
              
              var pinGenareteDiplay =   document.getElementById('pin-display').value 
              var pinGenareteDiplayNumber = parseInt(pinGenareteDiplay)

               if(keypadDisplayNumber == pinGenareteDiplayNumber){   
                var number = document.getElementsByClassName('notify')
                for (let i = 0; i < number.length; i++) {
                    if (number[i] == number[1]) {
                        pinMatch('block')   
                    }
                    if (number[i]== number[0]) {
                        pinNotMatch('none')  
                    }
                }
                }else if(isNaN(keypadDisplayNumber) || isNaN(pinGenareteDiplayNumber)){
                    alert('Please Enter Your Pin')
                }else{
                var number = document.getElementsByClassName('notify')
                for (let i = 0; i < number.length; i++) {
                    if (number[i] == number[0]) {
                        pinNotMatch('block')
                    }
                    if (number[i]== number[1]) {
                        pinMatch('none')  
                    }
                }   
                }
                
            })
            //operator button action back-space & clear
            var operator = document.getElementsByClassName('operator')
            for (let i = 0; i < operator.length; i++) {
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