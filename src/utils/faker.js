const faker = require("faker");

// const logAvatars = () => {
//     for (let i = 0; i < 3; i++) {
//         console.log(faker.image.avatar());
//     }
// };

// logAvatars();

export function generateAvatarURL() {
    return faker.image.avatar();
}