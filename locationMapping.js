const wmap_wrapper = document.getElementById("wmap_wrapper");
const spotlight_container = document.getElementById("spotlight_container");
const spotlight_wrapper = document.getElementById("spotlight_wrapper");

const teamDatas = [
    {
        id: "18145",
        name: "18145 MEN IN BLACK",
        logo: "assets/MIB_logo.webp",
        descrition: "",
        website: ``,
        location: {
            x: 27.3,
            y: 40,
        },
    },
    {
        id: "6567",
        name: "6567 ROBORAIDERS",
        logo: "assets/ROBORAIDERS_logo.webp",
        descrition: `The Red Hook RoboRaiders is a public high school robotics team from the Hudson Valley in Upstate New York. We have participated in FTC competitions for seven seasons. We have a student-driven team of 11 members. Our students are diverse with a wide range of interests, and abilities. Our diversity has helped us learn from each other and work together better as a team. We are known for our hand-knit hats that we wear to every competition and our mascot in a suit of armor.`,
        website: `https://www.roboraiders6567.site`,
        location: {
            x: 29.3,
            y: 32,
        },
    },
    {
        id: "19498",
        name: "19498 DEVOLOTICS",
        logo: "assets/DEV_logo.png",
        descrition: `We are team 19498 — Devolotics! We started out as a team of scattered
        recruits from across the school, and are now a team of close friends. Along our journey, we
        discovered the importance of knowing our team members well, splitting our workload to tailor each
        member's strengths. We've also learnt that humour is our fuel, and we can't work without laughter!
        We've made comedic skits on YouTube and created what seems like thousands of inside jokes.`,
        website: `https://devolotics.github.io`,
        location: {
            x: 28,
            y: 30,
        },
    },
    {
        id: "22801",
        name: "22801 BOLT.M3",
        logo: "https://boltm3.vercel.app/images/svg_logo/top.svg",
        descrition: `Team Bolt.m3 22801 is a competitive robotics team in Almaty, Kazakhstan. Founded in 2020, our team comprises of 12 high school students. Bolt.m3 competes in the FIRST Tech Challenge (FTC), an international robotics competition open to grades 7 - 12.`,
        website: `https://boltm3.vercel.app`,
        location: {
            x: 71,
            y: 34,
        },
    },
    {
        id: "18763",
        name: "18763 TEXPAND",
        logo: "assets/TEXPAND_logo.webp",
        descrition: `We are Team 18763, Texpand, three time South African national champions and 1st place
        winner of the Think Award in the 2023 Worlds Jemison Division. We started off as a tight-knit
        group of homeschooled friends with a shared passion for learning. Our team has changed a lot,
        but we still have the same chaotic sense of humor, never-ending supply of shenanigans, and
        wild music taste that varies from EDM, to high energy Japanese pop, to jazzy lofi and everything
        in between. We have made it our mission to reach far and wide across our country — where
        there is a dire shortage of STEM skills — and other parts of the globe in order to raise
        awareness of STEM and help build a promising future for the generations to come. It’s where
        our name comes from. Tech + Expand = Texpand!`,
        website: `http://texpand.org.za`,
        location: {
            x: 55,
            y: 80,
        },
    },
];

for (const teamData of teamDatas) {
    const tl_container = document.createElement("div");
    const teamName = document.createElement("p");
    const locationdot = document.createElement("img");

    tl_container.className = "tl_container";
    teamName.className = "team-name";
    locationdot.className = "locationdot";
    locationdot.id = teamData.id;

    // display name on hover
    locationdot.addEventListener("mouseover", function () {
        teamName.style.opacity = 1;
        teamName.style.display = "block";
    });

    locationdot.addEventListener("mouseout", function () {
        teamName.style.opacity = 0;
        teamName.style.display = "none";
    });

    locationdot.addEventListener("click", function () {
        const spotlightBox_container = document.createElement("div");

        spotlightBox_container.className = "spotlight-box_container";

        spotlight_container.style.display = "block";

        spotlightBox_container.innerHTML = `
            <div class="spotlightBox_top">
                <div class="spotlightBox_top-left">
                    <h1>${teamData.name}</h1>
                    <p>${teamData.descrition}</p>
                    ${
                        teamData.website
                            ? '<br /><p>Team Website: <a target="_blank" href="' +
                              teamData.website +
                              '">' +
                              teamData.website +
                              "</a></p>"
                            : ""
                    }
                </div>
                <div class="spotlightBox_top-right">
                    <i class="fas fa-times" onClick="spotlightClear()"></i>
                    <img src="${teamData.logo}" />
                </div>
            </div>
            <div class="spotlightBox_bottom">
            </div>
        `;
        spotlight_wrapper.appendChild(spotlightBox_container);

        spotlight_container.addEventListener("click", function (event) {
            if (event.target === spotlight_wrapper) {
                spotlightClear();
            }
        });
    });

    locationdot.src = "/assets/LocationDot.gif";
    teamName.innerHTML = teamData.name;

    // location by percent
    tl_container.style.top = teamData.location.y + "%";
    tl_container.style.left = teamData.location.x + "%";

    tl_container.appendChild(teamName);
    tl_container.appendChild(locationdot);

    wmap_wrapper.insertBefore(tl_container, wmap_wrapper.firstChild);
}

function spotlightClear() {
    spotlight_wrapper.innerHTML = "";
    spotlight_container.style.display = "none";
}
