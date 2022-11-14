const king = "elvis";
//king = 'john'; //error, as const can't be re-assigned

//string are immutable in js
const upperCase = king.toUpperCase(); // king === 'elvis'

const dave = {
  name: "dave",
  role: "drummer",
  skills: ["drumming", "headbanging"],
};

/*error, as const
dave = {
    name: "grohl",
    role: "singer",
    skills: ["singing", "drumming", "headbanging"],
  };
  */

//object itself is mutable
dave.name = "grohl";
dave.role = "singer";
dave.skills.unshift("singing");

const dave472 = {
  name: "dave",
  role: "drummer",
  skills: ["drumming", "headbanging"],
} as const;

//dave472.name = 'grohl'; //error, as it's readonly now

function layout(settings: {
  align: "left" | "center" | "right";
  padding: number;
}) {
  console.log("Performing layout:", settings);
}

const example = {
  align: "left" as const,
  padding: 0,
};

layout(example); //wil not work, if align is not as const
