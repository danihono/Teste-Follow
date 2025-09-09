// Inicializa o EmailJS (coloque sua PUBLIC KEY)
emailjs.init({ publicKey: 'YtRx1izcx9Ki65byW' });

const form = document.getElementById('contactForm');
const btn  = document.getElementById('sendBtn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const original = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Enviando...';

  try {
    // Troque pelos seus IDs do EmailJS
    const SERVICE_ID  = 'service_sqyvc0m';
    const TEMPLATE_ID = 'template_c9occqg';

    await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form);

    btn.textContent = 'Enviado!';
    form.reset();

  } catch (err) {
    console.error(err);
    alert('Erro ao enviar mensagem. Tente novamente.');
    btn.textContent = 'Tentar novamente';
  } finally {
    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = original;
    }, 2000);
  }
});
