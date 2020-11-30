Google Tag Manager
Conforme informado em linha deixarei abaixo as tags para implementação do Google Tag Manager em seu site.

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5P5DCXV');</script>
<!-- End Google Tag Manager -->



Cole esse código o mais alto possível dentro do <head> em todas as páginas do seu site.
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5P5DCXV"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) --></head>




Cole esse código o mais alto possível dentro do <body> em todas as páginas do seu site.

<!-- Google Tag Manager (noscript) -->



    
Snippet de evento para a conversão, inserir a tag abaixo condicionada a ação realizada pelo usuário. (Envio de formulário, clique no botão, visualização de página, etc.)

<!-- Snippet de evento para a conversão "Formulário Orçamento", inserir a tag abaixo condicionada ao envio do formulário de Orçamento. -->
<script>
    gtag('event', 'conversion', {'send_to': 'AW-661492844/d8yTCP22-csBEOyotrsC'});
</script>

<!-- Snippet de evento para a conversão "Formulário Contato", inserir a tag abaixo condicionada ao envio do formulário de Contato. -->
<script>
    gtag('event', 'conversion', {'send_to': 'AW-661492844/pePLCMLE6csBEOyotrsC'});
</script>

<!-- Snippet de evento para a conversão "Clique WhatsApp", inserir a tag abaixo condicionada ao clique no botão do WhatsApp. -->
<script>
    gtag('event', 'conversion', {'send_to': 'AW-661492844/DcQUCODK6csBEOyotrsC'});
</script>


<!-- WhatsApp class -->
<script>
    document.addEventListener('click', function(e){
       var searchWpp = e.path.filter(function(i){
          if(i.getAttribute && i.getAttribute('class') != null){
          return i.getAttribute('class').search('buttonizer-button button-mobile-1 button-desktop-1') != -1;
          }
          else return false;
       });
    
       if(searchWpp.length > 0){
           console.log('click no WhatsApp');
           gtag('event', 'conversion', {'send_to': 'AW-575546206/ZLhYCNmkyuUBEN7GuJIC'});
       }
    });
</script>