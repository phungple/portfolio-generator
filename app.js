const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);














// parentheses can be obmitted around 'profileDataArr' parameter since we only have 1 parameter
const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i++) {
    console.log(profileDataArr[i]);
    }

    console.log('================');

    // Is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);