type noobDev1 = {
    name: string;
}

type juniorDev1 = noobDev1 & {
    expertise: string;
    experience: number;
}

type nextLevelDev = juniorDev1 & {
    salary: number;
}

const developer: nextLevelDev = {
    name: 'John',
    expertise: 'Frontend',
    experience: 1,
    salary: 1000
}

// so, intersection type is a type that can be all of several types
// in this case, newDev1 must be both noobDev1 and juniorDev1
