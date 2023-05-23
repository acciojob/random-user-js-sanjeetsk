//your code here
const imag = document.getElementById('imag');
const nam = document.getElementById('name');
const message = document.getElementById('additionalInfo');
const buttons = document.querySelectorAll('button[data-attr]')
const refresh = document.getElementById('refresh');

refresh.addEventListener('click', () => {
    location.reload();
})


async function fetchRandomUser() {
    try{
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const user = data.results[0];
        imag.src = `${user.picture.large}`;
        nam.innerHTML = `${user.name.first}  ${user.name.last}`;


        buttons.forEach(button => {
            button.addEventListener('click', () => {
              const attribute = button.getAttribute('data-attr');
              displayInfo(attribute);
            });
        });

        function displayInfo(attribute) {
            if(attribute == 'age'){
                const age = user.dob.age;
                message.innerHTML = `${age}`;
            }
            else if(attribute == 'email'){
                const email = user.email;
                message.innerHTML = `${email}`;
            }
            else if(attribute == 'phone'){
                const phone = user.phone;
                message.innerHTML = `${phone}`;
            }
        }
    }
    catch (error) {
        console.log('An error occurred:', error);
    }

}

fetchRandomUser();


