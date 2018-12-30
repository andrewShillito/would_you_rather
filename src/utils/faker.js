const faker = require("faker");

export function generateAvatarURL() {
    return faker.image.avatar();
}