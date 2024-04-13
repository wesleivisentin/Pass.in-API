import { prisma } from "../src/lib/prisma";

async function seed() {
    await prisma.event.create({
        data: {
            id: 'ade0689f-a8e9-45ae-928e-b1731679ce5d',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'um evento qualquer',
            maximumAttendees: 58,
        }
    })
}

seed().then(() => {
    console.log("Database seeded!");
    prisma.$disconnect()
})