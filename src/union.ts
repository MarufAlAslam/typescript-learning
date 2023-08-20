type noobDev = {
    name: string;
}

type juniorDev = {
    name: string;
    expertise: string;
    experience: number;
}

const newDev: noobDev | juniorDev = {
    name: 'John',
    expertise: 'Frontend',
    experience: 1
}

// so, union type is a type that can be one of several types
// in this case, newDev can be either noobDev or juniorDev
