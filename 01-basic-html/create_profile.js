//Contenedor de FORM 
const formContainer = document.createElement('div');
formContainer.setAttribute('id', 'contactForm');

// FORM - ASUNTO - FIELD
const div_asunto = document.createElement('div');
const asunto_label = document.createElement('label');
asunto_label.setAttribute('for', 'subject');
asunto_label.textContent = 'Asunto:';
const asunto_input = document.createElement('input');
asunto_input.setAttribute('type', 'text');
asunto_input.setAttribute('id', 'subject');
asunto_input.setAttribute('required', 'true');
div_asunto.appendChild(asunto_label);
div_asunto.appendChild(asunto_input);


//FORM - NOMBRE - FIELD 
const nombre_div = document.createElement('div');
const nombre_label = document.createElement('label');
nombre_label.setAttribute('for', 'name');
nombre_label.textContent = 'Nombre:';
const nombre_input = document.createElement('input');
nombre_input.setAttribute('type', 'text');
nombre_input.setAttribute('id', 'name');
nombre_input.setAttribute('required', 'true');
nombre_div.appendChild(nombre_label);
nombre_div.appendChild(nombre_input);

//FORM - COMENTARIOS - FIELD
const comentarios_div = document.createElement('div');
const comentarios_label = document.createElement('label');
comentarios_label.setAttribute('for', 'comments');
comentarios_label.textContent = 'Comentarios:';
const comentarios_text = document.createElement('textarea');
comentarios_text.setAttribute('id', 'comments');
comentarios_text.setAttribute('rows', '4');
comentarios_text.setAttribute('required', 'true');
comentarios_div.appendChild(comentarios_label);
comentarios_div.appendChild(comentarios_text);

//FORM - CORREO - FIELD
const correo_div = document.createElement('div');
const correo_label = document.createElement('label');
correo_label.setAttribute('for', 'email');
correo_label.textContent = 'Correo electrónico:';
const correo_input = document.createElement('input');
correo_input.setAttribute('type', 'email');
correo_input.setAttribute('id', 'email');
correo_input.setAttribute('required', 'true');
correo_div.appendChild(correo_label);
correo_div.appendChild(correo_input);

//FORM - TELEFONO - FIELD
const telefono_div = document.createElement('div');
const telefono_label = document.createElement('label');
telefono_label.setAttribute('for', 'phone');
telefono_label.textContent = 'Número de teléfono:';
const telefono_input = document.createElement('input');
telefono_input.setAttribute('type', 'tel');
telefono_input.setAttribute('required', 'true');
telefono_input.setAttribute('id', 'phone');
telefono_div.appendChild(telefono_label);
telefono_div.appendChild(telefono_input);

//FORM - SUBMIT - BUTTON 
const submitButton = document.createElement('button');
submitButton.setAttribute('id', 'submitButton');
submitButton.textContent = 'Enviar';

//Agregamos los elementos al div de form 

formContainer.appendChild(div_asunto);
formContainer.appendChild(nombre_div);
formContainer.appendChild(comentarios_div);
formContainer.appendChild(correo_div);
formContainer.appendChild(telefono_div);
formContainer.appendChild(submitButton);


const responseMessage = document.createElement('div');
responseMessage.setAttribute('id', 'responseMessage');
responseMessage.style.display = 'none';

document.body.appendChild(formContainer);
document.body.appendChild(responseMessage);

submitButton.addEventListener('click', function(event) {
    //Obtener valores 
  const subject = document.getElementById('subject').value;
  const name = document.getElementById('name').value;
  const comments = document.getElementById('comments').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
    //Respondemos con mensaje personalizado
  const responseMessage = document.getElementById('responseMessage');
  responseMessage.textContent = `Gracias por tus comentarios, ${name}, te contactaremos a ${email} en caso de ser necesario.`;
  responseMessage.style.display = 'block';

  //Hacemos clear a los elementos
  document.getElementById('subject').value = '';
  document.getElementById('name').value = '';
  document.getElementById('comments').value = ''; 
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  
})