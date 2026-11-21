// Configuración pública del sitio (sin secretos: los PIN se validan en el servidor)
window.LB_CONFIG = {
  API_URL: 'https://script.google.com/macros/s/AKfycbwQNT3es1WB9iZUA8ILJi90jXoBAUDXUlHcNa2oBFDkhkLbzXHqivhk0qO_QXwJGLcG/exec', // https://script.google.com/macros/s/XXXX/exec
  PRECIO: '$ 500',
  PRECIO_NUM: 500,
  // Precio por horario (hora de Uruguay). Cada tramo vale hasta 'hasta'; el último no tiene fin.
  PRECIOS: [
    { hasta: '2026-11-21T18:00:00-03:00', precio: 500, txt: 'hasta las 18 hs' },
    { hasta: '2026-11-22T01:00:00-03:00', precio: 700, txt: 'hasta la 1 am' },
    { precio: 900, txt: 'desde la 1 am' }
  ],
  BARRA: [
    ['Fernet con coca', 400], ['Gin tonic', 400], ['Vodka tonic', 400], ['Aperol spritz', 400],
    ['Botella de champagne', 1500], ['Red Bull', 300], ['Agua', 200], ['Refrescos', 200]
  ],
  MAX_ENTRADAS: 10,
  PREX_NUMERO: '1548831',
  PREX_TITULAR: 'Micaela Acosta',
  MP_ACTIVO: true // false = esconde el botón de Mercado Pago (queda solo transferencia)
};
