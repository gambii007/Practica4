const metodoPago = 'transferencia';

switch (metodoPago) {
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;

    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;

    default:
        console.log('Aun no has pagado');
        break;
}