// Write your solution in this file!

const driver = { key: 'value' };

function updateDriverWithKeyAndValue(driver, key, value){
    const newDriver = {...driver };

    newDriver[key] = value;

    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    const driverDelete = Object.assign({}, driver, key)
    delete driverDelete[key];

    return driverDelete;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];

    return driver;
}