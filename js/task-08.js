const formRef = document.querySelector(`.login-form`);
console.log(formRef);

const btnRef = document.querySelector(`button`);
console.log(btnRef);




formRef.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    // console.dir(formElements);


    const mail = formElements.email.value;
    const password = formElements.password.value;
     

    const formData = {
        mail,
        password
    };

    // console.dir(formData);
    
     
      if ( (formData.mail === ``) || (formData.password === ``)) {
    alert(`Всі поля повинні бути заповнені`);
      } else {
          console.log(formData);
          document.querySelector(`.login-form`).reset();
      }
    

}
