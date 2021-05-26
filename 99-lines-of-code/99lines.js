const friends = ['Ivan', 'Gab', 'Kent', 'Kejy', 'Kaniel'];
for (let i = friends.length; i >= 0; i-- ) {
    let j = 99;
    while (j !== 0) {
        console.log(`${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, ${j} lines of code in the file`);
        j--;
    }
}