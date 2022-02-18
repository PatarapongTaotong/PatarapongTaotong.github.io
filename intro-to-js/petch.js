function askMyName() {
    const myName = prompt('What is your name')
    if (myName != null) {
        document.getElementById("myname").innerHTML = "My name is " + myName;
    }
}

function helloWorld() {
    const h1message = document.getElementById("myname").innerHTML
    alert(h1message + ' ถึงรถจะไม่แรง แต่ฟันพี่ไม่แปรงนะค้าบบ')
}

function calAge() {
    const birthYear = prompt('คุณเกิดในปี ค.ศ.')
    let age = new Date().getFullYear() - birthYear;
    if (age != null) {
        alert('ยินดีด้วย นายอยู่ในประเทศแบบนี้อ่ะมา ' + String(age) + ' ปีแล้ว')
    }
}

function loadProfile() {
    const name = "Patarapong";
    const province = "Prachinburi";
    document.getElementById("my-name").innerHTML = name;
    document.getElementById("my-province").innerHTML = province;
}