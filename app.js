document.getElementById('btn').addEventListener('click', function(e){

    const input = document.getElementById('number').value;
    document.querySelector('.gif').style.display = 'block';
    setTimeout(result, 2000);
    function result(){
        const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://numbersapi.com/${input}/math`, true);
    xhr.onload = function(){
        if(this.status === 200){
            const output = document.querySelector('.output');
            output.innerHTML = this.responseText;
            document.getElementById('second-card').style.display = 'block';
            document.getElementById('number').value = '';
            document.querySelector('.gif').style.display = 'none';
        } else{
            alert('Please Enter Number');
        }
    } 
    xhr.send();
    }
    
});