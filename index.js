var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
    // Attempting to change a constant
    leastFavoriteCustomer = 'someone else'; // This will throw an error
}

