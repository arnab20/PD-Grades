function grades() {
    let totalRoll = prompt("Last Roll Number", "Please write the last roll number");
    let inputO = prompt("Roll for O", "Please write the roll using space");
    let rollO = inputO.trimEnd().split(" ");
    let numRollO = rollO.map(Number)
    console.log(numRollO);

    for (let i = 0; i < numRollO.length; i++) {
        let target = `MainContent_gvMarksGradeEntry_txtGrade_Obtained_${numRollO[i] - 1}`;
        let val = document.querySelector("#" + target);
        val.value = "O";
    }

    let inputS = prompt("Roll for S", "Please write the roll using space");
    let rollS = inputS.trimEnd().split(" ");
    let numRollS = rollS.map(Number)
    console.log(numRollO);

    for (let j = 0; j < numRollS.length; j++) {
        let target = `MainContent_gvMarksGradeEntry_txtGrade_Obtained_${numRollS[j] - 1}`;
        let val = document.querySelector("#" + target);
        val.value = "S";
    }

    for (let h = 0; h < totalRoll; h++) {
        let target = `MainContent_gvMarksGradeEntry_txtGrade_Obtained_${h}`;
        let val = document.querySelector("#" + target);

        if (val.value != "O" && val.value != "S") {
            val.value = "A";
        }
    }
}

grades();