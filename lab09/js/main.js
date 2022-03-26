let group = prompt('Приклад: КН-920А\nНомер групи:');
let lastname = prompt('Ваше прізвище?');

var group_var = ['КН-920А', 'КН-920Б', 'КН-920В', 'КН-920Г', 'КН-920Д', 'КН-920Є'];
var lastname_var = ['Оменюк','Комарова','Матюшин','Суладзе'];

/*if(confirm("1) Правильно ли задан цвет страницы?\ncolor: black;"))

if(confirm("2) Можно ли задать цвет страницы в HEX"))

if(confirm("3) Можно ли задать цвет в HTML?"))

if(confirm("4) Можно ли покрасить отдельный блок страницы?"))
*/

try { 
    // Перевірка груп
    for(var i = 0;i <= group_var.length-1;i++){
        if(group == group_var[i]){
            alert(`Група знайдена`);
            
        }
    }
    
        // Перевірка списків студентів
        for(var i = 0;i <= lastname_var.length-1;i++){
            if(lastname == lastname_var[i]){
                alert('Студент знайден');
                throw new Error('Студент знайден');
            }
            else{
            }
        }
} catch (error) {
    console.error(error);
}

alert(`Група: ${group}\nСтудент: ${lastname}`);