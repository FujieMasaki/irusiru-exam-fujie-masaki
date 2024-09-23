import { atom } from "recoil";
import { setRecoil } from "recoil-nexus";
import { User } from "../types";

export const currentUser = atom<User | null>({
    key: 'currentUser',
    default: null,
});

export const CurrentUserManager = {
    set: (user: User) => {
        setRecoil(currentUser, user);
    },
}