var btn = document.createElement ( 'button' )
document.body.appendChild ( btn )
btn.innerHTML = "Кнопка"

btn.onclick = function btnClickHandler (event) 
{        
    var element = document.createElement('p');
    document.body.appendChild(element);

    var num = Math.round(Math.random() * 1500)

	function digitize(num) {
	  num = String(num).split('').map(Number);
	  return num;
	}
	var t =""
    var arr = digitize(num);
	console.log(arr);
for (i=0; i<arr.length; i++) 
{

	t += String.fromCharCode(arr[i])
}
	console.log(t)
	element.innerText = `${t}`;
}