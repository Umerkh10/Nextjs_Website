"use client"
import Script from 'next/script';

function Tawkto() {
  return (
    <Script
    strategy='beforeInteractive'
    onLoad={()=>console.log("Tawto loaded")}
    onError={(error)=>console.log(error)}
    >
      {`
      var Tawk_API = Tawk_API || {},
            Tawk_LoadStart = new Date();
        (function() {
            var s1 = document.createElement("script"),
                s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/5bcda041460a125f26570ac1/default';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        })();

        // Function to open the Tawk.to chat
          window.openChat = function() {
         window.Tawk_API.toggle();
            };

      `}
    </Script>
  )
}

export default Tawkto;


