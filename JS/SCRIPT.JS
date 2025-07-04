function togglePDF() {
  const iframe = document.getElementById('pdfViewer');
  const botao = document.getElementById('botaoToggle');

  if (iframe.style.display === 'block') {
    // Se já estiver visível, oculta
    iframe.style.display = 'none';
    iframe.src = '';
    botao.textContent = 'Ver Currículo';
  } else {
    // Se estiver escondido, mostra
    iframe.style.display = 'block';
    iframe.src = 'CV_KEVIN.pdf';
    botao.textContent = 'Fechar Currículo';
  }
}
