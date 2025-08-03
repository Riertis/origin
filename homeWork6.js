const multFace = 'plankton';

switch (multFace) {
    case 'spongebob':
        console.log('| ( · )( · ) |');
        break;

    case 'patrick':
        console.log('/ ( · )( · ) \\');
        break;

    case 'squidward':
        console.log('( ( · )( · ) )');
        break;

    case 'plankton':
        console.log('| ( · ) |');
        break;

    case 'mr. Crabs':
        console.log('|·||·|');
        break;
}

//--------------------------------------------

let orderStatus;

switch (orderStatus) {
    case 'Формируются чеки':
        console.log('Обрабатывается');
        break;

    case 'Назначаются повара':
        console.log('Обрабатывается');
        break;

    case 'Запекается':
        console.log('Готовится');
        break;

    case 'Нарезается':
        console.log('Готовится');
        break;

    case 'Варится':
        console.log('Готовится');
        break;

    case 'Жарится':
        console.log('Готовится');
        break;

    case 'Поиск курьера':
        console.log('Готовится');
        break;

    case 'Курьер берёт заказ':
        console.log('У курьера');
        break;

    case 'Курьер в пути':
        console.log('У курьера');
        break;

    case 'Курьер подъезжает':
        console.log('У курьера');
        break;

    case 'Клиент отказался от заказа':
        console.log('Готов');
        break;

    case 'Заказ доставлен':
        console.log('Готов');
        break;

    default:
        orderStatus = "Обрабатывается";
        console.log(orderStatus);
        break;
}