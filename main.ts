input.onButtonPressed(Button.A, function () {
    interrumpir = 0
    for (let i = 0; i <= "Hola".length; i++) {
        if (interrumpir == 1) {
            break;
        }
        basic.showString("Hola".charAt(i))
    }
})
input.onButtonPressed(Button.B, function () {
    interrumpir = 1
    for (let j = 0; j <= "Chau".length; j++) {
        if (interrumpir == 0) {
            break;
        }
        basic.showString("Chau".charAt(j))
    }
})
let interrumpir = 0
basic.showIcon(IconNames.Happy)
